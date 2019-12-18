<?php
global $wpsl_settings, $wpsl;
$autoload_class = (!$wpsl_settings['autoload']) ? 'wpsl-not-loaded' : '';

$selectedRetailerId = null;
if (isset($_GET['retailer_id'])) {
    $selectedRetailerId = $_GET['retailer_id'];
}

$postId = null;
if (isset($_GET['post_id'])) {
    $postId = $_GET['post_id'];
} else if (isset($_GET['range'])) {
    $rangePost = get_page_by_path( $_GET['range'], OBJECT, 'post' );
    if (!is_null($rangePost)) {
        $postId = $rangePost->ID;
    }
}

$collectionId = null;
if (isset($_GET['collection_id'])) {
    $collectionId = $_GET['collection_id'];
} else if (isset($_GET['collection'])) {
    $collectionPost = get_page_by_path( $_GET['collection'], OBJECT, 'post' );
    if (!is_null($collectionPost)) {
        $collectionId = $collectionPost->ID;
    }
}

$query = null;
if (isset($_GET['address'])) {
    $query = $_GET['address'];
}

$retailersGroupCategory = get_category_by_slug('retailer-groups');
$metaQuery = [
    [
        'key'     => 'enabled',
        'value'   => true,
        'compare' => '=',
    ],
];



if ($postId) {
    $metaQuery[] = [
        [
            'key'     => 'range',
            'value'   => '"' . $postId . '"',
            'compare' => 'LIKE',
        ],
    ];
}
if ($collectionId) {
    $metaQuery[] = [
        [
            'key'     => 'collections',
            'value'   => '"' . $collectionId . '"',
            'compare' => 'LIKE',
        ],
    ];
}

$args = [
    'numberposts'   => -1,
    'category'      => $retailersGroupCategory->cat_ID,
    'post__in'      => get_field('retailers_groups_filter_order'),
    'meta_query'    => $metaQuery,
    'orderby'       => 'post__in'
];

$retailers = get_posts($args);

$args['post__in'] = get_field('retailers_groups_order');
$retailerChunks = get_posts($args);

$firstCol = [];
$secondCol = [];

foreach ($retailerChunks as $k => $retailer) {
    if ($k % 2 == 0) {
        $firstCol[] = $retailer;
    } else {
        $secondCol[] = $retailer;
    }
}

$matressesCategory = get_category_by_slug('Beds');
$matresses = get_posts(['numberposts' => -1, 'category' => $matressesCategory->cat_ID]);

$collectionsCategory = get_category_by_slug('sleep-collections');
$collections = get_posts(['numberposts' => -1, 'category' => $collectionsCategory->cat_ID]);

