<?php
/*
 * Template Name: Gravity Forms
 * Template Post Type: page
 */
add_filter('show_admin_bar', '__return_false');
?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">

        <div class="range-main-box">
            <div class="range-main__small-bg">
                <?php $bgImage = get_field('backgroud_image'); ?>
                <div class="_absolute-bg app-inline-bg" style="background-image: url('<?= !empty($bgImage) ? $bgImage : "/wp-content/themes/raptor/img/contact-us-bg.jpg" ?>')"></div>
                <div class="_absolute-bg _absolute-title"><?php single_post_title(); ?></div>
            </div>
            <div class="range-main-box__bottom _gravity-form-wrapper">
                <div class="_contact-page-content _new-custom-gform-styles">
                    <div class="_contact-form gravity-form">
                        <?php while ( have_posts() ) : the_post(); ?>
                            <?php the_content(); ?>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php get_footer();