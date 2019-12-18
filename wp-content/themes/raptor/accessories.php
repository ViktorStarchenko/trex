<div class="article-inline-goods__item _fix-button-margin">
    <div class="article-inline-goods__title"><?php the_title(); ?></div>
    <div class="article-inline-goods__img"><img src="<?php the_post_thumbnail_url( 'full' ); ?>" alt="<?= get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true); ?>"></div>
    <div class="article-inline-goods__subtitle"><?php the_excerpt(); ?></div>
    <a href="#exploreGoodsItem" data-toggle="modal"
       data-target="#exploreGoodsItem-<?= the_ID(); ?>" class="app-button-reserve _inline">
        EXPLORE <span class="app-svg button-reserve _icon-right"></span>
    </a>
    
    <?php if (get_field('characteristics_cta_text') && get_field('characteristics_cta_url')) : ?>
        <div style="padding-top:5px;">
            <a href="<?= get_field('characteristics_cta_url'); ?>" download class="app-button-reserve _inline">
                <?= get_field('characteristics_cta_text'); ?>&nbsp;<span class="app-svg button-reserve _icon-right"></span>
            </a>
        </div>
    <?php endif; ?>
</div>

<div class="modal fade" id="exploreGoodsItem-<?= the_ID(); ?>" tabindex="-1" role="dialog" aria-labelledby="exploreGoodsItemLabel" style="bottom: initial;">
    <div class="modal-dialog" role="document">
        <div class="modal-content accessories-detail">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="app-search-close"></span>
            </button>
            <div class="modal-header">
                <div class="modal-title"><?= the_title(); ?></div>
            </div>
            <div class="modal-body">
                <?php $gallery = get_field('gallery_image_product'); ?>
                <?php if(!empty($gallery)) : $i = 0; ?>
                    <div id="carousel-<?=get_the_ID()?>" style="width: 100%; height: 350px;" class="carousel slide" data-ride="carousel" data-interval="false">
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <?php foreach ($gallery as $item) : $i++; $class = ''; ?>
                                <?php if( $i == 1 ) $class = 'active'; ?>
                                <a href="<?= $item['gallery_image_product_image']['url']; ?>" data-fancybox="gallery-<?=get_the_ID()?>" class="item <?=$class; ?>">
                                    <div class="gallery_image_product_image"
                                        style="background-image: url(<?= $item['gallery_image_product_image']['sizes']['medium_large']; ?>); "
                                    >
                                    </div>
                                </a>
                            <?php endforeach; ?>
                        </div>

                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <?php for ( $y=0; $y < $i; $y++ ) : $class = '';?>
                                <?php if( $y == 0 ) $class = 'active'; ?>
                                <li data-target="#carousel-<?=get_the_ID()?>" data-slide-to="<?=$y;?>" class="<?=$class;?>"></li>
                            <?php endfor; ?>
                        </ol>

                        <div class="left carousel-control" data-slider="#carousel-<?=get_the_ID()?>" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </div>
                        <div class="right carousel-control" data-slider="#carousel-<?=get_the_ID()?>" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </div>
                    </div>
                <?php endif; ?>
                <ul class="accessories-detail-list">
                    <?php foreach (get_field('characteristics_items') as $characteristic): ?>
                        <li><?= $characteristic->post_title; ?></li>
                    <?php endforeach; ?>
                </ul>
                <?php $details = get_field('accessories_details'); ?>

                <?php if ( have_rows('accessories_details') ) : ?>
                    <div class="accessories-detail-table">
                        <table>
                            <tr>
                                <?php while ( have_rows('accessories_details') ) : the_row(); ?>
                                    <th><?php the_sub_field('detail_title'); ?></th>
                                <?php endwhile; ?>
                            </tr>
                            <tr>
                                <?php while ( have_rows('accessories_details') ) : the_row(); ?>
                                    <td><?php the_sub_field('detail_content'); ?></td>
                                <?php endwhile; ?>
                            </tr>
                        </table>
                    </div>
                <?php endif; ?>
                <div class="accessories-detail-buttons">
                    <?php 
                        $selectorUrl = get_field('sleep_selector_cta_url');
                        $selectorTitle = get_field('sleep_selector_cta_title');
                    ?>
                    <button onclick="window.location.href = '<?= !empty($selectorUrl) ? $selectorUrl : '/sleep-selector' ?>';"><?= !empty($selectorTitle) ? $selectorTitle : 'Find the perfect bed solution' ?></button>
                    <?php if (get_field('where_to_buy')) : ?>
                    <?php 
                        $whereToBuyUrl = get_field('where_to_buy_cta_url');
                        $whereToBuyTitle = get_field('where_to_buy_cta_title');
                    ?>
                    <button class="by" onclick="window.location.href = '<?= !empty($whereToBuyUrl) ? $whereToBuyUrl : '/stockists' ?>';"><?= !empty($whereToBuyTitle) ? $whereToBuyTitle : 'Where to buy' ?></button>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>