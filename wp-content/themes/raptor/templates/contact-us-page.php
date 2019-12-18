<?php
/*
 * Template Name: Contact Us
 * Template Post Type: page
 */
add_filter('show_admin_bar', '__return_false');
?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">

        <div class="range-main-box">
            <div class="range-main__small-bg">
                <div class="_absolute-bg app-inline-bg" style="background-image: url('<?= get_the_post_thumbnail_url(); ?>')"></div>
                <h1 class="_absolute-bg _absolute-title"><?php the_title(); ?></h1>
            </div>
            <div class="range-main-box__bottom">
                <div class="_contact-page-content _new-custom-gform-styles">
                    <?php while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </section>
<?php get_footer();