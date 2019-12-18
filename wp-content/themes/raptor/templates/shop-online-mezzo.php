<?php
/*
 * Template Name: Shop Online Matresses Page
 * Template Post Type: page
 */
?>

<?php
$post = get_post();
$retailersGroupCategory = get_category_by_slug('retailer-groups');
$stocistPage = get_page_by_path('stockists');

$metaQuery = [
    'relation' => 'AND',
    [
        'key'     => 'enabled',
        'value'   => true,
        'compare' => '=',
    ],
];


$metaQuery[] = [
    'key'     => 'range',
    'value'   => '"' . $post->ID . '"',
    'compare' => 'LIKE',
];

$retailers = get_posts([
    'numberposts'   => -1,
    'category'      => $retailersGroupCategory->cat_ID,
    'meta_query'    => $metaQuery,
    'post__in'      => get_field('retailers_groups_order', $stocistPage->ID),
    'orderby'       => 'post__in'
]);


?>

<article class="mezzo-media-article article-news-box" id="where-to-buy">
    <div class="app-container">
        <div class="mezzo-media-article__title">find  <img src="<?= get_stylesheet_directory_uri(); ?>/img/mezzo/logo.png" alt="Find mezzo mattress"> in store</div>
        <div class="mezzo-media-article__content"><?php the_field('find_store_description'); ?></div>
        <div class="mezzo-media-article__search-form">
            <div class="mezzo-media-article__search-form-item -label">
                <div class="mezzo-media-article__title-small"><?php the_field('find_store_subtitle'); ?></div>
            </div>
            <div class="mezzo-media-article__search-form-item">
                <form action="/stockists" id="retailer_search_form">
                        <input type="hidden" value="<?= $post->post_name ?>" name="range">
                    <input type="text" placeholder="enter suburb or postcode" name="address" id="retailer_search_input">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
</article>
<?php if (count($retailers) > 0): ?>
    <article class="mezzo-partners">
        <div class="app-container">
            <?php foreach($retailers as $retailer): ?>
            <?php 

                $permalink =  get_permalink($retailer->ID); 
                $target = '_blank';
                if (strpos($permalink, get_home_url()) !== false) {
                    $permalink = '/stockists?retailer_id=' . $retailer->ID;
                    $target = '';
                }
            ?>
            <?php

                $link = get_field('mezzo_link', $post->ID);

                if(!empty($link)){
                    $permalink = $link;
                    $target = '_blank';
                }

            ?>
            <a href="<?= $permalink; ?>"><img src="<?= get_the_post_thumbnail_url($retailer); ?>" target="<?= $target; ?>" alt="<?= get_field('display_name', $retailer->ID) ?>"></a>
            <?php endforeach; ?>
        </div>
    </article>
<?php endif; ?>

<script type="text/javascript">

        // Fix for IOS Touch
        jQuery(document).on({
            'DOMNodeInserted': function() {
                jQuery('.pac-item, .pac-item span', this).addClass('needsclick');
            }
        }, '.pac-container');

        jQuery(document).ready(function($) {
            var input = document.getElementById('retailer_search_input');

            //varify the field
            if ( input != null ) {

                //basic options of Google places API.
                //see this page https://developers.google.com/maps/documentation/javascript/places-autocomplete
                //for other avaliable options
                var options = {
                    types: ['geocode'],
                    componentRestrictions: { 'country': 'NZ' }
                };

                var autocomplete = new google.maps.places.Autocomplete(input, options);

                google.maps.event.addListener(autocomplete, 'place_changed', function(e) {

                    var place = autocomplete.getPlace();

                    if (!place || !place.geometry) {
                        return;
                    }

                    return $('#retailer_search_form').submit();
                });
            }
        });
    </script>


