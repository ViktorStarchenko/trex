<?php
/*
 * Template Name: Technology Item
 * Template Post Type: post
 */
?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex technology-description-section">
        <?php $ID = get_the_ID(); ?>
        <div class="title_block t_center">
            <?php $fields = get_fields($ID); ?>
            <?php if($fields['sub_title_technologies']) : ?>
                <div class="article-box__uphead">
                    <span><?= $fields['sub_title_technologies'] ?></span>
                </div>
            <?php endif; ?>
            <h1 class="technology-description-title article-box__title"><?= get_the_title() ?></h1>
        </div>



        <div class="app-container">

            <div class="tech-description description-content-block-width">
                <div class="tech-description__main-text">
                    <?php
                    the_content();
                    ?>
                </div>
            </div>

            <?php if($fields['content_box_technologies']) : ?>
                <div class="tech-description-point-list description-content-block">
                    <?php foreach ($fields['content_box_technologies'] as $content_item) : ?>
                        <div class="tech-description-point">
                            <div class="tech-description-point-title"><?= $content_item['content_box_title_technologies']; ?></div>
                            <div class="tech-description-point-text"><?= $content_item['content_box_description_technologies']; ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <?php if($fields['video_technologies']) : ?>
                <div class="tech-description-video description-content-block">
                    <iframe width="100%" height="375"  src="https://www.youtube.com/embed/<?= $fields['video_technologies']; ?>"></iframe>
                </div>
            <?php endif; ?>

            <div class="tech-description-social description-content-block">

                <div class="sosial-links" id="_custom_social">
                    <span class="link-title">Share via:</span>
                    <?=do_shortcode("[Sassy_Social_Share]"); ?>
                    <a href="mailto:CustomerCare@Sleepyhead.co.nz" class="social-link-icon">
                        <i class="fa fa-envelope"></i>
                    </a>
                </div>

                <?php

                $like = get_post_meta($ID, 'vortex_system_likes');
                $dislike = get_post_meta($ID, 'vortex_system_dislikes');

                if(empty($like[0])){
                    $like[0] = 0;
                }
                if(empty($dislike[0])){
                    $dislike[0] = 0;
                }

                $class = '';
                $color_like = '';
                $color_dislike = '';
                if(!isset($_COOKIE['like'])){
                    $class = 'vote-block-js';
                }
                elseif($_COOKIE['like'] == 1){
                    $color_like = 'green';
                    $color_dislike = 'grey';
                }
                elseif($_COOKIE['like'] == 0){
                    $color_like = 'grey';
                    $color_dislike = 'red';
                }
                ?>
                <div class="vote-block <?= $class ?>" data-id="<?= $ID ?>">
                    <span class="vote-title">Was this article helpfull?</span>

                    <div class="vote-positive <?= $color_like ?>">
                        <div class="vote-link-icon positive">
                            <i class="fa fa-thumbs-up"></i>
                        </div>
                        <span class="vote-count positive-count" ><?= $like[0]; ?></span>
                    </div>


                    <div class="vote-negative <?= $color_dislike ?>">
                        <div class="vote-link-icon negative">
                            <i class="fa fa-thumbs-down"></i>
                        </div>
                        <span class="vote-count negative-count" ><?= $dislike[0]; ?></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php if($fields['cta_block_technologies']) : ?>
    <section id="quiz-container" class="quiz-section">
        <div class="app-container t_center">
            <h1 class="quiz-section-title article-box__title"><?= $fields['cta_block_technologies'] ?></h1>
            <div class="quiz-section-text"><?= $fields['cta_block_description_technologies'] ?></div>
            <?php if($fields['cta_block_link_technologies']) : ?>
                <div class="quiz-section-link">
                    <a href="<?= $fields['cta_block_link_technologies'] ?>" title="<?= $fields['cta_block_link_title_technologies'] ?>" class="app-button-reserve _inline"><?= $fields['cta_block_link_title_technologies'] ?> <i class="app-svg button-reserve _icon-right"></i></a>
                </div>
            <?php endif; ?>
        </div>
    </section>
<?php endif; ?>

