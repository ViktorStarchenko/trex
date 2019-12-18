<?php /* Template Name: Footer Navigation */ ?>
<?php
$postPage = get_page_by_path('footer-navigation');
$mattressesPages = get_field('mattresses_pages', $postPage->ID);
$collectionsPages = get_field('collections_pages', $postPage->ID);
$accessoriesPages = get_field('accessories_pages', $postPage->ID);
$sleepGuidePages = get_field('sleep_guides_pages', $postPage->ID);
$customerCarePages = get_field('customer_care_pages', $postPage->ID);
$websitePages = get_field('this_website_pages', $postPage->ID);
$externalPages = get_field('external_pages', $postPage->ID);
$storeAndPromotionsPages = get_field('stores_and_promotions_pages', $postPage->ID);
$isCollectionsEnabled = get_option('is_collections_enabled');

// show yoast breadcrumb
if ( function_exists('yoast_breadcrumb') ) {
    echo '<div class="_social"><div class="app-container">';
    yoast_breadcrumb('<p id="breadcrumbs">','</p>');
    echo '</div></div>';
}
?>

<div class="app-footer-logo fmobile">
    <i class="app-svg logo _default-logo"></i>
</div>
<div class="_social fmobile">
    <div class="app-container">
        <a href="<?= get_field('facebook_cta_url', $postPage->ID); ?>" class="_social-link"><i class="fa fa-facebook-official"></i>
            <span class="app-link-animation"><?= get_field('facebook_cta_text', $postPage->ID); ?></span></a>
        <a href="javascript:void(0);" class="_social-link js-signup-newsletter-popup"><i class="fa fa-envelope-o"></i>
            <span class="app-link-animation"><?= get_field('subscribe_newsletter_cta_text', $postPage->ID); ?></span></a>
        <a href="<?= get_field('get_in_touch_cta_url', $postPage->ID); ?>" class="_social-link"><i class="fa fa-phone"></i>
            <span class="app-link-animation"><?= get_field('get_in_touch_cta_text', $postPage->ID); ?></span></a>
    </div>
</div>

