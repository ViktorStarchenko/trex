<?php get_header(); ?>

<?php $fields = get_fields($ID); ?>
<?php if($fields['content_box_technologies']) : ?>
    <section id="container" class="app-wrapper__flex technology-description-section">
        <?php $ID = get_the_ID(); ?>
        <div class="title_block t_center">
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
                    <?= get_the_post_thumbnail($ID); ?>
                    <div class="description-content-block-content">
                        <?php
                        the_content();
                        ?>
                    </div>
                </div>
            </div>

            <?php if($fields['content_box_technologies']) : ?>
                <div class="tech-description-point-list description-content-block">
                    <?php foreach ($fields['content_box_technologies'] as $content_item) : ?>
                        <div class="tech-description-point">
                            <div class="tech-description-point-title"><?= $content_item['content_box_title_technologies']; ?></div>
                            <div class="tech-description-point-text"><?= $content_item['content_box_description_technologies']; ?></div>
                            <?php if($content_item['youtube_video_link']) : ?>
                                <div class="tech-description-video description-content-block">
                                    <iframe width="100%" height="375"  src="https://www.youtube.com/embed/<?= $content_item['youtube_video_link']; ?>"></iframe>
                                </div>
                            <?php endif; ?>
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
                    <span class="vote-title">Was this article helpful?</span>

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

    <?php if ($fields['show_ebook_technologies']) : ?>
        <?= do_shortcode("[content_block slug=download-ebook]"); ?>
    <?php endif; ?>

    <?php if ($fields['related_posts_technologies']) : ?>
        <div class="article-news-box article-related-posts">
            <div class="app-container">
                <div class="_title">Related content</div>
                <div class="article-grid-box">
                    <div class="_grid _c3">
                        <?= do_shortcode('[ic_add_posts template="sleep-guide-posts-image.php" ids="' . implode(',', $fields['related_posts_technologies']) . '"]') ?>
                    </div>
                </div>
                <div class="app-more-articles">
                    <?php
                    $CTARelatedTitle = $fields['related_posts_cta_text_technologies'];
                    $CTARelatedLink = $fields['related_posts_cta_link_technologies'];
                    ?>
                    <a href="<?= $CTARelatedLink ? $CTARelatedLink : '/sleep-guide' ?>" class="_link app-link-animation"><?= $CTARelatedTitle ? $CTARelatedTitle : 'View more articles' ?></a>
                </div>
            </div>
        </div>
    <?php endif; ?>

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
        <section id="mattress-range-container" class="section-mattress__ranges">
            <div class="app-container t_center">
                <h1 class="range-section-title article-box__title"><?= $fields['cta_mattress_technologies'] ?></h1>
                <div class="range-section-text">
                    <?= $fields['cta_mattress_description_technologies'] ?>
                </div>
            </div>
            <div class="article-mattress-list">
                <div class="section-list clearfix ">
                    <?php

                    if(isset($fields['mattress_technologies']) && !empty($fields['mattress_technologies'])){
                        $matressesPosts = $fields['mattress_technologies'];
                    }
                    else{
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
                    }


                    ?>
                    <?php foreach ($matressesPosts as $matres) : ?>
                        <?php $matres_fields = get_fields($matres->ID); ?>

                        <div class="list-item" onclick="window.location.href='<?php the_permalink($matres->ID); ?>'">
                            <div class="list-item__wrap" style="background: url(<?= $matres_fields['home_image_mobile'] ?>) no-repeat 50% 50%;);">
                                <div class="list-item__inner">
                                    <div class="list-item__label"><span><?= $matres_fields['home_page_top_text'] ?></span></div>
                                    <div class="list-item__title"><?= $matres->post_title ?></div>
                                    <div class="list-item__text"><?= $matres_fields['home_page_description'] ?></div>
                                    <div class="list-item__btn-wrap">
                                        <a href="<?= get_the_permalink($matres->ID) ?>" class="list-item__btn app-button-white _inline">
                                            Explore <i class="app-svg button-explore _icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <?php endforeach; ?>
                </div>
            </div>
            <div class="view-all-link">
                <a href="<?= $fields['cta_mattress_link_technologies'] ?>" title="<?= $fields['cta_mattress_link_title_technologies'] ?>" class="app-button-reserve _inline"><?= $fields['cta_mattress_link_title_technologies'] ?> <i class="app-svg button-reserve _icon-right"></i></a>
            </div>
        </section>
    <?php endif; ?>

    <?php if($fields['special_offers_title_technologies']) : ?>

        <?= do_shortcode("[insert_template template='templates/special-offers.php' cta_special_offers='".$fields['special_offers_title_technologies']."' cta_special_offers_description='".$fields['cta_special_offers_description_technologies']."' cta_special_offers_link='".$fields['cta_special_offers_link_technologies']."']"); ?>

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
<?php else: ?>
    <section id="container" class="app-wrapper__flex">
        <?php if ( is_home() && ! is_front_page() ) : ?>
            <header class="page-header">
                <h1 class="page-title"><?php single_post_title(); ?></h1>
            </header>
        <?php else : ?>
            <?php while ( have_posts() ) : the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile; ?>
        <?php endif; ?>
        <?php get_sidebar(); ?>
    </section>
<?php endif; ?>

<?php get_footer();