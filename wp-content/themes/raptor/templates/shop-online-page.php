<?php
/*
 * Template Name: Shop Online Page
 * Template Post Type: page
 */
?>

<?php

$retailersGroupCategory = get_category_by_slug('retailer-groups');
$stocistPage = get_page_by_path('stockists');

$retailers = get_posts([
    'numberposts'   => -1,
    'category'      => $retailersGroupCategory->cat_ID,
    'meta_query'    => $metaQuery,
    'post__in'      => get_field('retailers_groups_order', $stocistPage->ID),
    'orderby'       => 'post__in',
    'meta_query'  => [
        [
            'key'     => 'enabled',
            'value'   => true,
            'compare' => '=',
        ],
    ]
]);

$firstCol = [];
$secondCol = [];

foreach ($retailers as $k => $retailer) {
    if ($k % 2 == 0) {
        $firstCol[] = $retailer;
    } else {
        $secondCol[] = $retailer;
    }
}
?>

<div class="article-news-box article-collections-box shop-online">
    <div class="app-container">
        <h2 class="_title">Shop online</h2>
        <div class="article__search-form-grid">
            <div class="article__send-form-grid">
                <div class="_col">
                        <?php foreach ($firstCol as $retailer): ?>
                        <?php 

                            $permalink =  get_permalink($retailer->ID); 
                            $target = '_blank';
                            if (strpos($permalink, get_home_url()) !== false) {
                                $permalink = '/stockists?retailer_id=' . $retailer->ID;
                                $target = '';
                            }
                        ?>
                        <a href="<?=$permalink; ?>" class="app-button-reserve article__search-form-btn" target="<?= $target; ?>"><?= get_field('display_name', $retailer->ID) ?>
                                <span class="app-svg button-reserve _icon-right"></span></a>
                        <?php endforeach; ?>
                    </div>
                    <?php if (count($secondCol) > 0) : ?>
                        <div class="_col">
                            <?php foreach ($secondCol as $retailer): ?>
                            <?php 

                                $permalink =  get_permalink($retailer->ID); 
                                $target = '_blank';
                                if (strpos($permalink, get_home_url()) !== false) {
                                    $permalink = '/stockists?retailer_id=' . $retailer->ID;
                                    $target = '';
                                }
                            ?>
                            <a href="<?=$permalink; ?>" class="app-button-reserve article__search-form-btn" target="<?= $target; ?>"><?= get_field('display_name', $retailer->ID) ?>
                                    <span class="app-svg button-reserve _icon-right"></span></a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
            </div>
        </div>
    </div>
</div>
