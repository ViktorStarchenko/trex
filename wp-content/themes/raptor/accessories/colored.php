<?php
    /*
     * Category Template: Accessories Colored Template
     *
     */

?>
<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">
        <?php
            $accessoriesCategory =  get_category_by_slug( 'accessories' );
            $child_cats = (array) get_term_children( $accessoriesCategory->cat_ID, 'category' );
            $args['category__not_in'] = $child_cats;
            $args['category'] = $accessoriesCategory->cat_ID;
            $posts = get_posts( $args );
        ?>
        <?php foreach ($posts as $post) :  setup_postdata( $post );?>
            <?php
                $pillows = get_field('pillows');
                $protectors = get_field('protectors');
                $quits = get_field('quits');
                $sheets = get_field('sheets');
            ?>
            <div class="article-advice-box">
                <div class="app-container">
                    <div class="article-advice-flex _sm">
                        <div class="_img">
                            <div class="_absolute-bg app-inline-bg" style="background-image: url(<?php the_field( 'colored_image' ); ?>)"></div>
                        </div>
                        <div class="app-centered-box article-advice-box__content">

                            <div class="_content-inner t_center">
                                <div class="_uphead"><span><?php the_field('type'); ?></span></div>
                                <div class="_title"><?php the_title(); ?></div>
                                <div class="_subtitle"><?php the_content(); ?></div>
                                <a href="<?php the_permalink() ?>" class="app-button-reserve _inline">explore <i class="app-svg button-reserve _icon-right"></i></a>
                                <?php if ($technologies) : ?>
                                <div class="_rating-group">
                                    <?php if ($quits) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-5"></i>
                                            <nobr><?= count($quits); ?>x quilt<?= count($quits) > 1 ? 's' : ''?></nobr>
                                            <?php foreach($quits as $quit) : ?>
                                                <div class="_rating-group__title"><?= $quit->post_title; ?></div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($pillows) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-6"></i>
                                            <nobr><?= count($pillows); ?>x pillow<?= count($pillows) > 1 ? 's' : ''?></nobr>
                                            <?php foreach($pillows as $pillow) : ?>
                                                <div class="_rating-group__title"><?= $pillow->post_title; ?></div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($protectors) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-7"></i>
                                            <nobr><?= count($protectors); ?>x protector<?= count($protectors) > 1 ? 's' : ''?></nobr>
                                            <?php foreach($protectors as $protector) : ?>
                                                <div class="_rating-group__title"><?= $protector->post_title; ?></div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($sheets) : ?>
                                        <div class="_rating-group-item">
                                            <i class="app-svg luxury-9"></i>
                                            <nobr><?= count($sheets); ?>x sheet<?= count($sheets) > 1 ? 's' : ''?></nobr>
                                            <?php foreach($sheets as $sheet) : ?>
                                                <div class="_rating-group__title"><?= $sheet->post_title; ?></div>
                                            <?php endforeach; ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; wp_reset_postdata();?>
        <?= do_shortcode("[content_block id=612]"); ?>
    </section>

<?php get_footer();