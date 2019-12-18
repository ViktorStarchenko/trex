<?php
/*
Template Name: technology Page
*/
?>
<?php get_header(); ?>

<?php
$ID = 967;

//$category = get_the_category_by_ID($ID);

$args = [
    'child_of' => $ID,
    'hide_empty' => 0
];
$categories = get_categories($args);
/*
    $args = [
        'category' => $ID,
        'posts_per_page' => -1
    ];
    $technologies = get_posts( $args );
*/
?>
    <section id="container" class="app-wrapper__flex">
        <div data-post-id="mattresses-technology" class="insert-page insert-page-mattresses-technology ">    <div class="article-news-box _np" id="technology">
                <div class="app-container">
                    <h2 class="_title"><?=get_the_title();?></h2>
                    <div class="_subtitle"><?php the_content();?></div>
                </div>
            </div>
        </div>

        <div class="technology-filter">
            <div class="show-desktop">
                <div class="button-box">View</div>
                <div class="button-box"><button class="app-button-store-filter technology-filter-button active" data-filter="sleepyhead-technologies-category">All Technologies</button></div>
                <?php foreach ($categories as $item) : ?>
                    <div class="button-box"><button class="app-button-store-filter technology-filter-button" data-filter="<?=$item->slug?>"><?=$item->name?></button></div>
                <?php endforeach; ?>
            </div>
            <div class="show-mobile">
                <div class="button-box">View</div>
                <select class="mobile-filter-change">
                    <option value="sleepyhead-technologies-category">All Technologies</option>
                    <?php foreach ($categories as $item) : ?>
                        <option value="<?=$item->slug?>"><?=$item->name?></option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>
        <div class="app-container">
            <div class="technology-filter-items">
                <?=do_shortcode('[ajax_load_more id="5950937353" container_type="div"  transition="masonry" masonry_horizontalorder="false" masonry_selector=".grid-item" post__not_in="6184" post_type="post" posts_per_page="12" category="sleepyhead-technologies-category" order="ASC" button_label="Technologies" button_loading_label="Loading technologies"]'); ?>
            </div>
            <?php /*

        <div class="technology-filter-items">
            <div class="technology-sizer"></div>
            <?php foreach ($technologies as $item) : ?>
                <?php
                $post_cat = get_the_category($item->ID);
                $class = '';
                foreach ($post_cat as $cat){
                    $class .= $cat->slug.' ';
                }
                $params = get_fields($item->ID);
                $description = '';
                $color = 'purple';
                $img = '';
                if(isset($params['short_description_technologies'])){
                    $description = $params['short_description_technologies'];
                }

                if(isset($params['choose_color_technologies'])){
                    $color = $params['choose_color_technologies'];
                }

                if(isset($params['image_technologies'])){
                    $img = $params['image_technologies']['url'];
                }
                ?>
                <a href="<?=get_permalink($item->ID);?>" title="<?=$item->post_title?>" class="technology-item <?=$class.' '.$color;?>">
                    <div class="technology-item-inner">
                        <?php if(!empty($img)) : ?>
                        <div class="technology-img">
                            <img src="<?=$img;?>" alt="<?=$item->post_title?>">
                        </div>
                        <?php endif; ?>
                        <div class="title-technology">
                            <?=$item->post_title?>
                        </div>
                        <div class="_custom-hover">
                            <div class="title-technology"><?=$item->post_title?></div>
                            <div class="technology-description"> <?=$description;?></div>
                            <div class="technology-button">learn more <i class="app-svg button-explore _icon-right"></i></div>
                        </div>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
        */ ?>
        </div>

    </section>


<?php get_footer(); ?>