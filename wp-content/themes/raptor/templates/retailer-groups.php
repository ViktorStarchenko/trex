<?php
/*
 * Template Name: Retailer groups
 * Template Post Type: post
 */
?>
<?php get_header(); ?>

    <?php $ID = get_the_ID(); ?>
    <?php $ranges = get_field('range'); ?>
    <section id="container" class="_custom-retailer-page">
        <div class="_custom-retailer-header-bg">
            <div class="app-container">
                <div class="page-content">
                    <div class="_uphead"><?= get_field('sub_title') ?></div>
                    <?php $image[0] = ''; ?>
                    <?php if (has_post_thumbnail( $ID ) ): ?>
                        <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $ID ), 'full' ); ?>
                    <?php endif; ?>
                    <img src="<?= $image[0] ?>" alt="><?= get_field('display_name') ?>" />
                    <?php $title_under_logo = get_field('title_under_logo'); ?>
                    <?php if ( $title_under_logo ): ?>
                        <p class="_bottomhead"><?= $title_under_logo ?></p>
                    <?php endif; ?>
                    <div class="_description"><?php the_excerpt() ?></div>
                </div>
            </div>
        </div>
        <div class="_custom-retailer-container">
            <div class="app-container">
                <?php foreach ($ranges as $range) : ?>

                    <?php

                        $cta = 'Show at '.get_field('display_name').' now';
                        $image = get_field('home_image_mobile', $range->ID);

                        $cta_button_title_for_all_retails = get_field('cta_button_title_for_all_retails', $range->ID);

                        $url = get_permalink( $range );

                        if( isset($cta_button_title_for_all_retails) && !empty($cta_button_title_for_all_retails) ){
                            $cta = $cta_button_title_for_all_retails;
                        }

                        $custom_info_rang = get_field('retailer_page', $range->ID);

                        if( isset($custom_info_rang[0]) && !empty($custom_info_rang[0]) ){
                            foreach ($custom_info_rang as $item){
                                if( $item['retailer_page_retailer'][0]->ID == $ID){

                                    if( !empty($item['retailer_page_image']['url']) ){
                                        $image = $item['retailer_page_image']['url'];
                                    }

                                    if( !empty($item['retailer_page_cta_title']) ){
                                        $cta = $item['retailer_page_cta_title'];
                                    }

                                    if (!empty($item['retailer_page_url'])) {
                                        $url = $item['retailer_page_url'];
                                    }
                                }
                            }
                        }
                    ?>

                    <div class="_custom-retailer-item">

                        <div class="_custom-retailer-item-img"  >
                            <img src="<?= $image ?>" />
                        </div>

                        <div class="_custom-retailer-item-info">
                            <h2><?= $range->post_title ?></h2>
                            <p><?= get_field('ranges_features_title', $range->ID) ?></p>
                            <div class="_inf">
                                <?= get_field('ranges_description', $range->ID) ?>
                            </div>

                            <a href="<?= $url ?>"> <?= $cta ?> <i class="app-svg button-reserve _icon-right"></i></a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

<?php get_footer();

