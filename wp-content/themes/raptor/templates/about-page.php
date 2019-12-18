<?php
/*
 * Template Name: About
 * Template Post Type: page
 */
?>

<?php get_header(); ?>

<section id="container" class="app-wrapper__flex">
    <div class="article-solution-box">
        <div class="app-container">
            <div class="article-solution-box__content">
                <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url() ?>)"></div>
                <div class="app-centered-right-box _content-lg">
                    <div class="_content-inner">
                        <h1 class="_title"><?php the_field('header_image_title'); ?></h1>
                        <div class="_subtitle"><?php the_field('header_image_description'); ?></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?= do_shortcode('[content_block slug=why-choose-sleepmarket]') ?>
    <?php get_template_part( 'mattresses/technology'); ?>

    <div class="article-news-box article-about-view">
        <div class="app-container">
            <div class="_title"><?php the_field('history_title'); ?></div>

            <section class="cd-container">
                <?php foreach (get_field('history_records') as $historyRecord): ?>
                    <div class="cd-timeline-block clearfix">
                        <div class="cd-timeline-dot"></div>
                        <div class="cd-timeline-content clearfix">
                            <div class="cd-timeline-content__inner">
                                <img src="<?= $historyRecord['image']['url'] ?>" alt="" />
                                <p><?= $historyRecord['description'] ?></p>
                                <span class="cd-date page-h1"><?= $historyRecord['year'] ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
            </section>

        </div>
    </div>
</section>

<?php get_footer(); ?>