<?php
/*
 * Template Name: Promotions and Special Offers
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
                <div class="page-subtitle" style="text-align: center;"><?php the_content(); ?></div>

                <!-- wp:html -->
                <div class="_bottom-tools" style="text-align:center;margin-bottom:80px;">
                    <a href="#Promotions" class="app-button-filter _inline ">Promotions</a>
                    <a href="#SpecialOffers" class="app-button-filter _inline ">Retailer Specials</a>
                </div>
                <!-- /wp:html -->

                <!-- wp:html -->
                <h1 class="page-h1" style="text-align: center;" id="Promotions"><?= get_field('promotions_title')?></h1>
                <div class="page-subtitle" style="text-align: center;"><?= get_field('promotions_text')?></div>
                <!-- /wp:html -->

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

<!-- special offers -->
<section id="container" class="app-wrapper__flex">
    <?php

    $retailerGroups = get_field('retailer_groups_order');
    $filteredBY = get_field("filteredBy");

    $catId = get_query_var('cat_id', null);
    $retailerId = null;
    if( isset($_GET['retailer_id']) ){
        $retailerId = $_GET['retailer_id'];
    }

    $matressesCategory = get_category_by_slug('beds');
    //$matresses = get_posts(['category' => $matressesCategory->cat_ID,'posts_per_page' => -1]);

    $matresses = get_field('special_offers_filter');
    $retailer_sort = get_field('special_offers_retailer_sort');

    $specialOffersCategory = get_category_by_slug('special-offers');

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

    $metaQuery = $baseQuery;
    if ($catId) {
        $metaQuery[] = [
            'key'     => 'range', // name of custom field
            'value'   => '"' . $catId . '"', // matches exaclty "123", not just 123. This prevents a match for "1234"
            'compare' => 'LIKE',
        ];
    }

    if ($retailerId) {
        $metaQuery[] = [
            'key'     => 'retailer_groups',
            'value'   => '' . $retailerId . '',
            'compare' => '=',
        ];
    }

    if ($_GET['retailer']) {
        global $wpdb;
        $retailers = $wpdb->get_results( "
                SELECT * 
                FROM `wp_postmeta` AS `meta`
                INNER JOIN `wp_posts` AS `posts`
                ON `meta`.`post_id` = `posts`.`ID`
                WHERE `meta`.`meta_value` = '".$_GET['retailer']."' AND `meta`.`meta_key` = 'retailer' AND `posts`.`post_type` = 'wpsl_stores'
            " );

        $i = 0;
        $Query['relation'] = 'OR';
        foreach ($retailers as $retailer){
            $Query[$i] = [
                'key'     => 'stores', // name of custom field
                'value'   => '"'.$retailer->post_id.'"', // matches exaclty "123", not just 123. This prevents a match for "1234"
                'compare' => 'LIKE',
            ];
            $i++;
        }
        $metaQuery[] = $Query;
    }

    $posts = get_posts([
        'category'   => $specialOffersCategory->cat_ID,
        'meta_query' => $metaQuery,
        'numberposts' => -1
    ]);
    $orderedPosts = [];

    foreach ($posts as $post) {
        $retailers = [];
        if(get_field('not_all_stores_in_participate', $post->ID)){
            $stores = get_field('stores', $post->ID);
            foreach ($stores as $store){
                $retailers[] = get_field('retailer', $store->ID);
            }
        }
        else{
            $retailers[0] = get_field('retailer_groups', $post->ID);
        }

        $promolinks = get_field("promotion_link", $post->ID);

        $arr = [];
        foreach ($promolinks as $link){
            $arr[$link['promotion_link_retailer']->ID] = $link['promotion_link_url'];
        }

        foreach ($retailers as $retailer){

            if($retailerFlag){
                if($retailer->ID!=$_GET['retailer']){
                    continue;
                }
            }

            $key = array_search($retailer->ID, $retailerGroups);
            $retailerID = $retailer->ID;
            $link = '#';
            if(isset($arr[$retailerID])){
                $link = $arr[$retailerID];
            }
            else{
                $link = get_field('url',$retailerID);
            }

            $range = get_field('range', $post->ID);

            $rangeID = '';
            if( isset($range[0]->ID) ){
                $rangeID = $range[0]->ID;
            }

            if ($key !== false) {
                $orderedPosts[$key][$post->ID] = [
                    'post' => $post,
                    'retailer_id' => $retailerID,
                    'promo_url' => $link,
                    'range' => $rangeID
                ];
            } else {
                $key = count($retailerGroups) + 1;
                $orderedPosts[$key][$post->ID] = [
                    'post' => $post,
                    'retailer_id' => $retailerID,
                    'promo_url' => $link,
                    'range' => $rangeID
                ];
            }
        }
    }

    $retailer_name = [];
    foreach ($retailers as $retailer){
        $retailer_name[$retailer->ID] = $retailer->post_title;
    }

    ksort($orderedPosts);
    wp_reset_postdata();

    $cnt = count($orderedPosts);

    if( $cnt > 0) :
        ?>
        <div class="article-news-box">
            <div class="app-container content">
                <h1 id="SpecialOffers" class="page-h1"><?php echo get_field('special_offers_title'); ?></h1>
                <?php $excerpt = get_the_excerpt(); ?>

                    <div class="page-subtitle">
                        <?php echo get_field('special_offers_text'); ?>
                    </div>

                <?php if ( $filteredBY == 'beds' ) : ?>
                    <div class="_bottom-tools">
                        <a href="<?= get_category_link($specialOffersCategory->cat_ID); ?>" class="app-button-filter _inline <?php echo $catId === null ? 'active' : ''; ?>">All</a>
                        <?php foreach ($matresses as $matresse) : ?>
                            <?php $hasOffers = get_posts([
                                'category'   => $specialOffersCategory->cat_ID,
                                'meta_query' => array_merge($baseQuery, [[
                                    'key'     => 'range', // name of custom field
                                    'value'   => '"' . $matresse->ID . '"', // matches exaclty "123", not just 123. This prevents a match for "1234"
                                    'compare' => 'LIKE',
                                ]]),
                            ]);
                            if (empty($hasOffers)) {
                                continue;
                            }
                            ?>
                            <a href="?cat_id=<?= $matresse->ID; ?>" class="app-button-filter _inline <?php echo $catId == $matresse->ID ? 'active' : ''; ?>"><?= $matresse->post_title; ?></a>
                        <?php endforeach; ?>
                    </div>
                <?php elseif ( $filteredBY == 'retailer' ) : ?>
                    <div class="_bottom-tools">
                        <a href="<?= get_category_link($specialOffersCategory->cat_ID); ?>" class="app-button-filter _inline <?php echo $retailerId === null ? 'active' : ''; ?>">All</a>
                        <?php foreach ($retailer_sort as $retailer_item) : ?>
                            <?php $hasOffers = get_posts([
                                'category'   => $specialOffersCategory->cat_ID,
                                'meta_query' => array_merge($baseQuery, [[
                                    'key'     => 'retailer_groups', // name of custom field
                                    'value'   => '' . $retailer_item->ID . '', // matches exaclty "123", not just 123. This prevents a match for "1234"
                                    'compare' => '=',
                                ]]),
                            ]);
                            if (empty($hasOffers)) {
                                continue;
                            }
                            ?>
                            <a href="?retailer_id=<?= $retailer_item->ID; ?>" class="app-button-filter _inline <?php echo $retailerId == $retailer_item->ID ? 'active' : ''; ?>"><?= $retailer_item->post_title; ?></a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <?php if ( $filteredBY == 'retailer' ) : ?>
        <div class="app-offers-list spec-offers-list">
            <?php foreach ($retailer_sort as $sort) : ?>
                <?php foreach ($orderedPosts as $posts): ?>
                    <?php foreach ($matresses as $matresse) : ?>
                        <?php foreach ($posts as $data): $post = $data['post']; setup_postdata($post); ?>
                            <?php if( $data['retailer_id'] == $sort->ID ) : ?>
                                <?php if( $data['range'] == $matresse->ID ) : ?>
                                    <div class="spec-offer-item ">
                                        <div class="spec-offer-top-part">
                                            <?php $image[0] = ''; ?>
                                            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                                                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' ); ?>
                                            <?php endif; ?>
                                            <div class="image-block" style="background-image: url('<?php echo $image[0]; ?>');"></div>
                                            <div class="logo-block">
                                                <?= get_the_post_thumbnail($data['retailer_id']); ?>
                                            </div>
                                            <div class="heading-block">
                                                <span><?= get_field('promotion_display_name', $post->ID); ?></span>
                                            </div>
                                            <?php $description = get_the_excerpt($post->ID); ?>
                                            <?php if($description) : ?>
                                                <div class="description-block">
                                                    <?= $description; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                        <?php $date = new DateTime(get_field('end_date')); ?>
                                        <div class="spec-offer-bottom-part">
                                            <div class="action-block">
                                                <a class="app-offers-item ga-button-track" target="_blank" data-title="<?= get_field('promotion_display_name', $post->ID) ?>"  data-end="<?= $date->format('d F Y'); ?>" data-name="<?= $post->post_name; ?>" data-retailer="<?= get_the_title($data['retailer_id']); ?>" href="<?= $data['promo_url']; ?>" ><?= get_field('cta_button_offer') ?></a>
                                            </div>
                                            <div class="details-block page-subtitle">
                                                Offer ends <?php echo $date->format('d F Y'); ?>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    <?php endforeach;
                    wp_reset_postdata(); ?>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    <?php elseif ( $filteredBY == 'beds' ) : ?>
        <div class="app-offers-list spec-offers-list">
            <?php foreach ($matresses as $matresse) : ?>
                <?php foreach ($retailer_sort as $sort) : ?>
                    <?php foreach ($orderedPosts as $posts): ?>
                        <?php foreach ($posts as $data): $post = $data['post']; setup_postdata($post); ?>
                            <?php if( $data['retailer_id'] == $sort->ID ) : ?>
                                <?php if( $data['range'] == $matresse->ID ) : ?>
                                    <div class="spec-offer-item ">
                                        <div class="spec-offer-top-part">
                                            <?php $image[0] = ''; ?>
                                            <?php if (has_post_thumbnail( $post->ID ) ): ?>
                                                <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' ); ?>
                                            <?php endif; ?>
                                            <div class="image-block" style="background-image: url('<?php echo $image[0]; ?>');"></div>
                                            <div class="logo-block">
                                                <?= get_the_post_thumbnail($data['retailer_id']); ?>
                                            </div>
                                            <div class="heading-block">
                                                <span><?= get_field('promotion_display_name', $post->ID); ?></span>
                                            </div>
                                            <?php $description = get_the_excerpt($post->ID); ?>
                                            <?php if($description) : ?>
                                                <div class="description-block">
                                                    <?= $description; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                        <?php $date = new DateTime(get_field('end_date')); ?>
                                        <div class="spec-offer-bottom-part">
                                            <div class="action-block">
                                                <a class="app-offers-item ga-button-track" target="_blank" data-title="<?= get_field('promotion_display_name', $post->ID) ?>"  data-end="<?= $date->format('d F Y'); ?>" data-name="<?= $post->post_name; ?>" data-retailer="<?= get_the_title($data['retailer_id']); ?>" href="<?= $data['promo_url']; ?>" ><?= get_field('cta_button_offer') ?></a>
                                            </div>
                                            <div class="details-block page-subtitle">
                                                Offer ends <?php echo $date->format('d F Y'); ?>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    <?php endforeach;
                    wp_reset_postdata(); ?>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
        <?php $form = get_field("form"); ?>
        <?php if( !empty($form) ) : ?>
        <div class="article-news-box0">
            <div class="_custom-gform-styles">
                <div class="article-news-box article-ps-box spec-offer-form gravity-form">
                    <div class="app-container">
                        <?= do_shortcode($form); ?>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>

    <?php else: ?>

        <div class="article-news-box">
            <div class="app-container content">
                <h1 class="page-h1"><?php the_title(); ?></h1>
            </div>
            <?php $excerpt = get_the_excerpt(); ?>
            <?php if($excerpt) : ?>
                <div class="page-subtitle">
                    <?= $excerpt; ?>
                </div>
            <?php endif; ?>
            <?php $form = get_field("form"); ?>
            <?php if( !empty($form) ) : ?>
                <div class="_custom-gform-styles">
                    <div class="article-news-box article-ps-box spec-offer-form gravity-form">
                        <div class="app-container">
                            <?= do_shortcode($form); ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>

    <?php endif; ?>

    <?= do_shortcode('[content_block slug=ready-to-buy]'); ?>
</section>
<script>
jQuery(function() {
	var catid = 0;

	<?php if($catId) {?>
	    	catid = <?php echo $catId;?>
	<?php } ?>

	if(catid){
		jQuery(document).scrollTop( $("#container").offset().top );
	}
});
</script>
<?php get_footer(); ?>
