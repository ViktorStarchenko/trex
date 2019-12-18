<div class="_app-banner-clickable app-banner _t2<?= !empty($attrs['full']) ? ' _banner-full-width' : '' ?>">
    <?php $slug = !empty($attrs['slug']) ? $attrs['slug'] : 'hello-bar-default-text'; ?>
    <?= do_shortcode("[content_block slug=" . $slug . "]"); ?>
</div>