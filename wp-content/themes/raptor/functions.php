<?php
//update_option( 'siteurl', 'https://www.sleepyhead.co.nz' );
//update_option( 'home', 'https://www.sleepyhead.co.nz' );

if (!session_id()){
    session_start();
}

/*
Plugin Name: Site Plugin for Raptor
Description: Site specific code changes for Raptor
*/

// Enable WP_DEBUG mode
define('WP_DEBUG', true);
//
//// Enable Debug logging to the /wp-content/debug.log file
define('WP_DEBUG_LOG', true);
//
//// Disable display of errors and warnings
define('WP_DEBUG_DISPLAY', false);

@ini_set('display_errors', 0);

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define('SCRIPT_DEBUG', true);

@ini_set( 'upload_max_size' , '16M' );
@ini_set( 'post_max_size', '16M');
@ini_set( 'max_execution_time', '300' );

// Require Marketo API PHP helper classes from wp-includes
if ( !function_exists( 'get_home_path' ) ){
    require_once( dirname(__FILE__) . '/../../../wp-admin/includes/file.php' );
}

$install_path = get_home_path();
require_once($install_path. '/wp-content/plugins/marketo/api/overdose.rest.class.php');


function Generate_Featured_Image($image_url, $filename, $post_id)
{
    $upload_dir = wp_upload_dir();
    $image_data = file_get_contents($image_url);

    if (wp_mkdir_p($upload_dir['path'])) $file = $upload_dir['path'] . '/' . $filename;
    else                                    $file = $upload_dir['basedir'] . '/' . $filename;
    file_put_contents($file, $image_data);

    $wp_filetype = wp_check_filetype($filename, null);
    $attachment = [
        'post_mime_type' => $wp_filetype['type'],
        'post_title'     => sanitize_file_name($filename),
        'post_content'   => '',
        'post_status'    => 'inherit',
    ];
    $attach_id = wp_insert_attachment($attachment, $file, $post_id);
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    $attach_data = wp_generate_attachment_metadata($attach_id, $file);
    $res1 = wp_update_attachment_metadata($attach_id, $attach_data);
    $res2 = set_post_thumbnail($post_id, $attach_id);
}

//add_action("admin_notices", function () {
//    echo "<div class='updated'>";
//    echo "<p>";
//    echo "To insert the posts into the database, click the button to the right.";
//    echo "<a class='button button-primary' style='margin:0.25em 1em' href='{$_SERVER[REQUEST_URI]}?migrate_retailer_groups'>Migrate retail groups</a>";
//    echo "<a class='button button-primary' style='margin:0.25em 1em' href='{$_SERVER[REQUEST_URI]}?migrate_retailer_stocks'>Migrate stocks</a>";
//    echo "</p>";
//    echo "</div>";
//});

add_action("admin_init", function () {
    global $wpdb;
    return;
    if (!isset($_GET["migrate_retailer_groups"])) {
        return;
    }

    $category = get_category_by_slug('retailer-groups');

//    $currentRetailers = get_posts([
//        'category' => $category->cat_ID,
//        'posts_per_page' => -1
//    ]);
//    $file = fopen(__DIR__ . DIRECTORY_SEPARATOR . 'migrations/retailergroup.csv', 'r');
//    $header = fgetcsv($file);
//    while ($row = fgetcsv($file)) {
//        if ($row['2'] == 'False') {
//            continue;
//        }
//        $retailer = get_posts([
//            'category'   => $category->cat_ID,
//            'meta_query' => [
//                [
//                    'key'     => 'group_id',
//                    'value'   => (int)$row[0],
//                    'compare' => '=',
//                ],
//            ],
//        ]);
//        $retailer = $retailer[0];
//        update_field('field_59805bced69e0', $row[6], $retailer->ID);
//        update_field('field_59930ab59a977', $row[0], $retailer->ID);
//
//    }
//    foreach ($currentRetailers as $retailer) {
////        update_field('field_59805bf8f585f', true, $retailer->ID);
//
////        update_field('field_59805bced69e0', true, $retailer->ID);
//    }
//    die();


    $file = fopen(__DIR__ . DIRECTORY_SEPARATOR . 'migrations/retailergroup.csv', 'r');

    $header = fgetcsv($file);

    $domain = 'https://www.sleepyhead.com.au';
    $retailers = [];
    while ($row = fgetcsv($file)) {
        if ($row['2'] == 'False') {
            continue;
        }

        $image = $row[5];
        if (0 !== strpos($image, 'http')) {
            $image = ltrim($image, '~');
            $image = $domain . $image;
        }
        $ext = substr($image, strpos($image, 'ext=.') + 5);

        $retailers[] = [
            'title'        => $row[1],
            'group_id'     => $row[0],
            'display_name' => $row[6],
            'image'        => $image,
            'image_ext'    => $ext,
        ];
    }


    foreach ($retailers as $retailer) {
        $postId = wp_insert_post([
            "post_title"    => $retailer["title"],
            "post_status"   => "publish",
            'post_category' => [$category->cat_ID],
        ]);

        update_field('display_name', $retailer["display_name"], $postId);
        update_field('group_id', $retailer["group_id"], $postId);

        $imageName = $retailer["title"] . '-' . $postId . '.' . $retailer['image_ext'];
        Generate_Featured_Image($retailer['image'], $imageName, $postId);
    }

    echo 'Retails Groups Migrated';
    die();
});

add_action("admin_init", function () {
    global $wpdb;
    return;
    if (!isset($_GET["migrate_retailer_stocks"])) {
        return;
    }
    $countries = [
        423 => 'New Zealand',
        284 => 'Australia',
    ];
    $states = [
        423 => [130 => 'Auckland',
                133 => 'Bay of Plenty',
                145 => 'Canterbury',
                132 => 'Coromandel',
                135 => 'East Coast',
                137 => 'Hawkes Bay',
                134 => 'King Country',
                140 => 'Manawatu',
                144 => 'Marlborough',
                143 => 'Nelson Bays',
                148 => 'North Otago',
                129 => 'Northland',
                149 => 'Otago',
                136 => 'Poverty Bay',
                147 => 'South Canterbury',
                150 => 'Southland',
                138 => 'Taranaki',
                131 => 'Waikato',
                141 => 'Wairarapa',
                139 => 'Wanganui',
                142 => 'Wellington',
                146 => 'West Coast',
        ],
        284 => [120 => 'Australian Capital Territory',
                121 => 'New South Wales',
                128 => 'Northern Territory',
                122 => 'Queensland',
                123 => 'South Australia',
                124 => 'Tasmania',
                125 => 'Victoria',
                126 => 'Western Australia',
        ],
    ];

    $stocksFile = fopen(__DIR__ . DIRECTORY_SEPARATOR . 'migrations/stockist.csv', 'r');
//    $statesFiles = fopen(__DIR__ . DIRECTORY_SEPARATOR . 'migrations/states.csv', 'r');
    $header = fgetcsv($stocksFile);
//    $header = fgetcsv($statesFiles);

//    $states = [];
//    while ($row = fgetcsv($statesFiles)) {
//        $states[$row[4]][$row[0]] = $row[1];
//    }
//
//    var_export($states);
//    die();

    $stocks = [];
//    $offset = 0;
    while ($row = fgetcsv($stocksFile)) {
//        $offset += 1;
//        if ($offset < 816) {
//            continue;
//        }

        $stocks[] = [
            'title'       => $row[1],
            'retailer_id' => $row[2],
            'url'         => $row[4],
            'phone'       => $row[5],
            'fax'         => $row[6],
            'email'       => $row[7],
            'address'     => $row[8],
            'city'        => $row[9],
            'zip'         => $row[10],
            'state'       => $states[$row[12]][$row[11]], //11
            'country'     => $countries[$row[12]], //12
            'lat'         => $row[13],
            'lng'         => $row[14],
        ];
    }
//var_dump($stocks); die();
    $category = get_category_by_slug('retailer-groups');

//    $currentStocks = get_posts([
//        'post_type'      => 'wpsl_stores',
//        'posts_per_page' => -1,
//    ]);
//    foreach ($currentStocks as $stock) {
//        wp_delete_post($stock->ID, true);
//    }

    foreach ($stocks as $offset => $stock) {

        $retailer = get_posts([
            'category'   => $category->cat_ID,
            'meta_query' => [
                [
                    'key'     => 'group_id',
                    'value'   => (int)$stock['retailer_id'],
                    'compare' => '=',
                ],
            ],
        ]);
        $retailer = $retailer[0];

        $postId = wp_insert_post([
            'post_type'   => 'wpsl_stores',
            "post_status" => "publish",
            "post_title"  => $stock["title"],
        ]);

        update_post_meta($postId, 'wpsl_url', trim($stock["url"], '" '));
        update_post_meta($postId, 'wpsl_phone', trim($stock["phone"], '" '));
        update_post_meta($postId, 'wpsl_fax', trim($stock["fax"], '" '));
        update_post_meta($postId, 'wpsl_email', trim($stock["email"], '" '));

        update_post_meta($postId, 'wpsl_address', trim($stock["address"], '" '));
        update_post_meta($postId, 'wpsl_city', trim($stock["city"], '" '));
        update_post_meta($postId, 'wpsl_zip', trim($stock["zip"], '" '));
        update_post_meta($postId, 'wpsl_state', trim($stock["state"], '" '));
        update_post_meta($postId, 'wpsl_country', trim($stock["country"], '" '));
        update_post_meta($postId, 'wpsl_lat', trim($stock["lat"], '" '));
        update_post_meta($postId, 'wpsl_lng', trim($stock["lng"], '" '));

        update_field('field_59805f195dbe3', $retailer->ID, $postId);
    }

    echo 'Migrated';
    die();

});


if (!is_admin()) {
	wp_enqueue_script('custom-scripts', get_template_directory_uri() . '/static/build/js/app.js', ['jquery'], false, true);
    wp_enqueue_script( 'browser', get_template_directory_uri() . '/js/browser.js', ['jquery'], false, true);
    wp_enqueue_script( 'promo', get_template_directory_uri() . '/js/new-promo.js', ['jquery'], false, true);
    wp_enqueue_script( 'slider', get_template_directory_uri() . '/js/resources/carousel/bootstrap.min.js', ['jquery'], false, true);
    wp_enqueue_script( 'custom', get_template_directory_uri() . '/js/resources/custom.js', ['jquery'], false, true);
    wp_enqueue_script( 'fancybox', get_template_directory_uri() . '/js/fancybox/jquery.fancybox.min.js', ['jquery'], false, true);

    wp_enqueue_script( 'owl', get_template_directory_uri() . '/js/owl.carousel.min.js', ['jquery'], false, true);
    wp_enqueue_script( 'wpsl-gmap', ( 'https://maps.google.com/maps/api/js' . wpsl_get_gmap_api_params( 'browser_key' ) . '' ), '', null, true );
    wp_enqueue_script('main-scripts', get_template_directory_uri() . '/js/scripts.min.js', ['jquery'], false, true);
    wp_dequeue_script('wpsl-js');

    wp_enqueue_script('vortex_like_or_dislike_js-custom', get_template_directory_uri() . '/js/like-or-dislike-custom.min.js', ['jquery'], false, true);
    wp_localize_script('vortex_like_or_dislike_js-custom', 'vortex_ajax_var', [
            'url'   => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ajax-nonce'),
        ]
    );

    wp_enqueue_script( 'retailers', get_template_directory_uri() . '/js/retailers.min.js', ['jquery'], false, true);
    wp_localize_script( 'retailers', 'ajax_variables', ['ajax_url' => admin_url( 'admin-ajax.php' ), 'entity_id' => !empty($_GET['entry_id']) ? $_GET['entry_id'] : ''] );
}

function dequeue_unnecessary_scripts()
{
    wp_dequeue_script('vortex_like_or_dislike_js');
    wp_dequeue_script('contact-form-7');
}

add_action('wp_print_scripts', 'dequeue_unnecessary_scripts');
add_action('wp_footer', 'dequeue_unnecessary_scripts');

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

add_action('wp_enqueue_scripts', 'miracoil_swiper');
function miracoil_swiper()
{
    if (is_page_template('mattresses/index.php') && !is_admin()) {
        wp_enqueue_script(
            'miracoilSwiper',
            get_template_directory_uri() . '/js/miracoil-swiper.min.js',
            ['jquery', 'main-scripts'],
            false,
            true
        );
    }
}

//add reviews js 
function add_reviews_js()
{
	echo '<script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/nTvdl5HFT1TU7SIJWaQU9c4b0n2gzJx11sDi0L8B/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>';
}

function add_cocoon_js()
{
    wp_enqueue_script('cocoon-scripts', get_template_directory_uri() . '/js/cocoon.min.js', ['jquery'], false, true);
}
function add_cocoon_css()
{
    wp_enqueue_style('cocoon.styles', get_stylesheet_directory_uri() . '/css/cocoon.min.css');
}

function add_cocoon_beauty_assets() {
    wp_enqueue_style('cocoon.beauty', get_stylesheet_directory_uri() . '/css/beauty-styles.min.css');
}

function add_mezzo_js() {
    wp_enqueue_script('mezzo-scripts', get_template_directory_uri() . '/js/mezzo-mattress.min.js', ['jquery'], false, true);
}

wp_enqueue_style('style', get_stylesheet_uri());
if (!is_admin()) {
    function app_style_sheet() {
        wp_enqueue_style('app-caroucel-styling', get_stylesheet_directory_uri() . '/js/resources/carousel/bootstrap.min.css');
        wp_enqueue_style('app-caroucel-theme-styling', get_stylesheet_directory_uri() . '/js/resources/carousel/bootstrap-theme.css');
        wp_enqueue_style('app-fancybox', get_stylesheet_directory_uri() . '/js/fancybox/jquery.fancybox.min.css');
        wp_enqueue_style('app-owl-carousel', get_stylesheet_directory_uri() . '/js/owl.carousel.min.css');
        wp_enqueue_style('app-owl', get_stylesheet_directory_uri() . '/js/owl.theme.default.min.css');
        wp_enqueue_style('app-styling', get_stylesheet_directory_uri() . '/css/styles.min.css');
		wp_enqueue_style('redesign', get_stylesheet_directory_uri() . '/static/build/css/app.css');
        if ( class_exists( 'GFCommon' ) ) {
            wp_enqueue_style('custom-styling', get_stylesheet_directory_uri() . '/css/custom.min.css', ['gforms_formsmain_css']);
        } else {
            wp_enqueue_style('custom-styling', get_stylesheet_directory_uri() . '/css/custom.min.css');
        }
        wp_enqueue_style('app-quiz', get_stylesheet_directory_uri() . '/css/app.min.css');
    }

    add_action('wp_enqueue_scripts', 'app_style_sheet');

    function dequeue_styles()
    {
        wp_dequeue_style('wpsl-styles');
        wp_dequeue_style('algolia-instantsearch');
    }

    add_action('wp_print_styles', 'dequeue_styles');
}


