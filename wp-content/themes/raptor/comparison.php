<?php
/*
* Template Name: Comparison page
* Template Post Type: page
*/
?>
<?php get_header() ?>
<?php $hero = get_field('hero')?>
<?php $explore = get_field('explore')?>
    <div class="main">
        <div class="hero-screen">
            <picture class="hero-screen__pictire">
                <source media="(max-width: 768px)" srcset="<?= $hero['img_mob']['url'] ?? ''?> 1x, <?= $hero['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $hero['img']['url'] ?? ''?>" srcset="<?= $hero['img_2x']['url'] ?? ''?> 2x"/>
            </picture>
            <div class="hero-screen__title"><?= $hero['title'] ?? ''?></div>
        </div>
        <div class="container">
            <div class="comparison-wrap">
                <div class="content-center">
                    <h4><?= $explore['title'] ?? ''?></h4>
                    <p><?= $explore['text'] ?? ''?></p>
                </div>
                <div class="comparison-grid js-acc-wrap">
                    <?php if(!empty($explore['cards_items'])) :?>
                        <?php $i = 0; ?>
                        <?php foreach ($explore['cards_items'] as $card) :?>
                            <div class="comparison-card">
                                <div class="comparison-card__img"><img src="<?= $card['img']['url'] ?? '' ?>" srcset="<?=  $card['img']['url'] ?? '' ?> 2x"/>
                                </div>
                                <div class="comparison-card__head">
                                    <div class="comparison-card__title"><?= $card['title'] ?? '' ?></div><a class="bttn" href="<?= $card['cta']['url'] ?? '' ?>"><?= $card['cta']['title'] ?? '' ?></a>
                                </div>
                                <div class="comparison-card__text"><?= $card['text'] ?? '' ?></div>
                                <div class="comparison-card__accordion js-acc accordeon" >
                                    <div class="accordeon__title js-acc-trig"><span class="accordeon__title-icon">
                                            <svg class="icon plus" width="30" height="30" viewBox="0 0 30 30">
                                                <use xlink:href="#plus"></use>
                                            </svg></span><?= $explore['details_items'][$i]['details_title'] ?? ''?></div>
                                    <div class="accordeon__body js-acc-targ">
                                        <div class="content">
                                            <?php if(!empty($explore['details_items'][$i]['details_list'])) :?>
                                                <?php foreach ($explore['details_items'][$i]['details_list'] as $item) :?>
                                                    <dl>
                                                        <dt><?= $item['title'] ?></dt>
                                                        <dd><?= $item['text'] ?></dd>
                                                    </dl>
                                                <?php endforeach;?>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php $i++; endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="swap-card-wrap">
                <div class="swap-card">
                    <div class="swap-card__content swap-card__content--center">
                        <div class="swap-card__content-inner">
                            <h5 class="swap-card__title"><?= $explore['bottom_banner']['title'] ?? ''?></h5>
                            <p class="swap-card__text"><?= $explore['bottom_banner']['text'] ?? ''?></p><a class="bttn bttn--reverse" href="<?= $explore['bottom_banner']['button']['url'] ?? ''?>"><?= $explore['bottom_banner']['button']['title'] ?? ''?></a>
                        </div>
                    </div>
                    <div class="swap-card__img"><img src="<?= $explore['bottom_banner']['img']['url'] ?? ''?>" srcset="<?= $explore['bottom_banner']['img']['url'] ?? ''?> 2x"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer() ?>