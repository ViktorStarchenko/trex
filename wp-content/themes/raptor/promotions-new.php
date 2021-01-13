<?php
/*
 * Template Name: Promotions new page
 * Template Post Type: page
 */
?>
<?php get_header(); ?>
<?php

$matressesCategory = get_category_by_slug('products');
$matressesArgs = [
    'numberposts' => -1,
    'category' => $matressesCategory->cat_ID,
    'orderby' => 'title',
    'order' => 'ASC'
];
$matresses = get_posts($matressesArgs);

$retailersGroupCategory = get_category_by_slug('retailer-groups');


$tz = get_option('timezone_string');
$timestamp = time();
$dt = new DateTime("now", new DateTimeZone($tz));
$dt->setTimestamp($timestamp);
$date =  $dt->format('Y-m-d');
$metaQuery = [
    [
        'key'     => 'enabled',
        'value'   => true,
        'compare' => '=',
    ],
];
$baseQuery = [
    'relation' => 'AND',
    [
        'key'     => 'start_date',
        'value'   => $date,
        'compare' => '<=',
        'type'    => 'DATE',
    ],
    [
        'key'     => 'end_date',
        'value'   => $date,
        'compare' => '>=',
        'type'    => 'DATE',
    ],
];

$metaQuery[] = $baseQuery;



$args = [
    'numberposts'   => -1,
    'category'      => $retailersGroupCategory->cat_ID,
    'post__in'      => get_field('retailers_groups_filter_order'),
    'orderby' => 'title',
    'order' => 'ASC'
];

$retailers = get_posts($args);

$paged = get_query_var('paged') ? get_query_var('paged') : 1;


$promo_query = new WP_Query(array(
    'category_name' => 'special-offers',
    'meta_query' => $metaQuery,
    'posts_per_page' => 8,
    'paged' => $paged,
    'post_status' => 'publish',
));
$big = 99999999999999;
$total_posts = $promo_query->found_posts;
$total_pages = $promo_query->max_num_pages;


?>
<?php
$hero = get_field('hero');
$promotions = get_field('promotions_list');
$below_hero = get_field('below_hero');
$footer_block = get_field('footer_block');
?>

