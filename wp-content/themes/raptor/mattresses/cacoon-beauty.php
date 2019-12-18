<?php
/*
 * Template Name: Mattresses [Cocoon Beauty]
 * Template Post Type: page
 */

add_action('wp_footer', 'add_cocoon_js');
add_action('wp_footer', 'add_cocoon_beauty_assets');
add_filter('post_class','desktop');
add_filter('show_admin_bar', '__return_false');
$footerPage = get_page_by_path('footer-navigation');
?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="<?= get_template_directory_uri() ?>/img/favicon-cocoon.png">
    <?php wp_head(); ?>
<style>
.header-nav .logo {
    margin-right: 0px;
}
</style>
</head>


<body class="desktop page-cocoon">

<div class="app-wrapper">

    <section id="container" class="app-wrapper__flex">
        <header id="header" class="header--fixed headroom cacoon-baeuty">
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

            <section class="page-hero__section">
                <div id="hero" class="m-hero -page">
                    <div class="m-hero__intro-text -show">
                        <h1 class="-xl centered">
                            <?php echo get_field('header_text') ?>
                        </h1>
                    </div>
                    <div class="m-hero__bg" style="background-image: url(/wp-content/themes/raptor/img/cocoon-bg-img.png)" id="intro-bg"></div>
                </div>
            </section>

            <section class="m-content -two-column -bg-white">
                <div class="m-content__container -wide">
                    <div class="m-content__container-column">
                        <div class="-wrapper">
                            <h3>
                                <?php echo get_field('heading_1') ?>
                            </h3>
                            <br>
                            <p><?php echo get_field('text_block_1') ?></p>
                        </div>
                    </div>
                    <div class="m-content__container-column">
                        <div class="-wrapper">
                            <p><?php echo get_field('text_block_2') ?></p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="separator">&nbsp;</div>
            <div class="c-form -bg-white">
                <div class="c-form__wrapper">
                    <div action="" data-component="form-float-label">

                    <?php /*
                        <fieldset>
                            <div class="c-form__row">
                                <div class="c-form__left">
                                    <h4 class="c-form__title">Your Details</h4>
                                </div>
                                <div class="c-form__right">
                                    <div class="c-form__group">
                                        <span class="c-form__label">E-mail Address<span class="c-form__required"> *</span></span><input name="ctl00$plcZones$lt$PlaceHolderMain$SassyPDFDownloadForm$txtEmailAddress" type="text" id="ctl00_plcZones_lt_PlaceHolderMain_SassyPDFDownloadForm_txtEmailAddress" class="c-from__control email-address">
                                    </div>
                                    <div class="c-form__field-error">
                                        <span id="ctl00_plcZones_lt_PlaceHolderMain_SassyPDFDownloadForm_valtxtEmailAddress" style="color:Red;display:none;">Please enter your email address.</span><span id="ctl00_plcZones_lt_PlaceHolderMain_SassyPDFDownloadForm_regvaltxtEmailAddress" style="color:Red;display:none;">Please enter a valid email address.</span>
                                    </div>
                                </div>
                            </div>

                            <div class="c-form__row">
                                <div class="c-form__left">
                                    <label class="c-form__title -label">Communication Preferences</label>
                                </div>
                                <div class="c-form__right">
                                    <div class="c-form__group -checkbox">
                                        <label class="c-form__control-text">
                                            Yes, I'm happy to occasionally receive information on Sleep Tips and Promotions. View our <a href="" target="_blank">Privacy Policy</a>
                                            <input id="ctl00_plcZones_lt_PlaceHolderMain_SassyPDFDownloadForm_chkSubscribe" type="checkbox" name="ctl00$plcZones$lt$PlaceHolderMain$SassyPDFDownloadForm$chkSubscribe">
                                            <div class="-indicator"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="c-form__footer">
                                <a id="ctl00_plcZones_lt_PlaceHolderMain_SassyPDFDownloadForm_btnSubmit" class="c-btn -rounded -bg-brown -with-chevron" href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$plcZones$lt$PlaceHolderMain$SassyPDFDownloadForm$btnSubmit", "", true, "FormSubmission", "", false, true))'>
                                    SUBMIT <span class=" c-icon -chevron"></span>
                                </a>
                            </div>
                        </fieldset>*/ ?>

                        <?= gravity_form( 2, false, false, false, '', false ); ?>

                    </div>

                </div>
            </div>




        <?php get_footer('unclosed') ?>

        </div>

        <div id="bp-desktop"></div>

    </section>
