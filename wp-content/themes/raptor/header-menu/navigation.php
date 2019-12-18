<nav class="header-desctop-navigation app-sm-hidden active__mattresses-menu">
    <a href="" class="header-desctop__close" id="_close-menu"></a>
    <div class="app-container">
        <?php if (!empty($navigation["main_menu"])) : ?>
            <?php foreach ($navigation["main_menu"] as $mainItem) : ?>
            <?php
            $dataClass = "";
            if (!empty($mainItem["data_class"])) {
                $dataClass = $mainItem["data_class"];
            }
            ?>
            <nav class="_horizontal <?= $dataClass ?> _custom-mattresses-menu">
                <?php if ($mainItem["columns"]) : ?>
                    <?php foreach ($mainItem["columns"] as $column) : ?>
                        <div class="menu-column browse-by-range">
                            <?php if (!empty($column["column_title"])) : ?>
                                <p><?= $column["column_title"] ?></p>
                            <?php endif; ?>
                            <?php if (!empty($column["items"])) : ?>
                            <div class="_custom-mattress-container">
                                <?php foreach ($column["items"] as $item) : ?>
                                    <?php
                                        $itemTitle = "";
                                        $subTitle = "";
                                        $url = "";
                                        $fullWidth = "";
                                        if (!empty($item["item"])) {
                                            $itemTitle = $item["item"][0]->post_title;
                                            $url = get_permalink($item["item"][0]->ID);
                                        }

                                        if (!empty($item["title"])) {
                                            $itemTitle = $item["title"];
                                        }

                                        if (!empty($item["subtitle"])) {
                                            $subTitle = $item["subtitle"];
                                        }

                                        if (!empty($item["full_width"])) {
                                            $fullWidth = " full-width ";
                                        }

                                        if (!empty($item["custom_url"])) {
                                            $url = $item["custom_url"];
                                        }

                                        /*
                                    echo "<pre>";
                                    print_r($item);
                                    echo "</pre>";
                                        */
                                    ?>
                                    <a href="<?= $url; ?>" class="_custom-mattress-item-container ga-mattress-track <?= $fullWidth ?>" data-parent="<?= $mainItem["title"] ?>"  data-menu="Header" data-title="<?= $column["column_title"] . ' ' . $subTitle.' '.$itemTitle ?>">
                                        <span class="_custom-mattress-sub-title"><?= $subTitle ?></span>
                                        <span class="_custom-mattress-item"><?= $itemTitle ?></span>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                    <?php if (!empty($mainItem["enable_button"]) && !empty($mainItem["button"])) : ?>
                        <div class="_custom-buttons-container">
                            <?php if (!empty($mainItem["button"]["subtitle"])) : ?>
                                <div class="_custom-mattresses-cta-container-head"><?= $mainItem["button"]["subtitle"] ?></div>
                            <?php endif; ?>
                            <?php if (!empty($mainItem["button"]["title"])) : ?>
                                <div class="_custom-mattresses-cta-container-title"><?= $mainItem["button"]["title"] ?></div>
                            <?php endif; ?>
                            <?php if (!empty($mainItem["button"]["description"])) : ?>
                                <div class="_custom-mattresses-cta-container-description"><?= $mainItem["button"]["description"] ?></div>
                            <?php endif; ?>
                            <?php if (!empty($mainItem["button"]["url"]) && !empty($mainItem["button"]["cta"])) : ?>
                            <a class="app-button-white _inline _custom-mattress-buttons" href="<?= $mainItem["button"]["url"] ?>"><?= $mainItem["button"]["cta"] ?>
                                <i class="app-svg button-explore _icon-right"></i>
                            </a>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>

                <?php endif; ?>
            </nav>
            <?php endforeach; ?>
        <?php endif; ?>
        <!--
        <nav class="_horizontal _help-and-support-menu">
            <?php foreach ($helpAndSupportPages as $page) : ?>
                <a href="<?= get_permalink($page->ID); ?>" class="header_menu_item ga-track-nav-link" data-title="<?= $page->post_title ?>" data-menu="Header" data-parent="<?= $matressesCategory->name; ?>">
                    <?php $pageImage = get_field('icon', $page->ID); ?>
                    <?php if (!empty($pageImage)): ?>
                        <span class="_icon"><img src="<?= $pageImage['url']; ?>" alt="<?= $pageImage['alt']; ?>"/></span>
                    <?php endif; ?>
                    <span class="_block"><?= $page->post_title ?></span>
                </a>
            <?php endforeach; ?>
        </nav>
        -->
    </div>
</nav>