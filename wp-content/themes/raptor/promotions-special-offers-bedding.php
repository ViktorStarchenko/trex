<?php
/*
 * Template Name: Promotions and Special Offers Bedding
 * Template Post Type: page
 */
?>
<?php get_header(); ?>

<section class="promo-list-box">
    <div class="app-container">
        <div class="page-content">
            <div >
                <div class="page-subtitle" style="text-align: center;"><?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="container" class="app-wrapper__flex">
    <?php
    $filteredBY = get_field("filteredBy");

    $catId = get_query_var('cat_id', null);

    $beddingCategory = get_category_by_slug('bedding');
    $pillowsCategory = get_category_by_slug('pillows');
    $protectorsCategory = get_category_by_slug('protectors');
    $duvetsCategory = get_category_by_slug('duvets');

    $bedding = get_field('special_offers_filter');

    $beddingCategoryId = $beddingCategory->term_id;
    $pillowsCategoryId = $pillowsCategory->term_id;
    $protectorsCategoryId = $protectorsCategory->term_id;

    $categoriesIds = [$pillowsCategory->term_id, $duvetsCategory->term_id, $protectorsCategory->term_id];

    $beddingCategoryId = $beddingCategory->term_id;

    $i = 0;
    foreach ($bedding as $bedding_item) {
        $bedding_item->{"catId"} = $categoriesIds[$i];
        $i++;
    }

    $tz = get_option('timezone_string');
    $timestamp = time();
    $dt = new DateTime("now", new DateTimeZone($tz));
    $dt->setTimestamp($timestamp);
    $date =  $dt->format('Y-m-d');

   ?>
    <div class="article-news-box no-padding">
            <div class="app-container content">
                <h1 id="SpecialOffers" class="page-h1"><?php echo get_field('special_offers_title'); ?></h1>
                <?php $excerpt = get_the_excerpt(); ?>
                <div class="page-subtitle">
                    <?php echo get_field('special_offers_text'); ?>
                </div>
                    <div class="_bottom-tools">
                        <a href="<?= get_category_link($beddingCategoryId); ?>" class="app-button-filter _inline <?php echo $catId === null ? 'active' : ''; ?>">All</a>
                        <?php foreach ($bedding as $bedding_item) : ?>
                            <a href="?cat_id=<?= $bedding_item->catId; ?>" class="app-button-filter _inline <?php echo $catId == $bedding_item->catId ? 'active' : ''; ?>"><?= $bedding_item->post_title; ?></a>
                        <?php endforeach; ?>
                    </div>
            </div>
        </div>

        <div class="app-offers-list spec-offers-list no-padding-top">
            <?php if (isset($_GET['cat_id'])) :
                foreach ($bedding as $bedding_item) :
                    if ($bedding_item->catId == $_GET['cat_id']) :
                        $term = get_term($_GET['cat_id']);
                        $posts = get_posts([
                            'category'   => $_GET['cat_id'],
                        ]);?>
                        <div class="article-inline-goods">  
                            <?php foreach($posts as $post) : 
                            ?>
                            <?php echo template_part('accessories',$post);?>
                            <?php endforeach; ?>
                            </div>
                    <?php
                    endif;
                    endforeach;
            else:
                
                    $posts = get_posts([
                            'category'   => "$pillowsCategory->term_id, $duvetsCategory->term_id, $protectorsCategory->term_id",
                            'numberposts' => -1
                     ]);?>
                        <div class="article-inline-goods">
                            <?php foreach($posts as $post) : 
                            ?>
                                <?php echo template_part('accessories',$post);?>
                            <?php endforeach; ?>
                        </div>
                <?php
                endif; ?>
        </div>
    <?= do_shortcode('[content_block slug=ready-to-buy]'); ?>
    <?php
        function template_part($template, $data = []){
            extract($data);
            ob_start();
            require get_stylesheet_directory() . '/' . $template . '.php';

            return ob_get_clean();
        }
    ?>
</section>

<script>
    jQuery(document).ready(function() {
        if (typeof ga == 'function') {
            ga('send', 'event', 'page', 'load', 'FindARetailerSpecialOffer');
        }
        if(jQuery('.article-inline-goods__item').length % 3 == 1 && jQuery('.article-inline-goods__item').length > 1) {
            jQuery('.article-inline-goods__item').last().addClass('no-flex');
        }
    });
</script>

<?php get_footer(); ?>
