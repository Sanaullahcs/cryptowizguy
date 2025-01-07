<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SignupLink;

use Carbon\Carbon;

class SignupLinkController extends Controller
{
    public function generateSignupLink()
    {
        // Generate a unique key
        $uniqueKey = Str::random(32);

        // Set expiration time (e.g., 60 minutes from now)
        $expiresAt = Carbon::now()->addMinutes(60);

        // Store the key and expiration time in the database
        $signupLink = SignupLink::create([
            'referral_key' => $uniqueKey,
            'is_active' => true,
            'expiry_date' => $expiresAt,
        ]);

        // Get the base URL from the .env file or config
        $baseUrl = config('app.url');

        // Generate the signup link with the unique key
        $signupLinkUrl = $baseUrl . 'register?referral_key=' . $uniqueKey;

        // Return the signup link and expiration time as a JSON response
        return response()->json([
            'NewSignupLink' => $signupLinkUrl,
            'expiry_date' => $expiresAt->toDateTimeString(),
        ]);
    }

    public function validateSignupKey(Request $request)
    {
        $referral_key = $request->query('referral_key');
        $signupLink = SignupLink::where('referral_key', $referral_key)->first();

        if ($signupLink) {
            if ($signupLink->is_active && Carbon::now()->lt($signupLink->expiry_date)) {
                return response()->json(['isValid' => 1]);
            } else {
                // If is_active is false or the link is expired, mark it as inactive
                $signupLink->is_active = false;
                $signupLink->save();
                return response()->json(['isValid' => 0]);
            }
        } else {
            // If no signup link is found, return invalid response
            return response()->json(['isValid' => 0]);
        }
    }

    public function deactivateSignupKey(Request $request)
    {
        $referral_key = $request->input('referral_key');
        $signupLink = SignupLink::where('referral_key', $referral_key)->first();

        if ($signupLink) {
            $signupLink->is_active = 0;
            $signupLink->save();
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Signup key not found'], 404);
        }
    }
}