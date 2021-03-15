<?php add_action('wp_head', 'add_reviews_js'); ?>
<?php get_header(); ?>

<?php
$top_hero = get_field('top_hero');
$features = get_field('features');
$promo_block = get_field('promo_block');
$catalog_cards = get_field('catalog_cards');
$yotpo = get_field('yotpo');
$yotpo_id = $yotpo['items']['yotpo_product_id'];
$reviews_title = $yotpo['items']['reviews_title'];
$yotpo_api_key = $yotpo['items']['api_key'];
$yotpo_api_secret = $yotpo['items']['api_secret'];
?>
	<div class="main">
        <div class="we-help js-tabs-wrapper">
            <?php if ($top_hero['enable']) : ?>
                <div class="we-help__menu">
                    <div class="we-help__title"><?= $top_hero['items']['title'] ?? ''?></div>
                    <div class="we-help__nav">
                        <ul class="we-help-nav">
                            <?php if(!empty($top_hero['items']['help_nav'])) : $i = 0; ?>
                                <?php foreach ($top_hero['items']['help_nav'] as $item) :
                                    if ($i == 0) : ?>
                                    <li class="we-help-nav__item"><span class="we-help-nav__link js-menu-lvl-trig" data-trig-lvl="lvl-item-explore" ><span class="we-help-nav__name"><?= $item['link']['title'] ?? ''?><span class="we-help-nav__icon">
                                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                        <use xlink:href="#arrow-right"></use>
                                                    </svg></span></span><span class="we-help-nav__text"><?= $item['text'] ?? ''?></span></span></li>
                                    <?php else: ?>
                                        <li class="we-help-nav__item"><a class="we-help-nav__link" href="<?= $item['link']['url'] ?? ''?>"><span class="we-help-nav__name"><?= $item['link']['title'] ?? ''?><span class="we-help-nav__icon">
                                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                        <use xlink:href="#arrow-right"></use>
                                                    </svg></span></span><span class="we-help-nav__text"><?= $item['text'] ?? ''?></span></a></li>
                                    <?php endif; ?>
                                <?php $i++; endforeach;?>
                            <?php endif; ?>
                        </ul>
                        <?php
                            $explore = $top_hero['items']['explore'];
                        ?>
                        <div class="menu-explore-lvl js-menu-lvl-targ" data-targ-lvl="lvl-item-explore">
                            <div class="menu-explore-lvl__head">
                                <div class="menu-explore-lvl__back">
                                    <button class="js-menu-lvl-close lvl-begin menu-explore-bttn">BACK<span class="menu-explore-bttn__icon">
											<svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
												<use xlink:href="#arrow-right"></use>
											</svg></span></button>
                                </div>
                                <div class="menu-explore-lvl__title we-help__title"><?= $explore['title']?></div>
                            </div>
                            <div class="menu-explore-lvl__body">
                                <ul class="we-help-nav">
                                    <?php
                                    $i = 1;
                                    foreach ( $explore['items'] as  $item) : ?>
                                        <li class="we-help-nav__item"><a class="we-help-nav__link js-tab-trigger not-initial" href="#tab-aside-<?= $i ?>"><span class="we-help-nav__name"><?= $item['title'] ?><span class="we-help-nav__icon">
                                                        <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                            <use xlink:href="#arrow-right"></use>
                                                        </svg></span></span><span class="we-help-nav__text"><?= $item['text'] ?></span></a>
                                        </li>
                                    <?php $i++; endforeach; ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="we-help__content">
                    <div class="we-help-aside">
                        <?php
                        $i = 1;
                        foreach ( $explore['items'] as  $item) : ?>
                            <div class="we-help-aside__tab js-tab-content" id="tab-aside-<?= $i ?>">
                                <div class="we-help-aside__title">
                                    <h2><?= $item['aside']['title']?></h2><span><?= $item['aside']['subtitle']?></span>
                                </div>
                                <div class="we-help-aside__content">
                                    <?php if (!empty($item['aside']['subitems'])) : ?>
                                        <?php foreach ( $item['aside']['subitems'] as  $subitem) :?>
                                            <div class="explore-card">
                                                <div class="explore-card__img">
                                                    <picture>
                                                        <source media="(max-width: 768px)" srcset="<?= $subitem['img_mob']['url'] ?> 1x"/><img src="<?= $subitem['img']['url']?>" ?> 2x"/>
                                                    </picture>
                                                </div>
                                                <div class="explore-card__row">
                                                    <div class="explore-card__info">
                                                        <div class="explore-card__title"><?= $subitem['title']?></div>
                                                        <div class="explore-card__caption"><?= $subitem['text']?></div>
                                                    </div>
                                                    <div class="explore-card__bttns"><a class="bttn explore-card__link" href="<?= $subitem['cta']['url']?>"><?= $subitem['cta']['title']?></a></div>
                                                </div>
                                            </div>
                                        <?php endforeach;?>
                                    <?php endif;?>
                                </div>
                            </div>
                        <?php $i++; endforeach; ?>
                    </div>
                    <div class="we-help__img">
                        <picture>
                            <source media="(max-width: 768px)" srcset="<?= $top_hero['items']['img_mob']['url'] ?> 1x "><img src="<?= $top_hero['items']['img']['url'] ?>" />
                        </picture>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <div class="feature-wrap">
            <?php if ($features['enable']) : ?>
                <?php if(!empty($features['items'])) :?>
                    <?php foreach ($features['items'] as $feature) :?>
                        <div class="feature-card">
                            <div class="feature-card__icon"><img src="<?= $feature['icon']['url'] ?? ''?>" srcset="<?= $feature['icon_2x']['url'] ?? ''?> 2x"/>
                            </div>
                            <div class="feature-card__title"><?= $feature['title'] ?? ''?></div>
                            <div class="feature-card__text"><?= $feature['text'] ?? ''?></div>
                        </div>
                    <?php endforeach;?>
                <?php endif; ?>
            <?php endif; ?>
        </div>
        <?php if ($promo_block['enable']) : ?>
            <?php foreach ($promo_block['items']['top'] as $top_item) :?>
                <?php if ($top_item['enable']) : ?>
                <?php $is_video = !empty($top_item['video']['url']) ? true : false; ?>
                    <div class=<?= $is_video ? 'video-decor': 'complete-decor'?>>
                        <?php if($is_video) : ?>
                            <video class="video-decor__action" src="<?= $top_item['video']['url'] ?>" playsinline autoplay muted loop></video>
                        <?php else: ?>
                            <div class="complete-decor__bg">
                                <picture>
                                    <source media="(max-width: 650px)" srcset="<?= $top_item['img_mob']['url'] ?? ''?> 1x, <?= $top_item['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $top_item['img']['url'] ?? ''?>" srcset="<?= $top_item['img_2x']['url'] ?? ''?> 2x"/>
                                </picture>
                            </div>
                        <?php endif; ?>
                        <?php if($is_video) : ?>
                            <div class="video-decor__info">
                        <?php endif; ?>
                            <div class="content-center">
                                <h6><?= $top_item['subtitle'] ?? ''?></h6>
                                <h2><?= $top_item['title'] ?? ''?></h2>
                                <p>
                                    <?= $top_item['text'] ?? ''?>
                                </p><a class="bttn bttn--bg" href="<?= $top_item['cta']['url'] ?? ''?>"><?= $top_item['cta']['title'] ?? ''?></a>
                            </div>
                        <?php if($is_video) : ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            <?php endforeach;?>
            <?php foreach ($promo_block['items']['bottom'] as $bottom_item) :?>
                <?php if ($bottom_item['enable']) : ?>
                    <?php $is_video = !empty($bottom_item['video']['url']) ? true : false; ?>
                    <div class="<?= $is_video ? 'video-decor-left': 'promo-decor'?>">
                        <?php if($is_video) : ?>
                            <video class="video-decor-left__action" src="<?= $bottom_item['video']['url'] ?>" playsinline autoplay muted loop></video>
                        <?php else: ?>
                            <div class="promo-decor__bg">
                                <picture>
                                    <source media="(max-width: 650px)" srcset="<?= $bottom_item['img_mob']['url'] ?? ''?> 1x, <?= $bottom_item['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $bottom_item['img']['url'] ?? ''?>" srcset="<?= $bottom_item['img_2x']['url'] ?? ''?> 2x"/>
                                </picture>
                            </div>
                        <?php endif; ?>
                        <?php if($is_video) : ?>
                        <div class="video-decor-left__info">
                            <?php endif; ?>
                            <div class="content big-text">
                                <h6><?= $bottom_item['subtitle'] ?? ''?></h6>
                                <h2><?= $bottom_item['title'] ?? ''?></h2>
                                <p><?= $bottom_item['text'] ?? ''?></p>
                                <a class="bttn bttn--bg" href="<?= $bottom_item['cta']['url'] ?? ''?>"><?= $bottom_item['cta']['title'] ?? ''?></a>
                            </div>
                            <?php if($is_video) : ?>
                        </div>
                    <?php endif; ?>
                    </div>
                <?php endif; ?>
            <?php endforeach;?>
            <?php foreach ($promo_block['items']['decor'] as $decor_item) :?>
                <?php if ($decor_item['enable']) : ?>
                    <div class="bg-decor">
                        <div class="content-center big-text">
                            <h2><?= $decor_item['title'] ?? ''?></h2>
                            <p><?= $decor_item['text'] ?? ''?></p>
                            <a class="bttn bttn--reverse" href="<?= $decor_item['cta']['url'] ?? ''?>"><?= $decor_item['cta']['title'] ?? ''?></a>
                        </div>
                    </div>
                <?php endif; ?>
            <?php endforeach;?>
        <?php endif; ?>
        <div class="rating-reviews">
            <?php if ($yotpo['enable']) : ?>
                <div class="content-center">
                    <h3><?= $reviews_title ?></h3>
                </div>
                <div class="rating-reviews-slider">
                    <div class="swiper-container js-rating-reviews-slider">
                        <div id="home-reviews" class="swiper-wrapper">
                        </div>
                        <div class="swiper-nav">
                            <div class="swiper-button-prev js-rating-reviews-slider-prev">
                                <div class="swiper-button-icon">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg>
                                </div>
                            </div>
                            <span class="swiper-button-next js-rating-reviews-slider-next yotpo-page-element yotpo-icon yotpo-icon-right-arrow-thin yotpo_next">
                                <div class="swiper-button-icon">
                                    <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                        <use xlink:href="#arrow-right"></use>
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <div class="complete-card-outer">
            <?php if ($catalog_cards['enable']) : ?>
                <div class="content-center">
                    <h3><?= $catalog_cards['items']['title'] ?? '' ?></h3>
                </div>
                <div class="complete-card-wrap">
                    <?php if(!empty($catalog_cards['items']['cards'])) :?>
                        <?php foreach ($catalog_cards['items']['cards'] as $card) :?>
                            <div class="complete-card">
                                <div class="complete-card__img"><img src="<?= $card['img']['url'] ?? ''?>" srcset="<?= $card['img_2x']['url'] ?? ''?> 2x"/>
                                </div>
                                <div class="complete-card__title"><?= $card['title'] ?? ''?>
                                </div>
                                <p class="complete-card__text"><?= $card['text'] ?? ''?></p><a class="bttn" href="<?= $card['cta']['url'] ?? ''?>"><?= $card['cta']['title'] ?? ''?></a>
                            </div>
                        <?php endforeach;?>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
	</div>
