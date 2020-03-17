<?php
/*
 * Template Name: Find a store page
 * Template Post Type: page
 */
?>
<?php

wp_enqueue_script('wpsl-js', get_template_directory_uri() . '/js/wpsl-gmap-custom.min.js', ['jquery'], WPSL_VERSION_NUM, true);
wp_localize_script( 'wpsl-js', 'wpslAjaxVariables', ['retailers' => get_retailers_list(), 'retailers_groups' => get_retailers_groups() ] );

wp_enqueue_style('wpsl-custom-css', get_stylesheet_directory_uri() . '/static/build/css/app.css');
wp_enqueue_script('wpsl-custom-js', get_template_directory_uri() . '/static/build/js/app.js', ['jquery'], WPSL_VERSION_NUM, true);
?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">

        <?= do_shortcode('[wpsl]'); ?>

    </section>
<?php get_footer();