<div class="main">
    <div class="text-hero">
        <div class="container">
            <div class="content-center">
                <h1><?=$hero['title']?></h1>
                <p><?=$hero['text']?></p>
            </div>
        </div>
    </div>
    <div class="container">
        <?php if (!empty($below_hero)) : ?>
            <?php foreach ($below_hero as $item):?>
                <?php if ($item['enable']):?>
                    <?php if ($item['type'] === 'simple'):?>
                        <div class="bg-decor bg-decor--narrow">
                            <div class="content-center big-text">
                                <h2><?=$item['title']?></h2>
                                <p><?=$item['text']?></p><a class="bttn bttn--border" href="<?= $item['cta']['url'] ?>"><?= $item['cta']['title']?></a>
                            </div>
                        </div>
                    <?php else :?>
                        <div class="swap-card-wrap">
                            <div class="swap-card swap-card--extend -<?= $item['image_position'] ?>">
                                <div class="swap-card__content swap-card__content--center">
                                    <div class="swap-card__content-inner">
                                        <h5 class="swap-card__title"><?=$item['title']?></h5>
                                        <p class="swap-card__text"><?=$item['text']?></p><a class="bttn bttn--border" href="<?=$item['cta']['url']?>"><?=$item['cta']['title']?></a>
                                    </div>
                                </div>
                                <div class="swap-card__img">
                                    <picture>
                                        <source media="(max-width: 1024px)" srcset="<?=$item['image_mob']['url']?>"/><img src="<?=$item['image']['url']?>" alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    <?php endif;?>
                <?php endif;?>
            <?php endforeach;?>
        <?php endif;?>
        <?php if (!empty($promotions)) : ?>
            <?php foreach ($promotions as $block):?>
                <?php
                $type = get_field('type', $block->ID);
                $sub_title = get_field('sub_title_promotions', $block->ID);
                $title = get_field('title_header_promotions', $block->ID);
                $text_header_promotions = get_field('text_header_promotions', $block->ID);
                $img = get_field('image_header_promotions', $block->ID);
                $image_position = get_field('image_position', $block->ID);
                $img_mobile = get_field('image_mobile_header_promotions', $block->ID);
                $img_medium = get_field('image_header_medium_promotions', $block->ID);
                ?>
                <?php if ($type === 'simple'):?>
                    <div class="bg-decor bg-decor--narrow">
                        <div class="content-center big-text">
                            <h2><?=$title?></h2>
                            <p><?=$text_header_promotions?></p><a class="bttn bttn--border" href="<?=get_permalink($block->ID);?>">LEARN MORE</a>
                        </div>
                    </div>
                <?php else :?>
                    <div class="swap-card-wrap">
                        <div class="swap-card swap-card--extend -<?= $image_position ?>">
                            <div class="swap-card__content swap-card__content--center">
                                <div class="swap-card__content-inner">
                                    <h5 class="swap-card__title"><?=$title?></h5>
                                    <p class="swap-card__text"><?=$text_header_promotions?></p><a class="bttn bttn--border" href="<?=get_permalink($block->ID);?>">LEARN MORE</a>
                                </div>
                            </div>
                            <div class="swap-card__img">
                                <picture>
                                    <source media="(max-width: 1024px)" srcset="<?=$img_mobile['url']?>"/><img src="<?=$img_medium['url']?>" alt=""/>
                                </picture>
                            </div>
                        </div>
                    </div>
                <?php endif;?>
            <?php endforeach;?>
        <?php endif;?>
    </div>
    <div class="container">

        <div class="promotions-filter">
            <div class="promotions-filter__title">filter specials by: </div>
            <form class="find-form" action="/">
                <div class="find-form__row">
                    <div class="find-form__item">
                        <div class="find-form__field">
                            <div class="find-filter js-drop-filter">
                                <div class="find-filter__select js-drop-filter-trigger" data-select="Search by range">
                                    <div class="find-filter__select-title"><span class="js-drop-filter-selected">Search by range</span></div>
                                    <div class="find-filter__select-icon"></div>
                                </div>
                                <div class="find-filter__drop">
                                    <ul class="filter-drop">
                                        <?php foreach ($matresses as $key => $matresse):
                                            $hasOffers = get_posts([
                                                'category_name' => 'special-offers',
                                                'meta_query' => array_merge($baseQuery, [[
                                                    'key'     => 'range', // name of custom field
                                                    'value'   => '' . $matresse->ID  . '', // matches exaclty "123", not just 123. This prevents a match for "1234"
                                                    'compare' => 'LIKE',
                                                ]]),
                                            ]);
                                            if (empty($hasOffers)) {
                                                continue;
                                            }
                                            ?>
                                            <li class="filter-drop__item js-drop-filter-item ">
                                                <input class="filter-drop__check" id="range-<?= $key ?>" type="checkbox" name="range" value="<?= $matresse->ID ?>" >
                                                <label class="filter-drop__label" for="range-<?= $key ?>"><?= $matresse->post_title ?></label>
                                            </li>
                                        <?php endforeach; ?>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="find-form__item">
                        <div class="find-form__field">
                            <div class="find-filter js-drop-filter">
                                <div class="find-filter__select js-drop-filter-trigger" data-select="Search by retailer">
                                    <div class="find-filter__select-title"><span class="js-drop-filter-selected">Search by retailer</span></div>
                                    <div class="find-filter__select-icon"></div>
                                </div>
                                <div class="find-filter__drop">
                                    <ul class="filter-drop">
                                        <?php foreach ($retailers as $key => $retailer):
                                            $hasOffers = get_posts([
                                                'category_name' => 'special-offers',
                                                'meta_query' => array_merge($baseQuery, [[
                                                    'key'     => 'retailer_groups', // name of custom field
                                                    'value'   => '' . $retailer->ID  . '', // matches exaclty "123", not just 123. This prevents a match for "1234"
                                                    'compare' => 'LIKE',
                                                ]]),
                                            ]);
                                            if (empty($hasOffers)) {
                                                continue;
                                            }
                                            ?>
                                            <li class="filter-drop__item js-drop-filter-item  ">
                                                <input class="filter-drop__check" id="retailer-<?= $key ?>" type="checkbox" name="retailer" value="<?= $retailer->ID ?>" data-name="<?= $retailer->post_name ?>" >
                                                <label class="filter-drop__label" for="retailer-<?= $key ?>"><?= $retailer->post_title ?></label>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="dynamic-ajax-content">
            <div class="promotions-tile-wrap">
                <div class="promotions-tile">
                    <?php while($promo_query->have_posts()) : $promo_query->the_post();
                        $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'large' );
                        $date = new DateTime(get_field('end_date', get_the_ID()));
                        $retailer = get_field('retailer_groups', get_the_ID());
                        $logo = get_field('logo', $retailer->ID);
                        ?>
                        <div class="promotions-card">
                            <div class="promotions-card__img"><img src="<?= $image[0] ?? '' ?>" srcset="<?= $image[0] ?? '' ?> 2x"/>
                            </div>
                            <?php if (!empty($logo)) : ?>
                            <div class="promotions-card__logo"><img src="<?= $logo['url']?>" alt="brand logo"/></div>
                            <?php endif; ?>
                            <div class="promotions-card__price"><?= get_field('promotion_display_name', get_the_ID()); ?></div>
                            <div class="promotions-card__text">
                                <p><?= the_excerpt(); ?></p>
                            </div>
                            <?php
                            $promolinks = get_field("promotion_link", get_the_ID());
                            ?>
                            <div class="promotions-card__footer"><a class="bttn" href="<?= $promolinks[0]['promotion_link_url']?>">FIND OUT MORE</a>
                                <div class="promotions-card__caption">Offer ends <?php echo $date->format('d F Y'); ?></div>
                            </div>
                        </div>
                    <?php endwhile;
                    wp_reset_postdata();?>
                </div>
            </div>
            <div class="promotions-footer">

                <?php
                echo paginate_links([
                    'base' => '%_%',
                    'format' => '?pages=%#%',
                    'current' => max(1, get_query_var('paged')),
                    'total' => $total_pages,
                    'type' => 'list',
                    'prev_text' => '<div class="pagination__link pagination__link--prev pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>',
                    'next_text' => '<div class="pagination__link pagination__link--next pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>'
                ]);
                ?>

            </div>
        </div>
    </div>
    <div class="promo-decor promo-decor--equal promo-decor--full">
        <div class="promo-decor__bg">
            <picture>
                <source media="(max-width: 650px)" srcset="<?= $footer_block['img_mob']['url']?> 1x, <?= $footer_block['img_mob_2x']['url']?> 2x"><img src="<?= $footer_block['img']['url']?>" srcset="<?= $footer_block['img_2x']['url']?> 2x"/>
            </picture>
        </div>
        <div class="content-center has-white-color">
            <h6><?= $footer_block['subtitle']?></h6>
            <h2><?= $footer_block['title']?></h2>
            <div class="bttn-row"><a class="bttn bttn--reverse" href="<?= $footer_block['cta']['url']?>"><?= $footer_block['cta']['title']?></a></div>
        </div>
    </div>
</div>
<?php get_footer(); ?>

