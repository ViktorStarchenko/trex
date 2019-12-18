<?php $headerNavigation = get_page_by_path('header-menu-navigation'); ?>
<footer class="app-footer">
    <div class="app-container">
        <?= do_shortcode("[insert page='footer-navigation' display='templates/footer_navigation.php']"); ?>
    </div>

    <div class="_bottom-footer">
        <div class="_bottom-footer-flex app-container">
            <div class="_left-side">
                <i class="app-svg logo white _default-logo"></i>
            </div>
            <div class="_right-side">
                <a href="/stockists" class="_link">Where to buy</a>
                <a href="/sleep-selector" class="_link">FIND THE perfect bed solution</a>
            </div>
        </div>
    </div>
</footer>

<div id="newsletter-signup" class="app-sleep-selector-modal _size-lg" style="display: none;">

    <a href="" class="app-modal-close"></a>
    <div class="app-sleep-selector-modal__flex">
        <div class="_custom-gform-styles">
        <div class="article-news-box gravity-form _gravity-form-wrapper">
            <?= get_field('newsletter_block_form', $headerNavigation->ID); ?>
        </div>
        </div>
    </div>
</div>

<div id="newsletter-signup-sleep-selector" class="app-sleep-selector-modal _size-lg" style="display: none;">
    <a href="" class="app-modal-close"></a>
    <div class="app-sleep-selector-modal__flex">
        <div class="_custom-gform-styles">
            <div class="article-news-box gravity-form _gravity-form-wrapper">
                <?= get_field('sleep_selector_block_form', $headerNavigation->ID); ?>
            </div>
        </div>
    </div>
</div>

<?php wp_footer(); ?>