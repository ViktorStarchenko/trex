<?php
/*
 * Template Name: Sleep Guide Article
 * Template Post Type: post
 */

?>
<?php get_header(); ?>
<section id="container" class="app-wrapper__flex">
    <?php while (have_posts()) : the_post(); ?>
        <div class="app-container">
            <div class="page-content">
                <h1 class="page-h1"><?php the_title(); ?></h1>

                <div class="page-content__fixed-button">
                    <div class="page-content__fixed-button-wrap">
                        <a href="#" id="soc-button-1" class="app-button-reserve _inline">Share this
                            <span class="app-svg button-reserve _icon-right"></span></a>
                        <div id="soc-popup-1" class="app-header-dropdown app-dropdown app-dropdown-top app-dropdown-anchor-center  c-sb">
                            <ul class="soc-popup soc soc-horizontal">
                                <li>
                                    <a class="soc-twitter sharer"
                                       data-sharer="twitter"
                                       data-title="<?php the_title(); ?>"
                                       data-hashtags=""
                                       data-url="<?php the_permalink(); ?>"
                                       href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a class="soc-facebook sharer"
                                       data-sharer="facebook"
                                       data-url="<?php the_permalink(); ?>"
                                       href="#"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a class="soc-googleplus sharer"
                                       data-sharer="googleplus"
                                       data-url="<?php the_permalink(); ?>"
                                       href="#"><i class="fa fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a class="soc-mail sharer"
                                       data-sharer="email"
                                       data-title="<?php the_title(); ?>"
                                       data-url="<?php the_permalink(); ?>"
                                       data-subject="<?= get_option('share_email_subject'); ?>"
                                       data-to=""
                                       href="#"><i class="fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="page-subtitle"><?php the_field('snippet'); ?></div>
                <div class="page-content-max">
                    <div class="page-image-extender">
                        <?php the_post_thumbnail('full'); ?>
                    </div><br>
                    <?php the_content(); ?>
                </div>
            </div>
        </div>

        <?php
        $id = get_the_ID();
        $likes = get_post_meta($id, 'vortex_system_likes', true);
        $dislikes = get_post_meta($id, 'vortex_system_dislikes', true);

        $likeClass = vortex_system_add_like_class();
        $dislikeClass = vortex_system_add_dislike_class();
        $likeClass = $likeClass ? 'active' : mull;
        $dislikeClass = $dislikeClass ? 'active' : mull;
        ?>
        <div class="page-content">
            <div class="page-content-rate">
                <input type="hidden" value="<?= $id ?>" id="postID"/>
                <span>Was this article helpful?</span>
                <a href="#" id="vote-like" class="<?= $likeClass . ' ' . $id ?>">
                    <span class="_up"><img src="<?= get_stylesheet_directory_uri(); ?>/img/finger-up.svg" alt=""/></span>
                    <span id="vote-like-counter" class="<?= $id ?>"><?= $likes; ?></span>
                </a>
                <a href="#" id="vote-dislike" class="<?= $dislikeClass . ' ' . $id ?>">
                    <span class="_down"><img src="<?= get_stylesheet_directory_uri(); ?>/img/finger-down.svg" alt=""/></span>
                    <span id="vote-dislike-counter" class="<?= $id ?>"><?= $dislikes; ?></span>
                </a>
            </div>
        </div>

        <!--            <div class="page-content">-->
        <!--                <div class="page-content-rate">-->
        <!--                    <span>Was this article helpful?</span>-->
        <!--                    <a href="" class="active"><span class="_up"><img src="--><? //= get_stylesheet_directory_uri(); ?><!--/img/finger-up.svg" alt="" /></span><span >8</span></a>-->
        <!--                    <a href="" class="disabled"><span class="_down"><img src="--><? //= get_stylesheet_directory_uri(); ?><!--/img/finger-down.svg" alt="" /></span><span>0</span></a>-->
        <!--                </div>-->
        <!--            </div>-->

        <?php if (get_field('show_ebook')) : ?>
            <?= do_shortcode("[content_block slug=download-ebook]"); ?>
        <?php endif; ?>


        <?php if (get_field('related_posts')) : ?>
            <div class="article-news-box">
                <div class="app-container">
                    <div class="_title">Related content</div>
                    <div class="article-grid-box">
                        <div class="_grid _c3">
                            <?= do_shortcode('[ic_add_posts template="sleep-guide-posts-image.php" ids="' . implode(',', get_field('related_posts')) . '"]') ?>
                        </div>
                    </div>
                    <div class="app-more-articles">
                        <?php 
                            $CTARelatedTitle = get_field('related_posts_cta_text'); 
                            $CTARelatedLink = get_field('related_posts_cta_link'); 
                        ?>
                        <a href="<?= $CTARelatedLink ? $CTARelatedLink : '/sleep-guide' ?>" class="_link app-link-animation"><?= $CTARelatedTitle ? $CTARelatedTitle : 'View more articles' ?></a>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <div class="article-news-box article-news-compare-box">
            <div class="app-container">
                <h2 class="_title"><?= get_field('mattresses_block_text'); ?></h2>
                <div class="_subtitle"><?= get_field('mattresses_block_description'); ?></div>
                <div class="app-more-articles">
                    <a href="<?= get_field('compare_our_mattresses_url') ? get_field('compare_our_mattresses_url') : '/mattrasses'; ?>" class="_link app-link-animation"><?= get_field('compare_our_mattresses_title')? get_field('compare_our_mattresses_title') : 'Compare our mattresses'; ?></a>
                </div>
            </div>
        </div>

        <?php $p = get_field('featured_mattress', get_post()); ?>

        <?php if ($p) : ?>
        <div class="article-luxury-box" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
            <div class="app-container">

                <?php $fullwidth   = get_field('home_page_image_full_width', $p->ID) == 'Yes'; ?>
                <?php $imageMobile = get_field('home_image_mobile', $p->ID); ?>

                <div class="article-luxury-flex" <?php $fullwidth ? 'style="background-color: '. the_field('widget_background_color', $p->ID) .'"' : ''?>>
                    <div class="_img <?= $fullwidth ? 'full-width' : '' ?>">

                        <div class="_absolute-bg app-inline-bg img-mobilized"
                             data-image="<?php the_field('home_page_image', $p->ID); ?>"
                             data-image-mobile="<?php the_field('home_image_mobile', $p->ID); ?>"
                             style="background-image: url(<?php the_field('home_page_image', $p->ID); ?>)">
                        </div>

                    </div>
                    <div class="app-centered-box article-luxury-box__content">
                        <div class="_content-inner">
                            <div class="_content-inner-custom-box">
                                <div class="_uphead"><span><?php the_field('home_page_top_text', $p->ID); ?></span>
                                </div>
                                <div class="_title"><?= get_the_title($p->ID); ?></div>
                                <div class="_subtitle"><?php the_field('home_page_description', $p->ID); ?></div>
                                <a href="<?php the_permalink($p->ID); ?>" class="app-button-white _inline"><?php the_field('home_page_button_text', $p->ID); ?>
                                    <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                            <?php $features = get_field('home_page_features', $p->ID); ?>

                            <?php if ($features) : ?>
                                <div class="_rating-group">
                                    <?php foreach ($features as $feature) : ?>
                                        <div class="_rating-group-item">
                                            <figure>
                                                <img src="<?= get_the_post_thumbnail_url($feature->ID); ?>" alt="<?= get_post_meta(get_post_thumbnail_id($feature->ID), '_wp_attachment_image_alt', true); ?>">
                                            </figure>
                                            <?php $stars = get_field('stars_count', $feature->ID); ?>
                                            <?php if ($stars) : ?>
                                                <div class="_rating-group-stars">
                                                    <?php for ($i = $stars; $i > 0; $i--) : ?>
                                                        <i class="app-svg white-star"></i>
                                                    <?php endfor; ?>
                                                </div>
                                            <?php endif; ?>
                                            <div><?= get_the_title($feature->ID); ?></div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <?php endif; ?>

    <?php endwhile; ?>

</section>

<?php get_footer(); ?>

<script>
    (function ($) {
        var shareButton = $('#soc-button-1');
        var sharePopup  = $('#soc-popup-1');

        shareButton.on('click', function (e) {
            var item      = $(this);
            var isVisible = item.hasClass("active");

            if (isVisible) {
                sharePopup.hide();
            } else {
                sharePopup.fadeIn(500);
            }

            item.toggleClass("active");
            e.stopPropagation();
        });

        $(document).on('click', ':not(#soc-popup-1)', function() {
            var isVisible = shareButton.hasClass("active");
            if (isVisible) {
                sharePopup.hide();
                shareButton.removeClass("active");
            }
        });

    })(jQuery);
</script>