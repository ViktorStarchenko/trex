<?php
/*
 * Template Name: Sleep Guide
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex _sleep-guides">
        <div class="article-solution-box">
            <div class="app-container">
                <div class="article-solution-box__content">
                    <div class="app-centered-box _content _invert-max-height">
                        <div>
                            <?php

                            $sleepGuidePage = get_page_by_path('sleep-guide');
                            $excludeCategory = get_category_by_slug('sleepyhead-technologies-category');
                            $excludeCategory2 = get_category_by_slug('mattresses-technologies');
                            $excludeCategory3 = get_category_by_slug('fibre');
                            $excludeCategory4 = get_category_by_slug('foam');
                            $excludeCategory5 = get_category_by_slug('spring-core');

                            $sleepGuideSubPages = get_pages([
                                'child_of' => $sleepGuidePage->ID,
                                'exclude' => [5917],
                                'sort_column' => 'menu_order'
                            ]);
                            
                            $category = get_field('category', $post->ID);
                            $offset = 8;

                            $cta1 = get_field('cta_1', $post->ID);
                            $cta2 = get_field('cta_2', $post->ID);

                            $firstRow = 3;
                            $secondRow = 4;

                            if ($cta1) {
                                $offset -= 1;
                                $firstRow -= 1;
                            }
                            if ($cta2) {
                                $offset -= 1;
                                $secondRow -= 1;
                            }

                            $posts = get_posts([
                                'category'       => $category->term_id,
                                'posts_per_page' => 10,
                                'category__not_in' => [$excludeCategory->term_id, $excludeCategory2->term_id, $excludeCategory3->term_id, $excludeCategory4->term_id, $excludeCategory5->term_id]
                            ]);

                            $excludePostIds = [];
                            $cnt = 0;
                            foreach ($posts as $_post) {
                                if ($cnt == 8) {
                                    break;
                                }
                                $excludePostIds[] = $_post->ID;
                                $cnt++;
                            }

                            $postsCnt = count($posts);
                            ?>
                            <h1 class="_title"><?= $post->post_content ?> </h1>
                            <?php if (!empty($sleepGuideSubPages)) : ?>
                                <div class="_bottom-tools">
                                    <?php foreach ($sleepGuideSubPages as $page) : ?>
                                        <a href="<?= get_permalink($page->ID) ?>" class="app-button-reserve _inline <?= htmlspecialchars_decode($page->post_title) == htmlspecialchars_decode($category->name) ? ' active' : '';?>"><?= $page->post_title ?></a>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php /* do_shortcode('[ic_add_posts exclude_ids="'.$excludePostIds.'" category="' . $category->slug . '" template="sleep-guide-one-post.php" showposts="1" orderby="date" order="DESC"]'); */ ?>

        <div class="article-advice-box article-advice-hover" onclick="window.location.href='<?= get_the_permalink($posts[0]->ID); ?>'">
            <div class="app-container">
                <div class="article-advice-flex _sm">
                    <div class="_img">
                        <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url( $posts[0]->ID, 'full' ); ?>)"></div>
                    </div>
                    <div class="app-centered-box article-advice-box__content">
                        <div class="_content-inner">

                                <div class="_uphead"><span><?= get_the_category_list(', ', '', $posts[0]->ID); ?></span></div>

                            <h2 class="_title"><?= $posts[0]->post_title; ?></h2>
                            <div class="_subtitle"><?= get_field('sub_title_technologies' , $posts[0]->ID); ?></div>
                            <a href="<?= get_the_permalink($posts[0]->ID); ?>" class="app-button-reserve _inline">read more <i class="app-svg button-reserve _icon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="app-container">
            <?php if ($postsCnt > 1): ?>
                <div class="article-grid-box">
                    <div class="_grid _grid-flex _c3">

                        <?php for ($i = 1; $i < 1 + $firstRow; $i++): ?>
                            <?php if (!isset($posts[$i])) break; ?>
                            <div class="_col" onclick="window.location.href='<?= get_the_permalink($posts[$i]->ID); ?>'">
                                <div class="article-news-slice__item _vertical-between">
                                    <div class="article-news-slice app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url($posts[$i]->ID, 'full'); ?>)"></div>
                                    <div class="article-grid-box__item app-centered-box _sm">
                                        <div class="app-centered-box-child">
                                            <div class="_uphead">
                                                <span><?= get_the_category_list(', ', '', $posts[$i]->ID); ?></span>
                                            </div>
                                            <div>
                                                <div class="_title"><?= $posts[$i]->post_title; ?></div>
                                                <div class="_subtitle"><?= has_excerpt($posts[$i]->ID) ? get_the_excerpt($posts[$i]->ID) : null; ?></div>
                                            </div>
                                            <a href="<?= get_the_permalink($posts[$i]->ID); ?>" class="app-button-reserve _inline">read more
                                                <i class="app-svg button-reserve _icon-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endfor; ?>

                        <?php if ($cta1): ?>
                            <div class="_col">
                                <?= do_shortcode($cta1); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ($postsCnt > 2 + $firstRow): ?>
                <div class="article-grid-box">
                    <div class="_grid _grid-flex _c4">
                        <?php if ($cta2): ?>
                            <div class="_col">
                                <?= do_shortcode($cta2); ?>
                            </div>
                        <?php endif; ?>
                        <?php for ($i = 1 + $firstRow; $i < 1 + $firstRow + $secondRow; $i++): ?>
                            <?php if (!isset($posts[$i])) break; ?>
                            <div class="_col" onclick="window.location.href='<?= get_the_permalink($posts[$i]->ID); ?>'">
                                <div class="article-news-slice__item _vertical-between">
                                    <div class="article-grid-box__item app-centered-box _sm">
                                        <div class="_uphead">
                                            <span><?= get_the_category_list(', ', '', $posts[$i]->ID); ?></span>
                                        </div>
                                        <div class="app-centered-box-child">
                                            <div class="_title"><?= $posts[$i]->post_title; ?></div>
                                            <div class="_subtitle"><?= has_excerpt($posts[$i]->ID) ? get_the_excerpt($posts[$i]->ID) : null; ?></div>
                                        </div>
                                        <a href="<?= get_the_permalink($posts[$i]->ID); ?>" class="app-button-reserve _inline">read more
                                            <i class="app-svg button-reserve _icon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <?= do_shortcode('[content_block slug=download-ebook]'); ?>
        <div class="app-container">
            <div class="article-grid-box">
                <div class="_grid _grid-flex _grid-flex-wrap _c4">
                    <noscript>
                    <?php

                        $paged = get_query_var('paged');
                        $postsPerPage = '4';
                        $offset = 0;

                        if (!$paged) {
                            $offset = 8;
                            $page = 1;
                        } else {
                            $offset = 4 + (($paged - 1 ) * $postsPerPage + 4);
                            $page = $paged;
                        }

                        $wpQuery = new WP_Query(
                            [
                                'post_type' => 'post',
                                'posts_per_page' => $postsPerPage,
                                'paged' => $paged,

                                'category__in'     => $category->term_id,
                                'category__not_in' => [$excludeCategory->term_id],

                                'order' => 'DESC',
                                'orderby' => 'date',

                                'post__not_in' => $excludePostIds,
                            ]
                        );

                        $GLOBALS['wp_query'] = $wpQuery;

                        ?>

                        <div class="ajax-load-more-wrap default alm-0">
                            <div class="alm-listing alm-ajax">
                                <?php while ($wpQuery->have_posts()): $wpQuery->the_post() ?>
                                    <div class="_col ajax-load-more-margin-bottom" onclick="window.location.href='<?= get_the_permalink(); ?>'">
                                        <div class="article-news-slice__item _vertical-between">
                                            <div class="article-grid-box__item app-centered-box _sm">
                                                <?php if ( count( get_the_category() ) ) : ?>
                                                    <div class="_uphead"><span><?= get_the_category_list( ', ' ); ?></span></div>
                                                <?php endif ?>
                                                <div>
                                                    <div class="_title"><?php the_title(); ?></div>
                                                    <div class="_content"><?= has_excerpt() ? get_the_excerpt() : null; ?></div>
                                                </div>
                                                <a href="<?php the_permalink(); ?>" class="app-button-reserve _inline">Read more <span class="app-svg button-reserve _icon-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                <?php endwhile; ?>
                            </div>
                        </div>
                        
                        <?php the_posts_pagination(array('mid_size'  => 25,)); ?>
                        <?php wp_reset_query(); ?>
                    </noscript>
                    <?= do_shortcode('[ajax_load_more category__not_in="'.$excludeCategory->term_id.'" transition="fade" container_type="div" post_type="post" category="' . $category->slug . '" posts_per_page="4" preloaded="true" offset="8" pause="false" transition_container="false" images_loaded="true" button_label="Load More" scroll="false"]'); ?>

                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>