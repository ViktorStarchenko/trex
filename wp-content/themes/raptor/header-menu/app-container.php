<?php $navigation = get_field("header_menu", $headerNavigation->ID); ?>

<?php if (!empty($navigation["submenu_logo"])) {
	$submenu_logo = $navigation['submenu_logo'];
} ?>



<div class="main-header ">
    <div class='main-header-inner header-nav c-sb'>
        <div class="_header-nav">
            <a id="app-mobile-btn" class="app-mobile-btn _header-link app-sm-visible" href="#"><span class="_btn-wrap"><i class="app-svg menu"></i></span></a>
            <a class="_header-link app-searchbox-btn _navigation-mobile-search-visible"><span class="_label"><i class="app-svg search"></i></span></a>
            <a class="main-header__logo" href="<?= home_url(); ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="26" viewBox="0 0 150 26">
                    <g fill="currentColor">
                        <path d="M12.581 11.011c-1.124-.742-2.694-1.06-4.2-1.379-1.316-.276-2.695-.551-3.713-1.124-.998-.53-1.337-1.125-1.337-2.334 0-2.44 2.016-3.289 3.734-3.289 2.525 0 3.883 1.125 4.265 3.586l.02.191h2.27v-5.58h-1.654l-.064.106c-.02.021-.297.53-.509 1.443C10.396 1.358 8.953.764 6.895.764c-3.14 0-6.3 1.782-6.3 5.77 0 2.334.826 3.735 2.757 4.732.976.51 2.44.827 3.862 1.146 1.464.34 2.864.657 3.543 1.103.87.551 1.21 1.23 1.21 2.419 0 3.267-3.502 3.521-4.562 3.521-2.95 0-4.583-1.379-5.008-4.222l-.02-.19H0v6.3h1.676l.064-.105c.021-.022.34-.658.615-1.867.87 1.145 2.461 2.333 5.304 2.333 4.477 0 7.15-2.27 7.15-6.089 0-2.121-.721-3.607-2.228-4.604M21.556 19.71c-1.273 0-1.4-.106-1.4-1.252V0h-5.092v1.93h.424c1.337 0 1.612.128 1.612 1.55v15.106c0 .976-.127 1.124-1.082 1.124h-.954v1.634h7.32V19.71h-.828zM29.64 7.702c2.29 0 3.436 1.506 3.436 4.497v.213h-7.425c.148-3.034 1.548-4.71 3.988-4.71m0-2.037c-4.222 0-7.17 3.267-7.17 7.977 0 5.028 2.863 8.041 7.68 8.041 2.779 0 4.625-.955 5.388-1.782l.064-.064v-1.74l-.34.234c-.827.573-2.63 1.146-4.434 1.146-3.48 0-4.985-1.485-5.113-5.135h10.057l.042-.17c.149-.7.234-1.379.234-2.164-.064-3.967-2.44-6.343-6.408-6.343M44.427 7.702c2.292 0 3.458 1.506 3.458 4.497v.213H40.46c.127-3.034 1.527-4.71 3.967-4.71m0-2.037c-4.222 0-7.171 3.267-7.171 7.977 0 5.028 2.864 8.041 7.68 8.041 2.78 0 4.626-.955 5.39-1.782l.063-.064v-1.74l-.34.234c-.848.573-2.63 1.146-4.455 1.146-3.48 0-4.986-1.485-5.113-5.135h10.056l.043-.17c.148-.7.212-1.379.212-2.164-.021-3.967-2.397-6.343-6.365-6.343M64.837 12.751v1.125c0 3.882-1.251 5.77-3.861 5.77-3.225 0-4.668-3.034-4.668-6.025v-.615c0-2.525 1.74-5.135 4.668-5.135 2.567 0 3.861 1.634 3.861 4.88m-3.034-7.086c-2.524 0-4.519 1.21-5.495 3.267-.106-1.464-.382-2.673-.403-2.737l-.042-.17h-4.604v1.931h.445c1.337 0 1.613.127 1.613 1.549v13.6c0 .976-.127 1.124-1.082 1.124h-.955v1.634h7.553v-1.634h-1.06c-1.359 0-1.401-.17-1.401-.912v-4.625c.976 1.91 2.822 2.97 5.262 2.97 3.946 0 6.492-3.225 6.492-8.253-.064-4.774-2.461-7.744-6.323-7.744"/>
                        <path d="M91.38 3.055h1.124V1.061H85.48l-5.177 16.655L75.212 1.06h-7.129v1.994h1.125c1.04 0 1.4.212 1.4 1.422v13.6c0 1.209-.36 1.42-1.4 1.42h-1.125v1.825h7.702v-1.824h-1.146c-1.4 0-1.718-.212-1.718-1.21V3.969l5.474 17.354h2.949l5.495-17.397v14.364c0 1.018-.276 1.209-1.719 1.209h-1.145v1.824h8.529v-1.824h-1.125c-1.04 0-1.4-.212-1.4-1.422v-13.6c0-1.209.382-1.42 1.4-1.42M127.765 7.702c2.292 0 3.437 1.506 3.437 4.497v.213h-7.425c.127-3.034 1.527-4.71 3.988-4.71m0-2.037c-4.222 0-7.17 3.267-7.17 7.977 0 5.028 2.863 8.041 7.68 8.041 2.779 0 4.625-.955 5.367-1.782l.064-.064v-1.74l-.34.234c-.848.573-2.63 1.146-4.455 1.146-3.48 0-4.986-1.485-5.113-5.135h10.056l.043-.17c.148-.7.233-1.379.233-2.164-.021-3.967-2.397-6.343-6.365-6.343M144.23 5.813c-1.613 0-3.395 1.04-4.287 3.289-.084-1.549-.403-2.843-.424-2.907l-.042-.17h-4.604v1.931h.424c1.337 0 1.612.127 1.612 1.549v9.08c0 .977-.127 1.125-1.082 1.125h-.954v1.634h7.977V19.71h-1.358c-1.336 0-1.527-.148-1.527-1.252v-3.691c0-3.204 1.421-6.26 3.034-6.641.19.976.785 1.527 1.633 1.527 1.061 0 1.761-.72 1.761-1.803.021-1.252-.827-2.037-2.164-2.037"/>
                        <path d="M146.648 21.132c-1.422 0-2.504-1.082-2.504-2.525 0-1.443 1.082-2.546 2.504-2.546 1.443 0 2.482 1.082 2.482 2.546 0 1.464-1.04 2.525-2.482 2.525m0-5.686c-1.761 0-3.204 1.421-3.204 3.14 0 1.76 1.4 3.14 3.204 3.14 1.782 0 3.161-1.38 3.161-3.14 0-1.761-1.379-3.14-3.161-3.14"/>
                        <path d="M146.287 17.313h.424c.382 0 .552.148.552.53 0 .34-.106.552-.594.552h-.382v-1.082zm1.719 2.355c-.085 0-.149-.043-.149-.128l-.19-.509c-.043-.17-.15-.297-.298-.382.382-.148.615-.467.615-.848 0-.594-.445-.955-1.188-.955h-1.612v.445h.318c.064 0 .085.022.085.106v2.207c0 .127-.042.127-.085.127h-.318v.425h1.612v-.425h-.318c-.148 0-.17-.021-.17-.148v-.785h.319c.254 0 .318.085.381.318l.149.51c.085.381.318.572.636.572.255 0 .425-.085.53-.255v-.424l-.063.043c-.106.063-.17.106-.254.106M101.5 15.658c-.086 2.78-1.974 4.052-3.692 4.052-1.528 0-2.292-.785-2.292-2.334v-.148c0-1.464.743-1.931 2.461-2.695.276-.127.552-.233.828-.34.912-.36 1.846-.742 2.737-1.484v2.949h-.043zm19.921 4.052c-.7 0-.827-.085-2.142-1.358l-5.686-5.495 3.925-3.607c1.251-1.124 1.655-1.273 2.588-1.273h.806v-1.93h-6.98v1.93h1.273c.36 0 .53.106.552.191.042.106-.043.319-.361.616l-4.392 4.137V.02h-5.092v1.93h.425c1.336 0 1.612.128 1.612 1.55v13.557c0 1.612-.255 2.206-1.188 2.504-.276.084-.658.17-.997.17-.806 0-1.252-.277-1.252-1.762v-6.556c0-3.819-1.952-5.75-5.813-5.75-3.67 0-5.58 1.783-5.58 3.544 0 .997.7 1.697 1.676 1.697.615 0 1.676-.254 1.676-1.994v-.976c.446-.191 1.018-.297 1.719-.297 2.949 0 3.288 1.591 3.288 2.8 0 1.337-2.291 1.974-4.116 2.504-.7.191-1.358.382-1.846.594-2.185.912-3.14 2.122-3.14 3.968 0 2.63 1.804 4.243 4.69 4.243 2.142 0 3.69-.891 4.476-2.525.276 1.634 1.358 2.461 3.246 2.461.594 0 1.146-.127 1.633-.34h6.917V19.71h-.955c-1.358 0-1.4-.148-1.4-.891v-4.774l4.668 4.647c.445.445.572.742.509.848-.043.085-.212.17-.615.17h-.807v1.634h6.917V19.71h-.234z"/>
                    </g>
                </svg>
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
                                <li class="header-menu__item"><a class="header-menu__link header-nav <?= $dropDown ?>" data-class="<?= $dataClass ?>" href="<?= $url ?>"><?= $mainItem["title"]; ?></a></li>
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
<div class="sub-header" style="display:none;">
    <div class="sub-header-inner">
        <div class="sub-header__logo">
            <div class="sub-header-logo"><img src="<?= $submenu_logo['url'] ?? ''?>" alt="miracoil"></div>
            <div class="sub-header-title">For Back Care</div>
        </div>
        <div class="sub-header__nav">
            <ul class="sub-header-nav">
				<?php if (!empty($navigation["submenu_items"])) : ?>
					<?php foreach ($navigation["submenu_items"] as $item) : ?>
                        <li class="sub-header-nav__item"><a class="sub-header-nav__link js-scroll-to" href="<?= $item['link']['url'] ?? ''?>"><?= $item['link']['title'] ?? ''?></a></li>
					<?php endforeach; ?>
				<?php endif; ?>
            </ul>
        </div>
    </div>
</div>
