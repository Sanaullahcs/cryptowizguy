<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag; ?>
<?php foreach($attributes->onlyProps(['url']) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $attributes = $attributes->exceptProps(['url']); ?>
<?php foreach (array_filter((['url']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $__defined_vars = get_defined_vars(); ?>
<?php foreach ($attributes as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
} ?>
<?php unset($__defined_vars); ?>
<tr>
    <td class="header">
        <a href="<?php echo e($url); ?>" style="display: inline-block;">
            <?php if(trim($slot) === 'Laravel'): ?>
            <img src="https://test.cryptowizguy.com/logo.png" class="logo" alt="<?php echo e(config('app.name')); ?>">
            <?php else: ?>
            <?php echo e($slot); ?>

            <?php endif; ?>
        </a>
    </td>
</tr><?php /**PATH D:\xampp\htdocs\cryptowiz_new3\resources\views/vendor/mail/html/header.blade.php ENDPATH**/ ?>