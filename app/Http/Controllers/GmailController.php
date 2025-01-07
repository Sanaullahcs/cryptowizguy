<?php

namespace App\Http\Controllers;

use Google_Client;
use Google_Service_Gmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

use App\Models\OAuthToken;
use Illuminate\Http\Request;
use App\Models\Emaildata;
use App\Models\User;
use Illuminate\Auth\Events\Validated;

class GmailController extends Controller
{
    private function getClient()
    {
        $client = new Google_Client();
        $client->setAuthConfig(storage_path('app/google/credentials.json'));
        // $client->setRedirectUri(env('APP_URL') . '/api/gmail/callback');
        $client->setRedirectUri(env('APP_URL') . 'api/gmail/callback');
        $client->addScope(Google_Service_Gmail::GMAIL_READONLY);
        $client->setAccessType('offline');
        return $client;
    }

    private function refreshToken(OAuthToken $storedToken)
    {
        $client = $this->getClient();
        $client->setHttpClient(new \GuzzleHttp\Client(['verify' => false]));

        $client->setAccessToken([
            'access_token' => $storedToken->access_token,
            'refresh_token' => $storedToken->refresh_token,
            'expires_in' => $storedToken->expires_in,
        ]);

        if ($client->isAccessTokenExpired()) {
            $newToken = $client->fetchAccessTokenWithRefreshToken($storedToken->refresh_token);

            if (isset($newToken['error'])) {
                throw new \Exception($newToken['error']);
            }

            $storedToken->update([
                'access_token' => $newToken['access_token'],
                'expires_in' => $newToken['expires_in'],
                'is_expired_token' => 0, // Reset the flag
                'updated_at' => now(),
            ]);

            $client->setAccessToken($newToken);
        } else {
            $storedToken->update(['is_expired_token' => 0]); // Ensure flag is reset if token is valid
        }

        return $client;
    }
    // private function refreshToken(OAuthToken $storedToken)
    // {
    //     $client = $this->getClient();
    //     $client->setHttpClient(new \GuzzleHttp\Client(['verify' => false]));

    //     $client->setAccessToken([
    //         'access_token' => $storedToken->access_token,
    //         'refresh_token' => $storedToken->refresh_token,
    //         'expires_in' => $storedToken->expires_in,
    //     ]);

    //     if ($client->isAccessTokenExpired()) {
    //         Log::info('Access token is expired, attempting to refresh token.');

    //         try {
    //             $newToken = $client->fetchAccessTokenWithRefreshToken($storedToken->refresh_token);

    //             Log::info('New token response: ', $newToken);

    //             if (isset($newToken['error'])) {
    //                 Log::error('Token refresh error response: ', $newToken);

    //                 if ($newToken['error'] === 'invalid_grant') {
    //                     Log::error('Invalid grant error during token refresh. Attempting to set is_expired_token flag to 1.');

    //                     // Check if the update operation is being attempted
    //                     $updateResult = $storedToken->update(['is_expired_token' => 1]);

    //                     // Log the result of the update operation
    //                     if ($updateResult) {
    //                         Log::info('Database update successful for is_expired_token flag.');
    //                     } else {
    //                         Log::error('Database update failed for is_expired_token flag.');
    //                     }
    //                 }

    //                 throw new \Exception($newToken['error']);
    //             }

    //             $storedToken->update([
    //                 'access_token' => $newToken['access_token'],
    //                 'expires_in' => $newToken['expires_in'],
    //                 'is_expired_token' => 0, // Reset the flag
    //                 'updated_at' => now(),
    //             ]);

    //             $client->setAccessToken($newToken);
    //         } catch (\Exception $e) {
    //             Log::error('Error during token refresh: ' . $e->getMessage());

    //             // Check if the update operation is being attempted
    //             $updateResult = $storedToken->update(['is_expired_token' => 1]);

    //             // Log the result of the update operation
    //             if ($updateResult) {
    //                 Log::info('Database update successful for is_expired_token flag.');
    //             } else {
    //                 Log::error('Database update failed for is_expired_token flag.');
    //             }

    //             throw $e;
    //         }
    //     } else {
    //         $storedToken->update(['is_expired_token' => 0]); // Ensure flag is reset if token is valid
    //     }

    //     return $client;
    // }



    // Method to refresh the token if expired
    // private function refreshToken(OAuthToken $storedToken)
    // {
    //     $client = $this->getClient();
    //     $client->setHttpClient(new \GuzzleHttp\Client(['verify' => false]));

    //     $client->setAccessToken([
    //         'access_token' => $storedToken->access_token,
    //         'refresh_token' => $storedToken->refresh_token,
    //         'expires_in' => $storedToken->expires_in,
    //     ]);

