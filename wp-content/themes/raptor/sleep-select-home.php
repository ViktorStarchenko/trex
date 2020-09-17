<?php
/*
* Template Name: Sleep selector page
* Template Post Type: page
*/
?>
<?php get_header() ?>
<?php $hero = get_field('hero')?>
    <div class="main">
        <div class="select-promo">
            <div class="select-promo__text">
                <div class="select-promo__content">
                    <div class="select-promo__brand"><?= $hero['subtitle']?></div>
                    <h1 class="select-promo__title"><?= $hero['title']?></h1>
                    <div class="content-center small-text">
                        <p><?= $hero['text']?></p><a class="bttn bttn--reverse" href="<?= $hero['link']['url']?>"><?= $hero['link']['title']?></a>
                    </div>
                </div>
                <div class="select-promo__link"><a href="<?= $hero['terms']['url']?>"><?= $hero['terms']['title']?></a></div>
            </div>
            <div class="select-promo__img"><img src="<?= $hero['img']['url']?>" srcset="<?= $hero['img_2x']['url']?> 2x"/>
            </div>
        </div>
    </div>
<?php get_footer() ?>