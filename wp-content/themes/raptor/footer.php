<?php
$footerPage = get_page_by_path('footer-navigation');
$headerNavigation = get_page_by_path('header-menu-navigation');
$navigation = get_field("header_menu", $headerNavigation->ID);
$helpAndSupportPages = get_field('help_and_support_pages', $headerNavigation->ID);
$storesAndPromotionsPages = get_field('stores_and_promotions_pages', $headerNavigation->ID);
?>
<footer class="footer">
    <?= do_shortcode("[insert page='footer-navigation' display='templates/footer_navigation.php']"); ?>

    <!-- <div class="_bottom-footer">
		 <div class="_bottom-footer-flex app-container">
			 <div class="_left-side">
				 <i class="app-svg logo white"></i>
			 </div>
			 <div class="_right-side">
				 <a href="/stockists" class="_link">Where to buy</a>
				 <a href="/sleep-selector" class="_link">FIND THE perfect bed solution</a>
			 </div>
		 </div>
	 </div>-->
</footer>
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



<div id="newsletter-signup" class="app-sleep-selector-modal _size-lg">

    <a href="" class="app-modal-close"></a>
    <div class="app-sleep-selector-modal__flex">
        <div class="_custom-gform-styles">
            <div class="article-news-box gravity-form _gravity-form-wrapper">
                <?= get_field('newsletter_block_form', $headerNavigation->ID); ?>
            </div>
        </div>
    </div>
</div>
<div class="modal-container is-hidden js-modal-container">
    <div class="modals is-hidden" id="modal-html" style="max-width:1300px">
        <div class="modals__header">
            <button class="modal-close-btn js-modal-close js-menu-mob-close">✕</button>
        </div>
        <div class="modals__body js-modal-set-html"></div>
    </div>
</div>
<?php if (get_field('is_floating_footer_enabled')) : ?>
    <?php
    $url = get_field('floating_footer_url') ? : '/stockists';
    $text = get_field('floating_footer_text') ? : 'FIND A STORE';
    ?>
    <div class="shop-floating-block">
        <a href="/"><i class="app-svg logo white _default-logo"></i></a>
        <div class="_center">
            <a href="<?= $url; ?>" class="app-button-white _inline"><?= $text; ?> <span class="app-svg button-explore _icon-right"></span></a>
        </div>
    </div>
<?php endif; ?>

</body>
<?php wp_footer(); ?>

<script>
    jQuery(".technology-filter-button").on("click",function(){

        jQuery('.alm-listing').masonry().masonry('destroy');
        jQuery('.alm-listing').masonry().masonry('appended');

    });

</script>
</html>