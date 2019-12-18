<div class="_app-banner app-banner _t3<?= !empty($attrs['full']) ? ' _banner-full-width' : '' ?>">
    <div class="app-container">
        <?php $slug = !empty($attrs['slug']) ? $attrs['slug'] : 'hello-bar-promotions'; ?>
        <?= do_shortcode("[content_block slug=" . $slug . "]"); ?>
    </div>
</div>
