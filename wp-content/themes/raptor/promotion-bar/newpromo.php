<div id="new-promo-design" class="_app-banner-clickable app-banner _t2 _app-banner-small<?= !empty($attrs['full']) ? ' _banner-full-width' : '' ?>">
    <?php if(isset($attrs['id'])) : ?>
        <?php $ID = $attrs['id']; ?>
        <div class="app-container">
            <div class="app-banner__flex">
                <section id="top-box">
                    <div class="article-luxury-flex" >
                        <?php
                        $sub_title = get_field('sub_title_promobox', $ID);
                        $title = get_field('title_promobox', $ID);
                        $text_header_promotions = get_field('text_promobox', $ID);
                        $buttons_header_promotions = get_field('buttons_promobox', $ID);
                        $text_header_position_promotions = get_field('buttons_position_promobox', $ID);
                        $img = get_field('image_promobox', $ID);
                        $img_mobile = get_field('image_mobile_promobox', $ID);
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
                                                <a href="<?=$item['button_link_promobox'];?>" class="app-button-white _inline"><?=$item['button_title_promobox'];?><i class="app-svg button-explore _icon-right"></i></a>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="app-banner__close"></div>
    <?php endif; ?>
</div>