//custom posts images sizes

add_theme_support('post-thumbnails');

add_image_size('homepage-thumb', 370, 200);

function wps_display_attachment_settings() {
    update_option( 'image_default_align', 'center' );
    update_option( 'image_default_link_type', 'file' );
    update_option( 'image_default_size', 'large' );
}
add_action( 'after_setup_theme', 'wps_display_attachment_settings' );

function remove_image_size_attributes( $html ) {
    return preg_replace( '/(width|height)="\d*"/', '', $html );
}

// Remove image size attributes from post thumbnails
add_filter( 'post_thumbnail_html', 'remove_image_size_attributes' );

// Remove image size attributes from images added to a WordPress post
add_filter( 'image_send_to_editor', 'remove_image_size_attributes' );

function get_shortcode_title()
{
    return get_the_title();
}

add_shortcode('page_title', 'get_shortcode_title');

function permalinkWithCategoryBaseFix()
{
    global $wp_query;

    $currentURI = !empty($_SERVER['REQUEST_URI']) ? trim($_SERVER['REQUEST_URI'], '/') : '';
    if ($currentURI) {
        $categoryBaseName = 'sleep-guide'; // Remove / and . from base

        if ($categoryBaseName) {
            // Perform fixes for category_base matching start of permalink custom structure
            if (substr($currentURI, 0, strlen($categoryBaseName)) == $categoryBaseName) {
                // Find the proper category
                $childCategoryObject = get_category_by_slug($wp_query->query_vars['name']);
                // Make sure we have a category
                if (is_object($childCategoryObject)) {
                    $paged = ($wp_query->query_vars['paged']) ? $wp_query->query_vars['paged'] : 1;
                    $wp_query->query([
                            'cat'   => $childCategoryObject->term_id,
                            'paged' => $paged,
                        ]
                    );
                    // Set our accepted header
                    status_header(200); // Prevents 404 status
                }
                unset($childCategoryObject);
            }
        }
        unset($categoryBaseName);
    }
}

add_action('template_redirect', 'permalinkWithCategoryBaseFix');

function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

/**
 * Fix the problem where next/previous of page number buttons are broken of posts in a category when the custom permalink
 * The problem is that with a url like this:
 * /categoryname/page/2
 * the 'page' looks like a post name, not the keyword "page"
 */
function fixCategoryPagination($queryString)
{
    if (isset($queryString['name']) && $queryString['name'] == 'page' && isset($queryString['page'])) {
        unset($queryString['name']);
        // 'page' in the query_string looks like '/2', so i'm exploding it
        list($delim, $page_index) = explode('/', $queryString['page']);
        $queryString['paged'] = $page_index;
    }
    return $queryString;
}

add_filter('request', 'fixCategoryPagination');

//set category for load more button sleep guide
function set_category_load_more($args)
{
    if (is_category()) {
        $category = get_category(get_query_var('cat'));
        $args['category_name'] = $category->slug;
    }
}

add_filter('alm_query_args_1109742854', 'set_category_load_more');


add_filter('wpsl_templates', 'custom_templates');

//Store locator
function custom_templates($templates)
{

    /**
     * The 'id' is for internal use and must be unique ( since 2.0 ).
     * The 'name' is used in the template dropdown on the settings page.
     * The 'path' points to the location of the custom template,
     * in this case the folder of your active theme.
     */
    $templates[] = [
        'id'   => 'custom',
        'name' => 'Custom template',
        'path' => get_stylesheet_directory() . '/' . 'wpsl-templates/find-a-store.php',
    ];

    return $templates;
}

add_filter('wpsl_listing_template', 'custom_listing_template');

function custom_listing_template()
{

    global $wpsl, $wpsl_settings;
/*
    $listing_template = '<li data-store-id="<%= id %>" class="app-filter-result__list-item app-filter-result__list-vi"><div class="_divider"></div>' . "\r\n";
    $listing_template .= "\t\t" . '   <div class="article-inline-goods__title"><%= store %></div>' . "\r\n";
    $listing_template .= "\t\t" . '   <div class="article-inline-goods__subtitle"><%= city %> </div>' . "\r\n";

    $listing_template .= "\t\t" . '<div class="app-filter-result__list-item-bottom">' . "\r\n";
    $listing_template .= "\t\t\t" . '<a href="#" class="retailer-info-show app-button-reserve _inline js-show-store-details <% if ( twist ) { %>_has-twist<% } %>" data-name="" >Store details <span class="app-svg button-reserve _icon-right"></span></a>' . "\r\n";
    $listing_template .= "\t\t\t" . '<% if ( twist ) { %>' . "\r\n";
    $listing_template .= "\t\t\t" . '<div class="app-sleep-selector-modal _size-small _twist-modal-popup" style="display: none;"><a href="#" class="ga-link  app-modal-close-twist-css app-modal-close-twist"></a><div class="app-sleep-selector-modal__flex"><div class="article-news-box"><div class="page-h3"><%= twist.modal_title %></div><div id="newsletter-form-block"><div class="article__send-form"><%=twist.modal_text %></div><div class="_button"><a href="#" class="app-button-submit app-button-reserve _inline app-modal-close-twist"><%= twist.modal_button %></a></div></div></div></div></div>' . "\r\n";
    $listing_template .= "\t\t\t" . '<% } %>' . "\r\n";
    $listing_template .= "\t\t\t" . '<% if ( offers && offers[0].hot ) {  %>' . "\r\n";
    $listing_template .= "\t\t\t" . '<div class="deals-available-sign"> <span>special offers available</span><img src="' . get_stylesheet_directory_uri() . '/img/label.png"></div>' . "\r\n";
    $listing_template .= "\t\t\t" . '<% } %>' . "\r\n";
    $listing_template .= "\t\t" . '</div>' . "\r\n";

    $listing_template .= include 'wpsl-templates/listing-details.php';
    $listing_template .= "\t\t" . '<a class="wpsl-directions" style="display: none;"></a>' . "\r\n";
    $listing_template .= "\t" . '</li>' . "\r\n";
*/
    $listing_template = '
    <% var offersCss = "" %>
        <% if ( offers && offers[0].hot ) {  %>
        <% offersCss = "js-special-wrap" %>
    <% } %>
    <li data-store-id="<%= id %>" class="shop-card <%= offersCss %>" itemscope itemtype="http://schema.org/LocalBusiness">
        <div class="shop-card__name"><%= store %></div>
        <meta itemprop="name" content="<%= store %>">
        
        <div class="shop-card__address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <p><span itemprop="streetAddress"><%= address %></span>, <span itemprop="addressLocality"><%= city %></span>, <%= country %></p>
            <% if (phone){ %>
                <p><a href="tel:<%= phone %>"><span itemprop="telephone"><%= phone %></span></a></p>
            <% } %>
        </div>
        
        <% if(ranges_show == 1) { %>
            <% if(ranges.length > 0) { %>
            <div class="shop-card__selected">
                <% for(var i in ranges) { %>
                    <% var separator = "," %>
                    <% if(ranges.length - 1 == i) { %>
                        <% separator = "" %>
                    <% } %>
                    <% if (ranges[i].title) { %>
                        <a href="<%= ranges[i].link %>" class="ga-link " title="<%= ranges[i].title %>"><%= ranges[i].title %></a><%= separator %>
                    <% } %>
                <% } %>
            </div>
            <% } %>
        <% } %>
        
        <div class="shop-card__row">
            <% if ( site_url ) {  %>
            <div class="shop-card__row-item">
                <a class="shop-card__icon shop-card__site" href="<%= site_url %>" target="_blank">
                    <img src="'.get_template_directory_uri().'/static/build/img/icons/shop-card-site.png" alt="shop-card-site"/>
                    VISIT SITE
                </a>
            </div>
            <% } %>
            <% if ( offers && offers[0].hot ) {  %>
            <div class="shop-card__row-item"><a class="shop-card__icon shop-card__offers js-special-trigger" href="#">
                <img src="'.get_template_directory_uri().'/static/build/img/icons/shop-card-offers.png" alt="shop-card-offers"/>SPECIAL OFFERS</a>
            </div>
            <% } %>
            <div class="shop-card__row-item">
                <a class="shop-card__icon shop-card__map js-show-store-details" href="#wpsl-gmap">
                    <img src="'.get_template_directory_uri().'/static/build/img/icons/shop-card-map.png" alt="shop-card-map"/>VIEW ON MAP
                </a>
            </div>
        </div>
        <% if ( offers && offers[0].hot ) {  %>
        <div class="shop-card__special js-special-target">
            <div class="shop-card-wrap">
                <div class="shop-card-wrap__head">
                    <div class="shop-card-wrap__title">Available deals</div>
                    <div class="shop-card-wrap__close js-special-target-close"></div>
                </div>
                <div class="shop-card-wrap__body">
                    <% for(var i in offers) { %>
                        <% if (offers[i].title) { %>
                        <div class="special-card">
                            <div class="special-card__head">
                                <% if(offers[i].hot) { %>
                                    <img class="special-card__head-icon" src="'.get_stylesheet_directory_uri().'/static/build/img/icons/special-card-dollar.png">
                                <% } %>
                                <span class="special-card__head-title"><%= offers[i].title %></span>
                            </div>
                            <% if(offers[i].sub_title){ %>
                            <div class="deal-content-subtitle">
                                <%= offers[i].sub_title %>
                            </div>
                            <% } %>
                            <div class="special-card__desc">
                                <p><%= offers[i].excerpt %></p>
                            </div>
                            <div class="special-card__footer">
                                <% if(retailer_url[offers[i].id]) { %>
                                    <a href="<%= retailer_url[offers[i].id] %>" class="ga-link" target="_blank" data-name="<%= offers[i].name %>"><%= offers[i].cta_button %></a>
                                <% } else { %>
                                    <a href="<%= retailer_url %>" class="ga-link special-card__footer-link" data-name="<%= offers[i].name %>"><%= offers[i].cta_button %></a>
                                <% } %>
                                <div class="special-card__footer-date">Offer ends <%= offers[i].ends %></div>
                            </div>
                        </div>
                        <% } %>
                    <% } %>
                </div>
            </div>
        </div>
        <% } %>
    </li>';

    return $listing_template;
}


add_filter( 'wpsl_no_results', 'custom_no_results' );

function custom_no_results() {

    $output = '<div class="find-form__nothing">
        <div class="find-form__nothing-title">The selected retailer does not stock this range. </div>
        <div class="find-form__nothing-text">Please select another retailer.</div>
    </div>';

    return $output;
}

add_filter('wpsl_sql', function ($sql) {
    $retailersFilter = isset($_GET['retailers']) ? $_GET['retailers'] : [];

    $join = '';
    $where = '';

    if (!empty($retailersFilter)) {
        $join .= 'INNER JOIN wp_postmeta AS retailer ON retailer.post_id = posts.ID AND retailer.meta_key = \'retailer\'';
        $where .= 'AND retailer.meta_value IN (' . implode(',', $retailersFilter) . ')';
    }

    $sql = "SELECT post_lat.meta_value AS lat,
                           post_lng.meta_value AS lng,
                           posts.ID, 
                           ( %d * acos( cos( radians( %s ) ) * cos( radians( post_lat.meta_value ) ) * cos( radians( post_lng.meta_value ) - radians( %s ) ) + sin( radians( %s ) ) * sin( radians( post_lat.meta_value ) ) ) ) 
                        AS distance
                      FROM wp_posts AS posts
                INNER JOIN wp_postmeta AS post_lat ON post_lat.post_id = posts.ID AND post_lat.meta_key = 'wpsl_lat'
                INNER JOIN wp_postmeta AS post_lng ON post_lng.post_id = posts.ID AND post_lng.meta_key = 'wpsl_lng'
                $join
                    
                     WHERE posts.post_type = 'wpsl_stores'
                       $where
                       AND posts.post_status = 'publish' GROUP BY posts.ID ORDER BY distance LIMIT %d";

    return $sql;
});

add_filter('wpsl_sql_placeholder_values', function ($placeholder_values) {
    $placeholder_values[4] = isset($_GET['max_results']) ? $_GET['max_results'] : 100;
    return $placeholder_values;
});


add_filter('wpsl_store_data', 'custom_store_data_response');