</div>


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

    <nav>
        <ul>
            <li>
                <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= $matressesCategory->name; ?></span></a>
                <ul>
                    <?php foreach ($matressesPosts as $matresses) : ?>
                        <li>
                            <a href="<?= get_permalink($matresses); ?>" class="app-main-menu__link">
                                <span class="app-main-menu__link-title"><?php the_field('home_page_top_text', $matresses->ID); ?></span>
                                <span class="app-main-menu__link-span"><?= $matresses->post_title ?></span>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <li>

                <?php if ($isCollectionsEnabled): ?>
                    <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= $sleepCollectionsCategory->name; ?></span></a>
                <?php else: ?>
                    <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= ucfirst($beddingPage->post_name)?></span></a>
                <?php endif; ?>

                <?php if ($isCollectionsEnabled): ?>
                    <ul>
                        <?php foreach ($sleepCollectionsSubcategories as $sleepCollectionsSubcategory) : ?>
                            <?php $sleepCollectionsSubcategoryPosts = get_posts([
                                'category'    => $sleepCollectionsSubcategory->term_id,
                                'orderby'     => 'date',
                                'order'       => 'ASC',
                                'post_status' => 'publish',
                            ]); ?>
                            <?php foreach ($sleepCollectionsSubcategoryPosts as $sleepCollectionsSubcategoryPost): ?>
                                <li>
                                    <a href="<?= get_permalink($sleepCollectionsSubcategoryPost); ?>" class="app-main-menu__link">
                                        <span class="app-main-menu__link-title"><?php the_field('type', $sleepCollectionsSubcategoryPost->ID); ?></span>
                                        <span class="app-main-menu__link-span"><?= $sleepCollectionsSubcategoryPost->post_title ?></span>
                                    </a>
                                </li>
                            <?php endforeach ?>

                        <?php endforeach; ?>
                    </ul>
                <?php else : ?>
                    <ul>
                        <?php $beddingSubPages = get_field('subpages', $headerNavigation->ID); ?>
                        <?php foreach ($beddingSubPages as $beddingSubPage): ?>
                            <li>
                                    <a href="<?= the_permalink($beddingSubPage) ?>" class="app-main-menu__link">
                                        <span class="app-main-menu__link-title"><?= ucfirst($beddingSubPage->post_name) ?></span>
                                    </a>
                            </li>
                        <?php endforeach ?>
                    </ul>
                <?php endif; ?>
            </li>
            <li>
                <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= get_field('stores_and_promotions_title', $headerNavigation->ID)?></span></a>
                <ul>
                    <li>
                        <a href="<?= get_category_link($specialOffersCategory->cat_ID); ?>" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Special offers</span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php the_field('sleep_guide_link', $headerNavigation->ID); ?>" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Shopping guide</span>
                        </a>
                    </li>
                    <li>
                        <a href="/reviews" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Reviews</span>
                        </a>
                    </li>
                    <li>
                        <a href="/stockists" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Find a store</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>

                <?php
                $sleepGuideSubPages = get_pages([
                    'child_of' => $sleepGuidePage->ID,

                ]);
                ?>
                <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= $sleepGuidePage->post_title; ?></span></a>
                <ul>
                    <?php foreach ($sleepGuideSubPages as $page) : ?>
                        <li>
                            <a href="<?= get_permalink($page->ID); ?>" class="app-main-menu__link">
                                <span class="app-main-menu__link-icon"><i class="app-svg"><img src="<?= get_the_post_thumbnail_url($page->ID); ?>"  alt="<?= get_post_meta(get_post_thumbnail_id($page->ID), '_wp_attachment_image_alt', true); ?>"></i></span>
                                <span class="app-main-menu__link-span"><?= $page->post_title ?></span>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </li>

                <li>

                    <?php if (empty($aboutSubPages)) : ?>
                        <a href="<?= get_field('our_story_cta_link', $headerNavigation->ID)?>" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= get_field('our_story_title', $headerNavigation->ID)?></span></a>
                    <?php else : ?>
                        <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= get_field('our_story_title', $headerNavigation->ID)?></span></a>
                    <?php endif; ?>

                    <?php if ($aboutSubPages): ?>
                        <ul>
                            <li>
                                <a href="<?= get_permalink($aboutPage); ?>" class="app-main-menu__link">
                                    <span class="app-main-menu__link-icon"><i class="app-svg"><img src="<?= ($icon = get_field('icon', $aboutPage)) ? $icon : '/wp-content/themes/raptor/img/nav-store.svg'; ?>"></i></span>
                                    <span class="app-main-menu__link-span"><?= $aboutPage->post_title; ?></span>
                                </a>
                            </li>

                            <?php foreach ($aboutSubPages as $page) : ?>
                                <li>
                                    <a href="<?= get_permalink($page); ?>" class="app-main-menu__link">
                                        <span class="app-main-menu__link-icon"><i class="app-svg"><img src="<?= ($icon = get_field('icon', $page)) ? $icon : '/wp-content/themes/raptor/img/nav-store.svg'; ?>"></i></span>
                                        <span class="app-main-menu__link-span"><?= $page->post_title; ?></span>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </li>
            <li>
                <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span"><?= get_field('help_and_support_title', $headerNavigation->ID)?></span></a>
                <ul>
                    <li>
                        <a href="/care-maintenance/warranty-registration" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Register your mattress</span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" class="app-main-menu__link">
                            <span class="app-main-menu__link-span">Contact Us</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li><a href="<?= get_field('facebook_cta_url', $footerPage->ID); ?>" class="app-main-menu__half-link">
                    <span class="app-main-menu__link-icon"><i class="app-svg mobile-menu-facebook"></i></span>
                    <span class="app-main-menu__link-span"><?= get_field('facebook_cta_text', $footerPage->ID); ?></span>
                </a></li>
            <li><a href="javascript:void(0);" class="app-main-menu__half-link js-signup-newsletter-popup">
                    <span class="app-main-menu__link-icon"><i class="app-svg mobile-menu-mail"></i></span>
                    <span class="app-main-menu__link-span"><?= get_field('subscribe_newsletter_cta_text', $footerPage->ID); ?></span>
                </a></li>
        </ul>
    </nav>
</div>
<script>
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
</script>
</body>
</html>
