<?php
/*
 * Template Name: Sleep Selector Page V2
 * Template Post Type: page
 */

?>
<?php get_header(); ?>
<?php $headerNavigation = get_page_by_path('header-menu-navigation'); ?>
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
<?php if(get_field('brand-campaign-popup-block-form', 5598)) : ?>
    <div class="js-signup-newsletter"></div>
<?php endif; ?>
<?php get_footer();
