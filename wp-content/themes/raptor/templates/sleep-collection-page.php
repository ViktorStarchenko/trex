
<?php
/*
 * Template Name: Sleep Collection Page
 * Template Post Type: post
 */

?>
<?php get_header(); ?>

<?php

    $category = get_the_category(get_post()->ID);
    $postId = get_post()->ID;
?>
<section id="container" class="app-wrapper__flex">

        <div class="range-main-box">
            <div class="range-main__small-bg">
                <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url(); ?>)"></div>
            </div>
            <div class="range-main-box__bottom">
                <div class="app-container t_center">
                    <div class="article-box__uphead"><span><?php echo $category[0]->name ?></span></div>
                    <h1 class="article-box__title"><?php the_title() ?></h1>
                    <div class="article-box__subtitle"><?php the_content(); ?></div>
                </div>
                <div class="_rating-group__flex">

                    <?php $pillows    = get_field('pillows'); ?>
                    <?php $protectors = get_field('protectors'); ?>
                    <?php $quits      = get_field('quits'); ?>
                    <?php $sheets     = get_field('sheets'); ?>

                    <div class="_rating-group">
                        <?php if ($quits) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-5"></i>

                                <?php foreach ($quits as $quit): ?>
                                    <?php
                                        $category = get_primary_category_name($quit);
                                        break;
                                    ?>
                                <?php endforeach; ?>

                                <?php if ($category): ?>
                                    <div class="_rating-group__title">
                                        <?php echo $category ?>
                                    </div>
                                <?php endif ?>

                                <div class="_rating-group__subtitle">
                                    <?php foreach($quits as $quit) : ?>
                                        <?= $quit->post_title; ?><br>
                                    <?php endforeach ?>
                                </div>

                            </div>
                        <?php endif; ?>
                        <?php if ($pillows) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-6"></i>

                                    <?php foreach ($pillows as $pillow) : ?>
                                        <?php
                                            $category = get_primary_category_name($pillow);
                                            break;
                                        ?>
                                    <?php endforeach; ?>

                                    <?php if ($category): ?>
                                        <div class="_rating-group__title">
                                            <?php echo $category ?>
                                        </div>
                                    <?php endif ?>
                                    <div class="_rating-group__subtitle">
                                        <?php foreach ($pillows as $pillow) : ?>
                                            <?= $pillow->post_title; ?><br>
                                        <?php endforeach; ?>
                                    </div>
                            </div>
                        <?php endif; ?>
                        <?php if ((!$quits || !$pillows) && $protectors) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-7"></i>

                                <?php foreach ($protectors as $protector) : ?>
                                    <?php
                                        $category = get_primary_category_name($protector->ID);
                                        break;
                                    ?>
                                <?php endforeach; ?>

                                <?php if ($category): ?>
                                    <div class="_rating-group__title">
                                        <?php echo $category ?>
                                    </div>
                                <?php endif ?>
                                <div class="_rating-group__subtitle">
                                    <?php foreach($protectors as $protector) : ?>
                                        <?= $protector->post_title; ?><br>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                        <?php if (!$quits && !$pillows && $sheets) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-9"></i>

                                <?php foreach ($sheets as $sheet) : ?>
                                    <?php
                                        $category = get_primary_category_name($sheet);

                                        break;
                                    ?>
                                <?php endforeach; ?>

                                <?php if ($category): ?>
                                    <div class="_rating-group__title">
                                        <?php echo $category ?>
                                    </div>
                                <?php endif ?>

                                <div class="_rating-group__subtitle">
                                    <?php foreach($sheets as $sheet) : ?>
                                        <?= $sheet->post_title; ?><br>
                                    <?php endforeach; ?>
                                </div>

                            </div>
                        <?php endif; ?>
                    </div>

                    <div class="_rating-group">
                        <?php if ($quits && $pillows && $protectors) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-7"></i>


                                <?php foreach ($protectors as $protector) : ?>
                                    <?php
                                    $category = get_primary_category_name($protector);
                                    break;
                                    ?>
                                <?php endforeach; ?>

                                <?php if ($category): ?>
                                    <div class="_rating-group__title">
                                        <?php echo $category ?>
                                    </div>
                                <?php endif ?>

                                <div class="_rating-group__subtitle">
                                    <?php foreach($protectors as $protector) : ?>
                                        <?= $protector->post_title; ?><br>
                                    <?php endforeach; ?>
                                </div>

                            </div>
                        <?php endif; ?>
                        <?php if ($quits && $pillows && $sheets) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-9"></i>

                                <?php foreach ($sheets as $sheet) : ?>
                                    <?php
                                        $category = get_primary_category_name($sheet);
                                        break;
                                    ?>
                                <?php endforeach; ?>

                                <?php if ($category): ?>
                                    <div class="_rating-group__title">
                                        <?php echo $category ?>
                                    </div>
                                <?php endif ?>

                                <div class="_rating-group__subtitle">
                                    <?php foreach($sheets as $sheet) : ?>
                                        <?= $sheet->post_title; ?><br>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-line-divider"></div>

        <div class="article-news-box">
            <div class="app-container">
                <h2 class="_title"><?php the_field('accessories_title'); ?></h2>
                <div class="_subtitle"><?php the_field('accessories_description'); ?></div>
            </div>
        </div>
        <div class="app-accordeon">
            <?php foreach ($quits as $key => $quilt) : ?>
                <div class="app-accordeon-item <?= $key == 0 ? 'active' : '' ?>">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $quilt->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?php $scImage = get_field('sleep_collections_image', $quilt->ID); ?>
                                        <img src="<?= $scImage ? $scImage : get_the_post_thumbnail_url($quilt, 'full'); ?>" alt="<?= $quilt->post_title; ?>">
                                    </div>
                                    <?php 
                                        $scCTAText = get_field('sleep_collections_cta_text', $quilt->ID); 
                                        $scCTA = get_field('sleep_collections_cta', $quilt->ID); 
                                    ?>
                                    <?php if (!empty($scCTA) && !empty($scCTAText)) : ?>
                                        <div class="_rating-group__button">
                                            <a href="<?= $scCTA; ?>" class="app-button-reserve _inline"><?= $scCTAText; ?> <span class="app-svg button-reserve _icon-right"></span></a>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $quilt->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $quilt->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $quilt->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $quilt->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $quilt->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ( have_rows('accessories_details', $quilt->ID) ) : ?>
                                        <?php while ( have_rows('accessories_details', $quilt->ID) ) : the_row(); ?>
                                            <div class="_rating-title"><?php the_sub_field('detail_title'); ?></div>
                                            <div class="_rating-list">
                                                <ul>
                                                    <li><?php the_sub_field('detail_content'); ?></li>
                                                </ul>
                                            </div>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($pillows as $key => $pillow) : ?>
                <div class="app-accordeon-item <?= $key == 0 && !$quits ? 'active' : '' ?>">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $pillow->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?php $scImage = get_field('sleep_collections_image', $pillow->ID);?>
                                        <img src="<?= $scImage ? $scImage : get_the_post_thumbnail_url($pillow, 'full'); ?>" alt="<?= $pillow->post_title; ?>">
                                    </div>
                                    <?php 
                                        $scCTAText = get_field('sleep_collections_cta_text', $pillow->ID); 
                                        $scCTA = get_field('sleep_collections_cta', $pillow->ID); 
                                    ?>
                                    <?php if (!empty($scCTA) && !empty($scCTAText)) : ?>
                                        <div class="_rating-group__button">
                                            <a href="<?= $scCTA; ?>" class="app-button-reserve _inline"><?= $scCTAText; ?> <span class="app-svg button-reserve _icon-right"></span></a>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $pillow->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $pillow->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $pillow->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $pillow->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $pillow->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                     <?php if ( have_rows('accessories_details', $pillow->ID) ) : ?>
                                        <?php while ( have_rows('accessories_details', $pillow->ID) ) : the_row(); ?>
                                            <div class="_rating-title"><?php the_sub_field('detail_title'); ?></div>
                                            <div class="_rating-list">
                                                <ul>
                                                    <li><?php the_sub_field('detail_content'); ?></li>

                                                </ul>
                                            </div>
                                        <?php endwhile; ?>    
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($protectors as $protector) : ?>
                <div class="app-accordeon-item">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $protector->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?php $scImage = get_field('sleep_collections_image', $protector->ID); ?>
                                        <img src="<?= $scImage ? $scImage : get_the_post_thumbnail_url($protector, 'full'); ?>" alt="<?= $protector->post_title; ?>">
                                    </div>
                                   <?php 
                                        $scCTAText = get_field('sleep_collections_cta_text', $protector->ID); 
                                        $scCTA = get_field('sleep_collections_cta', $protector->ID); 
                                    ?>
                                    <?php if (!empty($scCTA) && !empty($scCTAText)) : ?>
                                        <div class="_rating-group__button">
                                            <a href="<?= $scCTA; ?>" class="app-button-reserve _inline"><?= $scCTAText; ?> <span class="app-svg button-reserve _icon-right"></span></a>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $protector->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $protector->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $protector->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $protector->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $protector->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ( have_rows('accessories_details', $protector->ID) ) : ?>
                                        <?php while ( have_rows('accessories_details', $protector->ID) ) : the_row(); ?>
                                            <div class="_rating-title"><?php the_sub_field('detail_title'); ?></div>
                                            <div class="_rating-list">
                                                <ul>
                                                    <li><?php the_sub_field('detail_content'); ?></li>
                                                </ul>
                                            </div>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($sheets as $sheet) : ?>
                <div class="app-accordeon-item">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $sheet->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?php $scImage = get_field('sleep_collections_image', $sheet->ID); ?>
                                        <img src="<?= $scImage ? $scImage : get_the_post_thumbnail_url($sheet, 'full'); ?>" alt="<?= $sheet->post_title; ?>">
                                    </div>
                                    <?php 
                                        $scCTAText = get_field('sleep_collections_cta_text', $sheet->ID); 
                                        $scCTA = get_field('sleep_collections_cta', $sheet->ID); 
                                    ?>
                                    <?php if (!empty($scCTA) && !empty($scCTAText)) : ?>
                                        <div class="_rating-group__button">
                                            <a href="<?= $scCTA; ?>" class="app-button-reserve _inline"><?= $scCTAText; ?> <span class="app-svg button-reserve _icon-right"></span></a>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $sheet->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $sheet->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $sheet->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $sheet->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $sheet->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ( have_rows('accessories_details', $sheet->ID) ) : ?>
                                        <?php while ( have_rows('accessories_details', $sheet->ID) ) : the_row(); ?>
                                        <div class="_rating-title"><?php the_sub_field('detail_title'); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                               <li><?php the_sub_field('detail_content'); ?></li>
                                            </ul>
                                        </div>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        
        <?= do_shortcode("[insert page='/shop-online' display='templates/shop-online-collections.php']"); ?>
        
        <?= do_shortcode("[content_block id=612]"); // All Accessories ?>
        <?php // the_content(); ?>

        <?php $other = get_field("view_cta_title"); ?>
        <?php if(!empty($other)) : ?>
            <div class="article-grid-box view-other-collection">
                <div class="app-container">
                    <div class="article-box__title page-h1"><?= $other ?></div>
                    <div class="_subtitle"><?= get_field("view_description"); ?></div>
                    <?php $other_items = get_field("other_relation"); ?>
                    <div class="_grid _grid-flex _c3">
                        <?php foreach ($other_items as $item) : ?>
                        <div class="_col" onclick="window.location.href='<?= get_permalink($item->ID) ?>'">
                            <div class="article-news-slice__item _vertical-between">
                                <?php $image[0] = ''; ?>
                                <?php $acf_img = get_field("default_image", $item->ID); ?>
                                <?php if($acf_img) : $image[0] = $acf_img; ?>
                                <?php elseif($acf_img = get_field("list_image", $item->ID)) :  $image[0] = $acf_img['url']; ?>
                                <?php else: ?>
                                    <?php if (has_post_thumbnail( $item->ID ) ): ?>
                                        <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $item->ID ), 'full' ); ?>
                                    <?php endif; ?>
                                <?php endif; ?>
                                <div class="article-news-slice app-inline-bg" style="background-image: url('<?php echo $image[0]; ?>');"></div>
                                <div class="article-grid-box__item app-centered-box _sm">
                                    <div class="app-centered-box-child">
                                        <div class="_uphead">
                                            <?php $categories = get_the_category($item->ID); ?>
                                            <span><a href="<?= get_category_link($categories[0]) ?>" rel="category tag"><?= $categories[0]->name ?></a></span>
                                        </div>
                                        <div>
                                            <div class="_title"><?= get_the_title($item->ID); ?></div>
                                            <div class="_content"><?= get_the_excerpt($item->ID); ?></div>
                                        </div>
                                        <a href="<?= get_permalink($item->ID) ?>" class="app-button-reserve _inline">read more<i class="app-svg button-reserve _icon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <?php if(get_field("view_cta_button")) : ?>
                    <div class="app-more-articles">
                        <a class="_link app-link-animation" href="<?= get_field("view_cta_button_link") ?>"><?= get_field("view_cta_button") ?></a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>

        <?php endif; ?>
</section>

<?php get_footer();