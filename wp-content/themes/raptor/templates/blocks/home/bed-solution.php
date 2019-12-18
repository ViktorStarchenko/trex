<?php
    $block = get_post( 93 );
?>

<div class="article-solution-box find-your-perfect">
    <div class="app-container">
        <div class="article-solution-box__content">
            <div class="_absolute-bg app-inline-bg img-mobilized" style="background-image: url('<?= get_field('image', $block) ?>');" data-image="<?= get_field('image', $block) ?>" data-image-mobile="<?= get_field('mobile_image', $block) ?>"></div>
            <div class="app-centered-right-box _content">
                <div class="_content-inner">
                    <div class="_title"><?= get_field('title', $block) ?></div>
                    <div class="_subtitle"><?= get_field('subtitle', $block) ?></div>
                    <a class="app-button-reserve _inline" href="/sleep-selector">get started </a>
                </div>
            </div>
        </div>
    </div>
</div>