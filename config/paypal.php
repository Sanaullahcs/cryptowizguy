<?php 
 return [ 
   'client_id' => config('PAYPAL_SANDBOX_CLIENT_ID',''),
   'secret' => config('PAYPAL_SANDBOX_CLIENT_SECRET',''),
   'settings' => array(
      'mode' => env('PAYPAL_MODE','sandbox'),
      'http.ConnectionTimeOut' => 30,
      'log.LogEnabled' => true,
      'log.FileName' => storage_path() . 
      '/logs/paypal.log',
      'log.LogLevel' => 'ERROR'
     ),
    ];