function custom_store_data_response($stores_meta)
{
    $specialOffersCategory = get_category_by_slug('special-offers');
    $rangesFilter = isset($_GET['ranges']) ? $_GET['ranges'] : [];
    $collectionsFilter = isset($_GET['collections']) ? $_GET['collections'] : [];
    $subRangesFilter = isset($_GET['sub_ranges']) ? $_GET['sub_ranges'] : [];
    $storeId = isset($_GET['item_id']) ? $_GET['item_id'] : false;
    $baseQuery = [
        'relation' => 'AND',
        [
            'key'     => 'start_date',
            'value'   => date('Y-m-d'),
            'compare' => '<=',
            'type'    => 'DATE',
        ],
        [
            'key'     => 'end_date',
            'value'   => date('Y-m-d'),
            'compare' => '>=',
            'type'    => 'DATE',
        ],
    ];

    $offersList =  get_posts([
        'category'   => $specialOffersCategory->cat_ID,
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'meta_query' => $baseQuery,
    ]);

    $offerPosts = [];
    $promo_url = [];
    foreach ($offersList as $offer){
        $flag = false;
        $retailers = [];
        if(get_field('not_all_stores_in_participate', $offer->ID)){
            $stores = get_field('stores', $offer->ID);
            //$retailer_ID = get_field('retailer_special', $offer->ID);

            $i = 0;
            foreach ($stores as $store){
                $retailers[$i] = get_field('retailer', $store->ID);
                $offerPosts[$offer->ID][$retailers[$i]->ID]['stores'] = $stores;
                $i++;
            }
        }
        else{
            $retailers[0] = get_field('retailer_groups', $offer->ID);
            $flag = true;
        }

        $promo_urls = get_field("promotion_link", $offer->ID);
        if(!empty($promo_urls)){
            foreach ($promo_urls as $link){
                $promo_url[$offer->ID][$link['promotion_link_retailer']->ID] = $link['url_for_find_store'];
            }
        }

        foreach ($retailers as $retailer){
            if(isset($retailer->ID) && !empty($retailer->ID)){
                $offerPosts[$offer->ID][$retailer->ID]['retailer'] = $retailer->ID;
                $offerPosts[$offer->ID][$retailer->ID]['id'] = $offer->ID;
                $offerPosts[$offer->ID][$retailer->ID]['title'] = get_field('promotion_display_name', $offer->ID);
                $offerPosts[$offer->ID][$retailer->ID]['name'] = $retailer->post_name;
                $offerPosts[$offer->ID][$retailer->ID]['hot'] = get_field('hot_deals', $offer->ID);
                $offerPosts[$offer->ID][$retailer->ID]['promotion_sub_title'] = get_field('promotion_sub_title', $offer->ID);
                $offerPosts[$offer->ID][$retailer->ID]['cta_button'] = get_field('cta_button_offer', $offer->ID);
                if($flag)
                    $offerPosts[$offer->ID][$retailer->ID]['groups'] = 1;
            }
        }
    }

    $result = [];
    foreach ($stores_meta as $store_meta) {
        if ($storeId && $store_meta['id'] !== $storeId) {
            continue;
        }
//        $store = get_post($store_meta['id']);
        // START FILTERS
        $retailer = get_field('retailer', $store_meta['id']);
        if (false == get_field('enabled', $retailer->ID)) {
            continue;
        }
        
        $twists = [];
        $baseTwists = [];
        $store_meta['base_benefits'] = false;
        $baseTwistImage = null;
        if (!empty($rangesFilter)) {
            $ranges = get_field('ranges', $store_meta['id']);

            $inArray = false;
            foreach ($ranges as $range) {
                if (in_array($range->ID, $rangesFilter)) {
                    $inArray = true;
                    $retailerTwists = get_field('retailer_twist', $range->ID);
                    $baseBenefits = get_field('benefits', $range->ID);
                    $baseTwists = array_merge($baseTwists, get_field('basic_twists', $range->ID));
                    if (!empty($baseBenefits)) {
                        $store_meta['base_benefits'] = $baseBenefits;
                        $baseTwistImage = get_field('twist_image', $range->ID);
                    }
                    
                    if (!empty($retailerTwists)) {
                        foreach ($retailerTwists as $retailerTwist) {
                            $retailerTwist->range = $range->post_title;
                            $twists[] = $retailerTwist;
                        }
                    }
                    break;
                }
            }

            if (false === $inArray) {
                continue;
            }
        }

        if (!empty($subRangesFilter)) {
            $subRanges = get_field('sub_ranges', $store_meta['id']);

            $inArray = false;
            foreach ($subRanges as $subRange) {
                if (in_array($subRange->ID, $subRangesFilter)) {
                    $inArray = true;
                    $retailerTwists = get_field('retailer_twist', $subRange->ID);
                    $baseBenefits = get_field('benefits', $subRange->ID);
                    $baseTwists = array_merge($baseTwists, get_field('basic_twists', $subRange->ID));
                    if (!empty($baseBenefits) && !$store_meta['base_benefits']) {
                        $store_meta['base_benefits'] = $baseBenefits;
                        if (empty($baseTwistImage)) {
                            $baseTwistImage = get_field('twist_image', $subRange->ID);
                        }
                    }
                    if (!empty($retailerTwists)) {
                        foreach ($retailerTwists as $retailerTwist) {
                            $retailerTwist->range = $subRange->post_title;
                            $twists[] = $retailerTwist;
                        }
                    }
                    break;
                }
            }

            if (false === $inArray) {
                continue;
            }
        }
        if (!empty($collectionsFilter)) {
            $collections = get_field('collections', $store_meta['id']);

            $inArray = false;
            foreach ($collections as $collection) {
                if (in_array($collection->ID, $collectionsFilter)) {
                    $inArray = true;
                    $retailerTwists = get_field('retailer_twist', $collection->ID);
                    $baseBenefits = get_field('benefits', $collection->ID);
                    $baseTwists = array_merge($baseTwists, get_field('basic_twists', $collection->ID));
                    if (!empty($baseBenefits) && !$store_meta['base_benefits']) {
                        $store_meta['base_benefits'] = $baseBenefits;
                        if (empty($baseTwistImage)) {
                            $baseTwistImage = get_field('twist_image', $collection->ID);
                        }
                    }
                    if (!empty($retailerTwists)) {
                        foreach ($retailerTwists as $retailerTwist) {
                            $retailerTwist->range = $collection->post_title;
                            $twists[] = $retailerTwist;
                        }
                    }
                    break;
                }
            }

            if (false === $inArray) {
                continue;
            }
        }
        // END FILTERS
        $store_meta['twist'] = false;
        $store_meta['twist_benefits'] = false;
        foreach ($twists as $twist) {
            $retailerGroup = get_field('retailer_group', $twist->ID);
            if ($retailer->ID == $retailerGroup->ID) {
                $twist->modal_title = get_option("retailers_twists_modal_title");
                $twist->modal_button = get_option("retailers_twists_modal_button_text");
                $retailerDisplayName = get_field('display_name', $retailer->ID);
                $retailerDisplayName = !empty($retailerDisplayName) ? $retailerDisplayName : $retailer->post_title;
                $twist->modal_text = str_replace('%RetailerGroup%', $retailerDisplayName, get_option("retailers_twists_modal_text"));
                $twist->modal_text = str_replace('%TwistName%', $twist->post_title, $twist->modal_text);
                $twist->modal_text = str_replace('%SelectedRangeName%', $twist->range, $twist->modal_text);
                $twist->image = get_the_post_thumbnail_url($twist->ID);
                $twist->benefits_title = get_field('benefit_title', $twist->ID);
                $store_meta['twist'] = $twist;
                $benefits = get_field('benefits', $twist->ID);
                if (!empty($benefits)) {
                    foreach ($benefits as $benefit) {
                        $benefit->info = get_field('info', $benefit->ID);
                        $store_meta['twist_benefits'][] = $benefit;
                    }
                    
                }
                break;
            }
        }
        $store_meta['base_twist'] = false;
        foreach ($baseTwists as $twist) {
            $retailerGroup = get_field('retailer', $twist->ID);
            if ($retailer->ID == $retailerGroup->ID) {
                $baseTImage = get_field('image', $twist->ID);
                $twist->image = !empty($baseTImage) ? $baseTImage : $baseTwistImage;
                $twist->benefits_title = get_field('benefits_title', $twist->ID);
                $store_meta['base_twist'] = $twist;
                break;
            }
        }

        $offers = null;

        foreach ($offerPosts as $itemOffer){
            if(isset($itemOffer[$retailer->ID])&&!empty($itemOffer[$retailer->ID])){
                if(isset($itemOffer[$retailer->ID]['groups'])){
                    $date = new DateTime(get_field('end_date', $itemOffer[$retailer->ID]['id']));
                    if(empty($itemOffer[$retailer->ID]['cta_button'])){
                        $itemOffer[$retailer->ID]['cta_button'] = 'Show';
                    }
                    $offers[] = [
                        'title' => $itemOffer[$retailer->ID]['title'],
                        'name' => $itemOffer[$retailer->ID]['name'],
                        'hot' => $itemOffer[$retailer->ID]['hot'],
                        'ends' => $date->format('d F Y'),
                        'id' => $itemOffer[$retailer->ID]['id'],
                        'excerpt' => get_the_excerpt($itemOffer[$retailer->ID]['id']),
                        'sub_title' => $itemOffer[$retailer->ID]['promotion_sub_title'],
                        'cta_button' => $itemOffer[$retailer->ID]['cta_button'],
                    ];
                } else {
                    foreach ($itemOffer[$retailer->ID]['stores'] as $store){
                        if($store_meta['id']==$store->ID){
                            $date = new DateTime(get_field('end_date', $itemOffer[$retailer->ID]['id']));
                            if(empty($itemOffer[$retailer->ID]['cta_button'])){
                                $itemOffer[$retailer->ID]['cta_button'] = 'Show';
                            }
                            $offers[] = [
                                'title' => $itemOffer[$retailer->ID]['title'],
                                'name' => $itemOffer[$retailer->ID]['name'],
                                'hot' => $itemOffer[$retailer->ID]['hot'],
                                'ends' => $date->format('d F Y'),
                                'id' => $itemOffer[$retailer->ID]['id'],
                                'excerpt' => get_the_excerpt($itemOffer[$retailer->ID]['id']),
                                'sub_title' => $itemOffer[$retailer->ID]['promotion_sub_title'],
                                'cta_button' => $itemOffer[$retailer->ID]['cta_button'],
                            ];
                        }
                    }
                }
            }

            if(isset($promo_url[$itemOffer[$retailer->ID]['id']][$retailer->ID])){
                if(!empty($promo_url[$itemOffer[$retailer->ID]['id']][$retailer->ID])){
                    $store_meta['retailer_url'][$itemOffer[$retailer->ID]['id']] = $promo_url[$itemOffer[$retailer->ID]['id']][$retailer->ID];
                }
                else{
                    $store_meta['retailer_url'][$itemOffer[$retailer->ID]['id']] = '/special-offers?retailer='.$retailer->ID;
                }
            }
        }

        if(!isset($store_meta['retailer_url'])||empty($store_meta['retailer_url'])){
            $store_meta['retailer_url'] = '/special-offers?retailer='.$retailer->ID;
        }

        $store_meta['retailer'] = get_field('display_name', $retailer->ID);
        $store_meta['retailer_image'] = get_the_post_thumbnail_url($retailer);

        $store_meta['site_url'] = $store_meta['url'];
        if (empty($store_meta['site_url'])) {
            $store_meta['site_url'] = get_field('retailer_url', $retailer->ID);
        }

        if (empty($store_meta['site_url'])) {
            $store_meta['site_url'] = get_field('url', $retailer->ID);
        }

        //$retailer_url = get_field('retailer_url', $retailer->ID);

        $store_meta['offers'] = $offers;
        $store_meta['ranges_show'] = 0;

        $ranges_list = [];
        $ranges_show = get_field('ranges_show', $retailer->ID);
        if($ranges_show){

            $store_meta['ranges_show'] = 1;
            $ranges = get_field('ranges', $store_meta['id']);

            if(!empty($ranges)){
                $r = 0;
                foreach ($ranges as $range_item){
                    $ranges_list[$r]['title'] = $range_item->post_title;
                    $ranges_list[$r]['id'] = $range_item->ID;
                    $ranges_list[$r]['link'] = get_permalink($range_item->ID);
                    $r++;
                }
            }
        }

        $store_meta['ranges'] = $ranges_list;

        $result[] = $store_meta;
    }
/*
    echo "<pre>";
    print_r($result);
    echo "</pre>";
*/
    return $result;
}

function custom_query_vars_filter($vars)
{
    $vars = array_merge($vars, ['cat_id']);
    return $vars;
}

add_filter('query_vars', 'custom_query_vars_filter');
add_filter('wpcf7_form_elements', function ($content) {
    $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);

    return $content;
});

add_filter('wpcf7_ajax_json_echo', function ($response, $result) {

    if (!empty($response['invalidFields'])) {
        foreach ($response['invalidFields'] as &$invalidField) {
            $invalidField['into'] = str_replace('span.wpcf7-form-control-wrap.', '', $invalidField['into']);
            $invalidField['field'] = $invalidField['into'];

            if ($invalidField['field'] == 'message') {
                $invalidField['into'] = 'textarea[name="' . $invalidField['into'] . '"]';
            } else {
                $invalidField['into'] = 'input[name="' . $invalidField['into'] . '"]';
            }

        }
    }

    return $response;
});

add_filter('algolia_config', function ($config) {
    $config['autocomplete']['input_selector'] = "input[name='s']:not('.no-autocomplete'):not('.adminbar-input')";
    return $config;
});

/**
 * @param bool $should_index
 * @param WP_Post $post
 *
 * @return bool
 */
function included_post_categories($should_index, WP_Post $post)
{
    if (false === $should_index) {
        return false;
    }

    $should_index = false;
    $inludeCategories = ['products', 'sleep-guide'];
    $postCategories = get_the_category($post->ID);

    foreach ($postCategories as $postCategory) {
        if (in_array($postCategory->slug, $inludeCategories)) {
            $should_index = true;
            break;
        }

        $ancestors = get_ancestors($postCategory->cat_ID, 'category');
        foreach ($ancestors as $ancestor) {
            $category = get_term( $ancestor, 'category' );
            if (in_array($category->slug, $inludeCategories)) {
                $should_index = true;
                break 2;
            }
        }
    }
    
    if ($post->post_type == 'page' && $post->post_status == 'publish' && $post->post_name != 'sitemap') {
        $should_index = true;
    }

    return $should_index;
}

// Hook into Algolia to manipulate the post that should be indexed.
add_filter('algolia_should_index_searchable_post', 'included_post_categories', 10, 2);
add_filter('algolia_searchable_post_shared_attributes', 'my_post_attributes', 10, 2);
add_filter('algolia_searchable_posts_index_settings', 'custom_ranking', 10, 2);

/**
 * @param array $attributes
 * @param WP_Post $post
 *
 * @return array
 */
