<?php
/*
 * Template Name: Special Offer
 * Template Post Type: post
 */
?>

<?php get_header(); ?>
<?php
$post = get_post();

$specialOffersCategory = get_category_by_slug('special-offers');
$specialOffersPage = get_page_by_path('special-offers');

$metaQuery = [
    'relation' => 'AND',
    [
        'key'     => 'start_date',
        'value'   => date('Y-m-d'),
        'compare' => '<=',
        'type'    => 'DATE',
    ],
    [
        'key'     => 'end_date',
        'value'   => date('Y-m-d'),
        'compare' => '>=',
        'type'    => 'DATE',
    ],
    [
        'key'     => 'hot_deals',
        'value'   => true,
        'compare' => '=',
    ],
];

$hotOffers = get_posts([
    'category'     => $specialOffersCategory->cat_ID,
    'numberposts'  => 4,
    'post__not_in' => [$post->ID],
    'meta_query'   => $metaQuery,
]);

$retailerGroups = get_field('retailer_groups_order', $specialOffersPage->ID);

$orderedPosts = [];

foreach ($hotOffers as $_post) {
    $stores = get_field('stores', $_post->ID);
    $retailer = get_field('retailer', $stores[0]->ID);
    $key = array_search($retailer->ID, $retailerGroups);
    if ($key !== false) {
        $orderedPosts[$key][] = [
            'post' => $_post,
            'retailer_id' => $retailer->ID
        ];
    }
}

ksort($orderedPosts);
?>

    <section id="container" class="app-wrapper__flex">

        <?php while ( have_posts() ) : the_post(); ?>
            <?php the_content(); ?>

        <?php endwhile; ?>

        <?php if (!empty($orderedPosts)): ?>
            <div class="article-news-box">
                <div class="app-container">
                    <h1 class="page-h1">Hot deals</h1>
                    <div class="page-subtitle">Current discounts and offers from our retail partners</div>
                </div>
                <div class="app-offers-list">
                    <?php foreach ($orderedPosts as $posts) : ?>
                        <?php foreach ($posts as $data): $post = $data['post']; setup_postdata($post); ?>
                            <div class="app-offers-list__item" data-retailer="<?= get_the_title($data['retailer_id']); ?>" data-offer="<?php the_title(); ?>">
                                <a href="<?= addHttp(get_field('promotion_url',$post->ID)); ?>" class="app-offers-item" data-retailer="<?= get_the_title($data['retailer_id']); ?>" data-offer="<?php the_title(); ?>">
                                    <div class="app-deals-swiper__item">
                                        <div class="_deals-price">
                                            <img src="<?= get_stylesheet_directory_uri(); ?>/img/deal-star-dollar.svg" alt=""/>
                                        </div>
                                        <div class="_deals-title"><?php the_title(); ?></div>
                                        <div class="_deals-icon"><?= get_the_post_thumbnail($data['retailer_id']); ?></div>
                                    </div>
                                    <?php
                                    $date = new DateTime(get_field('end_date', $post->ID));
                                    ?>
                                </a>
                                <div class="app-deals__offer">Offer ends <?php echo $date->format('d F Y'); ?></div>
                            </div>
                        <?php endforeach;
                    wp_reset_postdata(); ?>
                <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>

    </section>

<?php get_footer();