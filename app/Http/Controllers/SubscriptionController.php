<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Jobs\SendPromoCodeEmail;
use App\Models\CouponCode;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\Subscription;
use App\Models\Settings;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $condition = [];
        if (request()->has('type') && request()->get('type') != '') {
            $condition['stripe_status'] = request()->get('type');
        }
        $subscription = SubscriptionPlan::get();

        $settings = Settings::where('key', 'coupon_price')->value('value');
        $fromemail = Settings::where('key', 'from_email')->value('value');
        $userSubscriptions = Subscription::where($condition)->with('user:id,first_name,last_name')->whereNotNull('plan_id')->get();
        $selectedSubscriptions = Subscription::where($condition)->with('user:id,first_name,last_name')->whereNotNull('plan_id')->first();

        $data = [
            'subscription' => $subscription,
            'settings' => $settings,
            'fromemail' => $fromemail,
            'usersubscription' => $userSubscriptions,
            'selectedSubscriptions' => $selectedSubscriptions['plan_id'],
        ];
        return response()->json($data);
    }


    public function getPlanDiscount(Request $request)
    {
        // Validate the request to ensure 'plan_id' is present and is an integer
        $request->validate([
            'plan_id' => 'required|integer',
        ]);

        // Retrieve the plan_id from the request
        $plan_id = $request->input('plan_id');

        // Fetch the subscription plan based on the plan_id
        $plan = SubscriptionPlan::where('id', $plan_id)->first();

        // Check if plan exists
        if ($plan) {
            return response()->json([
                'plansdiscount' => $plan->plansdiscount,
                'planType' => $plan->plan_type,
            ]);
        } else {
            return response()->json([
                'error' => 'Plan not found',
            ], 404);
        }
    }
    public function UserSubscription(Request $request)
    {
        try {
            // Retrieve user ID from the request
            $userId = $request->query('userId');
            // Retrieve subscriptions for the given user ID
            $subscriptions = Subscription::where('user_id', $userId)->first();

            if (!$subscriptions) {
                return response()->json(['error' => 'No subscription found for the user.'], 404);
            }

            $subscriptiondiscount = CouponCode::where('stripe_coupon_id', $subscriptions->couponcode)->first();
            $settings = Settings::where('key', 'coupon_price')->value('value');

            if ($subscriptiondiscount  == '') {
                $subscriptiondiscounts = $settings;
            } else {
                $subscriptiondiscounts = $subscriptiondiscount->discount;
            }

            // Check if $subscriptiondiscount is null

            // Retrieve subscription plan details
            $subscriptionsPlan = SubscriptionPlan::find($subscriptions->plan_id);

            // Prepare data to be sent in the response
            $data = [
                'subscriptions' => $subscriptions,
                'subscriptionsPlan' => $subscriptionsPlan,
                'subscriptiondiscount' => $subscriptiondiscounts
            ];


            return response()->json(['subscription' => $data]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function getSubscriptionExpiry(Request $request)
    {


        // Validate the incoming request
        $request->validate([
            'userId' => 'required|integer',
        ]);

        // Retrieve the user ID from the request
        $userId = $request->input('userId');

        // Retrieve the subscription for the given user ID where end_at is not null
        $subscription = Subscription::where('user_id', $userId)
            ->whereNotNull('ends_at')
            ->first();

        // Check if the subscription exists and if end_at is not null
        if ($subscription) {
            return response()->json([
                'ends_at' => $subscription->ends_at,
                'subscription_active_status' => $subscription->subscription_active,
            ], 200);
        } else {
            return response()->json([
                'message' => 'No active subscription found or subscription has no expiry date.',
            ], 404);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        // Validate the request
        $request->validate([
            'plan_status' => 'required|integer|in:0,1',
        ]);

        // Find the subscription plan by ID
        $plan = SubscriptionPlan::find($id);

        if ($plan) {
            // Update the plan_status
            $plan->plan_status = $request->input('plan_status');
            $plan->save();

            return response()->json([
                'success' => true,
                'message' => 'Plan status updated successfully.',
                'plan' => $plan,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Plan not found.',
            ], 404);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        // dd($request->all());
        // $request->validate([
        //     'name' => 'required',
        //     'price' => 'required',
        //     // 'product_id' => 'required',
        //     // 'price_id' => 'required',
        //     'duration' => 'required',
        // ]);

        // $request->validate([
        //     'name' => 'required',
        //     'price' => 'required', 
        //     'duration' => 'required',
        //     'plansdiscount' => 'nullable' // Validate discount field
        // ]);

        $bestValue = empty($bestValue) ? 0 : $bestValue;

        $subscriptionData =  SubscriptionPlan::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'product_id' => $request->input('product_id'),
            'price_id' => $request->input('price_id'),
            'paypal_product_id' => $request->input('paypal_product_id'),
            'paypal_price_id' => $request->input('paypal_price_id'),
            'duration' => $request->input('duration'),
            'best_value' => $bestValue,
            'plansdiscount' => $request->input('plansdiscount'),
            'is_kickstarter_plan' => $request->input('is_kickstarter_plan'),
            'plan_type' => $request->input('plan_type'),
        ]);
        return response()->json([
            'message' => 'success',
            'subscriptionData' => $subscriptionData,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'userId' => 'required|exists:users,id',
            'KicksixDigitCode' => 'required',
        ]);

        $user = User::find($request->userId);

        if ($user->kickstarter_free_subscription == $request->KicksixDigitCode && $user->kickstarter_free_isused == 0) {
            $user->kickstarter_free_isused = 1;
            $user->save();

            return response()->json(['message' => 'Code verified successfully!'], 200);
        }

        return response()->json(['message' => 'Invalid code or code already used.'], 400);
    }

    public function getKickstarterStatus(Request $request)
    {
        $request->validate([
            'userId' => 'required|exists:users,id',
        ]);

        $user = User::find($request->userId);

        return response()->json(['kickstarter_free_isused' => $user->kickstarter_free_isused]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // dd($request->all());
        // $request->validate([
        //     'name' => 'required',
        //     'price' => 'required',
        //     // 'product_id' => 'required',
        //     // 'price_id' => 'required',
        //     'duration' => 'required',
        // ]);

        $bestValue = $request->input('best_value') ?? 0;
        $id =  $request->input('id');
        // Find the subscription plan by ID
        $subscriptionData = SubscriptionPlan::findOrFail($id);

        // Update the attributes
        $subscriptionData->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'product_id' => $request->input('product_id'),
            'price_id' => $request->input('price_id'),
            'paypal_product_id' => $request->input('paypal_product_id'),
            'paypal_price_id' => $request->input('paypal_price_id'),
            'duration' => $request->input('duration'),
            'best_value' => $bestValue,
            'plansdiscount' => $request->input('plansdiscount'),
            'is_kickstarter_plan' => $request->input('is_kickstarter_plan'),
            'plan_type' => $request->input('plan_type'),
        ]);

        return response()->json([
            'message' => 'success',
            'subscriptionData' => $subscriptionData,
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {

        try {
            // Find the coupon by its ID
            $subscription = SubscriptionPlan::find($id);

            if (!$subscription) {
                // Handle the case where the coupon does not exist
                return response()->json(['message' => 'Subscription not found'], 404);
            }

            // Delete the coupon
            $subscription->delete();

            return response()->json([
                'message' => 'Subscription deleted successfully',
                'subscription' => $subscription,
            ]);
        } catch (\Exception $e) {
            // Handle any errors that may occur during deletion
            return response()->json(['message' => 'Subscription deletion failed'], 500);
        }
    }

    // public function GetPromocode(Request $request)
    // {
    //     $couponcode = CouponCode::where('code', $request->promocode)->where('is_active', 1)->first();
    //     // Session::put('coupon_code', $couponcode->code);
    //     // Check if the coupon code exists
    //     if ($couponcode != null) {
    //         $sessioncoupons = Session::get('coupon_code');

    //         if ($sessioncoupons == $couponcode->code) {
    //             return response()->json([
    //                 'message' => 'coupon_expired',
    //                 'data' => $couponcode,
    //             ], 400);
    //         } else {

    //             if (($couponcode->user_id && $couponcode->user_id != auth()->id()) || ($couponcode->one_time && $couponcode->is_used)) {

    //                 return response()->json([
    //                     'message' => 'coupon_expired',
    //                     'data' => $couponcode,
    //                 ], 400); // Return a 400 Bad Request status code for error
    //             } else {
    //                 $couponcode->update(['is_used' => 1]);
    //                 return response()->json([
    //                     'message' => 'success',
    //                     'data' => $couponcode,
    //                 ], 200);
    //             }
    //         }
    //     } else {

    //         // Save a default or null value for coupon code in session when not found
    //         // Session::put('coupon_code', null);
    //         return response()->json([
    //             'message' => 'coupon_expired',
    //             'data' => $couponcode,
    //         ], 400);
    //     }
    // }
    public function GetPromocode(Request $request)
    {
        $user = User::where('kickstarter_free_subscription', $request->promocode)
            ->where('kickstarter_free_isused', 0)
            ->first();

        if ($user) {
            // Update user's kickstarter_free_isused to 1 (marking it as used)
            $user->kickstarter_free_isused = 1;
            $user->save();

            // Provide a 100% discount response
            return response()->json([
                'message' => 'success',
                'data' => [
                    'discount' => 99,
                ],
            ], 200);
        }
        // Check if the promo code exists in the CouponCode table
        $couponcode = CouponCode::where('code', $request->promocode)
            ->where('is_active', 1)
            ->first();

        if ($couponcode) {
            // Check session or any other custom logic if needed
            $sessioncoupons = Session::get('coupon_code');

            if ($sessioncoupons == $couponcode->code) {
                return response()->json([
                    'message' => 'coupon_expired',
                    'data' => $couponcode,
                ], 400);
            }

            if (($couponcode->user_id && $couponcode->user_id != $user->id) || ($couponcode->one_time && $couponcode->is_used)) {
                return response()->json([
                    'message' => 'coupon_expired',
                    'data' => $couponcode,
                ], 400); // Return a 400 Bad Request status code for error
            }

            $couponcode->update(['is_used' => 1]);

            return response()->json([
                'message' => 'success',
                'data' => $couponcode,
            ], 200);
        }

        // If neither is found, return coupon not found
        return response()->json([
            'message' => 'promo_code_not_found',
        ], 404);
    }


    public function sendPromocode(Request $request)
    {
        try {
            $emails = explode(',', $request->emails);
            // remove "" elements from array
            $emails = array_filter($emails, function ($value) {
                return $value !== "";
            });
            $couponcode = CouponCode::where('id', $request->coupon_id)->first();
            $status = SendPromoCodeEmail::dispatch($emails, $couponcode->code);
            return response()->json([
                'status' => 'success',
                'message' => 'Discount code Emails sent successfully.',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong',
            ]);
        }
    }
}