function my_post_attributes(array $attributes, WP_Post $post)
{
    $postCategories = get_the_category($post->ID);
    $attributes['is_mattress'] = 0;
    $attributes['has_images'] = 0;

    if (!empty($attributes['images'])) {
        $attributes['has_images'] = 1;
    }

    foreach ($postCategories as $postCategory) {
        if ($postCategory->slug == 'beds') {

            $featuresAttr = [];
            $features = get_field('home_page_features', $post->ID);
            foreach ($features as $feature) {
                $featuresAttr[] = [
                    'icon_class'  => get_field('icon_class', $feature->ID),
                    'stars_count' => get_field('stars_count', $feature->ID),
                    'title'       => $feature->post_title,
                ];
            }
            $attributes['product_details'] = [
                'widget_background_color' => get_field('widget_background_color', $post->ID),
                'home_page_top_text'      => get_field('home_page_top_text', $post->ID),
                'home_page_image'         => get_field('home_page_image', $post->ID),
                'home_page_description'   => get_field('home_page_description', $post->ID),
                'home_page_button_text'   => get_field('home_page_button_text', $post->ID),
                'features'                => $featuresAttr,
            ];

            $attributes['is_mattress'] = 1;
        }
    }

    // Always return the value we are filtering.
    return $attributes;
}

function custom_ranking(array $settings)
{
    $custom_ranking = $settings['customRanking'];
    array_unshift($custom_ranking, 'desc(has_images)');
    array_unshift($custom_ranking, 'desc(is_mattress)');
    $settings['customRanking'] = $custom_ranking;

    return $settings;
}

function theme_settings_page()
{
    include __DIR__ . '/admin/template/panel.php';
}

function add_theme_menu_item()
{
    add_menu_page("Raptor Panel", "Raptor Panel", "manage_options", "raptor-panel", "theme_settings_page", null, 99);
}

add_action("admin_menu", "add_theme_menu_item");


function display_email_subject_element()
{
    include __DIR__ . '/admin/template/email-subject.php';
}
function display_collections_enabled_element()
{
    include __DIR__ . '/admin/template/collections-enabled.php';
}

function display_retailer_field_id_element()
{
    include __DIR__ . '/admin/template/retailer-field-id.php';
}

function display_twists_modal_title()
{
    include __DIR__ . '/admin/template/retailer-twist-title.php';
}

function display_retailers_twists_modal_text()
{
    include __DIR__ . '/admin/template/retailer-twist-text.php';
}

function display_retailers_twists_modal_button_text()
{
    include __DIR__ . '/admin/template/retailer-twist-button-text.php';
}

function display_theme_panel_fields()
{
    add_settings_section("theme-settings-section", "Theme Settings", null, "theme-options");
    add_settings_section("share-settings-section", "Share Settings", null, "theme-options");
    add_settings_section("gform-settings-section", "Gravty Forms Settings", null, "theme-options");
    add_settings_section("retailers-twists-settings-section", "Retailers Twists Settings", null, "theme-options");

    add_settings_field("share_email_subject", "Email Subject", "display_email_subject_element", "theme-options", "share-settings-section");

    add_settings_field("is_collections_enabled", "Collections Enabled", "display_collections_enabled_element", "theme-options", "theme-settings-section");
    
    add_settings_field("gform_retailer_field_id", "Retailer Field ID", "display_retailer_field_id_element", "theme-options", "gform-settings-section");
    
    add_settings_field("retailers_twists_modal_title", "Pop-up Title", "display_twists_modal_title", "theme-options", "retailers-twists-settings-section");
    add_settings_field("retailers_twists_modal_text", "Pop-up Text<br> <span style='font-weight: normal; font-size: 12px;'>%RetailerGroup% - Retailer group Display Name, <br> %TwistName% - Retailer Twist Post Title, <br> %SelectedRangeName% - Range or Subrange Post Title</span>", "display_retailers_twists_modal_text", "theme-options", "retailers-twists-settings-section");
    add_settings_field("retailers_twists_modal_button_text", "Pop-up Button Text", "display_retailers_twists_modal_button_text", "theme-options", "retailers-twists-settings-section");

    register_setting("section", "share_email_subject");
    register_setting("section", "is_collections_enabled");
    register_setting("section", "gform_retailer_field_id");
    register_setting("section", "retailers_twists_modal_title");
    register_setting("section", "retailers_twists_modal_text");
    register_setting("section", "retailers_twists_modal_button_text");
}
add_action("admin_init", "display_theme_panel_fields");

add_shortcode('insert_template', function ($attrs) {
    extract($attrs);
    ob_start();

    require get_stylesheet_directory() . '/' . $attrs['template'];

    return ob_get_clean();

});

add_shortcode('hello_bar_top', function () {
        return '';
});

add_shortcode('hello_bar', function ($attrs) {
    ob_start();

    //$attrs = shortcode_atts($attrs);
    
    $template = !empty($attrs['template']) ? $attrs['template'] : 'default.php';

    require get_stylesheet_directory() . '/promotion-bar/' . $template;

    return ob_get_clean();

});

function before_body_start ($post) {
    if ( has_shortcode( $post->post_content, 'hello_bar_top' ) ) {
        $pattern = get_shortcode_regex();
        preg_match('/'.$pattern.'/s', $post->post_content, $matches);
        if (is_array($matches) && $matches[2] == 'hello_bar_top') {
            $shortcode = '[hello_bar ' . $matches[3] . ']';
            
            echo do_shortcode($shortcode);
        }
    }
}

function addHttp($url) {
    if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
        $url = "http://" . $url;
    }
    return $url;
}

function get_excerpt_by_id($post_id){
    $the_post = get_post($post_id); //Gets post ID
    $the_excerpt = ($the_post ? $the_post->post_content : null); //Gets post_content to be used as a basis for the excerpt
    $excerpt_length = 35; //Sets excerpt length by word count
    $the_excerpt = strip_tags(strip_shortcodes($the_excerpt)); //Strips tags and images
    $words = explode(' ', $the_excerpt, $excerpt_length + 1);

    if(count($words) > $excerpt_length) :
        array_pop($words);
        array_push($words, '…');
        $the_excerpt = implode(' ', $words);
    endif;

    return $the_excerpt;
}




// Add filter to check if any forms have a chained select
add_filter( 'gform_pre_render', 'check_chainedselect' );
add_filter( 'gform_pre_validation', 'check_chainedselect' );
add_filter( 'gform_admin_pre_render', 'check_chainedselect' );
add_filter( 'gform_pre_submission_filter', 'check_chainedselect' );

add_action( 'gform_chained_selects_input_choices', 'custom_check', 10, 5 );
add_action( 'gform_chained_selects_input_choices_23_8_3', 'add_other_choise_3', 10, 5 );
add_action( 'gform_chained_selects_input_choices_23_8_4', 'add_other_choise_4', 10, 5 );
//assumes form id 221
add_filter( 'gform_pre_render_23', 'set_conditional_logic' );
add_filter( 'gform_pre_validation_23', 'set_conditional_logic' );
add_filter( 'gform_pre_submission_filter_23', 'set_conditional_logic' );
add_filter( 'gform_admin_pre_render_23', 'set_conditional_logic' );

function set_conditional_logic( $form ) {
    foreach ( $form['fields'] as &$field ) {
        if ( $field->id == 13 ) {
            $field->conditionalLogic =
                array(
                    'actionType' => 'show',
                    'logicType' => 'any',
                    'rules' => [
                        [
                            'fieldId' => 8.3, 'operator' => 'is', 'value' => 'other'
                        ],
                        [
                            'fieldId' => 8.4, 'operator' => 'is', 'value' => 'other'
                        ]
                    ]
                );
        }
    }
    return $form;
}
//add_filter( 'gform_chained_selects_input_choices', 'custom_select_field', 10, 5 );
//add_filter( 'gform_pre_validation', 'custom_check' );
//add_filter( 'gform_admin_pre_render', 'custom_check', 10, 5 );
//add_filter( 'gform_pre_submission_filter', 'custom_check', 10, 5 );

function add_other_choise_3($input_choices, $form_id, $field, $input_id, $chain_value) {
    $input_choices[] = [
        'text'       => 'Other',
        'value'      => 'other',
        'isSelected' => false
    ];
    
    return $input_choices;
}
function add_other_choise_4($input_choices, $form_id, $field, $input_id, $chain_value) {
    if ($chain_value['8.3'] == 'other') {
        $matressesCategory = get_category_by_slug('beds');
        $matresses = get_posts([
            'category' => $matressesCategory->cat_ID, 
            'post_status'   => 'publish', 
            'posts_per_page' => -1
        ]);
        
        foreach ($matresses as $matress) {
            $input_choices[] = [
                'text'       => $matress->post_title,
                'value'      => $matress->post_title,
                'isSelected' => false
            ];
        }
        
    }
    $input_choices[] = [
        'text'       => 'Other',
        'value'      => 'other',
        'isSelected' => false
    ];
    
    return $input_choices;
}

function get_needed_choices($items, $level, $names) {
    foreach ($items as $key => $item) {
        if (!empty($names[$level]) && !in_array($item['text'], $names[$level])) {
            unset($items[$key]);
        }
    }
    
    return $items;
}

function custom_check( $input_choices, $form_id, $field, $input_id, $chain_value ) {

    global $wpdb;
    
    $filteredChoices = $input_choices;
    $filteredNames = [];
    
    if (!is_null($field) && $field->type == 'chainedselect') {

        $sql = "SELECT field_id, `preset` from {$wpdb->prefix}od_gf_filters WHERE field_type = %s AND form_id = %d";
        $sql = $wpdb->prepare($sql, $field->type, $form_id);
        $results = $wpdb->get_results($sql);

        // For Product Registration
        if( $form_id == 23){ //Form ID

            $path = ABSPATH.'wp-content/uploads/wp_ranges_export.csv';

            $arr_presets = [];
            if($field->type == "chainedselect"){

                if(empty($arr_presets)){
                    foreach($results as $value){
                        $arr_presets[$value->field_id] = $value->preset;
                    }
                }

                switch ($field->adminLabel) {
                    case 'chained_range_select':

                        $import = [];
                        $field->inputs = [];
                        $field->choices = [];

                        $import = import_csv_choices($path, $field, $arr_presets);

                        $handle = fopen( $path, 'r+' );
                        $stats = fstat( $handle );
                        fclose( $handle );

                        $import_file_info = array();

                        $import_file_info['gfcsFile'] = array(
                            'dateUploaded' => time(),
                            'name' => basename($path),
                            'size' => $stats['size'],
                            'type' => 'text/csv',
                            'isFromFilter' => true
                        );

                        $field->inputs = $import['inputs'];
                        $field->choices = $import['choices'];
                        $field->gfcsFile =  $import_file_info['gfcsFile'];

                        break;

                    default:

                        break;
                }

            }

            $choices_value = [];
            $i = 0;
            foreach ($chain_value as $value){
                if(!empty($value)) {
                    $choices_value[$i] = $value;
                }
                $i++;
            }

            $data = [];

            $i = 0;
            $count = count($choices_value);
            foreach ($choices_value as $value){
                switch ($i){
                    case 0:
                        foreach ($field->choices as $arr){
                            if($arr['text'] === $value){
                                $data[1] = $arr;
                                break;
                            }
                        }
                        break;
                    case 1:
                    case 2:
                    case 3:
                        foreach ($data[$i]['choices'] as $arr){
                            if($arr['text'] == $value){
                                $data[$i+1] = $arr;
                                break;
                            }
                        }
                        break;
                }
                $i++;
            }

            switch ($count){
                case 1: return $data[1]['choices']; break;
                case 2: return $data[2]['choices']; break;
                case 3: return $data[3]['choices']; break;
                case 4: return $data[4]['choices']; break;
            }

        }

        if (empty($field->inputs)) {
            return $input_choices;
        }

        foreach ($field->inputs as $key => $inputField) {

            foreach($results as $value){
                if($inputField['id'] == $value->field_id) {
                    $inputField['name'] = $value->preset;
                }
            }

            if ($inputField['id'] == $input_id && !empty($inputField['name']))  {
                $filteredNames = explode(',', $inputField['name']);

            }

        }
        if (!empty($filteredNames)) {
            foreach ($filteredChoices as $key => $item) {
                if (!in_array($item['text'], $filteredNames)) {
                    unset($filteredChoices[$key]);
                }
            }
        }
    }

    return array_values($filteredChoices);
}

// Check if form has chained select
function check_chainedselect( $form ){

    global $wpdb;

    $arr_presets = array();

    if(isset($_POST['gform_meta'])) {

        $arr_field_id = array();
        $gform_markup = stripslashes($_POST['gform_meta']);
        $gform_obj = json_decode($gform_markup);
        $gform_array = json_decode(json_encode($gform_obj),TRUE);

        //var_export($gform_array['fields'][3]);

        foreach($gform_array['fields'] as $g_field){

            if($g_field['type'] == "chainedselect" && $g_field['adminLabel'] == "chained_range_select"){

                foreach($g_field['inputs'] as $g_input){

                    $arr_field_id[] = $g_input['id'];

                    $arr_presets["{$g_input['id']}"] = $g_input['name'];

                    // Update presets

                    $sql = "INSERT INTO {$wpdb->prefix}od_gf_filters (form_id, field_type, field_id, `preset`) VALUES (%d,%s,%s,%s) ON DUPLICATE KEY UPDATE `field_type` = %s, `preset` = %s";

                    $sql = $wpdb->prepare($sql, $form['id'],  $g_field['type'], $g_input['id'], $g_input['name'], $g_field['type'], $g_input['name']);

                    $wpdb->query($sql);

                }

                $id_str = implode(",", $arr_field_id);

                // Clean up
                if(!empty($arr_field_id)){
                    $sql = "DELETE FROM {$wpdb->prefix}od_gf_filters WHERE form_id = %d AND field_id NOT IN ({$id_str})";

                    $sql = $wpdb->prepare($sql, $form['id']);

                    $wpdb->query($sql);
                }


            }

        }
    }

//    var_export($arr_presets);

    if ( !defined('ABSPATH') ){
        define('ABSPATH', dirname(__FILE__) . '/');
    }

    $import = array();

    $path = ABSPATH.'wp-content/uploads/wp_ranges_export.csv';

    generate_csv($path);

    $handle = fopen( $path, 'r+' );
    $stats = fstat( $handle );
    fclose( $handle );

    $import_file_info = array();

    $import_file_info['gfcsFile'] = array(
        'dateUploaded' => time(),
        'name' => basename($path),
        'size' => $stats['size'],
        'type' => 'text/csv',
        'isFromFilter' => true
    );

    foreach ( $form['fields'] as $field ) {
       
        if($field->type == "chainedselect"){

            if(empty($arr_presets)){

                $sql = "SELECT field_id, `preset` from {$wpdb->prefix}od_gf_filters WHERE field_type = %s AND form_id = %d";
                $sql = $wpdb->prepare($sql, $field->type, $form['id']);
                $results = $wpdb->get_results($sql);

                foreach($results as $value){
                    $arr_presets[$value->field_id] = $value->preset;
                }

            }

            switch ($field->adminLabel) {
                case 'chained_range_select':

                    $import = [];
                    $field->inputs = [];
                    $field->choices = [];
                    
                    $import = import_csv_choices($path, $field, $arr_presets);
                    $field->inputs = $import['inputs'];
                    $field->choices = $import['choices'];
                    $field->gfcsFile = $import_file_info['gfcsFile'];

                    break;
                
                default:

                    break;
            }

        }

    }


    return $form;

}

