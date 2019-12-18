<?php
/*
 * Template Name: Mattresses [Cocoon Beauty Success]
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

<div class="app-wrapper page-success">

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
                    <h2 class="-xl centered"><?= get_field('header_text') ?></h2>
                </div>
                <div class="m-hero__bg" style="background-image: url(/wp-content/themes/raptor/img/cocoon-bg-img.png)" id="intro-bg"></div>
            </div>
        </section>

        <section class="m-content -two-column -bg-white">
            <div class="m-content__container -wide">
                <div class="m-content__container-column">
                    <div class="-wrapper">
                        <?php echo the_content() ?>
                    </div>
                </div>
            </div>
        </section>
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
                    <?php foreach ($storesAndPromotionsPages as $page) : ?>
                        <li>
                            <a href="<?php the_permalink($page); ?>" class="app-main-menu__link">
                                <?php $pageImage = get_field('icon', $page->ID); ?>
                                <?php if (!empty($pageImage)): ?>
                                    <span class="app-main-menu__link-icon"><i class="app-svg"><img src="<?= $pageImage['url']; ?>" alt="<?= $pageImage['alt']; ?>"></i></span>
                                <?php endif; ?>
                                <span class="app-main-menu__link-span"><?= get_the_title($page); ?></span>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <li>

                <?php
                    $sleepGuideSubPages = get_pages([
                        'child_of' => $sleepGuidePage->ID,
                        'sort_column' => 'menu_order'
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
                <a href="#" class="app-main-menu__link"><span class="app-main-menu__link-span">Help and support</span></a>
                <ul>
                    <?php foreach ($helpAndSupportPages as $page) : ?>
                    <li>
                        <a href="<?= get_permalink($page->ID); ?>" class="app-main-menu__link">
                            <?php $pageImage = get_field('icon', $page->ID); ?>
                            <?php if (!empty($pageImage)): ?>
                                <span class="app-main-menu__link-icon"><i class="app-svg"><img src="<?= $pageImage['url']; ?>" alt="<?= $pageImage['alt']; ?>"/></i></span>
                            <?php endif; ?>
                             <span class="app-main-menu__link-span"><?= $page->post_title ?></span>
                        </a>
                    </li>
                    <?php endforeach; ?>
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
