<?php
/*
 * Template Name: Reviews New Page
 * Template Post Type: page
 */

add_action('wp_head', 'add_reviews_js');
?>
<?php get_header(); ?>
    <div id="product-reviews">
        <div class="main">
            <div class="reviews-page">
                <div class="review">
                    <?php
                    $catId = get_query_var('cat_id', null);
                    $matressesCategory = get_category_by_slug('beds');
                    $matresses = get_posts(['category' => $matressesCategory->cat_ID, 'posts_per_page' => -1]);
                    $image = get_field('image');
                    $content_text = get_field('content_text');
                    $why_block = get_field('why_block');
                    ?>
                    <div class="hero-review">
                        <picture class="hero-review__pictire">
                            <source media="(max-width: 450px)" srcset="<?= $image['img_mob']['url']?> 1x, <?= $image['img_mob_2x']['url']?> 2x"><img src="<?= $image['img']['url']?>" srcset="<?= $image['img_2x']['url']?> 2x"/>
                        </picture>
                    </div>
                    <div class="container">
                        <div class="heading-review">
                            <div class="heading-review__title">Reviews</div>
                        </div>
                        <div class="heading-review-content">
                            <div class="content-center">
                                <?= !empty($content_text) ? $content_text :''?>
                            </div>
                        </div>
                    </div>
                    <?php if ($why_block['enable']) : ?>
                        <hr class="page-devider">
                        <div class="container">
                            <div class="feature-wrap">
                                <div class="content-center">
                                    <h4><?= !empty($why_block['title']) ? $why_block['title'] : ''?></h4>
                                    <p><?= !empty($why_block['text']) ? $why_block['text'] : ''?></p>
                                </div>
                                <?php if (!empty($why_block['slider'])) :?>
                                    <div class="feature-slider">
                                        <div class="swiper-container js-feature-slider">
                                            <div class="swiper-wrapper">
                                                <?php foreach ($why_block['slider'] as $slide) : ?>
                                                    <div class="swiper-slide">
                                                        <div class="feature-card">
                                                            <div class="feature-card__icon"><img src="<?= $slide['img']['url'] ?>" srcset="<?= $slide['img_2x']['url'] ?> 2x"/>
                                                            </div>
                                                            <div class="feature-card__title"><?= $slide['title']?></div>
                                                            <div class="feature-card__text"><?= $slide['text']?></div>
                                                        </div>
                                                    </div>
                                                <?php endforeach;?>
                                                <!--<div class="swiper-slide">
                                                    <div class="feature-card">
                                                        <div class="feature-card__icon"><img src="../img/feature-card/feature-card-8.png" srcset="../img/feature-card/feature-card-8@2x.png 2x"/>
                                                        </div>
                                                        <div class="feature-card__title">Innovation</div>
                                                        <div class="feature-card__text">Sleepymaker combines world class innovation, operations and design to create the highest quality products.</div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="feature-card">
                                                        <div class="feature-card__icon"><img src="../img/feature-card/feature-card-9.png" srcset="../img/feature-card/feature-card-9@2x.png 2x"/>
                                                        </div>
                                                        <div class="feature-card__title">Australia made</div>
                                                        <div class="feature-card__text">Sleepymaker is committed to long term local manufacturing, ensuring our product meet the highest standards. </div>
                                                    </div>
                                                </div>-->
                                            </div>
                                            <div class="swiper-nav">
                                                <div class="swiper-button-prev js-feature-slider-prev">
                                                    <div class="swiper-button-icon">
                                                        <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                            <use xlink:href="#arrow-right"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="swiper-button-next js-feature-slider-next">
                                                    <div class="swiper-button-icon">
                                                        <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                            <use xlink:href="#arrow-right"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif;?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <div class="content-center">
                        <h3>Latest reviews</h3>
                    </div>
                    <div class="review__categories">
                        <a href="<?= get_the_permalink(); ?>" class="bttn <?php echo $catId === null ? 'bttn--active' : ''; ?>">All</a>
                        <?php foreach ($matresses as $matresse) : ?>
                            <?php
                            $showReviews = get_field('yotpo_show_reviews', $matresse->ID);
                            $yotpoProductId = get_field('yotpo_product_id', $matresse->ID);
                            $yotpoProductId = $yotpoProductId ? $yotpoProductId : -1;
                            ?>
                            <?php if ($showReviews) : ?>
                                <a href="?cat_id=<?= $yotpoProductId; ?>" class="bttn <?php echo $catId == $yotpoProductId ? 'bttn--active' : ''; ?>"><?= $matresse->post_title; ?></a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>


                    <?php if ($catId === null) : ?>
                        <div id='yotpo-testimonials-custom-tab' data-mode="questions"></div>
                    <?php else: ?>
                        <?php $post = get_post($catId); ?>
                        <?php $postImage = get_field('review_image', $catId); ?>
                        <div class="yotpo yotpo-main-widget"

                             data-product-id="<?= $catId; ?>"

                             data-name="<?= $post->post_title; ?>"

                             data-url="<?= get_post_permalink($catId) ?>"
                            <?php if ($postImage) : ?>
                                data-image-url="<?= $postImage ?>"
                            <?php endif; ?>
                             data-description="<?= $post->post_excerpt; ?>"

                             data-mode="questions"></div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

    </div>
<?php get_footer();