ob_start();
?>
    <style>
        #wpsl-stores {
            display: block !important;
        }
        #wpsl-direction-details {
            display: none !important;
        }
    </style>

    <div class="article-news-box">
        <div class="app-container">
            <h1 class="page-h1"><?php the_title(); ?></h1>
            <div class="page-subtitle"><?php the_content(); ?></div>

            <div class="app-store-searchbox">
                <div class="article__search-form-item">
                    <input id="wpsl-search-input" type="text" value="<?= $query ?>" placeholder="" name="wpsl-search-input">
                    <button id="wpsl-search-btn"><i class="app-svg search"></i></button>
                </div>
            </div>
            <div class="app-store-filter">
                <div class="app-store-searchbox__result"></div>
                <div class="t_center">
                    <a href="" class="app-button-store-filter _inline app-md-hidden"><span class="text">Refine your search</span>
                        <i class="app-arrow-icon _bottom _icon-right"></i></a></div>
                <div class="app-store-filter__collapse">
                    <div class="app-store-filter__inner">
                        <div class="app-store-filter__title"><span>Retailers</span></div>
                        <div class="app-store-filter__list">
                            <?php foreach ($retailers as $retailer): ?>
                                <label class="app-button-filter _inline <?= $retailer->ID == $selectedRetailerId ? 'active' : null ?>"><?= get_field('display_name', $retailer->ID) ?>
                                    <input class="retailer-filter-button" type="checkbox" name="retailer" data-name="<?= $retailer->post_name ?>" value="<?= $retailer->ID ?>" style="display: none;" <?= $retailer->ID == $selectedRetailerId ? 'checked="checked"' : null ?>/>
                                </label>
                            <?php endforeach; ?>
                        </div>

                        <div class="app-store-filter__title"><span>Mattresses</span></div>
                        <div class="app-store-filter__list">
                            <?php foreach ($matresses as $matresse): ?>
                                <ul class="app-store-filter__list-nav">
                                    <li><label class="app-button-filter _inline<?= $matresse->ID == $postId ? ' active' : '' ?>"><?= $matresse->post_title ?>
                                            <input type="checkbox" name="range" value="<?= $matresse->ID ?>" <?= $matresse->ID == $postId ? ' checked="checked"' : '' ?> style="display: none;"/>
                                        </label></li>

                                    <?php $subRanges = get_field('sub_ranges', $matresse); ?>
                                    <?php foreach ($subRanges as $subRange): ?>
                                        <?php $lowerCase = preg_match('/([0-9]+)i/', $subRange->post_title) ?>
                                        <li>
                                            <label  class="app-button-filter _inline<?= $lowerCase ? ' _lower-case' : '' ?>">&#8985; &nbsp;<?= $subRange->post_title ?>
                                                <input type="checkbox" name="sub_range" value="<?= $subRange->ID ?>" style="display: none;"/>
                                            </label></li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endforeach; ?>
                        </div>
                        <div class="app-store-filter__title"><span>Collections</span></div>
                        <div class="app-store-filter__list">
                            <?php foreach ($collections as $collection): ?>
                                <ul class="app-store-filter__list-nav">
                                    <li><label class="app-button-filter _inline<?= $collection->ID == $collectionId ? ' active' : '' ?>"><?= $collection->post_title ?>
                                            <input type="checkbox" name="collections" value="<?= $collection->ID ?>" <?= $collection->ID == $collectionId ? ' checked="checked"' : '' ?> style="display: none;"/>
                                        </label>
                                    </li>
                                </ul>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="app-filter-result">
        <div class="app-filter-result__tabs">
            <div class="app-filter-result__tabs__detail tabsDisplayBg" id="listView">LIST VIEW</div>
            <div class="app-filter-result__tabs__map-big" id="mapView">MAP VIEW</div>
        </div>

        <div id="wpsl-gmap" class="wpsl-gmap-canvas app-map-big displaysNoneTabs"></div>
        <div class="app-filter-result__detail-box"></div>

        <div class="app-filter-result__list-box">
            <div class="app-filter-result__flex-box">

                <div class="app-filter-result__list-title app-filter-result__list-vi page-h3 app-sm-hidden">Stores we found near you:</div>
                <div class=" app-filter-result__flex-scroll">
                    <div class="app-filter-result__scroll" id="wpsl-result-list" style="width: 100%!important;">
                        <div class="shadowContainer">
                            <div class="shadow radialShadowTop"></div>
                            <div class="shadow radialShadowBottom"></div>
                        </div>
                        <div class="app-scrollbar <?= $autoload_class ?>" id="wpsl-stores">
                            <ul></ul>
                        </div>
                        <div id="wpsl-direction-details" style="display: none;">
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
        $post = get_post();

        $custom_retailers = [];
        if( have_rows('shop_retailer_obj', $post->ID) ):
            $i = 0;
            while ( have_rows('shop_retailer_obj', $post->ID) ) : the_row();
                $title = get_sub_field('shop_retailer_title_obj');
                $url = get_sub_field('shop_retailer_url_obj');
                if( !empty($title) && !empty($url) ){
                    $custom_retailers[$i]['title'] = $title;
                    $custom_retailers[$i]['url'] = $url;
                }
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
    <div class="article-news-box article-collections-box" id="where-to-buy">
        <div class="app-container">
            <h2 class="_title">Shop online</h2>
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
<?php return ob_get_clean();