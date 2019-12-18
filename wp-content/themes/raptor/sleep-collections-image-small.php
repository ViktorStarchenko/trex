<?php
    $listImage = get_field('list_image');
    $category = get_the_category(get_post()->ID);
?>
<div class="_col"> ?
    <div class="article-news-slice__item">
        <div class="article-news-slice app-inline-bg" style="background-image: url(<?= $listImage['url'] ?>)"></div>
        <div class="article-grid-box__item app-centered-box _sm">
            <div class="_custom_article-news-slice">
                <div class="_uphead"><span><?php echo $category[0]->name ?></span></div>
                <div class="_title"><?php the_title() ?></div>
                <div class="_content"><?php the_content() ?></div>
                <a href="<?php the_permalink() ?>" class="app-button-reserve _inline">Read more <span class="app-svg button-reserve _icon-right"></span></a>
            </div>
        </div>
    </div>
</div>