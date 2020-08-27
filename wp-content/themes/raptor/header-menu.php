<?php $headerNavigation = get_page_by_path('header-menu-navigation'); ?>
<?php $navigation = get_field("header_menu", $headerNavigation->ID); ?>
<?php if (!empty($navigation["top_bar"])) {
	$top_banner = $navigation['top_bar'];
} ?>
<div class="top-banner-wrap js-top-promo-wrap">
    <div class="top-banner js-top-promo">
        <div class="top-banner__inner">
            <button class="top-banner__close js-top-promo-close"><span class="top-banner__close-icon">
							<svg class="icon plus" width="30" height="30" viewBox="0 0 30 30">
								<use xlink:href="#plus"></use>
							</svg></span></button>
            <div class="top-banner__content">
                <div class="top-banner__title"><?= $top_banner['title'] ?? ''?></div>
                <div class="top-banner__text"><?= $top_banner['text'] ?? ''?></div>
            </div><a class="bttn bttn--border top-banner__button" href="<?= $top_banner['cta']['url'] ?? ''?>"><?= $top_banner['cta']['title'] ?? ''?></a>
        </div>
    </div>
</div>
<header id="header" class="app-header">
	<?php include(locate_template('header-menu/variables.php')); ?>
	<?php include(locate_template('header-menu/app-container.php')); ?>
	<?php include(locate_template('header-menu/dropdown.php')); ?>
	<?php include(locate_template('header-menu/navigation.php')); ?>
</header>