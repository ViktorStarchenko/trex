<?php

$headerNavigation = get_page_by_path('header-menu-navigation');

$args = [
    'category'         => '',
    'orderby'          => 'date',
    'order'            => 'DESC',
    'post_status'      => 'publish',
    'numberposts'      => -1,
    'suppress_filters' => true,
];

$matressesCategory = get_category_by_slug('beds');
$matressesPosts = get_field('matrasses_pages', $headerNavigation->ID);
$retailersPosts = get_field('mattresses_by_store', $headerNavigation->ID);

$helpAndSupportPages = get_field('help_and_support_pages', $headerNavigation->ID);
$storesAndPromotionsPages = get_field('stores_and_promotions_pages', $headerNavigation->ID);

$sleepCollectionsCategory = get_category_by_slug('sleep-collections');
$accessoriesCategory = get_category_by_slug('accessories');

$sleepCollectionsSubcategories = get_categories(
[
'child_of' => $sleepCollectionsCategory->term_id,
'orderby'  => 'date',
'order'    => 'ASC',
]
);

$child_cats = (array)get_term_children($accessoriesCategory->cat_ID, 'category');
$args['category__not_in'] = $child_cats;
$args['category'] = $accessoriesCategory->cat_ID;
$accessoriesPosts = get_posts($args);

$sleepGuideCategory = get_category_by_slug('sleep-guide');
$sleepGuideCategories = get_categories([
'orderby' => 'date',
'parent'  => $sleepGuideCategory->cat_ID,
]);

$specialOffersCategory = get_category_by_slug('special-offers');
$beddingPage = get_page_by_path('bedding');
$beddingCategory = get_category_by_slug('bedding');
$beddingSubCategories = get_categories(
[
'child_of' => $beddingCategory->term_id,
'orderby'  => 'date',
'order'    => 'ASC',
'parent' => $beddingCategory->term_id,
]
);

$aboutPage = get_post(23);
$aboutSubPages = get_pages(['child_of' => $aboutPage->ID, 'sort_column' => 'menu_order']);

$aboutSubPages = get_field('subpages_our_story', $headerNavigation->ID);

$sleepGuidePage = get_page_by_path('sleep-guide');
$sleepGuideSubPages = get_pages([
    'child_of' => $sleepGuidePage->ID,
    'sort_column' => 'menu_order'
]);

$isCollectionsEnabled = get_option('is_collections_enabled'); ?>
