<?php add_action('wp_head', 'add_reviews_js'); ?>
<?php get_header(); ?>

<?php
$top_hero = get_field('top_hero');
$features = get_field('features');
$promo_block = get_field('promo_block');
$catalog_cards = get_field('catalog_cards');
$yotpo = get_field('yotpo');
$reviews_title = $yotpo['reviews_title'];
?>
	<div class="main">
		<div class="we-help">
			<div class="we-help__menu">
				<div class="we-help__title"><?= $top_hero['title'] ?? ''?></div>
				<div class="we-help__nav">
					<ul class="we-help-nav">
						<?php if(!empty($top_hero['help_nav'])) :?>
							<?php foreach ($top_hero['help_nav'] as $item) :?>
								<li class="we-help-nav__item"><a class="we-help-nav__link" href="<?= $item['link']['url'] ?? ''?>"><span class="we-help-nav__name"><?= $item['link']['title'] ?? ''?><span class="we-help-nav__icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span></span><span class="we-help-nav__text"><?= $item['text'] ?? ''?></span></a></li>
							<?php endforeach;?>
						<?php endif; ?>
					</ul>
				</div>
			</div>
			<div class="we-help__img">
				<picture>
					<source media="(max-width: 768px)" srcset="<?= $top_hero['img_mob']['url'] ?? ''?> 1x, <?= $top_hero['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $top_hero['img']['url'] ?? ''?>" srcset="<?= $top_hero['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
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
		<div class="complete-decor">
			<div class="complete-decor__bg">
				<picture>
					<source media="(max-width: 650px)" srcset="<?= $promo_block['top']['img_mob']['url'] ?? ''?> 1x, <?= $promo_block['top']['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $promo_block['top']['img']['url'] ?? ''?>" srcset="<?= $promo_block['top']['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="content-center">
				<h6><?= $promo_block['top']['subtitle'] ?? ''?></h6>
				<h2><?= $promo_block['top']['title'] ?? ''?></h2>
				<p>
					<?= $promo_block['top']['text'] ?? ''?>
				</p><a class="bttn bttn--bg" href="<?= $promo_block['top']['cta']['url'] ?? ''?>"><?= $promo_block['top']['cta']['title'] ?? ''?></a>
			</div>
		</div>
		<div class="promo-decor">
			<div class="promo-decor__bg">
				<picture>
					<source media="(max-width: 650px)" srcset="<?= $promo_block['bottom']['img_mob']['url'] ?? ''?> 1x, <?= $promo_block['bottom']['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $promo_block['bottom']['img']['url'] ?? ''?>" srcset="<?= $promo_block['bottom']['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="content big-text">
				<h6><?= $promo_block['bottom']['subtitle'] ?? ''?></h6>
				<h2><?= $promo_block['bottom']['title'] ?? ''?></h2>
				<p><?= $promo_block['bottom']['text'] ?? ''?></p>
				<a class="bttn bttn--bg" href="<?= $promo_block['bottom']['cta']['url'] ?? ''?>"><?= $promo_block['bottom']['cta']['title'] ?? ''?></a>
			</div>
		</div>
		<div class="bg-decor">
			<div class="content-center big-text">
				<h2><?= $promo_block['decor']['title'] ?? ''?></h2>
				<p><?= $promo_block['decor']['text'] ?? ''?></p>
				<a class="bttn bttn--reverse" href="<?= $promo_block['decor']['cta']['url'] ?? ''?>"><?= $promo_block['decor']['cta']['title'] ?? ''?></a>
			</div>
		</div>
		<div class="rating-reviews">
			<div class="content-center">
				<h3><?= $reviews_title?></h3>
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
		</div>
		<div class="complete-card-outer">
			<div class="content-center">
				<h3><?= $catalog_cards['title'] ?? '' ?></h3>
			</div>
			<div class="complete-card-wrap">
				<?php if(!empty($catalog_cards['cards'])) :?>
					<?php foreach ($catalog_cards['cards'] as $card) :?>
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
		</div>
	</div>
	<script>
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var responseBody = JSON.parse(this.responseText);
                var reviews = responseBody.response.reviews;
                var parent = document.getElementById('home-reviews');

                for (var i = 0; i < reviews.length; i++) {
                    var rating = reviews[i].score;
                    var user = reviews[i].user.display_name;
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
                        '<div class="rating-reviews-card__name">'+reviews[i].user.display_name+'</div>' +
                        '</div>' +
                        '</div>';
                }
            }
        });

        xhr.open("GET", "https://api.yotpo.com/v1/widget/nTvdl5HFT1TU7SIJWaQU9c4b0n2gzJx11sDi0L8B/reviews.json");
        xhr.setRequestHeader("content-type", "application/json");

        xhr.send(data);



	</script>
<?php get_footer();