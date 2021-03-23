<?php
/*
 * Template Name: Mattresses [Cocoon]
 * Template Post Type: post
 */
add_action('wp_head', 'add_cocoon_css');
add_action('wp_footer', 'add_cocoon_js');
add_filter('post_class','desktop');
$sleepGuideCategory = get_category_by_slug('sleep-guide');
add_filter('show_admin_bar', '__return_false');

$headerNavigation = get_page_by_path('header-menu-navigation');
$footerPage = get_page_by_path('footer-navigation');

$helpAndSupportPages = get_field('help_and_support_pages', $headerNavigation->ID);
$storesAndPromotionsPages = get_field('stores_and_promotions_pages', $headerNavigation->ID);

/*
function gmw_include_google_places_api() {
    $google_api_key = 'AIzaSyC8oCWaSPm4CLfSa4hVT9dKUTKugpHH9qc'; // get_option('gaaf_field_api_key');
    //wp_enqueue_script('gaaf-custom',GAAF__PLUGIN_URL.'/js/custom.js',array('jquery-core','jquery'),'',true);
    wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?key='.(!empty($google_api_key) ? $google_api_key : 'AIzaSyCyeWogAwa1tlMv-FiQGHGuARA42-nuG1A').'&libraries=places', array('jquery-core','jquery','gaaf-custom'),'',true);
}
add_action( 'wp_enqueue_scripts', 'gmw_include_google_places_api' );*/

?>
<!doctype html>
<html class="no-js cocoon" <?php language_attributes(); ?>>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?= get_template_directory_uri() ?>/img/favicon-cocoon.png">
    <?php wp_head(); ?>
