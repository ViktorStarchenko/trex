<div class="_app-banner-clickable app-banner _t2 _app-banner-small<?= !empty($attrs['full']) ? ' _banner-full-width' : '' ?>">
    <?php $slug = !empty($attrs['slug']) ? $attrs['slug'] : 'hello-bar-default'; ?>
    <?= do_shortcode("[content_block slug=" . $slug . "]"); ?>
</div>