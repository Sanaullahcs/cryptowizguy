<?php

namespace App\Subscriptions\PayPalSubscriptions;

use App\Subscriptions\Subscriptions;
use Exception;
use Illuminate\Support\Facades\Log;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalSubscriptions implements Subscriptions
{
    protected $provider;

    public function __construct()
    {
        $this->provider = new PayPalClient;
        $this->provider->setApiCredentials(config('paypal'));
    }

    // Methods for creating, canceling, pausing, resuming, and updating subscriptions
    // will be implemented here
    public function create(int $plan_id, int $coupon_user_id, string $method, float $amount = 0)
    {
        // Set up the shipping address
        $address = [
            "address_line_1" => "2211 N First Street",
            "address_line_2" => "Building 17",
            "admin_area_2" => "San Jose",
            "admin_area_1" => "CA",
            "postal_code" => "95131",
            "country_code" => "US",
        ];
    
        // Retrieve the PayPal plan ID from the selected plan
        $paypalPlanId = '123';
        //  Plan::where('id', $plan_id)->first()->paypal_plan_id
    
        // Prepare the data for subscription creation
        // example data
        $data = [
            'plan_id' => $paypalPlanId,
            'quantity' => '1',
            'shipping_amount' => [
                'currency_code' => 'EUR',
                'value' => 0.00,
            ],
            'subscriber' => [
                'name' => [
                    'given_name' => auth()->user()->name,
                    'surname' => '',
                ],
                'email_address' => auth()->user()->email,
                'shipping_address' => [
                    'name' => [
                        'full_name' => auth()->user()->id . '-' . $coupon_user_id,
                    ],
                    'address' => $address,
                ],
            ],
            'application_context' => [
                'brand_name' => env('PAYPAL_PRODUCT_ID'),
                'locale' => 'en-US',
                'shipping_preference' => 'SET_PROVIDED_ADDRESS',
                'user_action' => 'SUBSCRIBE_NOW',
                'payment_method' => [
                    'payer_selected' => 'PAYPAL',
                    'payee_preferred' => 'IMMEDIATE_PAYMENT_REQUIRED',
                ],
                'return_url' => route('payments.paypal.success', [$plan_id]),
                'cancel_url' => route('payments.cancel'),
            ],
        ];
    
        // Include additional data for subscription with a coupon
        if ($coupon_user_id != 0) {
            $data['plan'] = [
                'billing_cycles' => [
                    [
                        'sequence' => 1,
                        'total_cycles' => 1,
                        'pricing_scheme' => [
                            'fixed_price' => [
                                'value' => $amount, // discounted amount
                                'currency_code' => 'EUR',
                            ],
                        ],
                    ],
                ],
            ];
        }
    
        // Send the request to create the subscription
        $response = $this->provider->createSubscription($data);
    
        if (isset($response['id']) && $response['id'] != null) {
            // Redirect to PayPal approval URL
            foreach ($response['links'] as $link) {
                if ($link['rel'] == 'approve') {
                    return redirect()->away($link['href']);
                }
            }
    
            return redirect()
                ->route('home')
                ->with('error', 'Something went wrong.');
        } else {
            return redirect()
                ->route('home')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    public function cancel(string $subscription_id = null)
    {
        // Implementation goes here
    }

    public function pause()
    {
        // Implementation goes here
    }

    public function resume()
    {
        // Implementation goes here
    }
}