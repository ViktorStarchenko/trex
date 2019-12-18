<?php
$post = get_post();

$custom_retailers = [];
if( have_rows('shop_retailer_obj', $post->ID) ):
    $i = 0;
    while ( have_rows('shop_retailer_obj', $post->ID) ) : the_row();
        $custom_retailers[$i]['title'] = get_sub_field('shop_retailer_title_obj');
        $custom_retailers[$i]['url'] = get_sub_field('shop_retailer_url_obj');
        $i++;
    endwhile;
endif;
$firstCol = [];
$secondCol = [];
foreach ($custom_retailers as $k => $retailer) {
    if ($k % 2 == 0) {
        $firstCol[] = $retailer;
    } else {
        $secondCol[] = $retailer;
    }
}
?>

<?php if (!empty(get_field('find_store_title'))) : ?>
<div class="article-news-box article-collections-box" id="where-to-buy">
    <div class="app-container">
        <h2 class="_title"><?php the_field('find_store_title'); ?></h2>
        <div class="_subtitle"><?php the_field('find_store_description'); ?></div>
        <div class="article__search-form">
            <div class="_grid _c2">
                <div class="_col">
                    <div class="article__search-form-item">
                        <div class="_title-small"><?php the_field('find_store_subtitle'); ?></div>
                    </div>
                </div>
                <div class="_col">
                    <div class="article__search-form-item">
                        <form action="/stockists"  id="retailer_search_form">
                            <input type="hidden" value="<?= $post->post_name ?>" name="collection">
                            <input type="text" placeholder="suburb or postcode" name="address" id="retailer_search_input">
                            <button type="submit"><i class="app-svg search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <?php if (count($custom_retailers) > 0): ?>
            <h2 class="_title"><?php the_field('shop_online_title'); ?></h2>
            <div class="article__search-form-grid">
                <div class="article__send-form-grid shop-online">
                    <div class="_col<?= count($secondCol) > 0 ? '' : ' _single-col'?>">
                        <?php custom_retailers_link($firstCol, $post->ID, $isMattress); ?>
                    </div>
                    <?php if (count($secondCol) > 0) : ?>
                        <div class="_col">
                            <?php custom_retailers_link($secondCol, $post->ID, $isMattress); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif ?>
    </div>
</div>

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
            $('#retailer_search_form').on('submit', function () {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'button', 'click', 'FindARetailerButton');
                }
            });
            $(".retailer-logo").on('click', function () {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'button', 'click', 'FindARetailerButton-'+$(this).attr("data-name"));
                }
            });
        });
    </script>
<?php endif; ?>