<?php

    $listImage = get_field('list_image');
    $category = get_the_category(get_post()->ID);

?>
<div class="_col">
    <div class="article-grid-box__item app-centered-box _xl">
        <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= $listImage['url'] ?>)"></div>
        <div>
            <div class="_uphead"><span><?php echo $category[0]->name ?></span></div>
            <div class="_title"><?php the_title() ?></div>
            <div class="_subtitle"><?php the_content() ?></div>
            <a href="<?php the_permalink() ?>" class="app-button-reserve _inline _tp">Explore <?= the_post() ?> <span class="app-svg button-reserve _icon-right"></span></a>
        </div>
    </div>
</div>