<?php
$reviews = '';
if (empty($yotpo_id)) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://api.yotpo.com/oauth/token");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,
        "client_id=$yotpo_api_key&client_secret=$yotpo_api_secret&grant_type=client_credentials");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $response = json_decode($server_output,true);
    $token = $response['access_token'];

    if (!empty($token)) {
        curl_setopt($ch, CURLOPT_URL,"https://api.yotpo.com/v1/apps/$yotpo_api_key/reviews?utoken=$token&page=1&count=10");
        curl_setopt($ch, CURLOPT_POST, 0);
        $reviews_output = curl_exec($ch);
        $reviews_response = json_decode($reviews_output,true);
        $reviews = $reviews_response['reviews'];
    }
    curl_close ($ch);

} else {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://api.yotpo.com/v1/widget/$yotpo_api_key/products/$yotpo_id/reviews.json");
    curl_setopt($ch, CURLOPT_POST, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $response = json_decode($server_output,true);
    $reviews = $response['response']['reviews'];
    curl_close ($ch);
}
?>
	<script>
        var show_all_reviews = <?php echo !empty($yotpo_id) ? 'false' : 'true'; ?>;
        var reviews = <?= json_encode($reviews) ?>;
        var parent = document.getElementById('home-reviews');

        for (var i = 0; i < reviews.length; i++) {
            var rating = reviews[i].score;
            var user;
            if (show_all_reviews) {
                user = reviews[i].name;
            } else {
                user = reviews[i].user.display_name;
            }
            var firstLetters = user.match(/\b(\w)/g);
            var shortName = firstLetters.join('.');

            switch (rating) {
                case 1:
                    rating_class = 'one';
                    break;
                case 2:
                    rating_class = 'two';
                    break;
                case 3:
                    rating_class = 'three';
                    break;
                case 4:
                    rating_class = 'four';
                    break;
                case 5:
                    rating_class = 'five';
                    break;
                default:
                    rating_class = 'five';
            }
            parent.innerHTML += ' <div class="swiper-slide">' +
                '<div class="rating-reviews-card">' +
                '<div class="rating-reviews-card__initials"><span>'+shortName+'</span></div>' +
                '<div class="rating-reviews-card__stars">' +
                '<ul class="rating rating--'+rating_class+'">'+
                '<li class="rating__item">'+
                '<svg class="icon star" width="22" height="22" viewBox="0 0 22 22">'+
                '<use xlink:href="#star"></use>'+
                '</svg>'+
                '</li>'+
                '<li class="rating__item">'+
                '	<svg class="icon star" width="22" height="22" viewBox="0 0 22 22">'+
                '		<use xlink:href="#star"></use>'+
                '	</svg>'+
                '</li>'+
                '<li class="rating__item">'+
                '<svg class="icon star" width="22" height="22" viewBox="0 0 22 22">'+
                '<use xlink:href="#star"></use>'+
                '</svg>'+
                '</li>'+
                '<li class="rating__item">'+
                '<svg class="icon star" width="22" height="22" viewBox="0 0 22 22">'+
                '<use xlink:href="#star"></use>'+
                '</svg>'+
                '</li>'+
                '<li class="rating__item">'+
                '<svg class="icon star" width="22" height="22" viewBox="0 0 22 22">'+
                '<use xlink:href="#star"></use>'+
                '</svg>'+
                '</li>'+
                '</ul></div>'+
                '<div class="rating-reviews-card__title">' + reviews[i].title + '</div>' +
                '<p class="rating-reviews-card__text">'+ reviews[i].content +'</p>' +
                '<div class="rating-reviews-card__name">'+user+'</div>' +
                '</div>' +
                '</div>';
        }
    </script>
<?php get_footer();