function import_csv_choices( $path, $field, $arr_presets) {

    $choices = array();
    $inputs = array();
    $first_key = 0;

    $handle = fopen( $path, 'r' );
    if( $handle !== false ) {

        $k = 1;

        while (($row = fgetcsv($handle, 1000, ',')) !== false) {

            // filter out empty rows
            $row = array_filter($row);
            if (empty($row)) {
                continue;
            }

            // save the headers as inputs
            if (empty($inputs)) {
                $i = 1;
                $j = 0;
                foreach ($row as $index => $item) {
                    if ($i % 10 == 0) {
                        $i++;
                    }

                    if ($i == 1) {

                        $first_key = $field->id . '.' . $i;

                    }

                    //Debug: Nikolai: Field Name


                    $inputs[] = array(
                        'id' => $field->id . '.' . $i,
                        'label' => $item,
                        'name' => (isset($field->inputs[$j]['name']) ? $field->inputs[$j]['name'] : (array_key_exists("{$field->id}.{$i}", $arr_presets)) ? $arr_presets["{$field->id}.{$i}"] : "")
                    );
                    $i++;
                    $j++;

                }
                continue;
            }

            $parent = null;

            foreach ($row as $item) {


                if ($parent === null) {
                    $parent = &$choices;
                }

                if (!isset($parent[$item])) {
                    $item = sanitize_csv_choice_value($item);

                    //Debug: Nikolai: Field Name

                    $sel = in_array($item, $arr_presets);
                    $parent[$item] = array(
                        'text' => $item,
                        'value' => $item,
                        'isSelected' => false,
                        'choices' => array()
                    );

//                        break;

                }


                $parent = &$parent[$item]['choices'];


            }

        }

        fclose($handle);
    }



    // convert associative array to numeric indexes
    csv_array_values_recursive( $choices );

    return compact('inputs','choices' );
}

function sanitize_csv_choice_value( $value ) {
    $allowed_protocols = wp_allowed_protocols();
    $value = wp_kses_no_null( $value, array( 'slash_zero' => 'keep' ) );
    $value = wp_kses_hook( $value, 'post', $allowed_protocols );
    $value = wp_kses_split( $value, 'post', $allowed_protocols );
    return $value;
}

function csv_array_values_recursive( &$choices, $prop = 'choices' ) {

    $choices = array_values( $choices );

    for( $i = 0; $i <= count( $choices ); $i++ ) {
        if( ! empty( $choices[ $i ][ $prop ] ) ) {
            $choices[ $i ][ $prop ] = csv_array_values_recursive( $choices[ $i ][ $prop ], $prop );
        }
    }

    return $choices;
}

function generate_csv($fileName){

    $rows = get_chained_select_data('csv');

    //Get the column names.
    $columnNames = array();
    if(!empty($rows)){
        //We only need to loop through the first row of our result
        //in order to collate the column names.
        $firstRow = $rows[0];
        foreach($firstRow as $colName => $val){
            $columnNames[] = $colName;
        }
    }

    if(!file_exists($fileName)){
        //Create an empty file if it doesn't exist
        file_put_contents($fileName, '');
    }
     
    //Open up a file pointer
    $fp = fopen($fileName, 'w');
     
    //Start off by writing the column names to the file.
    fputcsv($fp, $columnNames);
     
    //Then, loop through the rows and write them to the CSV file.
    /*foreach ($rows as $row) {
        //fputcsv($fp, $row);
    }*/
     
    //Close the file pointer.
    fclose($fp);

}

function get_chained_select_data($select_list = 'all', $region = '', $retailer = '', $store = '', $range = '') {


    // Register wp_query object 
    global $wpdb;

    $results = array();

    switch ($select_list) {

        case 'region':
            $qry_chained = "SELECT pm1.meta_value as Region
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_status = 'publish'
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            GROUP BY Region 
            ORDER BY Region";
            $results = $wpdb->get_results($qry_chained);
            break;

        case 'retailer':
            $qry_chained = "SELECT p2.post_title AS Retailer
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_status = 'publish'
            AND pm1.meta_value = %s
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            GROUP BY Retailer 
            ORDER BY Retailer";

            $qry_chained = $wpdb->prepare($qry_chained, trim($region));
            $results = $wpdb->get_results($qry_chained);
            break;

        case 'store':
            $qry_chained = "SELECT ".$wpdb->prefix."posts.post_title as Store
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_status = 'publish'
            AND pm1.meta_value = %s
            AND p2.post_title = %s
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            GROUP BY Store 
            ORDER BY Store";

            $qry_chained = $wpdb->prepare($qry_chained, trim($region), trim($retailer));
            $results = $wpdb->get_results($qry_chained);
            break;

        case 'range':
            $qry_chained = "SELECT pm3.meta_value as `Range`
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_status = 'publish'
            AND pm1.meta_value = %s
            AND p2.post_title = %s
            AND ".$wpdb->prefix."posts.post_title = %s
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            GROUP BY Range 
            ORDER BY Range";

            $qry_chained = $wpdb->prepare($qry_chained, trim($region), trim($retailer), trim($store));
            $results = $wpdb->get_results($qry_chained);
            break;

        case 'normalize':
            $qry_chained = "SELECT pm1.meta_value as Region, pm1.post_id as region_id, p2.post_title AS Retailer, p2.ID as retailer_id, wp_posts.post_title as Store, wp_posts.ID as store_id, pm3.meta_value as `Range`
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_type LIKE '%store%' 
            AND ".$wpdb->prefix."posts.post_status = 'publish'
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            ORDER BY Region, Retailer, Store, `Range`";
            $results = $wpdb->get_results($qry_chained);
            break;

        case 'csv':

            $region_where = [];
            $where = "";
            if(get_the_ID() == 11865){
                $params = GFAPI::get_field( 27, '7.4' );
                $nameInput = trim($params->inputs[0]['name']);
                if (!empty($nameInput)) {
                    $arr = explode(',', $nameInput);
                    foreach ($arr as $item){
                        $region_where[] = "'".$item."'";
                    }
                    if (!empty($region_where)) {
                    $arr = implode(',', $region_where);
                    $where = " AND pm1.meta_value IN (".$arr.") ";
                    }
                }
            }

            $qry_chained = "SELECT pm1.meta_value as Region, pm3.meta_value AS Retailer, wp_posts.post_title as Store, rng.`Range` as `Range`
            FROM ".$wpdb->prefix."posts
            INNER JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer')
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            INNER JOIN ".$wpdb->prefix."postmeta AS pm3 ON (p2.ID = pm3.post_id AND pm3.meta_key='display_name')
            INNER JOIN ".$wpdb->prefix."ranges AS rng ON (rng.retailer_id = pm2.meta_value)
            WHERE ".$wpdb->prefix."posts.post_type LIKE '%store%'
            AND ".$wpdb->prefix."posts.post_status = 'publish'
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm2.meta_key = 'display_name'))
            ".$where."
            ORDER BY Region, Retailer, Store, `Range`";
            $results = $wpdb->get_results($qry_chained, ARRAY_A);
            break;

        default:
            $qry_chained = "SELECT pm1.meta_value as Region, p2.post_title AS Retailer, wp_posts.post_title as Store, pm3.meta_value as `Range`
            FROM ".$wpdb->prefix."posts
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm1 ON (".$wpdb->prefix."posts.ID = pm1.post_id AND pm1.meta_key='wpsl_state')
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (".$wpdb->prefix."posts.ID = pm2.post_id AND pm2.meta_key='retailer') 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm2.meta_value)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm3 ON (pm2.meta_value = pm3.post_id AND pm3.meta_key='range')
            WHERE ".$wpdb->prefix."posts.post_type LIKE '%store%' 
            AND ".$wpdb->prefix."posts.post_status = 'publish'
            AND ((pm1.meta_key = 'wpsl_state') OR (pm2.meta_key = 'retailer') OR (pm3.meta_key = 'range')) 
            ORDER BY Region, Retailer, Store, `Range`";
            $results = $wpdb->get_results($qry_chained);
            break;

    }


    if(count($results) > 0){
        return $results;
    }else{
        return false;
    }

}

// Cascade ACF fields up and down to keep parents and children in-sync and allow admin from both 
function my_acf_save_post( $post_id ) {

    if(empty($_POST['acf'])){
        return ;
    }

    // Cascade retailer down to store(s) - field_59eee961e54be
    if(isset($_POST['acf'][field_59eee961e54be])){
        cascade_acf_array($_POST['acf'][field_59eee961e54be], "retailer", $post_id, "field_59805f195dbe3");
    }

    // Reverse cascade store up to retailer - field_59805f195dbe3
    if(isset($_POST['acf'][field_59805f195dbe3])){
        cascade_acf_value($_POST['acf'][field_59805f195dbe3], "stores", $post_id, "field_59eee961e54be", "retailer");
    }

    // Cascade ranges down to store(s) - field_599d6cb30a7fa
    if(isset($_POST['acf'][field_599d6cb30a7fa]) && isset($_POST['acf'][field_59eee961e54be])){
        cascade_acf_array_to_array($_POST['acf'][field_599d6cb30a7fa], "ranges", $post_id, "field_598d8b2ac2ff0", "stores", $_POST['acf'][field_59eee961e54be], true);
    }

    // Reverse cascade ranges up to retailer - field_598d8b2ac2ff0
    if(isset($_POST['acf'][field_598d8b2ac2ff0]) && isset($_POST['acf'][field_59805f195dbe3])){
        cascade_acf_array_to_array($_POST['acf'][field_598d8b2ac2ff0], "range", $post_id, "field_599d6cb30a7fa", "retailer", $_POST['acf'][field_59805f195dbe3], true);
    }

    // Cascade sub ranges down to store(s) - field_59eee8e6bb7c0
    if(isset($_POST['acf'][field_59eee8e6bb7c0]) && isset($_POST['fields'][field_59eee961e54be])){
        cascade_acf_array_to_array($_POST['acf'][field_59eee8e6bb7c0], "sub_ranges", $post_id, "field_598d8dd4ff153", "stores", $_POST['acf'][field_59eee961e54be]);
    }

    // Reverse cascade sub ranges up to retailer - field_598d8dd4ff153
    if(isset($_POST['acf'][field_598d8dd4ff153]) && isset($_POST['acf'][field_59805f195dbe3])){
        cascade_acf_array_to_array($_POST['fields'][field_598d8dd4ff153], "sub_range", $post_id, "field_59eee8e6bb7c0", "retailer", $_POST['acf'][field_59805f195dbe3]);
    }

    if( isset($_POST['acf']['field_5be0214c15124']) && isset($_POST['acf']['field_59eee961e54be']) && !empty($_POST['acf']['field_59eee961e54be']) ){


        $stories = $_POST['acf']['field_59eee961e54be'];
        $collections = $_POST['acf']['field_5be0214c15124'];

        foreach ($stories as $store){
            if(!empty($collections)){
                $result = update_post_meta( $store, 'collections', $collections );
                $result = update_post_meta( $store, '_collections', 'field_5be021d227760' );
            }
            else{
                $result = delete_post_meta( $store, 'collections');
                $result = delete_post_meta( $store, '_collections');
            }
        }
    }


    // OLD ACF PLUGIN FOR STAGING
    if( isset($_POST['acf']['field_5bd6f38dfa519']) && isset($_POST['acf']['field_59eee961e54be']) && !empty($_POST['acf']['field_59eee961e54be']) ){

        $stories = $_POST['acf']['field_59eee961e54be'];
        $collections = $_POST['acf']['field_5bd6f38dfa519'];

        foreach ($stories as $store){
            if(!empty($collections)){
                $result = update_post_meta( $store, 'collections', $collections );
                $result = update_post_meta( $store, '_collections', 'field_5bd856c97161a' );
            }
            else{
                $result = delete_post_meta( $store, 'collections');
                $result = delete_post_meta( $store, '_collections');
            }
        }
    }
}

// This action is processes the hook before it is saved to the DB
add_action('save_post', 'my_acf_save_post', 1);

function cascade_acf_array($acf_array, $meta_key, $post_id, $field, $lookup_field = "", $lookup_value = "", $normalise_range = false){

    global $wpdb;

    foreach($acf_array as $acf_val) {

        // try and insert, if that fails update instead
        if(add_post_meta( $acf_val, $meta_key, $post_id, true ) === false && add_post_meta( $acf_val, "_".$meta_key, $field, true ) === false) {

            // Cascade data
            $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %d WHERE post_id = %d AND meta_key = %s";
            $sql = $wpdb->prepare($sql, $post_id, (int)$acf_val, $meta_key);
            $wpdb->query($sql);

        }

    }
}

/**
 * @param $acf_value
 * @param $meta_key
 * @param $post_id
 * @param $field
 * @param $lookup_value
 */
