<?php
/*
 * Template Name: Sleep Selector Page V2
 * Template Post Type: page
 */

?>

<?php get_header(); ?>

 <!-- These files always load from our main server-->

	<script src="https://selector.thecomfortgroup.co/pub/media/js/sleepmaker-v2.js"></script>
	<script src="https://selector.thecomfortgroup.co/pub/media/js/sleepsaas.js"></script>
	<script src="https://selector.thecomfortgroup.co/pub/media/js/main.js"></script>

	<!-- These files always load from the local web site-->
	<link rel="stylesheet" href="/assets/css/vendor.css">
	<link rel="stylesheet" href="/assets/css/style.css">
	<link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">

<div id="tcg_selector_container" style="margin: 0px !important; margin-top: 40px !important;"></div>
<script>
tcg_init_selector('70303aa4960c853fc06555b592f7160d', 2);

</script>
<?php if(get_field('sleep_selector_block_form', 5598)) : ?>
<div class="js-signup-newsletter"></div>
<?php endif; ?>


<?php $headerNavigation = get_page_by_path('sleep-selector'); ?>
    <div class="selector-brand-campaign"></div>

<?php if (get_field('start_promotion')=="yes") : ?>
    <div id="brand-campaign-popup" class="brand-campaign-popup app-sleep-selector-modal _size-lg" style="display: none;">

        <a href="" class="app-modal-close"></a>
        <div class="app-sleep-selector-modal__flex">
            <div class="_custom-gform-styles">
                <div class="article-news-box gravity-form _gravity-form-wrapper">
                    <?= get_field('brand-campaign-popup-block-form', $headerNavigation->ID); ?>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="popup-sleep-selector-trigger" style="color: #fff;">.</a>
<?php endif;?>


<?php get_footer();