<!-- Menu Starts -->
<div class="_collapsed-menu">

    <!-- Mattresses Begin -->
    <?php if ($mattressesPages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('mattresses_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseOurMattresses" aria-expanded="false" aria-controls="collapseOurMattresses"><?= $parent; ?></a>
            <div class="_collapsed-content collapse" id="collapseOurMattresses">
                <ul>
                    <?php foreach ($mattressesPages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <!-- Mattresses End -->

    <?php if ($collectionsPages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('collections_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseCollections" aria-expanded="false" aria-controls="collapseCollections"> <?= $parent ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseCollections">
                <ul>
                    <?php foreach ($collectionsPages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <?php if ($isCollectionsEnabled) : ?>
    <?php if ($accessoriesPages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('collections_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseAccessories" aria-expanded="false" aria-controls="collapseAccessories"> <?= $parent ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseAccessories">
                <ul>
                    <?php foreach ($accessoriesPages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <?php endif; ?>
    <!-- Store And Promotions Start-->
    <?php if ($storeAndPromotionsPages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('stores_and_promotions_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseStoresPromotions" aria-expanded="false" aria-controls="collapseStoresPromotions"> <?= $parent; ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseStoresPromotions">
                <ul>
                    <?php foreach ($storeAndPromotionsPages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <!-- Store And Promotions End-->


    <!-- Sleep Guide Start-->
    <?php if ($sleepGuidePages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('sleep_guides_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseSleepGuide" aria-expanded="false" aria-controls="collapseStoresPromotions"> <?= $parent; ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseSleepGuide">
                <ul>
                    <?php foreach ($sleepGuidePages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <!-- Sleep Guide End-->


    <!-- Help and Support Start-->
    <?php if ($customerCarePages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('customer_care_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseHelpSupport" aria-expanded="false" aria-controls="collapseStoresPromotions"> <?= $parent ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseHelpSupport">
                <ul>
                    <?php foreach ($customerCarePages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <!-- Help and Support End-->


    <!-- Website Start -->
    <?php if ($websitePages) : ?>
        <div class="_collapsed-block">
            <?php $parent = get_field('this_website_title', $postPage->ID); ?>
            <a class="_collapsed-title collapsed" data-toggle="collapse" href="#collapseWebsite" aria-expanded="false" aria-controls="collapseWebsite"> <?= $parent; ?>
            </a>
            <div class="_collapsed-content collapse" id="collapseWebsite">
                <ul>
                    <?php foreach ($websitePages as $page) : ?>
                        <li><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Mobile Footer" data-parent="<?= $parent; ?>" ><?= get_the_title($page); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    <?php endif; ?>
    <!-- Website End -->
</div>
<!-- Menu End -->

<div class="_rights fmobile">
    <div class="app-container">
        <div class="_copyright">
            <?php the_field('copyright', $postPage->ID); ?>
        </div>
        <?php if ($externalPages) : ?>
            <nav>
                <?php foreach ($externalPages as $page) : ?>
                    <a href="<?= $page['url']; ?>" target="_blank"><?= $page['title']; ?></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
</div>


<div class="app-sm-hidden">
    <div class="_social">
        <div class="app-container">
            <i class="app-svg logo _default-logo"></i>
            <a href="<?= get_field('facebook_cta_url', $postPage->ID); ?>" class="_social-link"><i class="fa fa-facebook-official"></i>
                <span class="app-link-animation"><?= get_field('facebook_cta_text', $postPage->ID); ?></span></a>
            <a href="<?= get_field('get_in_touch_cta_url', $postPage->ID); ?>" class="_social-link"><i class="fa fa-phone"></i>
                <span class="app-link-animation"><?= get_field('get_in_touch_cta_text', $postPage->ID); ?></span></a>
            <a href="javascript:void(0);" class="_social-link js-signup-newsletter-popup"><i class="fa fa-envelope-o"></i>
                <span class="app-link-animation"><?= get_field('subscribe_newsletter_cta_text', $postPage->ID); ?></span></a>
        </div>
    </div>
    <div class="_menu app-container">
        <?php if ($mattressesPages) : ?>
            <nav>
                <?php $parent = get_field('mattresses_title', $postPage->ID); ?>
                <div class="_title"><?= $parent; ?></div>
                <?php foreach ($mattressesPages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>"  ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php if ($collectionsPages) : ?>
            <nav>
                <?php $parent = get_field('collections_title', $postPage->ID); ?>
                <div class="_title"><?= $parent ?></div>
                <?php foreach ($collectionsPages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php if ($isCollectionsEnabled) : ?>
        <?php if ($accessoriesPages) : ?>
            <nav>
                <?php $parent = get_field('collections_title', $postPage->ID); ?>
                <div class="_title"><?= $parent; ?></div>
                <?php foreach ($accessoriesPages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php endif; ?>
        <?php if ($storeAndPromotionsPages) : ?>
            <nav>
                <?php $parent = get_field('stores_and_promotions_title', $postPage->ID); ?>
                <div class="_title"><?= $parent; ?></div>
                <?php foreach ($storeAndPromotionsPages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php if ($sleepGuidePages) : ?>
            <nav>
                <?php $parent = get_field('sleep_guides_title', $postPage->ID); ?>
                <div class="_title"><?= $parent ?></div>
                <?php foreach ($sleepGuidePages as $page) : ?>
                    <a href="<?= get_permalink($page->ID); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= $page->post_title; ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php if ($customerCarePages) : ?>
            <nav>
                <?php $parent = get_field('customer_care_title', $postPage->ID); ?>
                <div class="_title"><?= $parent ?></div>
                <?php foreach ($customerCarePages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
        <?php if ($websitePages) : ?>
            <nav>
                <?php $parent = get_field('this_website_title', $postPage->ID); ?>
                <div class="_title"><?= $parent ?></div>
                <?php foreach ($websitePages as $page) : ?>
                    <a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
    <div class="_rights">
        <div class="app-container">
            <?php the_field('copyright', $postPage->ID); ?>
            <?php if ($externalPages) : ?>
                <nav>
                    <?php foreach ($externalPages as $page) : ?>
                        <a href="<?= $page['url']; ?>" target="_blank"><?= $page['title']; ?></a>
                    <?php endforeach; ?>
                </nav>
            <?php endif; ?>
        </div>
    </div>
</div>