function cascade_acf_value($acf_value, $meta_key, $post_id, $field, $lookup_value){

    global $wpdb;
    $arr_meta = array();

    // Clean up
    $sql = "SELECT pm.meta_value AS Retailer, pm2.meta_value AS Stores from {$wpdb->prefix}postmeta AS pm
            LEFT JOIN ".$wpdb->prefix."posts AS p1 ON (p1.ID = pm.post_id)
            LEFT JOIN ".$wpdb->prefix."postmeta AS pm2 ON (pm.meta_value = pm2.post_id AND pm2.meta_key = %s) 
            LEFT JOIN ".$wpdb->prefix."posts AS p2 ON (p2.ID = pm.meta_value)
            WHERE pm.meta_key = %s AND pm.post_id = %d";
    $sql = $wpdb->prepare($sql, $meta_key, "retailer", $post_id);
    $results = $wpdb->get_results($sql);


    foreach($results as $m_v){

        // Skip if the retailer is the same as before
        if($m_v->Retailer == $acf_value){
            continue;
        }

        if(!empty($m_v->Stores)){

            // Remove from array of post ids
            $arr_meta = maybe_unserialize($m_v->Stores);

            if(!is_array($arr_meta)) {
                $arr_meta = array();
            }

            if(in_array($post_id, $arr_meta)) {

                $store_key = array_search($post_id, $arr_meta);
                unset($arr_meta[$store_key]);
                $arr_meta = array_unique($arr_meta);
                $arr_meta = array_values($arr_meta);
                $ser_meta = serialize($arr_meta);

                // try and insert, if that fails update instead
                if(add_post_meta($m_v->Retailer, $meta_key, $ser_meta, true) === false && add_post_meta($m_v->Retailer, "_".$meta_key, $field, true ) === false) {


                    $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %s WHERE post_id = %d AND meta_key = %s";
                    $sql = $wpdb->prepare($sql, $ser_meta, $m_v->Retailer, $meta_key);
                    $wpdb->query($sql);


                }


            }else{

                // It isn't in the array of stores so skip
                continue;

            }

        }else{

            // The isn't even an array of store so skip
            continue;

        }

    }

    // Get dependancies
    $arr_meta = array();
    $sql = "SELECT meta_value from {$wpdb->prefix}postmeta WHERE meta_key = %s AND post_id = %d";
    $sql = $wpdb->prepare($sql, $meta_key, $acf_value);
    $results = $wpdb->get_results($sql);

    foreach($results as $m_v){

        if(!empty($m_v->meta_value)){

            // Add to array of post ids
            $arr_meta = maybe_unserialize($m_v->meta_value);

            if(!is_array($arr_meta)) {
                $arr_meta = array();
            }

            $arr_meta[] = $post_id;
            $arr_meta = array_unique($arr_meta);
            $ser_meta = serialize($arr_meta);

        }else{

            // Create array of post ids
            $arr_meta[] = $post_id;
            $arr_meta = array_unique($arr_meta);
            $ser_meta = serialize($arr_meta);

        }

    }

    // Cascade data to correct retailer

    // try and insert, if that fails update instead
    if(add_post_meta($acf_value, $meta_key, $ser_meta, true ) === false && add_post_meta( $acf_value, "_".$meta_key, $field, true ) === false) {

        $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %s WHERE post_id = %d AND meta_key = %s";
        $sql = $wpdb->prepare($sql, $ser_meta, $acf_value, $meta_key);
        $wpdb->query($sql);


    }


}

function cascade_acf_array_to_array($acf_array, $meta_key, $post_id, $field, $lookup_field = "", $lookup_value = "", $normalise_range = false){

    $acf_array = array_values($acf_array);
    $ser_meta = serialize($acf_array);

    switch ($lookup_field){
        case 'stores':

            foreach($lookup_value as $store){
                cascade_acf_update($meta_key, $field, $store, $ser_meta);
            }

            break;

        case 'retailer':

            cascade_acf_update($meta_key, $field, $lookup_value, $ser_meta);

            break;
    }

    if($normalise_range){
        $_SESSION['normalize_ranges'] = true;
    }


}

function cascade_acf_update($meta_key, $field, $lookup_value, $ser_meta){

    global $wpdb;

    // try and insert, if that fails update instead
    if(add_post_meta( $lookup_value, $meta_key, $ser_meta, true ) === false && add_post_meta( $lookup_value, "_".$meta_key, $field, true ) === false) {

        // Cascade data
        $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = '{$ser_meta}' WHERE post_id = %d AND meta_key = %s";
        $sql = $wpdb->prepare($sql, $lookup_value, $meta_key);
        $wpdb->query($sql);

    }
}

//if(!isset($_SESSION['bulk_sync'])) {
//    $_SESSION['bulk_sync'] = true;
//}
//
//if(isset($_SESSION['bulk_sync'])) {
//    if ($_SESSION['bulk_sync']) {
//        bulk_sync_acf();
//        $_SESSION['bulk_sync'] = false;
//    }
//}

function bulk_sync_acf(){

    global $wpdb;

    /**
     * The scenarios are: (may be different for each scenario)
     * 1) Cascade retailer down to store(s) - field_59eee961e54be = stores is master
     * 2) Reverse cascade store up to retailer - field_59805f195dbe3 = stores is master
     * 3) Cascade ranges down to store(s) - field_599d6cb30a7fa = retailer is master
     * 4) Reverse cascade ranges up to retailer - field_598d8b2ac2ff0 = retailer is master
     * 5) Cascade sub ranges down to store(s) - field_59eee8e6bb7c0 = store is master
     * 6) Reverse cascade sub ranges up to retailer - field_598d8dd4ff153 = store is master
     **/

    // Get retailer id from stores

    // Get dependancies
    $sql = "SELECT pm2.meta_value as Stores, pm3.meta_value as `Range`, pm4.meta_value as Sub_Range, pm.post_id, pm.meta_value as Retailer from {$wpdb->prefix}postmeta as pm
            LEFT JOIN {$wpdb->prefix}posts as p ON p.ID = pm.meta_value
            LEFT JOIN {$wpdb->prefix}postmeta as pm2 ON (pm2.post_id = pm.meta_value AND pm2.meta_key='stores')
            LEFT JOIN {$wpdb->prefix}postmeta as pm3 ON (pm3.post_id = pm.post_id AND pm3.meta_key='ranges')
            LEFT JOIN {$wpdb->prefix}postmeta as pm4 ON (pm4.post_id = pm.post_id AND pm4.meta_key='sub_ranges')
            WHERE pm.meta_key = %s AND pm3.meta_value IS NOT NULL AND pm3.meta_value <> ''";

//    $sql = "SELECT pm.meta_value as Retailer from {$wpdb->prefix}postmeta as pm
//            WHERE pm.meta_key = %s";

    $sql = $wpdb->prepare($sql, "retailer");
    $results = $wpdb->get_results($sql);

//    foreach($results as $row){
//
//        $sql = "SELECT p.ID as Retailer, pm2.meta_value as Stores, pm.post_id from {$wpdb->prefix}postmeta as pm
//            LEFT JOIN {$wpdb->prefix}posts as p ON p.ID = pm.meta_value
//            LEFT JOIN {$wpdb->prefix}postmeta as pm2 ON (pm2.post_id = pm.meta_value AND pm2.meta_key='stores')
//            WHERE pm.meta_key = %s AND pm2.post_id = %d";
//
//        $sql = $wpdb->prepare($sql, "retailer", $row->Retailer);
//        $store_res = $wpdb->get_results($sql);
//
//        foreach ($store_res as $retailer) {
//
////            // Add to array of post ids
////            $arr_meta = array();
////            $arr_meta = maybe_unserialize($retailer->Stores);
//
////            if(!is_array($arr_meta)) {
//                $arr_meta = array();
////            }
//
//            foreach ($store_res as $store) {
//
//                $arr_meta[] = $store->post_id;
//
//            }
//
//            $arr_meta = array_unique($arr_meta);
//            $ser_meta = serialize($arr_meta);
//
//            // try and insert stores, if that fails update instead
//            if(add_post_meta( $retailer->Retailer, "stores", $ser_meta, true ) === false && add_post_meta( $retailer->Retailer, "_stores", "field_59eee961e54be", true ) === false) {
//
//                // Cascade data
//                $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %s WHERE  post_id = %d AND meta_key = 'stores'";
//                $sql = $wpdb->prepare($sql, $ser_meta, $retailer->Retailer);
//                $wpdb->query($sql);
//
//            }
//
//        }
//
//
//    }

foreach($results as $store) {

        // try and insert ranges, if that fails update instead
        if(add_post_meta( $store->Retailer, "range", $store->Range, true ) === false && add_post_meta( $store->Retailer, "_range", "field_599d6cb30a7fa", true ) === false) {

            // Cascade data
            $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %s WHERE post_id = %d AND meta_key = 'range'";
            $sql = $wpdb->prepare($sql, $store->Range, $store->Retailer);
            $wpdb->query($sql);

        }

//        // try and insert sub ranges, if that fails update instead
//        if(add_post_meta( $store->Retailer, "sub_range", $store->Sub_Range, true ) === false && add_post_meta( $store->Retailer, "_sub_range", "field_59eee8e6bb7c0", true ) === false) {
//
//            // Cascade data
//            $sql = "UPDATE {$wpdb->prefix}postmeta SET meta_value = %s WHERE post_id = %d AND meta_key = 'sub_range'";
//            $sql = $wpdb->prepare($sql, $store->Sub_Range, $store->Retailer);
//            $wpdb->query($sql);
//
//        }

    }

}

if(isset($_SESSION['normalize_ranges'])){
    normalize_ranges();
    unset($_SESSION['normalize_ranges']);
}

// Normalize ranges in the database so they can be queried directly
function normalize_ranges() {

    // Register wp_query object 
    global $wpdb;

    $sql = "";
    $query = "";
    $ranges = get_chained_select_data('normalize');

    if($ranges !== false && is_array($ranges)){

        $sql = "TRUNCATE TABLE {$wpdb->prefix}ranges;";
        $wpdb->query($sql);

        foreach( $ranges as $range ) {

            $arr_range = maybe_unserialize($range->Range);
            if(!is_array($arr_range)) {
                $arr_meta = array();
            }

            foreach($arr_range as $product){

                $query = "SELECT post_title FROM {$wpdb->prefix}posts WHERE ID = %d";
                $query = $wpdb->prepare($query, $product);

                $results = $wpdb->get_results($query);

                foreach($results as $range_title){

                    $sql = "INSERT INTO {$wpdb->prefix}ranges (retailer_id, region_id, store_id, range_id, `Range`) VALUES (%d,%d,%d,%d,%s) ON DUPLICATE KEY UPDATE `Range` = %s, store_id = %d, region_id = %d";

                    $sql = $wpdb->prepare($sql, $range->retailer_id, $range->region_id, $range->store_id, $product, $range_title->post_title, $range_title->post_title, $range->store_id, $range->region_id);

                    $wpdb->query($sql);

                }


            }

        }
    }

}

function remove_category( $string, $type )
{ 
        if ( $type == 'single' && ( strpos( $string, 'products/beds' ) !== false ) )
        {
            $url_without_category = str_replace( "/products/beds/", "/beds/", $string );
            return trailingslashit( $url_without_category );
        }
        
        if ( $type == 'single' && ( strpos( $string, '-category/' ) !== false ) )
        {
            $url_without_category = str_replace( "-category/", "/", $string );
            return trailingslashit( $url_without_category );
        }
        
         if ( $type == 'single' && ( strpos( $string, 'sleep-collections/' ) !== false ) )
        {
            $url_without_category = preg_replace( "/sleep-collections\/([a-z0-9-]+)\/([a-z0-9-]+)/", "bedding/$2", $string );
            return trailingslashit( $url_without_category );
        }
        
    return $string;
}
 
add_filter( 'user_trailingslashit', 'remove_category', 100, 2);
add_filter( 'the_category', function ( $the_link_list, $category, $cat_parents )
{
    
    $the_link_list = str_replace( '-category', '', $the_link_list );

    return $the_link_list;
}, 10, 3 );

/**
 * Changes the default output of Yosta breadcrumbs.
 *
 * @since 1.0.0
 */

add_filter( 'wpseo_breadcrumb_links', 'custom_wpseo_breadcrumb_links' );

function custom_wpseo_breadcrumb_links( $links ) {
    global $post;

    foreach ($links as $key => $link){
        if(isset($link['term']) && $link['term']->slug == 'cooling' ){
            unset($links[$key]);
        }
    }

    return $links;
}

function custom_wpseo_breadcrumb_output( $output ){
  
    $output = str_replace( '-category', '', $output );
    
    $output = preg_replace('/<span rel="v:child" typeof="v:Breadcrumb"><a href=".*?\/products" rel="v:url" property="v:title">Products<\/a> <span class="_breadcrumbs-arrow">&gt;<\/span> /i', '<span rel="v:child" typeof="v:Breadcrumb">', $output);
    
    $output = str_replace( '/products/', '/', $output );

    return $output;
}

add_filter( 'wpseo_breadcrumb_output', 'custom_wpseo_breadcrumb_output' );

add_filter( 'gform_ajax_spinner_url', 'tgm_io_custom_gforms_spinner' );
/**
 * Changes the default Gravity Forms AJAX spinner.
 *
 * @since 1.0.0
 *
 * @param string $src  The default spinner URL.
 * @return string $src The new spinner URL.
 */
function tgm_io_custom_gforms_spinner( $src ) {

    return get_stylesheet_directory_uri() . '/img/ajax-loader.gif';
    
}

function update_entry_retailer() {
    try {
        
        $retailer = trim( $_POST['retailer'] );
        $entryId = intval($_POST['entity_id']);
        $entry = GFAPI::get_entry($entryId );
        if (!empty($retailer) && !empty($entryId) && !empty($entry) && empty($entry->errors)) {
            $id = get_option('gform_retailer_field_id');
            $id = !empty($id) ? $id : 29;
            $entry[$id]  = $retailer;
            GFAPI::update_entry( $entry, $entryId );
        }
    } catch (Exception $e) {}
    wp_die();
}

add_action( 'wp_ajax_update_entry_retailer', 'update_entry_retailer' );
add_action( 'wp_ajax_nopriv_update_entry_retailer', 'update_entry_retailer' );


