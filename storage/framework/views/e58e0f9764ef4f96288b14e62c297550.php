<?php $__env->startComponent('mail::message'); ?>

<h1>Email Verification</h1>

<p>
    Thank you for choosing Your <b>Crypto Wiz Guy®</b>. Use the following OTP to complete your
    <?php if($type == 'login'): ?>
    Sign in
    <?php elseif($type == 'register'): ?>
    Sign Up
    <?php else: ?>
    Password Reset
    <?php endif; ?>
    process.
</p>

<div style="text-align:left">
    <?php $__env->startComponent('mail::button', ['url' => '#']); ?>
    <?php echo e($code); ?>

    <?php echo $__env->renderComponent(); ?>
</div>


Thanks,<br>
<b>Crypto Wiz Guy®</b>

<?php echo $__env->renderComponent(); ?><?php /**PATH D:\xampp\htdocs\cryptowiz_new3\resources\views/mail/verification-code.blade.php ENDPATH**/ ?>