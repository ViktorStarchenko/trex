<?php
/*
 * Template Name: Bedding new
 * Template Post Type: page
 */
?>
<?php get_header(); ?>
<?php
$collectionsPage = false;
$currentCat = get_queried_object();
if ($currentCat->ID == 5142 || $currentCat->ID == 5144) {
    $collectionsPage = true;
}

$beddingCategory = get_category_by_slug('bedding');

$pillowsCategory = get_category_by_slug('pillows');
$protectorsCategory = get_category_by_slug('protectors');
$duvetsCategory = get_category_by_slug('duvets');
$sheetsCategory = get_category_by_slug('sheets');
$headboardsCategory = get_category_by_slug('headboards');
$basesCategory = get_category_by_slug('bases');
$collection24_7 = get_post('5142');
$collectionHush = get_post('5144');

$categoriesArr = [
    'bedding' => $beddingCategory->term_id,
    'pillows' => $pillowsCategory->term_id,
    'duvets' => $duvetsCategory->term_id,
    'protectors' => $protectorsCategory->term_id,
    'sheets' => $sheetsCategory->term_id,
    'headboards' => $headboardsCategory->term_id,
    'bases' => $basesCategory->term_id,
    '24-7collection' => $collection24_7->ID,
    'hushcollection' => $collectionHush->ID,
];

$retailersGroupCategory = get_category_by_slug('retailer-groups');

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
    'category_name' => $currentCat->post_name,
    'posts_per_page' => 12,
    'paged' => $paged,
    'post_status' => 'publish',
));
$big = 99999999999999;
$total_posts = $promo_query->found_posts;
$total_pages = $promo_query->max_num_pages;


?>
<?php
$hero = get_field('hero');
$popup_cta = get_field('popup_cta');
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

            <div class="promotions-filter">
                <div class="promotions-filter__title">filter by: </div>
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
                                            <?php foreach ($categoriesArr as $slug => $category_id):
                                                ?>
                                                <li class="filter-drop__item js-drop-filter-item ">
                                                    <input class="filter-drop__check" id="range-<?= $slug ?>" type="radio" <?php echo $currentCat->post_name == $slug ? 'checked' : ''?> name="range-acc" value="<?= $category_id ?>" >
                                                    <label class="filter-drop__label" for="range-<?= $slug ?>"><?= $slug == 'bedding' ? 'All' : ($slug == '24-7collection'? '24-7 Collection' : ($slug == 'hushcollection' ? 'Hush Collection' : ucfirst($slug))) ?><a href="<?= $slug == '24-7collection' || $slug == 'hushcollection' ? get_permalink($category_id) : get_category_link($category_id); ?>" ></a></label>
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
                                                    'category_name' => 'bedding',
                                                    'meta_query' => [[
                                                        'key'     => 'retailer_groups',
                                                        'value'   =>  $retailer->ID,
                                                        'compare' => 'LIKE',
                                                    ]],
                                                    'post_status' => 'publish',
                                                ]);
                                                if (empty($hasOffers)) {
                                                    continue;
                                                }
                                                ?>
                                                <li class="filter-drop__item js-drop-filter-item  ">
                                                    <input class="filter-drop__check" id="retailer-<?= $key ?>" type="checkbox" name="retailer-acc" value="<?= $retailer->ID ?>" data-name="<?= $retailer->post_name ?>" >
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
                            $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()));
                            ?>
                            <div class="accessories-card">
                                <div class="accessories-card__img"><img src="<?= $image[0] ?? '' ?>"/>
                                </div>
                                <div class="accessories-card__title"><?= get_the_title(get_the_ID()); ?></div>
                                <div class="accessories-card__text">
                                    <p><?= the_excerpt(); ?></p>
                                </div>
                                <div class="accessories-card__footer"><a class="under-link js-modal-open" href="#" data-modal-id="modal-html" data-modal-html="#accessories-<?= get_the_ID() ?>">SEE MORE</a>
                                </div>
                                <div class="get-content" id="accessories-<?= get_the_ID() ?>" style="display:none; visibility: hidden;">
                                    <div class="modal-content">
                                        <div class="modal-info">
                                            <div class="modal-info__text">
                                                <div class="modal-info__title"><?= get_the_title(get_the_ID());  ?></div>
                                                <div class="content">
                                                    <p><?= the_excerpt(); ?></p>
                                                    <h6>PRODUCT FEATURES:</h6>
                                                    <?php $details = get_field('accessories_details', get_the_ID());?>
                                                    <ul>
                                                        <?php if (!empty($details)): ?>
                                                            <?php foreach ($details as $detail):?>
                                                                <li>
                                                                    <?= $detail['detail_title'];?><br>
                                                                    <?= $detail['detail_content'];?>
                                                                </li>
                                                            <?php endforeach; ?>
                                                        <?php endif; ?>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="modal-info__img">
                                                <div class="modal-info-img"><img src="<?= $image[0] ?? '' ?>"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer"><a class="bttn bttn--bg" href="<?= $popup_cta['sleep_selector']['url']?>"><?= $popup_cta['sleep_selector']['title']?></a><a class="bttn" href="<?= $popup_cta['find_a_store']['url']?>"><?= $popup_cta['find_a_store']['title']?></a></div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile;
                        wp_reset_postdata();?>
                    </div>
                </div>
                <div class="accessories-footer">

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