function get_retailers_list() {
    $retailers = [];
    try {
        
        $retailers = wp_cache_get( 'retailers_wpsl_search' );
        if ( false === $retailers ) {
            $allRetailers = get_posts([
                'numberposts' => -1,
                'post_type' => 'wpsl_stores',
                'post_status' => 'publish'
            ]);

            if (!empty($allRetailers)) {
                foreach ($allRetailers as $retailer) {
                    $rangesIds = [];
                    $subRangesIds = [];
                    $ranges = get_field('ranges', $retailer->ID);
                    if (!empty($ranges)) {
                        $rangesIds = array_map(function($obj){return "$obj->ID";}, $ranges);
                    }
                    $subranges = get_field('sub_ranges', $retailer->ID);
                    if (!empty($subranges)) {
                        $subRangesIds = array_map(function($obj){return "$obj->ID";}, $subranges);
                    }
                    $storeRetailer = get_field('retailer', $retailer->ID);
                    $retailers[] = [
                        'id' => $retailer->ID,
                        'title' => $retailer->post_title,
                        'city' => $retailer->wpsl_city,
                        'address' => $retailer->wpsl_address,
                        'lat' => $retailer->wpsl_lat,
                        'lng' => $retailer->wpsl_lng,
                        'retailer_id' => "$storeRetailer->ID",
                        'ranges' => $rangesIds,
                        'subranges' => $subRangesIds
                    ];
                }
            }

            if (!empty($retailers)) {
                wp_cache_set( 'retailers_wpsl_search', $retailers, '', 3600);
            }
        }
    } catch (Exception $e) { }
    
    return $retailers;
}

function get_retailers_groups() {
    $retailers = [];
    try {
        
        $retailers = wp_cache_get( 'retailers_groups_wpsl_search' );
        if ( false === $retailers ) {
            
            $category = get_category_by_slug('retailer-groups');
            $allRetailers = get_posts([
                'numberposts' => -1,
                'category'   => $category->cat_ID,
                'post_status' => 'publish'
            ]);

            if (!empty($allRetailers)) {
                foreach ($allRetailers as $retailer) {
                    $retailers[] = [
                        'id' => $retailer->ID,
                        'title' => get_field('display_name', $retailer->ID)
                    ];
                }
            }

            if (!empty($retailers)) {
                wp_cache_set( 'retailers_groups_wpsl_search', $retailers, '', 3600);
            }
        }
    } catch (Exception $e) { }
    
    return $retailers;
}

//add input mask for Australian phone numbers

add_filter( 'gform_phone_formats', 'au_phone_format' );
function au_phone_format( $phone_formats ) {
    $phone_formats['au'] = array(
        'label'       => 'Australian',
        'mask'        => '(99) 9999-999?9',
        'regex'       => '/^\D?(\d{2})\D?\D?(\d{4})\D?(\d{3,4})$/',
        'instruction' => '(##) ####-####',
    );
 
    return $phone_formats;
}

// add cli command to update wpls stores

function get_attachment_url_by_slug( $slug ) {
    $args = array(
      'post_type' => 'attachment',
      'name' => sanitize_title($slug),
      'posts_per_page' => 1,
      'post_status' => 'inherit',
    );
    $_file = get_posts( $args );
    $_file = $_file ? array_pop($_file) : null;
    return $_file ? get_attached_file($_file->ID) : false;
}

function update_wpls_stores_from_csv( $args ) {
    
    $url = get_attachment_url_by_slug( $args[0] );
    $stocksFile = fopen($url, 'r');


    $header = fgetcsv($stocksFile);

    $stocks = [];

    while ($row = fgetcsv($stocksFile)) {
        $stocks[] = [
            'title'       => $row[0],
            'retailer_id' => $row[1],
            'url'         => $row[2],
            'phone'       => $row[3],
//            'fax'         => $row[6],
//            'email'       => $row[7],
            'address'     => $row[4],
            'city'        => $row[5],
            'zip'         => $row[6],
            'state'       => $row[7], 
            'country'     => $row[8], //12
//            'lat'         => $row[13],
//            'lng'         => $row[14],
        ];
    }

    $category = get_category_by_slug('retailer-groups');
    
    foreach ($stocks as $stock) {
        $currentStock = null;
        $args = array(
            'meta_query' => array(
		array(
                    'key' => 'wpsl_state',
                    'value' => trim($stock["state"], '" '),
		)
            ),
            'post_type' => 'wpsl_stores',
            'post_status' => 'any',
            'posts_per_page' => -1
        );
        $currentStocks = get_posts($args);
        
        foreach ($currentStocks as $curStock) {
            if (strtolower(trim($stock["title"])) == strtolower(trim($curStock->post_title))) {
                $currentStock = $curStock;
                break;
            }
        }
        if ($stock['retailer_id'] == 'Sleepys') {
            $stock['retailer_id'] = "Sleepy's";
        }
        $retailers = get_posts([
            'category'   => $category->cat_ID,
            'title' => $stock['retailer_id']
        ]);
        
        if (empty($retailers[0])) { 
            WP_CLI::success( 'No retailer ' . $stock['retailer_id'] );
        }
        
        if (!is_null($currentStock) ) {
            $postId = $currentStock->ID;
            WP_CLI::success( $postId );
            update_post_meta($postId, 'wpsl_url', trim($stock["url"], '" '));
            update_post_meta($postId, 'wpsl_phone', trim($stock["phone"], '" '));
//            update_post_meta($postId, 'wpsl_fax', trim($stock["fax"], '" '));
//            update_post_meta($postId, 'wpsl_email', trim($stock["email"], '" '));
            update_post_meta($postId, 'wpsl_city', trim($stock["city"], '" '));
            update_post_meta($postId, 'wpsl_zip', trim($stock["zip"], '" '));
            update_post_meta($postId, 'wpsl_state', trim($stock["state"], '" '));
            update_post_meta($postId, 'wpsl_country', trim($stock["country"], '" '));
//            update_post_meta($postId, 'wpsl_lat', trim($stock["lat"], '" '));
//            update_post_meta($postId, 'wpsl_lng', trim($stock["lng"], '" '));
            
            if (!empty($retailers[0])) {
                update_field('field_59805f195dbe3', $retailers[0]->ID, $postId);
            }
            
            
        } else {

            $postId = wp_insert_post([
                'post_type'   => 'wpsl_stores',
                "post_status" => "publish",
                "post_title"  => $stock["title"],
            ]);
            
            WP_CLI::success( 'New store' . $postId );
            $terms = get_terms( 'wpsl_store_category' );

            if ( count( $terms ) > 0 ) {
                $post_categories = [];
                foreach ($terms as $term) {
                    $post_categories[] = $term->term_id;
                }
                
                if (!empty($post_categories)) {
                    wp_set_post_categories( $postId, $post_categories);
                }
            }

            update_post_meta($postId, 'wpsl_url', trim($stock["url"], '" '));
            update_post_meta($postId, 'wpsl_phone', trim($stock["phone"], '" '));
//            update_post_meta($postId, 'wpsl_fax', trim($stock["fax"], '" '));
//            update_post_meta($postId, 'wpsl_email', trim($stock["email"], '" '));

            update_post_meta($postId, 'wpsl_address', trim($stock["address"], '" '));
            update_post_meta($postId, 'wpsl_city', trim($stock["city"], '" '));
            update_post_meta($postId, 'wpsl_zip', trim($stock["zip"], '" '));
            update_post_meta($postId, 'wpsl_state', trim($stock["state"], '" '));
            update_post_meta($postId, 'wpsl_country', trim($stock["country"], '" '));
//            update_post_meta($postId, 'wpsl_lat', trim($stock["lat"], '" '));
//            update_post_meta($postId, 'wpsl_lng', trim($stock["lng"], '" '));
            if (!empty($retailers[0])) {
                update_field('field_59805f195dbe3', $retailers[0]->ID, $postId);
            }
        }
    }
    WP_CLI::success( 'Stocks Merged' );
    
}

if ( defined('WP_CLI') && WP_CLI ) {
    WP_CLI::add_command( 'update_wpls_stores_csv', 'update_wpls_stores_from_csv' );
}

add_filter('wpsl_meta_box_fields', 'add_retailer_group_meta');


function add_retailer_group_meta($wpsl_meta_box_fields) {
    
    $wpsl_meta_box_fields[__( 'Additional Information', 'wpsl' )]['retailer'] = [
        'label' => __( 'Retailer', 'wpsl' )
    ];
    
    return $wpsl_meta_box_fields;
}

function get_wpsl_stores_metadata_custom($metadata, $object_id, $meta_key, $single){

    $meta_type = 'post';
    $meta_cache = wp_cache_get($object_id, $meta_type . '_meta');

    if ( !$meta_cache ) {
            $meta_cache = update_meta_cache( $meta_type, array( $object_id ) );
            $meta_cache = $meta_cache[$object_id];
    }
    
    if ( ! $meta_key ) {
        if (!empty($meta_cache['retailer']) && !empty($meta_cache['retailer'][0])) {
            $meta_cache['wpsl_retailer'] = [get_field('display_name', $meta_cache['retailer'][0])];
        }
            return $meta_cache;
    }

    if ( isset($meta_cache[$meta_key]) ) {
            if ( $single )
                    return maybe_unserialize( $meta_cache[$meta_key][0] );
            else
                    return array_map('maybe_unserialize', $meta_cache[$meta_key]);
    }

    if ($single)
            return '';
    else
            return array();

}

//add_filter( 'get_post_metadata', 'get_wpsl_stores_metadata_custom', 100, 4 );

function get_primary_category_name($post) {
    $categoryName = false;
    $catId = get_post_meta($post->ID, '_yoast_wpseo_primary_category',true);
    if (!empty($catId)) {
        $categoryName = get_the_category_by_ID($catId);
    }
    
    if (empty($categoryName)) {
        $term_list = wp_get_post_terms($post->ID, 'category');
        if (!empty($term_list)) {
            $category = reset($term_list);
            if (!empty($category) && !empty($category->name)) {
                $categoryName = $category->name;
            }
        }
    }
    
    return $categoryName;
}

remove_filter( 'the_content', 'wpautop' );
add_filter('tiny_mce_before_init', 'modify_valid_children', 99);
function modify_valid_children($settings){
    $settings['valid_children']="+a[div|p|ul|ol|li|h1|span|h2|h3|h4|h5|h5|h6|br]";
    $settings['wpautop'] = false;
    $settings['indent'] = true;
    $settings['tadv_noautop'] = true;

    return $settings;
}

add_filter( 'wpseo_breadcrumb_links', 'extra_bc_links', 1, 1 );

function extra_bc_links ( $crumbs )
{
    if(isset($_GET['q'])&&$_GET['q']=='/reviews'&&isset($_GET['cat_id'])){
        switch ($_GET['cat_id']){
            case 5001: $title = 'Lifestyle'; break;
            case 2001: $title = 'Chiropractic'; break;
            case 1001: $title = 'Sanctuary'; break;
        }
        $crumbs[1]['id'] = url_to_postid('reviews');
        $crumbs[2] = [
            'url' => '',
            'text' => $title,
            'allow_html' => true
        ];

        unset($crumbs[3]);
    }
    return $crumbs;
}

//add_filter('wpsl_meta_box_fields', 'add_retailer_group_meta');

//add_filter( 'get_post_metadata', 'get_wpsl_stores_metadata_custom', 100, 4 );


add_action( 'restrict_manage_posts', 'wpse45436_admin_posts_filter_restrict_manage_posts' );


// Add retailers filter to stores list in admin section
function wpse45436_admin_posts_filter_restrict_manage_posts(){

    if( ! is_admin() )
        return;

    $type = 'post';
    if (isset($_GET['post_type'])) {
        $type = $_GET['post_type'];
    }

    //only add filter to post type you want
    if ('wpsl_stores' == $type){
        //change this to the list of values you want to show
        //in 'label' => 'value' format

        $retailersGroupCategory = get_category_by_slug('retailer-groups');
        $metaQuery = [
            [
                'key'     => 'enabled',
                'value'   => true,
                'compare' => '=',
            ],
        ];



        $args = [
            'numberposts'   => -1,
            'category'      => $retailersGroupCategory->cat_ID,
            'meta_query'    => $metaQuery,
            'post_type'     => 'post',
        ];

        $retailers = get_posts($args);

        $values = [];
        foreach ($retailers as $retailer) {
            $values[$retailer->post_title] = $retailer->ID;
        }
        if (!empty($values)) {
            ?>
            <select name="retailer_group">
                <option value=""><?php _e('Filter By ', 'wose45436'); ?></option>
                <?php
                $current_v = isset($_GET['retailer_group'])? $_GET['retailer_group']:'';
                foreach ($values as $label => $value) {
                    printf
                    (
                        '<option value="%s"%s>%s</option>',
                        $value,
                        $value == $current_v? ' selected="selected"':'',
                        $label
                    );
                }
                ?>
            </select>
            <?php
        }
    }
}


add_filter( 'parse_query', 'wpse45436_posts_filter' );

function wpse45436_posts_filter( $query ){
    if( ! is_admin() )
        return;

    global $pagenow;
    $type = 'post';
    if (isset($_GET['post_type'])) {
        $type = $_GET['post_type'];
    }
    if ( 'wpsl_stores' == $type && is_admin() && $pagenow=='edit.php' && isset($_GET['retailer_group']) && $_GET['retailer_group'] != '') {
        if ($query->get('post_type') == 'wpsl_stores') {
            $query->set('meta_key', 'retailer');

            $query->set('meta_value', $_GET['retailer_group']);
        }

    }
}

add_filter('wpsl_meta_box_fields', 'add_retailer_group_meta');

function custom_retailers_link($retailers, $ID, $isMattress){
    foreach ($retailers as $retailer){
        $permalink =  $retailer['url'];
        $target = '_blank';
        if (strpos($permalink, get_home_url()) !== false) {
            $permalink = '/stockists?retailer_id=' . $retailer['title']->ID;
            $target = '';
            if ($isMattress) {
                $permalink .= '&post_id=' . $ID;
            }
        }
        echo '<a href="'.$permalink.'" class="app-button-reserve article__search-form-btn retailer-logo" data-name="'.$retailer['title']->post_name.'" target="'.$target.'">'.get_field("display_name", $retailer['title']->ID).'
             <span class="app-svg button-reserve _icon-right"></span></a>';
    }
}

function override_mce_options($initArray) {
    $opts = '*[*]';
    $initArray['valid_elements'] = $opts;
    $initArray['extended_valid_elements'] = $opts;
    return $initArray;
}
add_filter('tiny_mce_before_init', 'override_mce_options');


