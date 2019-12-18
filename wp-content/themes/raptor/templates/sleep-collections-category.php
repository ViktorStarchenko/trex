<?php
/*
 * Category Template: Sleep Collections Category
 */
?>

<?php get_header(); ?>
    <section id="container" class="app-wrapper__flex">

        <div class="article-news-box">
            <div class="app-container">
                <h1 class="page-h1">Our collections</h1>
                <div class="page-subtitle">SleepyHead offers a range of bed accessories designed to delight</div>
            </div>
        </div>

        <?php $sleepCollections = get_posts(); ?>

        <?php foreach ($posts as $post) :  setup_postdata( $post ); ?>

            <?php
                $pillows    = get_field('pillows');
                $protectors = get_field('protectors');
                $quits      = get_field('quits');
                $sheets     = get_field('sheets');
                $img        = get_field('list_image');
                $category   = get_the_category($post->post_id)[0];
            ?>

            <div class="article-advice-box">
                <div class="app-container">
                    <div class="article-advice-flex _sm">
                        <div class="_img">
                            <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= $img['url'] ?>)"></div>
                        </div>
                        <div class="app-centered-box article-advice-box__content">
                            <div class="_content-inner t_center">
                                <div class="_uphead"><span><?php echo $category->name; ?></span></div>
                                <div class="_title"><?php the_title(); ?></div>
                                <div class="_subtitle"><?php the_content(); ?></div>
                                <a href="<?php the_permalink() ?>" class="app-button-reserve _inline">explore <i class="app-svg button-reserve _icon-right"></i></a>
                                <div class="_rating-group">
                                    <?php if ($quits) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-5"></i>
                                            <nobr><?= count($quits); ?>x quilt<?= count($quits) > 1 ? 's' : ''?></nobr>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($pillows) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-6"></i>
                                            <nobr><?= count($pillows); ?>x pillow<?= count($pillows) > 1 ? 's' : ''?></nobr>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($protectors) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-7"></i>
                                            <nobr><?= count($protectors); ?>x protector<?= count($protectors) > 1 ? 's' : ''?></nobr>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($sheets) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-9"></i>
                                            <nobr><?= count($sheets); ?>x sheet<?= count($sheets) > 1 ? 's' : ''?></nobr>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; wp_reset_postdata();?>
        <?= do_shortcode("[content_block id=612]"); // All Accessories ?>
    </section>

<?php get_footer();