<?php if($fields['cta_mattress_technologies']) : ?>
    <section id="mattress-range-container" class="mattress-section">
        <div class="app-container t_center">
            <h1 class="range-section-title article-box__title"><?= $fields['cta_mattress_technologies'] ?></h1>
            <div class="range-section-text">
                <?= $fields['cta_mattress_description_technologies'] ?>
            </div>
        </div>

        <div class="mattress-list">
            <?php

            $args = [
                'posts_per_page'   => 4,
                'offset'           => 0,
                'category'         => '',
                'orderby'          => 'date',
                'order'            => 'DESC',
                'post_status'      => 'publish',
                'suppress_filters' => true,
            ];

            $matressesCategory = get_category_by_slug('beds');
            $args['category'] = $matressesCategory->cat_ID;
            $matressesPosts = get_posts($args);

            ?>
            <?php foreach ($matressesPosts as $matres) : ?>
                <?php $matres_fields = get_fields($matres->ID); ?>
                <div class="mattres-item" style="background: url(<?= $matres_fields['home_image_mobile'] ?>) no-repeat 50% 50%;">
                    <div class="mattres-item-uphead">
                        <span><?= $matres_fields['home_page_top_text'] ?></span>
                    </div>
                    <div class="mattres-item-title"><?= $matres->post_title ?></div>

                    <div class="mattres-item-slogan"><?= $matres_fields['home_page_description'] ?></div>

                    <div class="more-link explore-item-link">
                        <a href="<?= get_the_permalink($matres->ID) ?>" class="app-button-reserve _inline">Explore <i class="app-svg button-reserve _icon-right"></i></a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="view-all-link">
            <a href="<?= $fields['cta_mattress_link_technologies'] ?>" title="<?= $fields['cta_mattress_link_title_technologies'] ?>" class="app-button-reserve _inline"><?= $fields['cta_mattress_link_title_technologies'] ?> <i class="app-svg button-reserve _icon-right"></i></a>
        </div>
    </section>
<?php endif; ?>

<?php if($fields['cta_special_offers_technologies']) : ?>
    <?php

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
        'posts_per_page' => 4,
        'offset'           => 0,
        'orderby'          => 'date',
        'order'            => 'DESC',
        'post_status'      => 'publish',
        'suppress_filters' => true,
    ]);

    $cnt = count($specialOffers);

    if( $cnt > 0) :

    ?>
    <section id="offers-container" class="offers-section">
        <div class="app-container t_center">
            <h1 class="offers-section-title article-box__title"><?= $fields['cta_special_offers_technologies'] ?></h1>
            <div class="offers-section-text"><?= $fields['cta_special_offers_description_technologies'] ?></div>
        </div>

        <div class=" spec-offers-list">
            <?php foreach ($specialOffers as $offer) : ?>
                <?php $offerInfo = get_fields($offer->ID); ?>
                <div class="spec-offer-item">
                    <?php if (has_post_thumbnail( $offer->ID ) ): ?>
                        <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $offer->ID ), 'large' ); ?>
                        <div class="image-block" style="background-image: url('<?php echo $image[0]; ?>');"></div>
                    <?php endif; ?>
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
                        ?>
                        <a href="<?= $url; ?>">shop now</a>
                    </div>
                    <div class="details-block page-subtitle">
                        Offer ends <?php echo $date->format('d F Y'); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="view-all-link">
            <a href="/special-offers" title="<?= $fields['cta_special_offers_link_technologies'] ?>" class="app-button-reserve _inline"><?= $fields['cta_special_offers_link_technologies'] ?> <i class="app-svg button-reserve _icon-right"></i></a>
        </div>
    </section>
    <?php endif; ?>
<?php endif; ?>

<?php if($fields['find_a_store_title_technologies']) : ?>
    <section id="find-store-container" class="find-store-section">
        <div class="article-news-box article-collections-box" id="where-to-buy">
            <div class="app-container">
                <h2 class="_title"><?= $fields['find_a_store_title_technologies'] ?></h2>
                <div class="_subtitle spec-subtitle"><?= $fields['find_a_store_description_technologies'] ?></div>
                <div class="article__search-form">
                    <div class="_grid _c2">
                        <div class="">
                            <div class="article__search-form-item">
                                <form action="/stockists" id="retailer_search_form">
                                    <input type="hidden" value="<?= $post->post_name ?>" name="range">
                                    <input type="text" placeholder="Enter suburb or postcode" name="address" id="retailer_search_input" autocomplete="off">
                                    <button type="submit"><i class="app-svg search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>
<?php get_footer(); ?>