add_action( 'wp_enqueue_scripts', 'raptor_ajax_data', 99 );
function raptor_ajax_data(){

    wp_localize_script('main-scripts', 'raptor_ajax',
        array(
            'url' => admin_url('admin-ajax.php')
        )
    );

}

add_action('wp_enqueue_scripts', 'raptor_action_javascript');
function raptor_action_javascript() {
    wp_enqueue_script('vortex_like_or_dislike_js-ajax-custom', get_template_directory_uri() . '/js/like-or-dislike-ajax-custom.js', ['jquery'], false, true);
}

add_action('wp_ajax_raptor_action', 'raptor_action_callback');
add_action('wp_ajax_nopriv_raptor_action', 'raptor_action_callback');
function raptor_action_callback() {
    $res = [];
    if(!isset($_COOKIE['like'])){
        $res["ID"] = intval( $_POST['post'] );
        $res["positive"] = intval( $_POST['positive'] );
        if($res["positive"]){
            $like = get_post_meta($res["ID"], 'vortex_system_likes');
        }
        else{
            $like = get_post_meta($res["ID"], 'vortex_system_dislikes');
        }

        if(isset($like[0]) && !empty($like[0])){
            $like[0]++;
        }
        else{
            $like[0] = 1;
        }

        if($res["positive"]){
            update_post_meta($res["ID"], 'vortex_system_likes', $like[0]);
        }
        else{
            update_post_meta($res["ID"], 'vortex_system_dislikes', $like[0]);
        }

        $like = get_post_meta($res["ID"], 'vortex_system_likes');
        $dislike = get_post_meta($res["ID"], 'vortex_system_dislikes');

        $res["like"] = $like[0];
        $res["dislike"] = $dislike[0];
    }
    echo json_encode($res);
    wp_die();
}


add_filter( 'gform_confirmation_anchor', '__return_false' );

// QUIZ BLOCK

function get_quiz_page_id_by_template() {
    $args = array(
        'post_type' => 'page',
        'posts_per_page' => 1,
        'meta_query' => array(
            array(
                'key' => '_wp_page_template',
                'value' => 'templates/quiz-page.php'
            )
        )
    );
    $the_pages = new WP_Query( $args );
    
    if (!empty($the_pages->posts)) {
        return $the_pages->posts[0]->ID;
    }
    
    return null;
}

function wpb_hook_javascript() {
    
    $quizPageId = get_quiz_page_id_by_template();
    
    if (!is_null($quizPageId)) {
        if (is_page ($quizPageId)) { 
          ?>
              <script type="text/javascript" src="<?= get_template_directory_uri() . '/js/jquery.quiz.js'; ?>"></script>
          <?php
        }
    }
}
add_action('wp_head', 'wpb_hook_javascript');

add_action('add_meta_boxes', 'add_quiz_scores_meta');

function add_quiz_scores_meta()
{
    if (is_admin() ) {
        $quizPageId = get_quiz_page_id_by_template();

        if (!is_null($quizPageId)) {

            global $post;

            if(!empty($post) && $post->ID == $quizPageId)
            {

                add_meta_box(
                    'quiz_scores_meta', // $id
                    'Quiz Scores By Type', // $title
                    'display_quiz_scores_meta', // $callback
                    null, // current screen
                    'advanced', // $context
                    'low'); // $priority

            }
        }
    }
}

function display_quiz_scores_meta($post)
{
    $metaValues = get_post_meta($post->ID);
    $count = 0;
    $totalAnswers = 0;
    $table = '<table class="wp-list-table widefat fixed striped "><thead><tr>';
    $table .= '<th scope="col" id="auiz-title" class="manage-column column-primary"><span>Quiz Option</span></th>';
    $table .= '<th scope="col" id="quiz-value" class="manage-column">Count of Selected Values</th>';
    $table .= '</tr></thead><tbody>';
    foreach ($metaValues as $key => $meta) {
        if (strpos($key, 'quiz_meta_') !== false && $key !== 'quiz_meta_total_count') {
            $count++;
            $totalAnswers = $totalAnswers + $meta[0];
            $table .= '<tr><td>' . str_replace('_', ' ', str_replace('quiz_meta_', '', $key)) . '</td><td>' . $meta[0] . '</td></tr>';
        }
        
        if (strpos($key, 'quiz_total_by_date_') !== false) {
            $dateQuiz = date('d-m-Y', str_replace('quiz_total_by_date_', '', $key));
            $table .= '<tr><td>' . $dateQuiz . '</td><td>' . $meta[0] . '</td></tr>';
        }
    }
    
    $total = !empty($metaValues['quiz_meta_total_count']) ? $metaValues['quiz_meta_total_count'][0] : 0;
    
    if ($total < 100 && $totalAnswers > 0) {
        $total = $totalAnswers / $count;
        update_post_meta($post->ID, 'quiz_meta_total_count', round($total)); 
    }

    $table .= '<tr><td>Users completed the quiz</td><td>' . round($total) . '</td></tr>';
    
    $table .= '</tbody></table>';
    
    if ($count == 0) {
        echo 'No results found';
    } else {
        echo $table;
    }
}

function add_squiz_scores() {
    try {
        $quizPageId = get_quiz_page_id_by_template();
    
        if (!is_null($quizPageId)) {
            $scores = $_POST['scores'];
            if (!empty($scores)) {
                foreach ($scores as $key => $score) {
                    $count = get_post_meta( $quizPageId, 'quiz_meta_' . $key, true );
                    if ( ! $count ) {
                        $count = $score;  // if the meta value isn't set, use score as a default
                    } else {
                        $count = $count + $score;
                    }

                    update_post_meta($quizPageId, 'quiz_meta_' . $key, $count); 
                }
                
                $total = get_post_meta( $quizPageId, 'quiz_meta_total_count', true );
                if ( ! $total ) {
                    $total = 1;
                } else {
                    $total = $total + 1;
                }
                
                update_post_meta($quizPageId, 'quiz_meta_total_count', round($total)); 
                
                $today = strtotime("13:00:00");
                $totalByDate = get_post_meta( $quizPageId, 'quiz_total_by_date_' . $today, true );
                if ( ! $totalByDate ) {
                    $totalByDate = 1;
                } else {
                    $totalByDate = $totalByDate + 1;
                }
                
                update_post_meta($quizPageId, 'quiz_total_by_date_' . $today, round($totalByDate)); 
            }
        }
    } catch (Exception $e) {}
    wp_die();
}

add_action( 'wp_ajax_add_squiz_scores', 'add_squiz_scores' );
add_action( 'wp_ajax_nopriv_add_squiz_scores', 'add_squiz_scores' );

function add_meta_tags() {
    if ( ! is_admin() ) {
        $quizPageId = get_quiz_page_id_by_template();

        if (!is_null($quizPageId)) {
            global $post;

            if(!empty($post) && $post->ID == $quizPageId)
            {
                echo '<meta property="og:url"           content="'. get_permalink($post->ID) .'" />';
                echo '<meta property="og:type"          content="website" />';
                echo '<meta property="og:title"         content="'. get_field('start_page_title', $post->ID) .'" />';
                echo '<meta property="og:description"   content="'. get_field('start_page_description', $post->ID) .'" />';
                $thumbnailUrl = get_field('facebook_image', $post->ID);
                if (!empty($thumbnailUrl)) {
                    echo '<meta property="og:image"         content="'. $thumbnailUrl .'" />';
                }
            }
        }
    }
}
add_action('wp_head', 'add_meta_tags');

add_action('template_redirect','remove_wpseo');

function remove_wpseo(){
    if ( ! is_admin() ) {
        $quizPageId = get_quiz_page_id_by_template();

        if (!is_null($quizPageId)) {
            if (is_page($quizPageId)) {
                global $wpseo_front;
                    if(defined($wpseo_front)){
                        remove_action('wp_head',array($wpseo_front,'head'),1);
                    } else {
                      $wp_thing = WPSEO_Frontend::get_instance();
                      remove_action('wp_head',array($wp_thing,'head'),1);
                    }
            }
        }
    }
}

add_action( 'wp_ajax_filter_promo', 'filter_promo' );
add_action( 'wp_ajax_nopriv_filter_promo', 'filter_promo' );

function filter_promo() {
    $matIds = $_POST['matId'] ?? null;

    $metaQuery = [
        [
            'key'     => 'enabled',
            'value'   => true,
            'compare' => '=',
        ],
    ];

    $tz = get_option('timezone_string');
    $timestamp = time();
    $dt = new DateTime("now", new DateTimeZone($tz));
    $dt->setTimestamp($timestamp);
    $date =  $dt->format('Y-m-d');

    $baseQuery = [
        'relation' => 'AND',
        [
            'key'     => 'start_date',
            'value'   => $date,
            'compare' => '<=',
            'type'    => 'DATE',
        ],
        [
            'key'     => 'end_date',
            'value'   => $date,
            'compare' => '>=',
            'type'    => 'DATE',
        ],
    ];

    $metaQuery[] = $baseQuery;


    $paged = $_POST['paged'];


    if (!empty($matIds)){
        $matArr = [
            'relation' => 'OR',
        ];
        foreach ($matIds as $id) {
            $matArr[] = [
                'key'       => 'range',
                'value'     => $id,
                'compare'   => 'LIKE',
            ];
        }

        $metaQuery[] = $matArr;
    }

    $promo_query = new WP_Query(array(
        'category_name' => 'special-offers',
        'meta_query' => $metaQuery,
        'posts_per_page' => 8,
        'paged' => $paged,
        'post_status' => 'publish',
    ));

    $total_pages = $promo_query->max_num_pages;

    ob_start();
    ?>

    <div class="promotions-tile-wrap">
        <div class="promotions-tile">
            <?php while($promo_query->have_posts()) : $promo_query->the_post();
                $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'large' );
                $date = new DateTime(get_field('end_date', get_the_ID()));
                ?>
                <div class="promotions-card">
                    <div class="promotions-card__img"><img src="<?= $image[0] ?? '' ?>" srcset="<?= $image[0] ?? '' ?> 2x"/>
                    </div>
                    <div class="promotions-card__price"><?= get_field('promotion_display_name', get_the_ID()); ?></div>
                    <div class="promotions-card__text">
                        <p><?= the_excerpt(); ?></p>
                    </div>
                    <div class="promotions-card__footer"><a class="bttn" href="#">FIND OUT MORE</a>
                        <div class="promotions-card__caption">Offer ends <?php echo $date->format('d F Y'); ?></div>
                    </div>
                </div>
            <?php endwhile;
            wp_reset_postdata();?>
        </div>
    </div>
    <div class="promotions-footer">

        <?php
        echo paginate_links([
            'base' => '%_%',
            'format' => '?pages=%#%',
            'current' => max(1, $paged),
            'total' => $total_pages,
            'type' => 'list',
            'prev_text' => '<div class="pagination__link pagination__link--prev pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>',
            'next_text' => '<div class="pagination__link pagination__link--next pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>'
        ]);
        ?>

    </div>


    <?php $content = ob_get_clean();

    echo $content;
    die();

}

add_action( 'wp_ajax_filter_promo_ret', 'filter_promo_ret' );
add_action( 'wp_ajax_nopriv_filter_promo_ret', 'filter_promo_ret' );

function filter_promo_ret() {
    $retIds = $_POST['retId'] ?? null;


    $metaQuery = [
        [
            'key'     => 'enabled',
            'value'   => true,
            'compare' => '=',
        ],
    ];

    $tz = get_option('timezone_string');
    $timestamp = time();
    $dt = new DateTime("now", new DateTimeZone($tz));
    $dt->setTimestamp($timestamp);
    $date =  $dt->format('Y-m-d');

    $baseQuery = [
        'relation' => 'AND',
        [
            'key'     => 'start_date',
            'value'   => $date,
            'compare' => '<=',
            'type'    => 'DATE',
        ],
        [
            'key'     => 'end_date',
            'value'   => $date,
            'compare' => '>=',
            'type'    => 'DATE',
        ],
    ];

    $metaQuery[] = $baseQuery;


    $paged = $_POST['paged'];

    if (!empty($retIds)){
        $retArr = [
            'relation' => 'OR',
        ];
        foreach ($retIds as $id) {
            $retArr[] = [
                'key'       => 'retailer_groups',
                'value'     => $id,
                'compare'   => 'LIKE',
            ];
        }

        $metaQuery[] = $retArr;
    }

    $promo_query = new WP_Query(array(
        'category_name' => 'special-offers',
        'meta_query' => $metaQuery,
        'posts_per_page' => 8,
        'paged' => $paged,
        'post_status' => 'publish',
    ));
    $total_pages = $promo_query->max_num_pages;



    ob_start();
    ?>

    <div class="promotions-tile-wrap">
        <div class="promotions-tile">
            <?php while($promo_query->have_posts()) : $promo_query->the_post();
                $image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID()), 'large' );
                $date = new DateTime(get_field('end_date', get_the_ID()));
                ?>
                <div class="promotions-card">
                    <div class="promotions-card__img"><img src="<?= $image[0] ?? '' ?>" srcset="<?= $image[0] ?? '' ?> 2x"/>
                    </div>
                    <div class="promotions-card__price"><?= get_field('promotion_display_name', get_the_ID()); ?></div>
                    <div class="promotions-card__text">
                        <p><?= the_excerpt(); ?></p>
                    </div>
                    <div class="promotions-card__footer"><a class="bttn" href="#">FIND OUT MORE</a>
                        <div class="promotions-card__caption">Offer ends <?php echo $date->format('d F Y'); ?></div>
                    </div>
                </div>
            <?php endwhile;
            wp_reset_postdata();?>
        </div>
    </div>
    <div class="promotions-footer">

        <?php
        echo paginate_links([
            'base' => '%_%',
            'format' => '?pages=%#%',
            'current' => max(1, $paged),
            'total' => $total_pages,
            'type' => 'list',
            'prev_text' => '<div class="pagination__link pagination__link--prev pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>',
            'next_text' => '<div class="pagination__link pagination__link--next pagination__item--prev">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg></div>'
        ]);
        ?>

    </div>


    <?php $content = ob_get_clean();

    echo $content;
    die();

}

// QUIZ BLOCK