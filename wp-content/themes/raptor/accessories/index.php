<?php /* Template Name: Accessories */ ?>
<?php get_header(); ?>

<section id="container" class="app-wrapper__flex">

    <?php while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>

    <?php endwhile; ?>

</section>

<?php get_footer();
