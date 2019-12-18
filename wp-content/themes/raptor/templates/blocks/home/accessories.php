<?php
$attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : 'View all accessories';
$attrs['cta-link'] = isset($attrs['cta-link']) ? $attrs['cta-link'] : '/bedding';
?>

<div class="article-news-box article-collections-box">
    <div class="app-container">
        <div class="_title"><?= get_field('accessories_title'); ?></div>
        <div class="_subtitle"><?= get_field('accessories_subtitle'); ?></div>
        <div class="article-grid-box">
            <div class="_grid _c3">
                <?php foreach (get_field('accessories_posts') as $accessory): ?>
                    <div class="_col" onclick="window.location.href = '<?= get_the_permalink($accessory->ID) ?>';">
                        <div class="article-news-slice__item">
                            <div class="article-news-slice app-inline-bg" style="background-image: url(<?= get_field('default_image', $accessory->ID) ?>)"></div>
                            <div class="article-grid-box__item app-centered-box _sm">
                                <div>
                                    <?php $category = get_the_category($accessory->ID);?>
                                    <div class="_uphead"><span><?= $category[0]->name; ?></span></div>
                                    <div class="_title"><?= get_the_title($accessory->ID) ?></div>
                                    <div class="_content"><?= get_the_excerpt($accessory->ID); ?></div>
                                    <a href="<?= get_the_permalink($accessory->ID) ?>" class="app-button-reserve _inline">Read more
                                        <span class="app-svg button-reserve _icon-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="app-more-articles">
                <a class="_link app-link-animation" href="<?= $attrs['cta-link'] ?>"><?= $attrs['cta-text'] ?></a>
            </div>
        </div>
    </div>
</div>