</head>
<body class="page-cocoon">

    <?php
    the_content();
    ?>

    <div class="app-wrapper">

        <section id="container" class="app-wrapper__flex">

            <div itemscope="" itemtype="http://schema.org/Product">

                <div class="m-chapter-nav__container -visible" data-component="chapter-nav">
                    <ul class="m-chapter-nav">
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#hero" class="m-chapter-nav__link -intro" data-animate="top">Home</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#layer01" class="m-chapter-nav__link -layer01">Intro</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#layer02" class="m-chapter-nav__link -layer02">Sleep</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#layer03" class="m-chapter-nav__link -layer03">Comfort</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#layer04" class="m-chapter-nav__link -layer04">Craft</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#technology" class="m-chapter-nav__link -technology">TECHNOLOGY</a>
                        </li>
                        <li class="m-chapter-nav__list">
                            <a href="javascript:void(0)" data-href="#retailers" class="m-chapter-nav__link -retailers" data-animate="bottom">Where to buy</a>
                        </li>
                    </ul>
                </div>

        <header id="header" class="header--fixed headroom">

            <?php include(locate_template('header-menu/variables.php')); ?>

            <div class="app-header">

                <?php $isCocoon = true; ?>
                <?php include(locate_template('header-menu/app-container.php')); ?>
                <?php include(locate_template('header-menu/dropdown.php')); ?>
                <?php include(locate_template('header-menu/navigation.php')); ?>

            </div>

            <div class="app-left-right-flex" style="background-color: #2F1945">
                <a href="#retailers" class="c-btn -rounded -border-brown">WHERE TO BUY</a>
            </div>

        </header>
        <div id="intro-paralax">

                <div id="wrapper" data-component="intro-load-images">

                    <div class="l-content m-trigger__container clearfix" id="js-content">
                        <div id="wrapper-layers" data-component="layers">
                            <?php
                                $topImage = get_field('bg_image_top');
                                $topVideo = get_field('bg_video_top');
                                $topText = get_field('bg_text_top');
                                $topSubText = get_field('bg_subtext_top');
                            ?>
                            <div itemprop="image" id="hero" class="m-hero" style="background-image: url(<?= !empty($topImage) ? $topImage : get_template_directory_uri() . '/img/cocoon/desktop-homepage-eyes-1920x1080.jpg' ?>); opacity: 1; height: 29px;" data-component="hero">
                                <div class="m-hero__intro-video" style="overflow: hidden; background-image: url(null); background-size: cover; background-position: center center;">
                                    <video class="covervid-video visible" autoplay="" muted="" loop="" style="height: auto; width: 100%; min-height: 1246px; position: absolute; top: 50%; transform: translate(-50%, -50%);">
                                        <source src="<?= !empty($topVideo) ? $topVideo : get_template_directory_uri() . '/img/cocoon/eyes.mp4' ?>" type="video/mp4">
                                    </video>
                                </div>
                                <div class="m-hero__intro-text -show" id="trigger-intro">
                                    <h1 class="-xxl centered"><?= !empty($topText) ? $topText : 'THE MOST<br>BEAUTIFUL SLEEP<br>EVER MADE&reg;<br>' ?></h1>
                                    <meta itemprop="description" content="<?= !empty($topText) ? htmlspecialchars($topText) : 'THE MOST&lt;br&gt;BEAUTIFUL SLEEP&lt;br&gt;EVER MADE™&lt;br&gt;' ?>">
                                </div>
                                <div class="m-hero__intro-cta">
                                    <a href="#layer01" class="m-hero__trigger-scroll">
                                        <p><?= !empty($topSubText) ? $topSubText : 'DISCOVER SLEEPYHEAD COCOON' ?></p>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="chevron-down" viewBox="0 0 66 76">
                                            <path d="M32.2 45.4L8 32.5c-0.4-0.5-0.4-1.2 0-1.6 0.4-0.4 1.2-0.4 1.6 0L33 43.2l23.3-12.5c0.4-0.5 1.2-0.5 1.7 0 0.5 0.4 0.5 1.2 0 1.6l0 0 -24 12.9c0 0 0 0 0 0.1C33.4 45.8 32.6 45.8 32.2 45.4z" fill="#FFF"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="m-layer__figure">
                                <div class="-figure -00" style="background-image: url(<?= get_template_directory_uri() ?>/img/cocoon/panel-4mob-img2.jpg)"></div>
                                <div class="-figure -01" style="background-image: url(<?= get_template_directory_uri() ?>/img/cocoon/panel-1mob-img2.jpg)"></div>
                                <div class="-figure -02" style="background-image: url(<?= get_template_directory_uri() ?>/img/cocoon/panel-2mob-img2.jpg)"></div>
                                <div class="-figure -03" style="background-image: url(<?= get_template_directory_uri() ?>/img/cocoon/panel-3mob-img2.jpg)"></div>
                                <div class="-figure -04" style="background-image: url(<?= get_template_directory_uri() ?>/img/cocoon/panel-4mob-img2.jpg)"></div>
                            </div>
                            <?php
                                $middleBlockFirstTitle = get_field('middle_block_first_title');
                                $middleBlockFirstDescription = get_field('middle_block_first_description');
                                $middleBlockSecondTitle = get_field('middle_block_second_title');
                                $middleBlockSecondDescription = get_field('middle_block_second_description');
                                $middleBlockThirdTitle = get_field('middle_block_third_title');
                                $middleBlockThirdDescription = get_field('middle_block_third_description');
                            ?>
                            <div id="layer00" class="m-layer -left -layer01" style="transform: matrix(1, 0, 0, 1, 0, -4416);"></div>
                            <div id="layer01" class="m-layer -left -layer01" style="transform: matrix(1, 0, 0, 1, 0, -4416);">
                                <div class="m-layer__content -show ">
                                    <h3 class="m-layer__title"><?= !empty($middleBlockFirstTitle) ? $middleBlockFirstTitle : 'Sleep – the ultimate luxury'; ?></h3>
                                    <p class="p3"><?= !empty($middleBlockFirstDescription) ? $middleBlockFirstDescription : 'A great night’s sleep is one of life’s enduring luxuries. Let us show you what goes into making the best sleep ever made.'; ?></p>
                                </div>
                            </div>
                            <div id="layer02" class="m-layer -right -layer02" style="transform: matrix(1, 0, 0, 1, 0, -4416);">
                                <div class="m-layer__content -show ">
                                    <h3 class="m-layer__title"><?= !empty($middleBlockSecondTitle) ? $middleBlockSecondTitle : 'The pursuit of comfort'; ?></h3>
                                    <p class="p3"><?= !empty($middleBlockSecondDescription) ? $middleBlockSecondDescription : 'It’s called beauty sleep for a reason. Combining luxury materials like silk and cashmere with the most advanced comfort technologies provides the ultimate in comfort.'; ?></p>
                                </div>
                            </div>
                            <div id="layer03" class="m-layer -left -layer03" style="transform: matrix(1, 0, 0, 1, 0, -4416);">
                                <div class="m-layer__content -show ">
                                    <h3 class="m-layer__title"><?= !empty($middleBlockThirdTitle) ? $middleBlockThirdTitle : 'It only moves where you touch'; ?></h3>
                                    <p class="p3"><?= !empty($middleBlockThirdDescription) ? $middleBlockThirdDescription : 'Meet the Sensorzone® Sleep System. Each spring sits separately within a Dreamfoam® core and responds independently to movement, virtually removing partner disturbance.'; ?></p>
                                </div>
                            </div>
                            <?php
                                $videoId = get_field('youtube_video_id');
                                $videoImage = get_field('crafted_by_image');
                                $videoTitle = get_field('crafted_by_title');
                                $videoText = get_field('crafted_by_text');
                            ?>
                            <div id="layer04" class="m-layer -right -layer04" style="transform: matrix(1, 0, 0, 1, 0, -4416);">
                                <div class="m-layer__content -show  -video">
                                    <a class="c-player" data-component="modal" data-name="Crafted by hand" data-video="<?= !empty($videoId) ? $videoId : '21AFCpP0MPw'; ?>">
                                        <div class="c-btn -circle -border-white -with-play -player">
                                            <span class="c-icon -play"></span>
                                        </div>
                                        <img src="<?= !empty($videoImage) ? $videoImage : get_template_directory_uri() . '/img/cocoon/Craftsmanship.jpg'; ?>" alt="video background">
                                    </a>
                                    <br>
                                    <br>
                                    <h3 class="m-layer__title"><?= !empty($videoTitle) ? $videoTitle : 'Crafted by hand'; ?></h3>
                                    <p class="p3"><?= !empty($videoText) ? $videoText : 'Every bed is made to order by our expert craftsmen, using the finest materials and construction techniques. See how it all comes together above.'; ?></p>
                                </div>
                            </div>
                        </div>
                        <div class="m-shadow -left" style="display: block;"></div>
                        <div class="m-shadow -right" style="display: block;"></div>
                    </div>
                    <?php
                        $middleImageFirst = get_field('middle_image_first');
                        $middleImageLast = get_field('middle_image_last');
                    ?>
                    <div class="m-full-width -z1 -on-screen" data-zoomimage="">
                        <div class="m-full-width__img-holder" id="fixed-image-holder">
                            <div class="m-full-width__img" id="fixed-image" style="width: 3414px; height: 1920px; transform: translate(-106.571%, -78.1031%) translate3d(0px, 0px, 0px) scale(1, 1); opacity: 1;">
                                <img width="3414" height="1920" src="<?= !empty($middleImageFirst) ? $middleImageFirst : get_template_directory_uri() . '/img/cocoon/1a_1.jpg'; ?>" id="m-full-width__img--s">
                                <img width="3414" height="1920" src="<?= !empty($middleImageLast) ? $middleImageLast : get_template_directory_uri() . '/img/cocoon/1hd_1.jpg'; ?>" class="m-full-width__img -l" id="m-full-width__img--l" style="visibility: visible;">
                            </div>
                        </div>
                    </div>
                    <div id="wrapper-bottom">
                        <?php
                            $_bgImage = get_field('wide_shot_of_mattress');
                            $_bgImageMobile = get_field('wide_shot_of_mattress_mobile');
                            $_bgImageText = get_field('wide_shot_of_mattress_text');
                            $_bgImageIcon =  get_field('wide_shot_of_mattress_icon');
                        ?>
                        <div id="technology" class="m-technology" data-component="technology">
                            <div class="m-technology__product" data-component="responsive-bg" data-bg-desktop="<?= !empty($_bgImage) ? $_bgImage :  get_template_directory_uri() . '/img/cocoon/clickpoints-s-sleepyhead.jpg'; ?>" data-bg-mobile="<?= !empty($_bgImageMobile) ? $_bgImageMobile :  get_template_directory_uri() . '/img/cocoon/mob-clickpoints-sleepyhead.jpg'; ?>" style="background-image: url(<?= !empty($_bgImage) ? $_bgImage :  get_template_directory_uri() . '/img/cocoon/clickpoints-s-sleepyhead.jpg'; ?>);"></div>
                            <div class="m-technology__container centered">
                                <div class="m-technology__text">
                                    <img class="logo-sanctuary" src="<?= get_template_directory_uri() ?>/img/cocoon/s-cocoon.svg">
                                    <p class="p3"><?= !empty($_bgImageText) ? $_bgImageText : 'Introducing the luxury, technology and craftsmanship behind the most beautiful sleep ever made.'; ?></p>
                                </div>
                                <div class="m-technology__cta">
                                    <?php $brochurePdf = get_field('brochure_pdf'); ?>
                                    <?php if (!empty($brochurePdf) && isset($brochurePdf['url'])): ?>
                                        <a href="<?= $brochurePdf['url'] ?>" target="_blank" class="c-btn -rounded -with-chevron -btn-left -bg-brown">DOWNLOAD A BROCHURE <span class="c-icon -chevron"></span></a>
                                    <?php endif ?>
                                    <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                </div>
                            </div>
                            <?php $_technologies = get_field('mattress_technologies'); ?>
                            <div class="m-technology__clickpoints">
                                <?php if (!empty($_technologies)) : ?>
                                    <?php $iterator = 1; ?>
                                    <?php foreach ($_technologies as $key => $_technology) : ?>
                                        <?php $str = preg_replace("/(™|®|©|&trade;|&reg;|&copy;|&#8482;|&#174;|&#169;)/", "", $_technology['technology_title']); ?>
                                        <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point0<?= $iterator; ?>" data-point="<?= sanitize_title_with_dashes($str);?>" data-bg="<?= !empty($_technology['technology_background_image']) ? $_technology['technology_background_image'] : ''; ?>"><span class="c-icon -plus"></span></a>
                                        <?php $iterator++; ?>
                                    <?php endforeach; ?>
                                <?php else: ?>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point01" data-point="sensorzone" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-01.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point02" data-point="sanctuary-pillow" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-02.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point03" data-point="mattress-quilt" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-03.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point04" data-point="headboard" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-03.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point05" data-point="comfort-layer" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-04.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point06" data-point="base-and-drawers" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-04.jpg"><span class="c-icon -plus"></span></a>
                                    <a href="<?php the_permalink(); ?>" class="c-btn -circle -border-white -with-plus -hover -point07" data-point="size" data-bg="<?= get_template_directory_uri() ?>/img/cocoon/mob-technology-sleepyhead-04.jpg"><span class="c-icon -plus"></span></a>
                                <?php endif; ?>
                            </div>
                            <img src="<?= !empty($_bgImageIcon) ? $_bgImageIcon : get_template_directory_uri() . '/img/cocoon/australian-made.svg'; ?>" class="m-technology__made" alt="">
                            <div class="m-technology__slider">
                                <a class="c-btn -circle -border-white -with-close m-technology__close -mobile"><span class="c-icon -close"></span></a>
                                <?php if (!empty($_technologies)) : ?>
                                    <?php foreach ($_technologies as $_technology) : ?>
                                        <?php $str = preg_replace("/(™|®|©|&trade;|&reg;|&copy;|&#8482;|&#174;|&#169;)/", "", $_technology['technology_title']); ?>
                                        <div class="-content <?= sanitize_title_with_dashes($str);?>">
                                            <a class="c-btn -circle -border-white -with-close m-technology__close"><span class="c-icon -close"></span></a>
                                            <h4 class="m-technology__title"><?= $_technology['technology_title']; ?></h4>
                                            <?php if (!empty($_technology['technology_video_id'])): ?>
                                            <a class="c-player" data-name="<?= $_technology['technology_title']; ?>" data-component="modal" data-video="<?= $_technology['technology_video_id']; ?>">
                                                <div class="c-btn -circle -border-white -with-play -player">
                                                    <span class="c-icon -play"></span>
                                                </div>
                                                <?php if($_technology['technology_image']) : ?>
                                                    <img class="m-technology__figure" src="<?= $_technology['technology_image']; ?>" alt="<?= $_technology['technology_title']; ?>">
                                                <?php endif; ?>
                                            </a>
                                            <?php else : ?>
                                                <?php if($_technology['technology_image']) : ?>
                                                    <img class="m-technology__figure" src="<?= $_technology['technology_image']; ?>" alt="<?= $_technology['technology_title']; ?>">
                                                <?php endif; ?>
                                            <?php endif; ?>
                                            <div class="m-technology__copy">
                                                <p><?= $_technology['technology_text']; ?></p>
                                            </div>
                                                <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                                <?php // <a href="#retailers" class="app-button-reserve -retailers -with-chevron">Where to buy <span class="app-svg button-reserve _icon-right"></span></a> ?>
                                            <br>
                                        </div>
                                    <?php endforeach; ?>
                                <?php else : ?>
                                <div class="-content sensorzone">
                                    <a class="c-btn -circle -border-white -with-close m-technology__close"><span class="c-icon -close"></span></a>
                                    <h4 class="m-technology__title">Sensorzone® Core</h4>
                                    <a href="https://www.sleepyhead.com.au/mattresses/cocoon#" class="c-player" data-name="Sensorzone® Core" data-component="modal" data-video="VqGkSoZW040">
                                        <div class="c-btn -circle -border-white -with-play -player">
                                            <span class="c-icon -play"></span>
                                        </div>
                                        <img class="m-technology__figure" src="<?= get_template_directory_uri() ?>/img/cocoon/sensorzone.jpg" alt="Sensorzone® Core">
                                    </a>
                                    <div class="m-technology__copy">
                                        <p>Designed so consumers don’t compromise on what they want from a mattress, the Sensorzone core is the only support system where springs and foam are fully integrated.</p>
                                    </div>
                                        <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                        <?php // <a href="#retailers" class="app-button-reserve -retailers -with-chevron">Where to buy <span class="app-svg button-reserve _icon-right"></span></a> ?>
                                    <br>
                                </div>

                                <div class="-content sanctuary-pillow">
                                    <a class="c-btn -circle -border-white -with-close m-technology__close"><span class="c-icon -close"></span></a>
                                    <h4 class="m-technology__title">Cocoon pillow</h4>
                                    <img class="m-technology__figure" src="<?= get_template_directory_uri() ?>/img/cocoon/CacoonPillow.png" alt="Cocoon pillow">
                                    <div class="m-technology__copy">
                                        <p>Designed with premium materials that work in harmony with a SleepyHead Cocoon mattress. An Advanced Memory Foam core provides pressure relieving support, gently encased in a 400 thread count cotton sateen cover.</p>
                                    </div>
                                        <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                        <?php /*<a href="#retailers" class="app-button-reserve -retailers -with-chevron">Where to buy <span class="app-svg button-reserve _icon-right"></span></a>*/ ?>
                                    <br>
                                </div>

                                <div class="-content mattress-quilt">
                                    <a class="c-btn -circle -border-white -with-close m-technology__close"><span class="c-icon -close"></span></a>
                                    <h4 class="m-technology__title">Mattress Quilt</h4>
                                    <img class="m-technology__figure" src="<?= get_template_directory_uri() ?>/img/cocoon/Mattress.jpg" alt="Mattress Quilt">
                                    <div class="m-technology__copy">
                                        <p>Every SleepyHead Cocoon model has an individually designed top quilt. Selected models include luxurious fibres such as silk and cashmere for improved breathability.</p>
                                    </div>

                                    <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                    <?php /*<a href="#retailers" class="app-button-reserve -retailers -with-chevron">Where to buy <span class="app-svg button-reserve _icon-right"></span></a>*/ ?>
                                    <br>
                                </div>

                                <div class="-content comfort-layer">
                                    <a class="c-btn -circle -border-white -with-close m-technology__close"><span class="c-icon -close"></span></a>
                                    <h4 class="m-technology__title">Comfort Layer</h4>
                                    <img class="m-technology__figure" src="<?= get_template_directory_uri() ?>/img/cocoon/tech-detail-Cocoon-Gold.jpg" alt="Comfort Layer">
                                    <div class="m-technology__copy">
                                        <p>Sleepyhead Cocoon offers the latest in comfort layer technology, providing a luxurious feel without compromising on support and therapeutic qualities.</p>
                                    </div>

                                    <a href="#retailers" class="c-btn -rounded -border-white -with-chevron -btn-right">WHERE TO BUY<span class="c-icon -chevron"></span></a>
                                    <?php /*<a href="#retailers" class="app-button-reserve -retailers -with-chevron">Where to buy <span class="app-svg button-reserve _icon-right"></span></a>*/ ?>
                                    <br>
                                </div>
                                <?php endif; ?>
                            </div>
                        </div>
                        <section id="retailers" class="m-retailer">
                            <?php
                                $_findRetailerTitle = get_field('find_retailer_title');
                                $_findRetailerDescription = get_field('find_retailer_description');
                                $_findRetailerCTA = get_field('find_retailer_cta');
                                $_findRetailerCountry = get_field('find_retailer_country');
                                $_findRetailerPlaceholder = get_field('find_retailer_placeholder');
                                $_retailers = get_field('retailers');
                            ?>
                            <div class="m-retailer__column">
                                <div class="-wrapper">
                                    <p>
                                        <?= !empty($_findRetailerTitle) ? $_findRetailerTitle : 'FIND A RETAILER'; ?>
                                    </p>
                                    <br>
                                    <p class="p2"><?= !empty($_findRetailerDescription) ? $_findRetailerDescription : 'Enter your postcode and discover where to buy the most beautiful sleep ever made'; ?></p>
                                    <br>
                                    <form action="<?= !empty($_findRetailerCTA) ? $_findRetailerCTA : '/stockists'; ?>" method="get" id="retailer_search_form">
                                        <input type="text" name="address" id="retailer_search_input" class="m-retailer__input" placeholder="<?= !empty($_findRetailerPlaceholder) ? $_findRetailerPlaceholder : 'Enter Suburb or Postcode'; ?>" autocomplete="off">
                                        <input type="submit" value="Submit" style="display: none">
                                        <input type="hidden" id="country" value="<?= !empty($_findRetailerCountry) ? $_findRetailerCountry : 'au'; ?>">
                                        <input type="hidden" value="<?= get_the_ID(); ?>" name="post_id">
                                        <span id="retailer_search_button" onclick="$(&#39;#retailer_search_form&#39;).submit()" class="c-btn -circle -bg-brown -with-chevron"><span class="c-icon -chevron"></span></span>
                                    </form>
                                </div>
                            </div>
                            <div class="m-retailer__column">
                                <div class="-wrapper">
                                    <?php if (!empty($_retailers)) : ?>
                                        <?php foreach ($_retailers as $_retailer) : ?>
                                            <a target="_blank" id="" href="<?= $_retailer['retailer_url']; ?>">
                                                <img src="<?= $_retailer['retailer_image']; ?>" class="m-retailer__logo" alt="<?= $_retailer['retailer_title']; ?>">
                                            </a>
                                        <?php endforeach; ?>
                                    <?php else : ?>
                                        <a target="_blank" onclick="openInNewTab(&#39;http://bedsrus.com.au/our-range/mattresses?range=86%2C85%2C92&#39;);" id="ctl00_plcZones_lt_PlaceHolderMain_retailerBedsRUs" href="javascript:__doPostBack(&#39;ctl00$plcZones$lt$PlaceHolderMain$retailerBedsRUs&#39;,&#39;&#39;)">
                                            <img src="<?= get_template_directory_uri() ?>/img/cocoon/logo-retailer04.gif" class="m-retailer__logo" alt="Beds R Us">
                                        </a>
                                        <a target="_blank" onclick="openInNewTab(&#39;http://search.davidjones.com.au/search?p=KK&amp;srid=S10-AUSYDR02&amp;lbc=davidjones&amp;ts=custom&amp;pw=Miracoil&amp;uid=547967560&amp;isort=score&amp;view=grid&amp;w=Sleepyhead%20cocoon&amp;rk=2&#39;);" id="ctl00_plcZones_lt_PlaceHolderMain_retailerDavidJones" href="javascript:__doPostBack(&#39;ctl00$plcZones$lt$PlaceHolderMain$retailerDavidJones&#39;,&#39;&#39;)">
                                            <img src="<?= get_template_directory_uri() ?>/img/cocoon/logo-retailer06.gif" class="m-retailer__logo" alt="David Jones">
                                        </a>
                                        <a target="_blank" onclick="openInNewTab(&#39;http://www.domayneonline.com.au/bedroom/mattresses-and-ensembles/mattresses/?subcats=Y&amp;features_hash=V1030&#39;);" id="ctl00_plcZones_lt_PlaceHolderMain_retailerDomayneOnline" href="javascript:__doPostBack(&#39;ctl00$plcZones$lt$PlaceHolderMain$retailerDomayneOnline&#39;,&#39;&#39;)">
                                            <img src="<?= get_template_directory_uri() ?>/img/cocoon/logo-retailer07.gif" class="m-retailer__logo" alt="Domayne Online">
                                        </a>
                                        <a target="_blank" onclick="openInNewTab(&#39;http://www.myer.com.au/shop/mystore/SearchDisplay?storeId=10251&amp;catalogId=10051&amp;langId=-1&amp;beginIndex=0&amp;searchSource=Q&amp;sType=SimpleSearch&amp;resultCatEntryType=2&amp;showResultsPage=true&amp;pageView=image&amp;pageSize=12&amp;orderBy=0&amp;storeSearch=Y&amp;searchTerm=sleepyhead+cocoon&#39;);" id="ctl00_plcZones_lt_PlaceHolderMain_retailerMyers" href="javascript:__doPostBack(&#39;ctl00$plcZones$lt$PlaceHolderMain$retailerMyers&#39;,&#39;&#39;)">
                                            <img src="<?= get_template_directory_uri() ?>/img/cocoon/logo-retailer08.gif" class="m-retailer__logo" alt="Myer">
                                        </a>
                                        <a target="_blank" onclick="openInNewTab(&#39;http://www.sleepys.com.au/Default.aspx?A=ProductSearch&amp;PageID=16308996&#39;);" id="ctl00_plcZones_lt_PlaceHolderMain_retailerSleepys" href="javascript:__doPostBack(&#39;ctl00$plcZones$lt$PlaceHolderMain$retailerSleepys&#39;,&#39;&#39;)">
                                            <img src="<?= get_template_directory_uri() ?>/img/cocoon/logo-retailer09.gif" class="m-retailer__logo" alt="sleepy&#39;s">
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <div class="m-retailer__column -division">
                                <div class="-wrapper">
                                    <?php
                                        $_specialOffersTitle = get_field('special_offers_title');
                                        $_specialOffersDescription = get_field('special_offers_description');
                                        $_specialOffersCTA = get_field('special_offers_cta');
                                        $_specialOffersCTAText = get_field('special_offers_cta_text');
                                    ?>
                                    <p><?= !empty($_specialOffersTitle) ? $_specialOffersTitle : 'A BEAUTIFUL SLEEP AT A BEAUTIFUL PRICE'; ?></p>
                                    <br>
                                    <p class="p2">
                                        <?= !empty($_specialOffersDescription) ? $_specialOffersDescription : 'We want to make enjoying a beautiful sleep as comfortable as possible.'; ?>
                                    </p>
                                    <br>
                                    <br>
                                    <a href="<?= !empty($_specialOffersCTA) ? $_specialOffersCTA : '/special-offers'; ?>" class="c-btn -rounded -border-brown -full-width -with-chevron"><?= !empty($_specialOffersCTAText) ? $_specialOffersCTAText : 'EXCLUSIVE SPECIALS'; ?> <span class=" c-icon -chevron"></span></a>
                                </div>
                            </div>

                            <div class="m-retailer__column -bg-grey">
                                <div class="-wrapper">
                                    <?php
                                        $_sleepGuideTitle = get_field('sleep_guide_title');
                                        $_sleepGuideDescription = get_field('sleep_guide_description');
                                        $_sleepGuideCTA = get_field('sleep_guide_cta');
                                        $_sleepGuideCTAText = get_field('sleep_guide_cta_text');
                                    ?>
                                    <p>
                                        <?= !empty($_sleepGuideTitle) ? $_sleepGuideTitle : 'MORE THAN BEAUTY SLEEP'; ?>
                                    </p>
                                    <br>
                                    <p class="p2">
                                        <?= !empty($_sleepGuideDescription) ? $_sleepGuideDescription : 'Find out more about the beauty and health benefits of getting enough sleep and discover how you can improve yours.'; ?>
                                    </p>
                                    <br>
                                    <br>
                                    <a href="<?= !empty($_sleepGuideCTA) ? $_sleepGuideCTA : '/beauty-sleep-guide'; ?>" class="c-btn -rounded -border-brown -full-width -with-chevron"><?= !empty($_sleepGuideCTAText) ? $_sleepGuideCTAText : 'BEAUTY SLEEP GUIDE'; ?><span class=" c-icon -chevron"></span></a>
                                </div>
                            </div>
                        </section>
                        <?php get_footer() ?>

                    </div>
                </div>
            </div>

            <div id="bp-desktop"></div>

    </section>
