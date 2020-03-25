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

$matressesArgs = [
    'numberposts' => -1,
    'category' => $matressesCategory->cat_ID
];
$args = [];
$post_in = get_field('ranges_order');
if (!empty($post_in)) {
    $matressesArgs['post__in'] = $post_in;
    $matressesArgs['orderby'] ='post__in';
}

$matressesCategory = get_category_by_slug('Beds');
$matresses = get_posts($matressesArgs);

$collectionsCategory = get_category_by_slug('sleep-collections');
$collections = get_posts(['numberposts' => -1, 'category' => $collectionsCategory->cat_ID]);

ob_start();
?>
    <style>
        #wpsl-stores {
            display: block !important;
            height: 100%;
        }
        #wpsl-stores ul {
            height: 100%;
        }
        #wpsl-direction-details {
            display: none !important;
        }
        .find-form__field input:not(.filter-drop__check){
            display: block;
            width: calc(100% - 20px);
            padding: 8px 10px;
            border-radius: 5px;
        }
        .find-grid__map .map{
            height: 100%;
        }
        #wpsl-stores li.no-results{
            width: 100%;
            height: 100%;
        }
        .tabs__container{
            display: none;
        }
    </style>


    <div class="find-grid">
        <!-- SVG Sprite-->
        <div class="svg-icon" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="close"><path d="M8 6.933L14.36.58a.75.75 0 011.06 1.062L9.054 8l6.366 6.359a.75.75 0 01-1.06 1.061L8 9.066 1.64 15.42a.75.75 0 11-1.06-1.06L6.945 8 .58 1.642A.75.75 0 011.64.579z"/></symbol><symbol id="down_arrow"><path fill="currentColor" d="M11.045.66a.507.507 0 01.704.729L6.346 6.608a.506.506 0 01-.704 0L.244 1.388A.506.506 0 11.948.66l5.046 4.88z"/></symbol></svg></div>
        <div class="find-grid__result">
            <div class="find-grid__text">
                <h1 class="find-grid__text-title"><?php the_title(); ?></h1>
                <p class="find-grid__text-desc"><?php the_content(); ?></p>
            </div>
            <div class="find-grid__form">
                <div class="find-form" >
                    <div class="find-form__row">
                        <div class="find-form__item">
                            <div class="find-form__field">
                                <input id="wpsl-search-input" type="search" name="wpsl-search-input" value="<?= $query ?>" placeholder="Search City, Address, Postcode or Store…">
                                <button class="find-form__submit" id="wpsl-search-btn"></button>
                            </div>
                        </div>
                    </div>
                    <div class="find-form__row">
                        <div class="find-form__item">
                            <div class="find-form__field">
                                <div class="find-filter js-drop-filter">
                                    <div class="find-filter__select js-drop-filter-trigger" data-select="Search by range">
                                        <div class="find-filter__select-title"><span class="js-drop-filter-selected">Search by range</span></div>
                                        <div class="find-filter__select-icon"></div>
                                    </div>
                                    <div class="find-filter__drop">
                                        <ul class="filter-drop">
                                            <?php foreach ($matresses as $key => $matresse): ?>
                                                <li class="filter-drop__item js-drop-filter-item  <?= $matresse->ID == $postId ? ' active' : '' ?>">
                                                    <input class="filter-drop__check" id="range-<?= $key ?>" type="checkbox" name="range" value="<?= $matresse->ID ?>" <?= $matresse->ID == $postId ? ' checked="checked"' : '' ?>>
                                                    <label class="filter-drop__label" for="range-<?= $key ?>"><?= $matresse->post_title ?></label>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="find-form__item">
                            <div class="find-form__field">
                                <div class="find-filter js-drop-filter">
                                    <div class="find-filter__select js-drop-filter-trigger" data-select="Search by retailer">
                                        <div class="find-filter__select-title"><span class="js-drop-filter-selected">Search by retailer</span></div>
                                        <div class="find-filter__select-icon"></div>
                                    </div>
                                    <div class="find-filter__drop">
                                        <ul class="filter-drop">
                                            <?php foreach ($retailers as $key => $retailer): ?>
                                                <li class="filter-drop__item js-drop-filter-item  <?= $retailer->ID == $selectedRetailerId ? 'active' : null ?>">
                                                    <input class="filter-drop__check" id="retailer-<?= $key ?>" type="checkbox" name="retailer" value="<?= $retailer->ID ?>" data-name="<?= $retailer->post_name ?>" <?= $retailer->ID == $selectedRetailerId ? 'checked="checked"' : null ?>>
                                                    <label class="filter-drop__label" for="retailer-<?= $key ?>"><?= get_field('display_name', $retailer->ID) ?></label>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="find-form__result">Showing 25 results</div>
                <div class="tabs js-tabs-wrapper">
                    <div class="tabs__container">
                        <div class="tabs__list">
                            <div class="tabs__item"><a class="tabs__link js-tab-trigger active" href="#tab-1">RETAIL STORES</a></div>
                            <div class="tabs__item"><a class="tabs__link js-tab-trigger" href="#tab-2">ONLINE STORES</a></div>
                        </div>
                    </div>
                    <div class="tabs__body">
                        <div class="tabs__content js-tab-content" id="tab-1">
                            <div class="<?= $autoload_class ?>" id="wpsl-stores">
                                <ul></ul>
                            </div>
                            <div id="wpsl-direction-details" style="display: none;">
                                <ul></ul>
                            </div>
                            <?php /*
                            <div class="shop-card js-special-wrap">
                                <div class="shop-card__name">David Jones 3 Market Street</div>
                                <div class="shop-card__address">
                                    <p>Cnr. Sth Dowling St & Dacey Ave, Moore Park 2021</p>
                                    <p>(02) 9662 9888</p>
                                </div>
                                <div class="shop-card__selected">Luxury, Cacoon, Miracoil</div>
                                <div class="shop-card__row">
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__site" href="#"><img src="/img/icons/shop-card-site.png" alt="shop-card-site"/>VISIT SITE</a></div>
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__offers js-special-trigger" href="#"><img src="/img/icons/shop-card-offers.png" alt="shop-card-offers"/>SPECIAL OFFERS</a></div>
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__map" href="#"><img src="/img/icons/shop-card-map.png" alt="shop-card-map"/>VIEW ON MAP</a></div>
                                </div>
                                <div class="shop-card__special js-special-target">
                                    <div class="shop-card-wrap">
                                        <div class="shop-card-wrap__head">
                                            <div class="shop-card-wrap__title">Available deals 3</div>
                                            <div class="shop-card-wrap__close js-special-target-close"></div>
                                        </div>
                                        <div class="shop-card-wrap__body">
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-card js-special-wrap">
                                <div class="shop-card__name">David Jones 4 Market Street</div>
                                <div class="shop-card__address">
                                    <p>Cnr. Sth Dowling St & Dacey Ave, Moore Park 2021</p>
                                    <p>(02) 9662 9888</p>
                                </div>
                                <div class="shop-card__selected">Luxury, Cacoon, Miracoil</div>
                                <div class="shop-card__row">
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__site" href="#"><img src="/img/icons/shop-card-site.png" alt="shop-card-site"/>VISIT SITE</a></div>
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__offers js-special-trigger" href="#"><img src="/img/icons/shop-card-offers.png" alt="shop-card-offers"/>SPECIAL OFFERS</a></div>
                                    <div class="shop-card__row-item"><a class="shop-card__icon shop-card__map" href="#"><img src="/img/icons/shop-card-map.png" alt="shop-card-map"/>VIEW ON MAP</a></div>
                                </div>
                                <div class="shop-card__special js-special-target">
                                    <div class="shop-card-wrap">
                                        <div class="shop-card-wrap__head">
                                            <div class="shop-card-wrap__title">Available deals 4</div>
                                            <div class="shop-card-wrap__close js-special-target-close"></div>
                                        </div>
                                        <div class="shop-card-wrap__body">
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                            <div class="special-card">
                                                <div class="special-card__head"><img class="special-card__head-icon" src="/img/icons/special-card-dollar.png" alt="dollar"/><span class="special-card__head-title">20% Off Swisstek</span></div>
                                                <div class="special-card__desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate vel ex id ultricies. Nam gravida risus non erat </p>
                                                </div>
                                                <div class="special-card__footer"><a class="special-card__footer-link" href="#">SEE THE RANGE</a>
                                                    <div class="special-card__footer-date">Offer ends 7th January 2021</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */ ?>
                        </div>
                        <div class="tabs__content js-tab-content" id="tab-2">
                            <ul>
                                <?php $k = 0; ?>
                                <?php foreach ($retailers as $retailer): ?>
                                    <?php $url = get_field('url', $retailer->ID); ?>
                                    <?php if($url) : ?>
                                        <li class="shop-card ">
                                            <div class="shop-card__name"><?= get_field('display_name', $retailer->ID) ?></div>

                                            <div class="shop-card__row">
                                                <div class="shop-card__row-item">
                                                    <a class="shop-card__icon shop-card__site" href="<?= $url ?>" target="_blank">
                                                    <img src="<?= get_template_directory_uri() ?>/static/build/img/icons/shop-card-site.png" alt="shop-card-site"/>VISIT SITE
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <?php $k++; ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                                <?php if ($k == 0) : ?>
                                    <li class="no-results">
                                        <div class="find-form__nothing">
                                            <div class="find-form__nothing-title">The selected retailer does not stock this range. </div>
                                            <div class="find-form__nothing-text">Please select another retailer.</div>
                                        </div>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="find-grid__map">
            <div class="map wpsl-gmap-canvas" id="wpsl-gmap" >
                <div class= app-map-big"></div>
            </div>
        </div>
    </div>
<?php /*
    <div class="article-news-box">
        <div class="app-container">
            <h1 class="page-h1"></h1>
            <div class="page-subtitle"></div>

            <div class="app-store-searchbox">
                <div class="article__search-form-item">
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
                    </div>
                </div>
            </div>
        </div>
    </div>

 */ ?>
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