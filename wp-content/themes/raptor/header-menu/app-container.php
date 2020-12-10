<?php $navigation = get_field("header_menu", $headerNavigation->ID); ?>

<?php if (!empty($navigation["submenu_logo"])) {
	$submenu_logo = $navigation['submenu_logo'];
} ?>
<?php if (!empty($navigation["main_logo"])) {
	$main_logo = $navigation['main_logo'];
} ?>



<div class="main-header ">
    <div class='main-header-inner header-nav c-sb'>
        <div class="_header-nav">
            <a id="app-mobile-btn" class="app-mobile-btn _header-link app-sm-visible" href="#"><span class="_btn-wrap"><i class="app-svg menu"></i></span></a>
            <a class="_header-link app-searchbox-btn _navigation-mobile-search-visible"><span class="_label"><i class="app-svg search"></i></span></a>
            <a class="main-header__logo" href="<?= home_url(); ?>">
                <img src="<?= $main_logo['url'] ?>" alt="sleepmaker logo">
            </a>
            <nav class="main-header__nav">
                <ul class="header-menu">
					<?php if (!empty($navigation["main_menu"])) : ?>
						<?php foreach ($navigation["main_menu"] as $mainItem) : ?>
							<?php
							$dataClass = "_none";
							$dropDown = "";
							$url = "#";
							if (!empty($mainItem["url"])) {
								$url = $mainItem["url"];
							}
							if (!empty($mainItem["data_class"])) {
								$dataClass = $mainItem["data_class"];
								$dropDown = "_desktop-menu";
							}
							?>
							<?php if (!$mainItem["help_container"]) : ?>
                                <li class="header-menu__item"><a class="header-menu__link <?= $dropDown ?>" data-class="<?= $dataClass ?>" href="<?= $url ?>"><?= $mainItem["title"]; ?></a></li>
							<?php endif; ?>
						<?php endforeach; ?>
					<?php endif; ?>
                </ul>
            </nav>
        </div>

        <div class="_header-nav app-lg-visible _navigation-block">
            <a class="_header-link app-sm-hidden" href="#" data-jq-dropdown="#hdd-1"><span class="_label">Menu <span class="dropdown-arrow _right-icon"></span></span></a>
            <a class="_header-link app-searchbox-btn _navigation-mobile-search-hidden"><span class="_label"><i class="app-svg search"></i></span></a>
            <a class="app-button-reserve _inline _navigation-mobile-find-a-retailer-visible" href="/stockists/">Find a Retailer</a>
            <a class="app-button-reserve _inline _navigation-mobile-small-find-a-retailer-visible" href="/stockists/">
                <svg class="icon pin" width="32" height="32" viewBox="0 0 32 32">
                    <use xlink:href="#pin"></use>
                </svg>
            </a>
            <!--<a class="_header-link app-sm-hidden _desktop-menu _header-link-light" href="#" data-class="_help-and-support-menu"><span class="_label"><?= get_field('help_and_support_title', $headerNavigation->ID)?></span></a>-->
        </div>
        <div class="_header-nav app-lg-hidden main-header__help">
            <div class="main-header__search">
                <a class="app-searchbox-btn app-sm-hidden main-header__search-link"><svg class="icon search" width="26" height="26" viewBox="0 0 26 26">
                        <use xlink:href="#search"></use>
                    </svg></a>
            </div>
			<?php if (!empty($navigation["main_menu"])) : ?>
				<?php foreach ($navigation["main_menu"] as $mainItem) : ?>
					<?php if (!empty($mainItem["help"])) : ?>
                        <a class="app-sm-hidden _help-parent help-padding" href="#" data-class="<?= $mainItem["data_class"] ?>">
                            <div class="_label"><?= $mainItem["title"] ?></div>
                            <div class="_custom-help">
                                <nav class="_horizontal _help-and-support-menu">
									<?php foreach ($mainItem["help"] as $item) : ?>
										<?php
										$url = "";
										$title = "";

										if (!empty($item["item"])) {
											$title = $item["item"][0]->post_title;
											$url = get_permalink($item["item"][0]->ID);
										}

										if (!empty($item["title"])) {
											$title = $item["title"];
										}

										if (!empty($item["url"])) {
											$url = $item["url"];
										}
										?>
										<?php if (!empty($item["separate"])) : ?>
                                            <div class="_help-separate"></div>
										<?php else: ?>
                                            <a href="<?= $url ?>"><?= $title ?></a>
										<?php endif; ?>
									<?php endforeach; ?>
                                </nav>
                            </div>
                        </a>
					<?php endif; ?>
				<?php endforeach; ?>
			<?php endif; ?>
			<?php if (isset($isCocoon)): ?>
                <a href="#retailers" class="where-buy" style="font-family: sans-serif;font-size: 16px;">WHERE TO BUY</a>
			<?php else :  ?>
                <a class="app-button-reserve _inline _navigation-mobile-find-a-retailer-hidden" href="/stockists/">Find a Retailer</a>
			<?php endif; ?>
        </div>

        <nav class="header-search-avtocomplite" style="display: none;">
            <form class="article__search-form-item" action="/" method="get" id="search-autocomplete-form">
                <i class="app-svg search"></i>
                <input type="text" value="" name="s"/>
                <button class="app-searchbox-close"><i class="app-search-close"></i></button>
            </form>
            <div class="app-page-searchbox" id="autocomplete">
				<?php /*
                            <div class="app-sr-item__product">product</div>
                            <div class="app-sr-item clearfix">
                                <div class="app-sr-item__img"><img src="/wp-content/themes/raptor/img/sr-item-1.jpg" alt="" /></div>
                                <div class="app-sr-item__content">
                                    <div class="app-sr-item__title">Miracoil Classic</div>
                                </div>
                            </div>
                            <div class="app-sr-item clearfix">
                                <div class="app-sr-item__img"><img src="/wp-content/themes/raptor/img/sr-item-4.jpg" alt="" /></div>
                                <div class="app-sr-item__content">
                                    <div class="app-sr-item__title">Miracoil Spring Unit</div>
                                </div>
                            </div>

                            <div class="app-sr-item__product">Sleep Guide</div>
                            <div class="app-sr-item clearfix">
                                <div class="app-sr-item__img"><img src="/wp-content/themes/raptor/img/sr-item-3.jpg" alt="" /></div>
                                <div class="app-sr-item__content">
                                    <div class="app-sr-item__title">Mattress Reviews: SleepyHead Miracoil is the best bed for backs</div>
                                </div>
                            </div>

                            <div class="app-sr-item clearfix">
                                <div class="app-sr-item__img"><img src="/wp-content/themes/raptor/img/sr-item-2.jpg" alt="" /></div>
                                <div class="app-sr-item__content">
                                    <div class="app-sr-item__title">Miracoil Ask Dad Eye Mask Giveaway</div>
                                </div>
                            </div>

                            <div class="app-sr-list">
                                <div class="app-sr-link">
                                    <div class="app-sr-item__title">Australian Physiotherapy Association <i class="app-svg button-reserve _icon-right"></i></div>
                                </div>
                                <div class="app-sr-link">
                                    <div class="app-sr-item__title">Register your Sales <i class="app-svg button-reserve _icon-right"></i></div>
                                </div>
                                <div class="app-sr-link">
                                    <div class="app-sr-item__title">SleepyHead History <i class="app-svg button-reserve _icon-right"></i></div>
                                </div>
                                <div class="app-sr-link">
                                    <div class="app-sr-item__title">Base options <i class="app-svg button-reserve _icon-right"></i></div>
                                </div>
                                <div class="app-sr-link">
                                    <div class="app-sr-item__title">Promotion Details <i class="app-svg button-reserve _icon-right"></i></div>
                                </div>
                            </div>*/ ?>
            </div>
        </nav>
    </div>
</div>
<div class="sub-header" style="display: none">
    <div class="sub-header-inner">
        <div class="sub-header__logo">
            <div class="sub-header-logo"><img src="<?= $submenu_logo['url'] ?? ''?>" alt="miracoil"></div>
            <?php $obj = get_queried_object();
                  $subtext = 'For Back Care';
                 if (!empty(get_field('header_text', $obj->ID))) {
                     $subtext = get_field('header_text', $obj->ID);
                 }
            ?>
            <div class="sub-header-title"><?= $subtext; ?></div>
        </div>
        <div class="sub-header__nav">
            <ul class="sub-header-nav">
				<?php if (!empty($navigation["submenu_items"])) : ?>
					<?php foreach ($navigation["submenu_items"] as $item) : ?>
                        <li class="sub-header-nav__item"><a class="sub-header-nav__link js-scroll-to" href="" data-href="<?= $item['link']['url'] ?? ''?>"><?= $item['link']['title'] ?? ''?></a></li>
					<?php endforeach; ?>
				<?php endif; ?>
            </ul>
        </div>
    </div>
</div>
