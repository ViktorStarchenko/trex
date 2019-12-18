<?php /* Template Name: Home Page Mattresses */ ?>
<?php



$page = get_page_by_path('home');
$topPosts = get_field('top_mattresses', $page->ID);
$midlePosts = get_field('middle_mattresses', $page->ID);
$bottomPosts = get_field('bottom_mattresses', $page->ID);

add_filter('show_admin_bar', '__return_false');

if ($topPosts): ?>
    <?php foreach ($topPosts as $p): ?>
        <?php $position   = get_field('text_home_position', $p->ID); ?>
        <?php

        $class = '';
        switch ($position){
            case 0: $class = '_content-left-position'; break;
            case 1: $class = '_content-center-position'; break;
            case 2: $class = '_content-right-position'; break;
        }

        ?>
        <div class="article-luxury-box <?=$class;?>" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
            <div class="app-container">

                <?php $fullwidth   = get_field('home_page_image_full_width', $p->ID) == 'Yes'; ?>
                <?php $imageMobile = get_field('home_image_mobile', $p->ID); ?>

                <div class="article-luxury-flex" <?php $fullwidth ? 'style="background-color: '. the_field('widget_background_color', $p->ID) .'"' : ''?>>
                    <div class="_img <?= $fullwidth ? 'full-width' : '' ?>">

                        <div class="_absolute-bg app-inline-bg img-mobilized"
                             data-image="<?php the_field('home_page_image', $p->ID); ?>"
                             data-image-mobile="<?php the_field('home_image_mobile', $p->ID); ?>"
                             style="background-image: url(<?php the_field('home_page_image', $p->ID); ?>)">
                        </div>

                    </div>
                    <div class="app-centered-box article-luxury-box__content">
                        <div class="_content-inner">
                            <div class="_content-inner-custom-box">
                                <div class="_uphead"><span><?php the_field('home_page_top_text', $p->ID); ?></span>
                                </div>
                                <div class="_title"><?= get_the_title($p->ID); ?></div>
                                <div class="_subtitle"><?php the_field('home_page_description', $p->ID); ?></div>
                                <a href="<?php the_permalink($p->ID); ?>" class="app-button-white _inline"><?php the_field('home_page_button_text', $p->ID); ?>
                                    <i class="app-svg button-explore _icon-right"></i>
                                </a>
                                <?php $features = get_field('home_page_features', $p->ID); ?>
                            </div>
                            <?php if ($features) : ?>
                                <div class="_rating-group">
                                    <?php foreach ($features as $feature) : ?>
                                        <div class="_rating-group-item">
                                            <figure>
                                                <img src="<?= get_the_post_thumbnail_url($feature->ID); ?>" alt="<?= get_post_meta(get_post_thumbnail_id($feature->ID), '_wp_attachment_image_alt', true); ?>">
                                            </figure>
                                            <?php $stars = get_field('stars_count', $feature->ID); ?>
                                            <?php if ($stars) : ?>
                                                <div class="_rating-group-stars">
                                                    <?php for ($i = $stars; $i > 0; $i--) : ?>
                                                        <i class="app-svg white-star"></i>
                                                    <?php endfor; ?>
                                                </div>
                                            <?php endif; ?>
                                            <div><?= get_the_title($feature->ID); ?></div>
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
<?php endif; ?>
<?php if (!empty($midlePosts)): ?>

    <div class="article-luxury-grid">
        <div class="app-container">
            <div class="_grid _c3">
                <?php foreach ($midlePosts as $p): ?>
                    <div class="_col" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
                        <div class="app-centered-box article-luxury-box__content">
                            <div class="_absolute-bg app-inline-bg" style="background-image: url(<?php the_field('home_image_mobile', $p->ID); ?>)"></div>
                            <div class="_content-inner">
                                <div class="_content-inner-custom-box">
                                    <div class="_uphead"><span><?php the_field('home_page_top_text', $p->ID); ?></span>
                                    </div>
                                    <div class="_title"><?= get_the_title($p->ID); ?></div>
                                    <div class="_subtitle"><?php the_field('home_page_description', $p->ID); ?></div>
                                    <a href="<?php the_permalink($p->ID); ?>" class="app-button-white _inline"><?php the_field('home_page_button_text', $p->ID); ?>
                                        <i class="app-svg button-explore _icon-right"></i></a>
                                    <?php $features = get_field('home_page_features', $p->ID); ?>
                                </div>
                                <?php if ($features) : ?>
                                    <div class="_rating-group">
                                        <?php foreach ($features as $feature) : ?>
                                            <div class="_rating-group-item">
                                                <figure>
                                                    <img src="<?= get_the_post_thumbnail_url($feature->ID); ?>"  alt="<?= get_post_meta(get_post_thumbnail_id($feature->ID), '_wp_attachment_image_alt', true); ?>">
                                                </figure>
                                                <?php $stars = get_field('stars_count', $feature->ID); ?>
                                                <?php if ($stars) : ?>
                                                    <div class="_rating-group-stars">
                                                        <?php for ($i = $stars; $i > 0; $i--) : ?>
                                                            <i class="app-svg white-star"></i>
                                                        <?php endfor; ?>
                                                    </div>
                                                <?php endif; ?>
                                                <div><?= get_the_title($feature->ID); ?></div>
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
<?php endif; ?>
<?php if (!empty($bottomPosts)): ?>
    <?php foreach ($bottomPosts as $p): ?>
        <div class="article-luxury-box" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
            <div class="app-container">

                <?php $fullwidth   = get_field('home_page_image_full_width', $p->ID) == 'Yes'; ?>
                <?php $imageMobile = get_field('home_image_mobile', $p->ID); ?>

                <div class="article-luxury-flex" <?php $fullwidth ? 'style="background-color: '. the_field('widget_background_color', $p->ID) .'"' : ''?>>
                    <div class="_img <?= $fullwidth ? 'full-width' : '' ?>">

                        <div class="_absolute-bg app-inline-bg img-mobilized"
                             data-image="<?php the_field('home_page_image', $p->ID); ?>"
                             data-image-mobile="<?php the_field('home_image_mobile', $p->ID); ?>"
                             style="background-image: url(<?php the_field('home_page_image', $p->ID); ?>)">
                        </div>

                    </div>
                    <div class="app-centered-box article-luxury-box__content">
                        <div class="_content-inner">
                            <div class="_content-inner-custom-box">
                                <div class="_uphead"><span><?php the_field('home_page_top_text', $p->ID); ?></span>
                                </div>
                                <div class="_title"><?= get_the_title($p->ID); ?></div>
                                <div class="_subtitle"><?php the_field('home_page_description', $p->ID); ?></div>
                                <a href="<?php the_permalink($p->ID); ?>" class="app-button-white _inline"><?php the_field('home_page_button_text', $p->ID); ?>
                                    <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                            <?php $features = get_field('home_page_features', $p->ID); ?>

                            <?php if ($features) : ?>
                                <div class="_rating-group">
                                    <?php foreach ($features as $feature) : ?>
                                        <div class="_rating-group-item">
                                            <figure>
                                                <img src="<?= get_the_post_thumbnail_url($feature->ID); ?>" alt="<?= get_post_meta(get_post_thumbnail_id($feature->ID), '_wp_attachment_image_alt', true); ?>">
                                            </figure>
                                            <?php $stars = get_field('stars_count', $feature->ID); ?>
                                            <?php if ($stars) : ?>
                                                <div class="_rating-group-stars">
                                                    <?php for ($i = $stars; $i > 0; $i--) : ?>
                                                        <i class="app-svg white-star"></i>
                                                    <?php endfor; ?>
                                                </div>
                                            <?php endif; ?>
                                            <div><?= get_the_title($feature->ID); ?></div>
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
<?php endif; ?>