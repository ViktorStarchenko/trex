<?php /* Template Name: Mattresses Hot Deals */ ?>
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
$title = 'Hot deals';

if ($post->post_type == 'post') {
    $metaQuery[] = [
        'key'     => 'range',
        'value'   => '"' . $post->ID . '"',
        'compare' => 'LIKE',
    ];
    $title .= " on $post->post_title mattresses";
}

$hotOffers = get_posts([
    'category'    => $specialOffersCategory->cat_ID,
    'numberposts' => 4,
    'meta_query'  => $metaQuery,
]);

$retailerGroups = get_field('retailer_groups_order', $specialOffersPage->ID);

$orderedPosts = [];

foreach ($hotOffers as $post) {
    $stores = get_field('stores', $post->ID);
    $retailer = get_field('retailer', $stores[0]->ID);
    $key = array_search($retailer->ID, $retailerGroups);
    if ($key !== false) {
        $orderedPosts[$key][] = [
            'post' => $post,
            'retailer_id' => $retailer->ID
        ];
    }
}

ksort($orderedPosts);
?>

<?php if (!empty($orderedPosts)): ?>
    <div class="article-news-box article-hot-deals-box" id="hot-deals">
        <h2 class="_title"><?= $title; ?></h2>
        <div class="_subtitle">Current discounts and offers from our retail partners</div>

        <div class="app-deals-swiper">
            <div class="app-deals-swiper__inner swiper-container">
                <div class="swiper-wrapper">
                    <?php foreach ($orderedPosts as $posts) : ?>
                        <?php foreach ($posts as $data): $post = $data['post']; setup_postdata($post); ?>
                            <div class="swiper-slide">
                                <a href="<?= addHttp(get_field('promotion_url', $post->ID)); ?>" target="_blank">
                                    <div class="app-deals-swiper__item">
                                        <div class="_deals-price">
                                            <img src="<?= get_stylesheet_directory_uri(); ?>/img/deal-star-dollar.svg" alt="">
                                        </div>
                                        <div class="_deals-title"><?php the_title() ?></div>
                                        <div class="_deals-icon"><?= get_the_post_thumbnail($data['retailer_id']); ?></div>
                                    </div>
                                    <?php
                                    $date = new DateTime(get_field('end_date', $post->ID));
                                    ?>
                                    <div class="app-deals__offer">Offer ends <?php echo $date->format('d F Y'); ?></div>
                                </a>
                            </div>
                        <?php endforeach;
                        wp_reset_postdata(); ?>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
<?php endif; ?>