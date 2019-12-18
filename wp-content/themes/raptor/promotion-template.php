<?php
/*
 * Template Name: Promotions
 * Template Post Type: page
 */
?>
<?php get_header(); ?>
<section class="promo-list-box">
    <div class="article-luxury-flex" >
        <?php
        $sub_title = get_field('sub_title_promotions');
        $title = get_field('title_header_promotions');
        $text_header_promotions = get_field('text_header_promotions');
        $buttons_header_promotions = get_field('buttons_header_promotions');
        $text_header_position_promotions = get_field('text_header_position_promotions');
        $img = get_field('image_header_promotions');
        $img_mobile = get_field('image_mobile_header_promotions');
        $img_medium = get_field('image_header_medium_promotions');
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
                    <?php if(!empty($buttons_header_promotions)) : ?>
                        <div class="buttons">
                            <?php foreach($buttons_header_promotions as $item) : ?>
                                <a href="<?=$item['link_promotions'];?>" class="app-button-white _inline"><?=$item['title_promotions'];?><i class="app-svg button-explore _icon-right"></i></a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php /*
<section id="top-box">
    <div class="article-luxury-flex" >
        <?php
        $sub_title = get_field('sub_title_promotions');
        $title = get_field('title_header_promotions');
        $text_header_promotions = get_field('text_header_promotions');
        $buttons_header_promotions = get_field('buttons_header_promotions');
        $text_header_position_promotions = get_field('text_header_position_promotions');
        $img = get_field('image_header_promotions');
        $img_mobile = get_field('image_mobile_header_promotions');
        ?>
        <div class="_img full-width promotion-head-box-absolute">
            <div class="_absolute-bg app-inline-bg img-desktop-promo" style="background-image: url(<?=$img['url'];?>)">
            </div>
            <div class="_absolute-bg app-inline-bg img-mobile-promo" style="background-image: url(<?=$img_mobile['url'];?>)">
            </div>
        </div>
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
                    <?php if(!empty($buttons_header_promotions)) : ?>
                        <div class="buttons">
                            <?php foreach($buttons_header_promotions as $item) : ?>
                                <a href="<?=$item['link_promotions'];?>" class="app-button-white _inline"><?=$item['title_promotions'];?><i class="app-svg button-explore _icon-right"></i></a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
 */ ?>
<section id="container" class="app-wrapper__flex technology-page-item">
    <div class="app-container">
        <div class="page-content">
            <?php $buttons_cta = get_field("buttons_cta"); ?>
            <?php $buttons_cta_position = get_field("buttons_cta_position"); ?>
            <?php $button_cta_title = get_field("button_cta_title"); ?>
            <?php
            $order = [];
            switch ($buttons_cta_position){
                case "top": $order = [0,1,2];
                    break;
                case "undertext": $order = [1,0,2];
                    break;
                case "undervideo": $order = [2,0,1];
                    break;
            }

            $content = get_the_content();
            ?>
            <?php if(!empty($content)) : ?>
                <div class="text-area order-<?=$order[1]?>" id="text-box">
                    <?=$content;?>
                </div>
            <?php endif; ?>
            <?php if(count($buttons_cta) > 0) : ?>
                <div class="technology-or order-<?=$order[0]?>" id="CTA-box">
                    <?php if(!empty($button_cta_title)) : ?>
                        <div class="technology-or-title"><?=$button_cta_title;?></div>
                    <?php endif; ?>
                    <div class="technology-or-button">
                        <?php $i = 0; ?>
                        <?php foreach ($buttons_cta as $item) : ?>
                            <?php $class_img = ''; ?>
                            <?php if( $item['button_image'] ) {
                                $class_img = ' _custom-not-bg ';
                                $item['button_cta_title'] = '<img src="'.$item['button_image']['url'].'" alt="'.$item['button_cta_title'].'" />';
                            } ?>
                            <a href="<?=$item['button_cta_link']?>" class="btn <?= $class_img ?>"><?=$item['button_cta_title']?></a>
                            <?php $i++; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php
            $video = get_field('video_promotions');

            if(!empty($video)) : ?>
                <div class="technology-videos order-<?=$order[2]?>" id="video-box">
                    <?php foreach ($video as $item) : ?>
                        <div class="technology-video">
                            <iframe width="100%" height="350" src="<?= $item['video_promotion']; ?>" frameborder="0" allowfullscreen></iframe>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
        <?php $id_form = get_field("id_form_promotions"); ?>
        <?php if($id_form) : ?>
            <div class="technology-form-box" id="form-box">
                <div class="range-main-box__bottom _gravity-form-wrapper">
                    <div class="_contact-page-content _new-custom-gform-styles">
                        <div class="_contact-form gravity-form">
                            <div class="technology-form">
                                <?=do_shortcode('[gravityform id="'.$id_form.'" title="false" description="true" ajax="true"]');?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>

</section>


<?php get_footer(); ?>
