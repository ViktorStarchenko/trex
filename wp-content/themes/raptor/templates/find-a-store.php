<?php 
    /*
     * Template Name: Find a Store Block
     * Template Post Type: page
     */
?>
<div class="article-news-box article-collections-box">
    <div class="app-container">
        <div class="_title"><?php the_field('find_store_title'); ?></div>
        <div class="_subtitle"><?php the_field('find_store_description'); ?></div>
        <?= do_shortcode("[wpsl]"); ?>
        <?php $retailerGroups = get_field('retailer_groups'); ?>
        <?php if ($retailerGroups) : ?>
        <div class="_title"><?php the_field('shop_online_title'); ?></div>
        <div class="article__search-form-grid">
            <div class="article__send-form-grid">
                <?php $retailerGroupsChunk = array_chunk($retailerGroups,2); ?>
                <?php foreach ($retailerGroupsChunk as $retailers) : ?>
                    <div class="_col">
                        <?php foreach ($retailers as $retailer) : ?>
                        <?php print_r($retailer); ?>
                        <a href="#" class="app-button-reserve article__search-form-btn"><?= $retailer->post_title() ?><span class="app-svg button-reserve _icon-right"></span></a>
                        <?php endforeach; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endif; ?>
    </div>
</div>
    