<?php
/*
Template Name: Search Page
*/

global $query_string;

$search_query = wp_parse_str( $query_string );
$search = new WP_Query( $search_query );
$total_results = $wp_query->found_posts;
?>
<?php get_header(); ?>

<section id="container" class="app-wrapper__flex">
    <div class="article-news-box">
        <div class="app-container">
            <?php get_search_form(); ?>
        </div>
    </div>
</section>



<?php get_footer();