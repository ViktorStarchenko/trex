<?php
/*
 * Template Name: Mattresses
 * Template Post Type: post
 */
add_action('wp_head', 'add_reviews_js');
?>
<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">
        <?php while (have_posts()) : the_post(); ?>
            <div class="range-main-box" id="benefits">
                <div class="app-centered-top-box range-main__bg">
                    <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= the_post_thumbnail_url('full-size') ?>)"></div>
                    <div class="app-container">
                        <div class="article-luxury-box__content-inner t_center">
                            <div class="article-luxury-box__uphead"><span><?php the_title() ?></span></div>
                            <h1 class="article-luxury-box__title"><?php the_field('title_text'); ?></h1>
                            <div class="article-luxury-box__subtitle"><?php the_field('title_description'); ?></div>
                        </div>
                        <div class="article-luxury-box__menu app-lg-hidden">
                            <ul>
                                <li><a href="#benefits" class="app-link-animation"><?php the_field('title_menu_benefits'); ?></a></li>
                                <li><a href="#technology" class="app-link-animation"><?php the_field('title_menu_technology'); ?></a></li>
                                <li><a href="#range" class="app-link-animation"><?php the_field('title_menu_our_range'); ?></a></li>
                                <li><a href="#where-to-buy" class="app-link-animation"><?php the_field('title_menu_where_buy'); ?></a></li>
                                <li><a href="#hot-deals" class="app-link-animation"><?php the_field('title_menu_special_offers'); ?></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <?php $features = get_field('features'); ?>

                <?php if ($features) : ?>
                    <div class="range-main-box__bottom clearfix">
                        <div class="range-main-box__grid">
                            <?php foreach ($features as $feature) : ?>
                                <div class="_col">
                                    <div class="range-main-box__bottom-item">
                                        <?= get_the_post_thumbnail($feature->ID, 'full') ?>
                                        <div class="range-main-box__bottom-item-title"><?= get_the_title($feature->ID); ?></div>
                                        <p><?= $feature->post_content; ?></p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>

            <?php the_content(); ?>

        <?php endwhile; ?>
    </section>

    <style>
        .article-luxury-box__menu ul li {
            display: none;
        }
    </style>

    <script>
        (function($) {
            var links = ['benefits', 'technology', 'range', 'where-to-buy', 'hot-deals'];
            $.each(links, function(index, value) {
                if ($('#' + value).length) {
                    $('.article-luxury-box__menu ul li a[href="#' + value + '"]').parent().show();
                }
            });
        })(jQuery);
    </script>

<?php get_footer();


