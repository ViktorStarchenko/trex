<?php /* Template Name: Mattresses Ranges */ ?>

        <?php
        $ranges = get_field('sub_ranges');
        $defaultOpenSubRange = get_field('default_open_sub_range');
        ?>
        <?php if ($ranges) : ?>
            <div class="article-news-box" id="range">
                <div class="app-container">
                    <h2 class="_title"><?php the_field('ranges_title')  ?></h2>
                    <div class="_subtitle"><?php the_field('ranges_description')  ?></div>
                </div>
            </div>
            <div class="app-accordeon">
                <?php foreach ($ranges as $key => $range) : ?>
                    <div class="app-accordeon-item<?= $range->ID == $defaultOpenSubRange->ID ? ' active' : '' ?>">
                        <div class="app-accordeon-item__container">
                            <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= get_the_title($range->ID); ?></span></div>
                            <div class="app-accordeon-item__inner">
                                <div class="app-accordeon-item__grid">
                                    <div class="app-accordeon-item__img">
                                        <?= get_the_post_thumbnail($range->ID, 'full') ?>
                                    </div>
                                    <div class="_left">
                                        <div class="_subtitle"><?= $range->post_content; ?></div>
                                        <?php $features = get_field('range_features', $range->ID); ?>

                                        <?php if ($features) : ?>
                                            <div class="_rating-title"><?php the_field('ranges_features_title')  ?></div>
                                            <div class="_rating-group">
                                                <?php foreach ($features as $feature) : ?>
                                                    <div class="_rating-group-item">
                                                        <i class="app-svg <?php the_field('icon_class_black', $feature->ID); ?>"></i>
                                                        <?php $stars = get_field('stars_count', $feature->ID); ?>
                                                        <?php if ($stars) : ?>
                                                            <div class="_rating-group-stars">
                                                                <?php for($i = $stars; $i > 0; $i--) : ?>
                                                                    <i class="app-svg black-star"></i>
                                                                <?php endfor; ?>
                                                            </div>
                                                        <?php endif; ?>
                                                        <div class="_rating-group-title"><?= get_the_title($feature->ID); ?></div>
                                                    </div>
                                                <?php endforeach; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>