</div>

    <?php $navigation = get_field("header_menu", $headerNavigation->ID); ?>
    <div id="app-mobile-menu" class="c-sb">

        <header>
            <div class="app-container">
                <div class="header-nav c-sb">
                    <div class="_left-nav">
                        <a id="app-mobile-btn" class="app-mobile-btn _header-link app-sm-visible" href="#"><i class="app-svg menu"></i></a>
                    </div>
                    <div class="_right-nav">
                        <a id="app-mobile-menu-close" class="_header-link" href="#"></a>
                    </div>
                    <div id="app-mobile-menu-title"></div>
                    <a href="<?= home_url(); ?>" class="app-svg logo"></a>
                </div>
            </div>
        </header>

        <nav class="_mobile-nav">
            <ul class="_main-lvl">

                <?php
                /*
                            echo "<pre>";
                            print_r($navigation["main_menu"]);
                            echo "</pre>";
                */
                ?>
                <?php if (!empty($navigation["main_menu"])) : ?>
                    <?php foreach ($navigation["main_menu"] as $key => $mainItem) : ?>
                        <?php
                        $url = "#";
                        if (!empty($mainItem['url'])) {
                            $url = $mainItem['url'];
                        }
                        ?>
                        <li>
                            <a href="<?= $url ?>" class="app-main-menu__link">
                                <span class="app-main-menu__link-span"><?= $mainItem['title']; ?></span>
                                <i class="app-svg button-explore _icon-right"></i>
                            </a>
                            <?php if (!empty($mainItem['columns']) || !empty($mainItem['help'])) : ?>
                                <ul class="_inner-submenu _second-lvl">
                                    <li class="ga-track-parent column-title" data-parent="<?= $mainItem['title']; ?>">
                                        <?= $mainItem['title']; ?>
                                        <div class="back">
                                            <i class="app-svg button-explore _icon-right"></i>
                                            <span>Back</span>
                                        </div>
                                    </li>
                                    <?php if (!empty($mainItem['columns'])) : ?>
                                        <?php foreach ($mainItem['columns'] as $column) : ?>
                                            <li>
                                                <a href="#" class="app-main-menu__link">
                                                    <span class="app-main-menu__link-span"><?= $column['column_title'] ?></span>
                                                    <i class="app-svg button-explore _icon-right"></i>
                                                </a>
                                                <?php if (!empty($column['items'])) : ?>
                                                    <ul class="_inner-submenu _custom-mobile-menu-mattress _last-lvl">
                                                        <li class="ga-track-parent column-title">
                                                            <?= $column['column_title'] ?>
                                                            <div class="back">
                                                                <i class="app-svg button-explore _icon-right"></i>
                                                                <span>Back</span>
                                                            </div>
                                                        </li>
                                                        <?php foreach ($column['items'] as $item) : ?>
                                                            <li>
                                                                <?php
                                                                $urlItem = "#";
                                                                $title = "";
                                                                $subtitle = "";
                                                                if (!empty($item['item'])) {
                                                                    $title = $item['item'][0]->post_title;
                                                                    $urlItem = get_permalink($item['item'][0]->ID);
                                                                }

                                                                if (!empty($item['subtitle'])) {
                                                                    $subtitle = $item['subtitle'];
                                                                }

                                                                if (!empty($item['title'])) {
                                                                    $title = $item['title'];
                                                                }

                                                                if (!empty($item['custom_url'])) {
                                                                    $urlItem = $item['custom_url'];
                                                                }
                                                                ?>
                                                                <a href="<?= $urlItem ?>" class="app-main-menu__link ga-mattress-track" data-title=" <?= $mainItem['title'].' '.$title.' '.$subtitle; ?> ">
                                                                    <?php if (!empty($subtitle)) : ?>
                                                                        <span class="app-main-menu__link-title"><?= $subtitle ?></span>
                                                                    <?php endif; ?>
                                                                    <span class="app-main-menu__link-span"><?= $title ?></span>
                                                                </a>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php endif; ?>
                                            </li>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
                                    <?php if (!empty($mainItem['help'])) : ?>
                                        <?php foreach ($mainItem['help'] as $item) : ?>
                                            <li>
                                                <?php
                                                $urlItem = "#";
                                                $title = "";
                                                if (!empty($item['item'])) {
                                                    $title = $item['item'][0]->post_title;
                                                    $urlItem = get_permalink($item['item'][0]->ID);
                                                }

                                                if (!empty($item['title'])) {
                                                    $title = $item['title'];
                                                }

                                                if (!empty($item['url'])) {
                                                    $urlItem = $item['url'];
                                                }

                                                if (!empty($item['separate'])) {
                                                    continue;
                                                }
                                                ?>
                                                <a href="<?= $urlItem ?>" class="app-main-menu__link ga-mattress-track" data-title=" <?= $mainItem['title'].' '.$title; ?> ">
                                                    <span class="app-main-menu__link-span"><?= $title ?></span>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
                                    <?php if (!empty($mainItem['enable_button'])) : ?>
                                        <li class="_custom-buttons-mobile-container">
                                            <?php
                                            $urlFooter = '';
                                            if (!empty($mainItem['button']['url'])) {
                                                $urlFooter = $mainItem['button']['url'];
                                            }
                                            ?>
                                            <a href="<?= $urlFooter ?>" class="_custom-buttons-container">
                                                <?php if (!empty($mainItem['button']['subtitle'])) : ?>
                                                    <div class="_custom-mattresses-cta-container-head"><?= $mainItem['button']['subtitle'] ?></div>
                                                <?php endif; ?>
                                                <div class="_custom-mattresses-cta-container-info">
                                                    <?php if (!empty($mainItem['button']['title'])) : ?>
                                                        <div class="_custom-mattresses-cta-container-title"><?= $mainItem['button']['title'] ?></div>
                                                    <?php endif; ?>
                                                    <?php if (true) : ?>
                                                        <div class="nav-mobile-arrow-bottom">
                                                            <i class="app-svg button-explore _icon-right"></i>
                                                        </div>
                                                    <?php endif; ?>
                                                </div>
                                            </a>
                                        </li>
                                    <?php endif; ?>
                                </ul>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                    <li class="_custom-buttons-mobile-container">
                        <div  class="_custom-buttons-container">
                            <a class="app-button-reserve _inline mobile-nav-find-store" href="/stockists/">Find a Retailer</a>
                        </div>
                    </li>
                <?php endif; ?>

                <!-- end -->
            </ul>
        </nav>
    </div>

<script>
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    jQuery(function(){
        jQuery('body').append(
            jQuery('#newsletter-signup')
        );
    })
</script>

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
</body>
</html>
