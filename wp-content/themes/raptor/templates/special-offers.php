<?php
$attrs['cta_special_offers'] = isset($attrs['cta_special_offers']) ? $attrs['cta_special_offers'] : 'Special Offers';
$attrs['cta_special_offers_description'] = isset($attrs['cta_special_offers_description']) ? $attrs['cta_special_offers_description'] : '';
$attrs['cta_special_offers_link'] = isset($attrs['cta_special_offers_link']) ? $attrs['cta_special_offers_link'] : 'View ';
?>
<?php if($attrs['cta_special_offers']) : ?>
    <?php

    $matresses = get_field('special_offers_filter', 5674);
    $retailer_sort = get_field('special_offers_retailer_sort', 5674);

    $tz = get_option('timezone_string');
    $timestamp = time();
    $dt = new DateTime("now", new DateTimeZone($tz));
    $dt->setTimestamp($timestamp);
    $date =  $dt->format('Y-m-d');

    $baseQuery = [
        'relation' => 'AND',
        [
            'key'     => 'start_date',
            'value'   => $date,
            'compare' => '<=',
            'type'    => 'DATE',
        ],
        [
            'key'     => 'end_date',
            'value'   => $date,
            'compare' => '>=',
            'type'    => 'DATE',
        ],
    ];

    $specialOffersCategory = get_category_by_slug('special-offers');
    $specialOffers = get_posts($args);

    $specialOffers = get_posts([
        'category'   => $specialOffersCategory->cat_ID,
        'meta_query' => $baseQuery,
        'posts_per_page' => -1,
        'offset'           => 0,
        'orderby'          => 'date',
        'order'            => 'DESC',
        'post_status'      => 'publish',
        'suppress_filters' => true,
    ]);

    $cnt = count($specialOffers);

    if( $cnt > 0) :

        $offersByRetailer = [];

        foreach ($retailer_sort as $sort){
            foreach ( $matresses as $matresse ){
                foreach ( $specialOffers as $offer ){
                    $offerInfo = get_fields($offer->ID);
                    if( $sort->ID ==  $offerInfo['retailer_groups']->ID ){
                        $range = get_field('range', $offer->ID);
                        if( $matresse->ID ==  $range[0]->ID ){
                            $offersByRetailer[$offerInfo['retailer_groups']->ID][$offer->ID] = $offer;
                        }
                    }
                }
            }
        }

        ?>

        <section id="offers-container" class="offers-section pages">
            <div class="app-container t_center">
                <h1 class="offers-section-title article-box__title"><?= $attrs['cta_special_offers'] ?></h1>
                <?php if(!empty($attrs['cta_special_offers_description'])) : ?>
                    <div class="offers-section-text"><?= $attrs['cta_special_offers_description'] ?></div>
                <?php endif; ?>
            </div>

            <div class=" spec-offers-list owl-carousel">
                <?php foreach ($offersByRetailer as $specialOffers) : ?>
                    <?php $i = 0; ?>
                    <?php foreach ($specialOffers as $offer) : ?>
                        <?php $offerInfo = get_fields($offer->ID); ?>
                        <div class="spec-offer-item ">
                            <div class="spec-offer-top-part">
                                <?php $image[0] = ''; ?>
                                <?php if (has_post_thumbnail( $offer->ID ) ): ?>
                                    <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $offer->ID ), 'large' ); ?>
                                <?php endif; ?>
                                <div class="image-block" style="background-image: url('<?php echo $image[0]; ?>');"></div>
                                <div class="logo-block">
                                    <?= get_the_post_thumbnail($offerInfo['retailer_groups']->ID); ?>
                                </div>
                                <div class="heading-block">
                                    <span><?= $offerInfo['promotion_display_name'] ?></span>
                                </div>
                                <?php $description = get_the_excerpt($offer->ID); ?>
                                <?php if($description) : ?>
                                    <div class="description-block">
                                        <?= $description; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="spec-offer-bottom-part">
                                <div class="action-block">
                                    <?php
                                    $url = '#';

                                    if(isset($offerInfo['promotion_link'][0])){
                                        $url = $offerInfo['promotion_link'][0]['promotion_link_url'];
                                    }
                                    else{
                                        $retailer_groups = get_fields($offerInfo['retailer_groups']->ID);
                                        if($retailer_groups['url']) {
                                            $url = addHttp($retailer_groups['url']);
                                        }
                                    }

                                    $date = new DateTime(get_field('end_date', $offer->ID));

                                    $button_cta = get_field('cta_button_offer', $offer->ID);
                                    ?>
                                    <?php if(empty($button_cta)) : $button_cta = 'Show'; endif; ?>
                                    <a class="ga-button-track" target="_blankss" data-title="<?= $offerInfo['promotion_display_name'] ?>" data-end="<?= $date->format('d F Y'); ?>" data-retailer="<?= get_the_title($offerInfo['retailer_groups']->ID); ?>" href="<?= $url; ?>"><?= $button_cta ?></a>
                                </div>
                                <div class="details-block page-subtitle">
                                    Offer ends <?php echo $date->format('d F Y'); ?>
                                </div>
                            </div>
                        </div>
                        <?php $i++; ?>
                        <?php if($i == 3) {
                            $i = 0;
                            break;
                        } ?>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>

            <div class="view-all-link">
                <a href="/special-offers" title="<?= $attrs['cta_special_offers_link'] ?>" class="app-button-reserve _inline"><?= $attrs['cta_special_offers_link'] ?> <i class="app-svg button-reserve _icon-right"></i></a>
            </div>
        </section>
    <?php endif; ?>
<?php endif; ?>