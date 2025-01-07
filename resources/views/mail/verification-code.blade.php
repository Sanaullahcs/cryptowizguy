@component('mail::message')

<h1>Email Verification</h1>

<p>
    Thank you for choosing Your <b>Crypto Wiz Guy®</b>. Use the following OTP to complete your
    @if($type == 'login')
    Sign in
    @elseif($type == 'register')
    Sign Up
    @else
    Password Reset
    @endif
    process.
</p>

<div style="text-align:left">
    @component('mail::button', ['url' => '#'])
    {{ $code }}
    @endcomponent
</div>


Thanks,<br>
<b>Crypto Wiz Guy®</b>

@endcomponent