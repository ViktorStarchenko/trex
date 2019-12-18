<?php
/*
 * Template Name: Special Offers
 * Template Post Type: page
 */
?>
<?php get_header(); ?>

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
                <h1 class="page-h1"><?php the_title(); ?></h1>
                <?php $excerpt = get_the_excerpt(); ?>
                <?php if($excerpt) : ?>
                    <div class="page-subtitle">
                        <?= $excerpt; ?>
                    </div>
                <?php endif; ?>
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
        <div class="article-news-box">
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

<?php get_footer();
