<?php $navigation = get_field("header_menu", $headerNavigation->ID); ?>
<div class="app-container">
    <div class="header-nav c-sb">
        <div class="_header-nav">
            <a id="app-mobile-btn" class="app-mobile-btn _header-link app-sm-visible" href="#"><span class="_btn-wrap"><i class="app-svg menu"></i></span></a>
            <a class="_header-link app-searchbox-btn _navigation-mobile-search-visible"><span class="_label"><i class="app-svg search"></i></span></a>
            <a href="<?= home_url(); ?>" class="app-svg logo"></a>
            <nav class="_header-nav app-lg-hidden">
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
                        <a class="_header-link app-sm-hidden <?= $dropDown ?>" data-class="<?= $dataClass ?>" href="<?= $url ?>"><span class="_label"><?= $mainItem["title"]; ?></span></a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </nav>
        </div>

        <div class="_header-nav app-lg-visible _navigation-block">
            <a class="_header-link app-sm-hidden" href="#" data-jq-dropdown="#hdd-1"><span class="_label">Menu <span class="dropdown-arrow _right-icon"></span></span></a>
            <a class="_header-link app-searchbox-btn _navigation-mobile-search-hidden"><span class="_label"><i class="app-svg search"></i></span></a>
            <a class="app-button-reserve _inline _navigation-mobile-find-a-retailer-visible" href="/stockists/">Find a Retailer</a>
            <a class="app-button-reserve _inline _navigation-mobile-small-find-a-retailer-visible" href="/stockists/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.02 506.97"><defs><style>.cls-1{fill:#d8d6d6;}.cls-2{fill:none;stroke:#2d1946;stroke-linecap:round;stroke-linejoin:round;stroke-width:10px;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="247.06 67.45 247.06 304.31 260.72 304.31 260.72 409.34 247.06 409.34 247.06 505.08 429.44 505.08 429.44 67.45 247.06 67.45"/><polygon class="cls-1" points="429.44 79.54 487.9 152.33 500.98 206.77 490.99 235.39 461.67 254.82 429.44 252.15 417.28 192.88 429.44 79.54"/><rect class="cls-1" x="247.06" y="2.11" width="178.26" height="68.11"/><rect class="cls-1" x="293.37" y="254.82" width="170.96" height="250.26"/><rect class="cls-2" x="76.25" y="5" width="353.19" height="65.23"/><line class="cls-2" x1="106.22" y1="37.61" x2="400.06" y2="37.61"/><rect class="cls-2" x="300.53" y="304.3" width="118.96" height="197.45"/><line class="cls-2" x1="300.53" y1="353.15" x2="419.49" y2="353.15"/><polyline class="cls-2" points="41.76 259.79 41.76 501.97 95.32 501.97"/><polyline class="cls-2" points="114.75 501.97 461.67 501.97 461.67 257.36"/><polyline class="cls-2" points="76.25 70.23 13.82 148.47 489.59 148.47 425.31 70.23"/><line class="cls-2" x1="288.21" y1="70.23" x2="300.53" y2="148.47"/><line class="cls-2" x1="358.07" y1="70.23" x2="391.48" y2="148.47"/><path class="cls-2" d="M13.82,148.47s-13.95,53.71-6.76,74,33.41,47.79,77.39,23.26c0,0,16.49-8.94,20.3-43.8l8-53.47L144.5,70.23"/><path class="cls-2" d="M112.44,150.79s-12.77,69.58-3,82.69,28.34,28.61,56.67,20.86,34.26-30.59,34.26-30.59l1.24-17,1.19-16.31,3.06-42,11.42-78.24"/><path class="cls-2" d="M393.91,148.47l9.91,78.32A16.94,16.94,0,0,0,405.3,232c2.9,6.13,11.83,19.17,36.51,23.45,32.67,5.66,46.94-15.59,52.33-25.11a50.32,50.32,0,0,0,6.66-29.81c-.95-10.15-11.21-52-11.21-52"/><path class="cls-2" d="M299.08,148.47l4.67,70.74A26.55,26.55,0,0,0,308,232c5.34,8.18,16.34,21,33.29,22.36,25.06,2,36.79-1.83,48.21-16.11s11.62-33,11.62-33"/><path class="cls-2" d="M201.57,206.77s4.25,49.73,46.76,48c0,0,22.2,4,38.38-13.41s14.8-18.6,16.75-26.59"/><rect class="cls-2" x="88.77" y="304.3" width="171.09" height="105.04"/></g></g></svg>
            </a>
            <!--<a class="_header-link app-sm-hidden _desktop-menu _header-link-light" href="#" data-class="_help-and-support-menu"><span class="_label"><?= get_field('help_and_support_title', $headerNavigation->ID)?></span></a>-->
        </div>
        <div class="_header-nav app-lg-hidden">
            <a class="app-searchbox-btn app-sm-hidden"><span class="_label"><i class="app-svg search"></i> <span>Search</span></span></a>
            <?php if (!empty($navigation["main_menu"])) : ?>
                <?php foreach ($navigation["main_menu"] as $mainItem) : ?>
                    <?php if (!empty($mainItem["help"])) : ?>
                        <div class="_header-link app-sm-hidden _custom-left-border _help-parent" href="#" data-class="<?= $mainItem["data_class"] ?>">
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
                        </div>
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