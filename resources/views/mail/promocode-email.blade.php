@component('mail::message')

<h1>Unlock Exclusive Savings with Your Crypto Wiz Guy® Discount Code!</h1>

<p>
    Hi {{ $email }},
    <br />
    <br />
    🌟 Your Crypto Wiz Guy® Discount Code: <b>{{$code}}</b> 🌟
    <br />
    <br />
    Simply use this code during checkout on our platform, and you'll unlock special savings on your next crypto-related
    purchase.
</p>

Thanks,<br>
<b>Crypto Wiz Guy®</b>

@endcomponent