    //     if ($client->isAccessTokenExpired()) {
    //         $newToken = $client->fetchAccessTokenWithRefreshToken($storedToken->refresh_token);

    //         if (isset($newToken['error'])) {
    //             throw new \Exception($newToken['error']);
    //         }

    //         $storedToken->update([
    //             'access_token' => $newToken['access_token'],
    //             'expires_in' => $newToken['expires_in'],
    //             'is_expired_token' => 0, // Reset the flag
    //             'updated_at' => now(),
    //         ]);

    //         $client->setAccessToken($newToken);
    //     }

    //     return $client;
    // }
    public function callback(Request $request)
    {
        // Initialize Google Client
        $client = $this->getClient();
        $client->setHttpClient(new \GuzzleHttp\Client(['verify' => false]));

        // Exchange the authorization code for an access token
        if ($request->has('code')) {
            $code = $request->input('code');
            $accessToken = $client->fetchAccessTokenWithAuthCode($code);

            // Store the access token and refresh token
            OAuthToken::updateOrCreate(
                // ['id' => 1], // Use an appropriate identifier or find a specific record
                [
                    'access_token' => $accessToken['access_token'],
                    'refresh_token' => $accessToken['refresh_token'],
                    'expires_in' => $accessToken['expires_in'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );

            try {
                $this->fetchEmails(); // Call the fetchEmails method
            } catch (\Exception $e) {
                // Log the error and return an error response
                Log::error('Error fetching emails after authentication: ' . $e->getMessage());
                return redirect('/dashboard')->with('error', 'Failed to fetch emails.');
            }

            return redirect('/dashboard')->with('success', 'You have been successfully authenticated!');
        } else {
            return redirect('/dashboard')->with('error', 'Failed to authenticate.');
        }
    }

    // Retrieve emails from Gmail and store in the database
    // public function fetchEmails()
    // {
    //     try {
    //         // Retrieve the single stored OAuth token
    //         $storedToken = OAuthToken::first(); // Adjust as needed for your use case

    //         if (!$storedToken) {
    //             throw new \Exception('No OAuth token found');
    //         }

    //         $client = $this->refreshToken($storedToken);

    //         $service = new Google_Service_Gmail($client);
    //         $messages = $service->users_messages->listUsersMessages('me', ['labelIds' => 'INBOX']);

    //         foreach ($messages->getMessages() as $message) {
    //             $msg = $service->users_messages->get('me', $message->getId());
    //             $payload = $msg->getPayload();
    //             $headers = $payload->getHeaders();

    //             foreach ($headers as $header) {
    //                 if ($header->getName() == 'Subject') {
    //                     $subject = $header->getValue();


    //                     $btc_username = strtok($subject, ' ');
    //                     preg_match('/\d+/', $subject, $matches);
    //                     $btc_price = isset($matches[0]) ? (int)$matches[0] : null;


    //                     // Check if the subject already exists in the database
    //                     $exists = DB::table('emails')
    //                         ->where('btc_username', $btc_username)
    //                         ->where('btc_price', $btc_price)
    //                         ->exists();


    //                     if (!$exists) {
    //                         // Insert email subject into the database if it doesn't exist
    //                         DB::table('emails')->insert([
    //                             'subject' => $subject,
    //                             'btc_username' => $btc_username,
    //                             'btc_price' => $btc_price,
    //                             'created_at' => now(),
    //                             'updated_at' => now(),
    //                         ]);
    //                     }
    //                 }
    //             }
    //         }

    //         return response()->json(['message' => 'Emails retrieved and stored successfully']);
    //     } catch (\Exception $e) {
    //         Log::error('Error retrieving emails', ['message' => $e->getMessage()]);
    //         return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
    //     }
    // }

    public function fetchEmails()
    {
        Log::info('fetchEmails method triggered.');

        try {
            $storedToken = OAuthToken::orderBy('updated_at', 'desc')->first();


            if (!$storedToken) {
                Log::error('No OAuth token found.');
                throw new \Exception('No OAuth token found');
            }

            Log::info('OAuth token found. Proceeding to refresh token.');

            try {
                $client = $this->refreshToken($storedToken);
            } catch (\Exception $e) {
                // If refresh token is invalid, return a response for re-authentication
                if ($e->getMessage() === 'invalid_grant') {
                    Log::error('Refresh token invalid or expired. Prompting for re-authentication.');
                    $storedToken->update(['is_expired_token' => 1]);
                    return response()->json([
                        'error' => 'Refresh token expired or invalid. Please re-authenticate.',
                        'reauthenticate' => true
                    ], 401);
                }
                throw $e; // re-throw the exception if it's not related to invalid_grant
            }

            Log::info('Token refreshed. Creating Gmail service instance.');

            $service = new Google_Service_Gmail($client);

            $oneYearAgo = (new \DateTime())->modify('-1 year')->format('Y/m/d');

            // Retrieve messages within the last year
            $messages = $service->users_messages->listUsersMessages('me', [
                'labelIds' => 'INBOX',
                'q' => "category:primary after:$oneYearAgo"
            ]);
            // $messages = $service->users_messages->listUsersMessages('me', ['labelIds' => 'INBOX']);
            foreach ($messages->getMessages() as $message) {
                Log::info('Processing message ID: ' . $message->getId());

                $msg = $service->users_messages->get('me', $message->getId());
                $payload = $msg->getPayload();
                $headers = $payload->getHeaders();

                foreach ($headers as $header) {
                    if ($header->getName() == 'Subject') {
                        $subject = $header->getValue();
                        Log::info('Email subject found: ' . $subject);



                        // Extract btc_username and btc_price
                        $btc_username = strtok($subject, ' ');
                        preg_match('/\d+(\.\d+)?/', $subject, $matches);
                        $btc_price = isset($matches[0]) ? (float) $matches[0] : null;

                        Log::info('Extracted btc_username: ' . $btc_username . ', btc_price: ' . $btc_price);

                        // Check if the email already exists
                        $exists = DB::table('emails')
                            ->where('btc_username', $btc_username)
                            ->where('btc_price', $btc_price)
                            ->exists();

                        if (!$exists) {
                            Log::info('Email does not exist, inserting into the database.');
                            DB::table('emails')->insert([
                                'subject' => $subject,
                                'btc_username' => $btc_username,
                                'btc_price' => $btc_price,
                                'created_at' => now(),
                                'updated_at' => now(),
                            ]);
                        } else {
                            Log::info('Email already exists in the database.');
                        }
                    }
                }
            }

            return response()->json(['message' => 'Emails retrieved and stored successfully']);
        } catch (\Exception $e) {
            Log::error('Error retrieving emails', ['message' => $e->getMessage()]);
            $storedToken->update(['is_expired_token' => 1]);
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }
    public function reauthenticate(Request $request)
    {
        $client = $this->getClient();
        $authUrl = $client->createAuthUrl();

        // Redirect the user to Google's OAuth consent screen
        return redirect($authUrl);
    }
    public function getEmailsList()
    {
        return response()->json(DB::table('emails')->get());
    }

    public function checkTokenStatus()
    {
        // Fetch the most recently updated token
        $storedToken = OAuthToken::orderBy('updated_at', 'desc')->first();

        // If no token is found, treat it as expired (this depends on your logic)
        if (!$storedToken) {
            return response()->json([
                'success' => true,
                'message' => 'Token is not found.',
                'is_expired_token' => 1
            ]);
        }

        // Check the is_expired_token field
        if ($storedToken->is_expired_token == 1) {
            return response()->json([
                'success' => true,
                'message' => 'Token is expired.',
                'is_expired_token' => 1
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Token is not expired.',
                'is_expired_token' => 0
            ]);
        }
    }


    public function getBtcSubscription(Request $request)
    {
        // Validate the request
        $request->validate([
            'user_id' => 'required|integer',
        ]);

        $userId = $request->input('user_id');

        // Fetch data based on user ID
        $btcSubscription = Emaildata::where('verified_by_user', $userId)->first();

        if (!$btcSubscription) {
            return response()->json(['error' => 'Subscription not found'], 404);
        }

        // Fetch verify_btc_at from the users table
        $verifyBtcAt = User::where('id', $userId)->value('verify_btc_at');

        // Add the verify_btc_at value to the btcSubscription object
        $btcSubscription->verify_btc_at = $verifyBtcAt;

        // Return the btcSubscription data with the added verify_btc_at value
        return response()->json(['btcSubscription' => $btcSubscription], 200);
    }


    // public function verifyBTCUsername(Request $request)
    // {
    //     $request->validate([
    //         'btc_username' => 'required',
    //         'btc_userid' => 'required|integer|exists:users,id',
    //     ]);

    //     // Check if the btc_username exists in the GmailData model (assuming it has a 'btc_username' column)
    //     $gmailData = Emaildata::where('btc_username', $request->btc_username)->first();

    //     if ($gmailData) {
    //         // Find the user by the provided user ID
    //         $user = User::find($request->btc_userid);
    //         if ($user) {
    //             // Check if the btc_verify column is already set to 1
    //             if ($user->btc_verify == 1) {
    //                 return response()->json(['message' => 'Already verified.'], 200);
    //             }

    //             // Update the btc_verify column in the User table
    //             $user->btc_verify = 1;
    //             $user->verify_btc_at = Carbon::now();
    //             $user->save();

    //             // Update the verified_by_user column in the Emaildata table
    //             $gmailData->verified_by_user = $request->btc_userid;
    //             $gmailData->save();

    //             return response()->json(['message' => 'Successfully verified and you can access live calculator.'], 200);
    //         } else {
    //             return response()->json(['message' => 'User name not found, please try again.'], 404);
    //         }
    //     } else {
    //         return response()->json(['message' => 'User name not found, please try again.'], 404);
    //     }
    // }
    public function verifyBTCUsername(Request $request)
    {
        $request->validate([
            'btc_username' => 'required',
            'btc_userid' => 'required|integer|exists:users,id',
        ]);

        // Check if the btc_username exists in the Emaildata model
        $gmailData = Emaildata::where('btc_username', $request->btc_username)->first();

        if ($gmailData) {
            // Find the user by the provided user ID
            $user = User::find($request->btc_userid);
            if ($user) {
                // Check if the btc_username is used by any other user and already verified
                $otherUser = User::where('coinbase_username', $request->btc_username)
                    ->where('id', '!=', $user->id)
                    ->where('btc_verify', 1)
                    ->first();

                if ($otherUser) {
                    return response()->json(['message' => 'This username is already verified by another user.'], 400);
                }

                // Check if the btc_verify column is already set to 1 for the current user
                if ($user->btc_verify == 1) {
                    return response()->json(['message' => 'Already verified.'], 200);
                }

                // Update the btc_verify column in the User table
                $user->btc_verify = 1;
                $user->verify_btc_at = Carbon::now();
                $user->save();

                // Update the verified_by_user column in the Emaildata table
                $gmailData->verified_by_user = $request->btc_userid;
                $gmailData->save();

                return response()->json(['message' => 'Successfully verified and you can access live calculator.'], 200);
            } else {
                return response()->json(['message' => 'User name not found, please try again.'], 404);
            }
        } else {
            return response()->json(['message' => 'User name not found, please try again.'], 404);
        }
    }



    public function btcVerification(Request $request)
    {
        $request->validate([
            'userId' => 'required',
        ]);

        $user = User::find($request->userId);

        if ($user) {
            // Ensure that btcexpiry is null if verify_btc_at is null
            $btcexpiry = $user->verify_btc_at ? $user->verify_btc_at->toDateTimeString() : null;

            return response()->json([
                'message' => 'Successfully verified. You can now access the Live Calculator.',

                'btcStatus' => $user->btc_verify,
                'coinbase_username' => $user->coinbase_username,
                'btcexpiry' => $btcexpiry,
            ], 200);
        } else {
            return response()->json([
                'message' => 'User not found. Please enter a correct username.',
            ], 404);
        }
    }


    public function getBtcTransactions()
    {
        $transactions = DB::table('emails')
            ->leftJoin('users', 'emails.verified_by_user', '=', 'users.id')
            ->select(
                'emails.id',
                'emails.btc_username',
                DB::raw("COALESCE(emails.btc_price, '---') as btc_price"),
                DB::raw("COALESCE(CONCAT(users.first_name, ' ', users.last_name), '---') as coinbase_trans_name"),
                DB::raw("COALESCE(users.btc_verify, 0) as btc_verify")
            )
            ->get();

        return response()->json($transactions);
    }


    public function cleanOldEmails()
    {
        try {
            // Calculate the date one year ago
            $oneYearAgo = now()->subYear()->format('Y-m-d H:i:s');

            // Fetch emails older than one year
            $oldEmails = DB::table('emails')
                ->where('created_at', '<', $oneYearAgo)
                ->get();

            foreach ($oldEmails as $email) {
                // Fetch the associated user based on `verified_by_user` in `emails` table
                $user = DB::table('users')->where('id', $email->verified_by_user)->first();

                if ($user) {
                    Log::info('Fetched user data:', ['user' => $user]);

                    // Check if `verify_btc_at` is set to 1
                    if ($user->btc_verify == 1) {
                        // Update `verify_btc_at` to 0
                        $updateResult = DB::table('users')
                            ->where('id', $user->id)
                            ->update(['btc_verify' => 0]);

                        if ($updateResult) {
                            Log::info("Updated verify_btc_at to 0 for user ID: {$user->id}");
                        } else {
                            Log::warning("Failed to update verify_btc_at for user ID: {$user->id}");
                        }
                    } else {
                        Log::info("No update needed for user ID: {$user->id}, verify_btc_at is not 1.");
                    }

                    // Soft delete the email record
                    $deleteResult = DB::table('emails')
                        ->where('id', $email->id)
                        ->update(['deleted_at' => now()]);

                    if ($deleteResult) {
                        Log::info("Soft deleted email ID: {$email->id}");
                    } else {
                        Log::warning("Failed to soft delete email ID: {$email->id}");
                    }
                } else {
                    Log::info('No user found for email ID: ' . $email->id);
                }
            }

            return response()->json(['message' => 'Old emails processed successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error processing old emails', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }
}
