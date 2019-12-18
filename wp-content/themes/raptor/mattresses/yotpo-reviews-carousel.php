<?php
/*
 * Template Name: Mattresses Yotpo Reviews Carousel
 * Template Post Type: page
 */
?>
<?php

$showReviews = get_field('yotpo_show_reviews');
$reviews = [];

if ($showReviews) {
    try {
        $yotpoProductId = get_field('yotpo_product_id');
        $response = wp_remote_get('https://api.yotpo.com/v1/widget/nTvdl5HFT1TU7SIJWaQU9c4b0n2gzJx11sDi0L8B/products/' . $yotpoProductId . '/reviews.json');
        $body = !empty($response['body']) ? $response['body'] : null;
        $body = json_decode($body, true);
        $reviews = !empty($body['response']['reviews']) ? $body['response']['reviews'] : [];
    } catch (Exception $e) {}
}
?>

<?php if (!empty($reviews)) : ?>
<div class="article-news-box article-latest-reviews-box">
    <h2 class="_title">Latest reviews</h2>
    <div class="app-reviews-swiper">
        <div class="app-rewievs-swiper__inner swiper-container">
            <div class="swiper-wrapper">
                <?php foreach ($reviews as $review): ?>
                    <div class="swiper-slide">
                        <div class="app-reviews-swiper__item">
                            <div class="_stars">
                                <?php for ($i = 0; $i < (int)$review['score']; $i++): ?>
                                    <i class="fa fa-star"></i>
                                <?php endfor; ?>
                            </div>
                            <div class="_comment">“<?= $review['content']; ?>”</div>
                            <div class="_name"><?= $review['user']['display_name']; ?></div>
                            <div class="_date"><?= date('d.m.Y', strtotime($review['created_at'])); ?></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination app-sm-visible"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-black app-sm-hidden"></div>
            <div class="swiper-button-prev swiper-button-black app-sm-hidden"></div>
            <div class="swiper-button-prev__fade app-sm-hidden"></div>
            <div class="swiper-button-next__fade app-sm-hidden"></div>
        </div>
    </div>
    <div class="app-more-articles">
        <a href="/reviews?cat_id=<?= $yotpoProductId; ?>" class="app-button-reserve _inline" id="_all-reviews-cta">More reviews<i class="app-svg button-reserve _icon-right"></i></a>
        <ul class="_not-visible" id="_all-reviews-cta-loading"><li class="wpls-preloader"><img src="<?= get_stylesheet_directory_uri() ?>/img/ajax-loader.gif"></li></ul>
    </div>
</div>

<?php endif; ?>
