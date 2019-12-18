<?php
/*
 * Template Name: Promotions List
 * Template Post Type: page
 */
?>
<?php get_header(); ?>
<section id="top-box">
</section>
<section class="promo-list-box">
    <div class="app-container">
        <div class="page-content">
            <h1 class="page-h1"><?=get_the_title();?></h1>
            <div >
                <?php the_content(); ?>
            </div>
        </div>
    </div>
    <?php
    $fields = get_fields();
    $i = 0;
    ?>
    <?php foreach ($fields['promotions_list'] as $items) : ?>
        <?php if($items->post_status == 'publish') : ?>
            <div class="article-luxury-flex" >
                <?php
                $i++;
                $sub_title = get_field('sub_title_promotions', $items->ID);
                $title = get_field('title_header_promotions', $items->ID);
                $text_header_promotions = get_field('text_header_promotions', $items->ID);
                $text_header_position_promotions = get_field('text_header_position_promotions', $items->ID);
                $img = get_field('image_header_promotions', $items->ID);
                $img_mobile = get_field('image_mobile_header_promotions', $items->ID);
                $img_medium = get_field('image_header_medium_promotions', $items->ID);
                ?>

                <!--
                <div class="_img full-width promotion-head-box-absolute">
                    <div class="_absolute-bg app-inline-bg img-desktop-promo" style="background-image: url()"></div>
                    <div class="_absolute-bg app-inline-bg img-mobile-promo" style="background-image: url()"></div>
                </div>
                -->

                <?php $alt = '' ?>
                <?php
                    if(!empty($sub_title)){
                        $alt = $sub_title;
                    }
                ?>

                <img src="<?=$img['url'];?>" alt="<?= $alt ?>" class="img-desktop-promo" />
                <?php if ( isset($img_medium['url']) && !empty($img_medium['url']) ) : ?>
                    <img src="<?=$img_medium['url'];?>" alt="<?= $alt ?>" class="img-medium-promo" />
                <?php endif; ?>
                <img src="<?=$img_mobile['url'];?>" alt="<?= $alt ?>" class="img-mobile-promo" />

                <div class="app-centered-box article-luxury-box__content promotion-head-box">
                    <div class="_content-inner <?=$text_header_position_promotions ?>">
                        <div class="_content-inner-custom-box">
                            <?php if(!empty($sub_title)) : ?>
                                <div class="_uphead"><span><?=$sub_title;?></span></div>
                            <?php endif; ?>
                            <div class="_title"><?=$title;?></div>
                            <?php if(!empty($text_header_promotions)) : ?>
                                <div class="_subtitle"><?=$text_header_promotions;?></div>
                            <?php endif; ?>
                            <div class="buttons">
                                <a href="<?=get_permalink($items->ID);?>" class="app-button-white _inline">
                                    LEARN MORE
                                    <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
    <?php if($i == 0) : ?>
        <div class="app-container">
            <div class="page-content">
                <?=$fields['promotions_expired'];?>
            </div>
        </div>
    <?php endif; ?>
</section>

<?php get_footer(); ?>
