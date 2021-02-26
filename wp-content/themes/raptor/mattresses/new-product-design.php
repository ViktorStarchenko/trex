<?php /*
 * Template Name: Mattresses New
 * Template Post Type: post
 */ ?>
<?php add_action('wp_head', 'add_reviews_js'); ?>
<?php get_header() ?>
<?php
$hero = get_field('hero');
$features = get_field('product_features');
$cards = get_field('product_cards');
$technology = get_field('technology');
$product_specs = get_field('product_specs');
$promo = get_field('promo');
$factory = get_field('factory');
$related_articles = get_field('related_articles');
$complete_cards = get_field('complete_card');
?>
	<div class="main">
		<div class="product-hero" id="product-overview">
			<div class="product-hero__bg">
				<picture>
					<source media="(max-width: 768px)" srcset="<?= $hero['img_mob']['url'] ?? ''?> 1x, <?= $hero['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $hero['img']['url'] ?? ''?>" srcset="<?= $hero['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="product-hero__head">
				<div class="product-hero__brand"><img src="<?= $hero['brand_img']['url'] ?? ''?>" alt=""></div>
				<div class="product-hero__logo"><img src="<?= $hero['product_logo']['url'] ?? ''?>" srcset="<?= $hero['product_logo_2x']['url'] ?? ''?> 2x"/>
				</div>
			</div>
			<div class="content">
				<h6><?= $hero['subtitle'] ?? ''?></h6>
				<h2><?= $hero['title'] ?? ''?></h2>
				<p><?= $hero['text'] ?? ''?></p>
			</div>
            <?php if(!empty($hero['cta'])) : ?>
                <a class="product-hero-btn" href="<?= $hero['cta']['url'] ?? ''?>"><span class="product-hero-btn__icon"><span class="product-hero-btn__icon-inn"></span></span><?= $hero['cta']['title'] ?? ''?></a>
            <?php endif; ?>
		</div>
        <div class="feature-wrap">
            <?php if(!empty($features)) :?>
                <?php foreach ($features as $feature) :?>
                    <div class="feature-card">
                        <div class="feature-card__icon"><img src="<?= $feature['img']['url'] ?? ''?>" srcset="<?= $feature['img_2x']['url'] ?? ''?> 2x"/>
                        </div>
                        <div class="feature-card__text"><?= $feature['text'] ?? ''?></div>
                    </div>
                <?php endforeach;?>
            <?php endif; ?>
        </div>
		<div id="product-features">
			<div class="shift-card-wrap">
				<?php if(!empty($cards)) :?>
					<?php foreach ($cards as $card) :?>
						<div class="shift-card">
							<div class="shift-card__img"><img src="<?= $card['img']['url'] ?? ''?>" srcset="<?= $card['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="shift-card__content">
								<div class="shift-card__content-inner">
									<h5 class="shift-card__title"><?= $card['title']?></h5>
									<p class="shift-card__text"><?= $card['text']?></p>
								</div>
							</div>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
        <?php $brands = $technology['brands']; ?>
		<div id="product-technology">
			<div class="bg-block">
				<div class="sleepmaker-advance js-tabs-wrapper">
					<div class="sleepmaker-advance__info">
						<?php if(!empty($brands['list'])) :
                            $i = 1;
						?>
						    <?php foreach ($brands['list'] as $item) :?>
								<div class="advance-card-wrap js-tab-content" data-id="advance-tab-<?= $i; ?>">
                                    <div class="js-text-collapse-wrap">
                                        <?php if(!empty($item['specs'])) : ?>
                                            <?php foreach ($item['specs'] as $spec) :?>
                                                <div class="advance-card js-text-collapse-item">
                                                    <div class="advance-card__header">
                                                        <div class="advance-card__icon">
                                                        <?php if(!empty($spec['icon']) && $spec['icon'] != null) :?>
                                                            <img class="advance-card__img default" src="<?= $spec['icon']['url'] ?>" alt=""/><img class="advance-card__img active" src="<?= $spec['icon_active']['url'] ?>" alt=""/>
                                                        <?php endif; ?>
                                                        </div>
                                                        <div class="advance-card__title"><?= $spec['title'] ?? ''?></div>
                                                    </div>
                                                    <div class="advance-card__text js-text-collapse" data-visible="1" data-bttn="Learn More" data-switch="Show Less">
                                                        <?= $spec['text'] ?? ''?>
                                                    </div>
                                                </div>
                                                <?php endforeach;?>
                                        <?php endif; ?>
                                    </div>
								</div>
							<?php $i++; endforeach;?>
						<?php endif; ?>
					</div>
					<div class="sleepmaker-advance__brands">
						<div class="content-center">
							<h6><?= $brands['subtitle']?></h6>
							<h2><?= $brands['title']?></h2>
						</div>
						<div class="advance-brands js-tabs-wrapper">
							<div class="advance-brands__header">
								<ul class="advance-brands__list">
									<?php if(!empty($brands['list'])) :?>
										<?php $i = 1;
										foreach ($brands['list'] as $brand) :?>
											<li class="advance-brands__list-item"><span class="advance-brands__list-link js-tab-trigger" data-hash="#advance-tab-<?= $i ?>"><?= $brand['link']['title']; ?></span></li>
											<?php $i++; endforeach;?>
									<?php endif; ?>
								</ul>
							</div>
							<div class="advance-brands__body">
								<?php if(!empty($brands['list'])) :?>
									<?php $i = 1;
									foreach ($brands['list'] as $brand) :?>
										<div class="advance-brands__content js-tab-content" id="advance-tab-<?= $i ?>"><img src="<?= $brand['img']['url']; ?>" srcset="<?= $brand['img_2x']['url']; ?> 2x"/>
										</div>
										<?php $i++; endforeach;?>
								<?php endif; ?>
							</div>
						</div>
						<div class="advance-brands-caption"><?= $brands['caption']; ?></div>
					</div>
				</div>
				<div class="container">
					<div class="content-center big-text">
						<?php $where_to_buy = $technology['where_to_buy']; ?>
						<h2><?= $where_to_buy['title'] ?? '' ?></h2>
						<p><?= $where_to_buy['text'] ?? '' ?></p>
                        <?php
                                $range_id = get_queried_object_id();
                        ?>
						<div class="bttn-row">
							<?php if(!empty($where_to_buy['buttons'])) :?>
								<?php foreach ($where_to_buy['buttons'] as $button) :?>
									<a class="bttn bttn--border" href="<?= $button['link']['url'].'?r='.$range_id ?? ''?>"><?= $button['link']['title'] ?? ''?></a>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
				<div class="availabe-here">
					<div class="container">
						<div class="content-center">
							<h6><?= $where_to_buy['subtitle'] ?? '' ?></h6>
						</div>
						<div class="availabe-here-row">
							<?php if(!empty($where_to_buy['stores'])) :?>
								<?php foreach ($where_to_buy['stores'] as $store) :?>
									<div class="availabe-here__item">
                                        <a href="<?= $store['link']['url'] ?? ''?>"><img src="<?= $store['img']['url'] ?? ''?>" srcset="<?= $store['img_2x']['url'] ?? ''?> 2x"/></a>
									</div>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php $yotpo = get_field('yotpo'); ?>
		<?php $yotpo_product_id = $yotpo['yotpo_product_id'] ?>
		<?php $post = get_post($yotpo_product_id); ?>
		<?php $postImage = get_field('review_image', $yotpo_product_id); ?>
        <div id="product-reviews">
            <div class="review">
                <div class="yotpo yotpo-main-widget"

                     data-product-id="<?= $yotpo_product_id; ?>"
                     data-name="<?= $post->post_title; ?>"

                     data-url="<?= get_post_permalink($yotpo_product_id) ?>"
					<?php if ($postImage) : ?>
                        data-image-url="<?= $postImage ?>"
					<?php endif; ?>
                     data-description="<?= $post->post_excerpt; ?>"

                     data-mode="questions"></div>
            </div>
        </div>
		<div id="product-specifications">
			<div class="product-specs-wrap">
				<div class="product-specs">
					<h3 class="product-specs__title"><?= $product_specs['title'] ?? ''?></h3>
					<div class="product-specs__sidebar">
						<div class="product-specs-contact">
							<div class="product-specs-contact__title"><?= $product_specs['subtitle'] ?? ''?></div>
							<ul class="product-specs-contact__list">
								<li class="product-specs-contact__list-item"><a class="product-specs-contact__list-link" href="<?= $product_specs['chat']['url'] ?? ''?>"><span class="product-specs-contact__list-icon">
												<svg class="icon message" width="30" height="30" viewBox="0 0 30 30">
													<use xlink:href="#message"></use>
												</svg></span><?= $product_specs['chat']['title'] ?? ''?></a></li>
								<li class="product-specs-contact__list-item"><a class="product-specs-contact__list-link" href="<?= $product_specs['mail']['url'] ?? ''?>"><span class="product-specs-contact__list-icon">
												<svg class="icon envelope" width="30" height="30" viewBox="0 0 30 30">
													<use xlink:href="#envelope"></use>
												</svg></span><?= $product_specs['mail']['title'] ?? ''?></a></li>
							</ul>
						</div>
					</div>
					<div class="product-specs__main">
						<div class="js-acc-wrap">
							<?php if(!empty($product_specs['list'])) :?>
								<?php foreach ($product_specs['list'] as $item) :?>
									<div class="product-specs-acc js-acc accordeon" data-toggle="specs">
										<div class="accordeon__title js-acc-trig">
											<img class="accordeon__title-img" src="<?= $item['icon']['url'] ?? ''?>" alt="dimension">
											<span class="accordeon__title-text"><?= $item['title'] ?? ''?></span>
											<span class="accordeon__title-icon">
											<svg class="icon plus" width="30" height="30" viewBox="0 0 30 30">
												<use xlink:href="#plus"></use>
											</svg></span>
										</div>
										<div class="accordeon__body js-acc-targ">
											<div class="product-specs-acc__inner">
												<?php if(!empty($item['content'])) : ?>
													<?php if(!empty($item['content']['img'])) : ?>
														<img src="<?= $item['content']['img']['url'];?>" srcset="<?= $item['content']['img_2x']['url'];?> 2x"/>
													<?php endif; ?>
													<?php if(!empty($item['content']['text'])) : ?>
														<?= $item['content']['text'];?>
													<?php endif; ?>
												<?php endif; ?>
											</div>
										</div>
									</div>
								<?php endforeach;?>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="promo-decor promo-decor--equal promo-decor--full">
			<div class="promo-decor__bg">
				<picture>
					<source media="(max-width: 650px)" srcset="<?= $promo['img_mob']['url'] ?? ''?> 1x, <?= $promo['img_mob_2x']['url'] ?? ''?> 2x"><img src="<?= $promo['img']['url'] ?? ''?>" srcset="<?= $promo['img_2x']['url'] ?? ''?> 2x"/>
				</picture>
			</div>
			<div class="content-center has-white-color">
				<h6><?= $promo['subtitle'] ?? ''?></h6>
				<h2><?= $promo['title'] ?? ''?></h2>
				<div class="bttn-row">
					<?php if(!empty($promo['buttons'])) :?>
						<?php foreach ($promo['buttons'] as $button) :?>
							<a class="bttn bttn--reverse" href="<?= $button['link']['url'] ?? ''?>"><?= $button['link']['title'] ?? ''?></a>
						<?php endforeach;?>
					<?php endif; ?>
				</div>
			</div>
		</div>
        <?php if ($factory['enable']) : ?>
		<div id="product-factory">
			<div class="bg-block">
				<div class="space-wrap">
					<div class="container">
						<div class="content-center">
							<h2><?= $factory['title'] ?? ''?></h2>
						</div>
					</div>
					<div class="full-page-slider">
						<div class="swiper-container js-full-page-slider">
							<div class="swiper-wrapper">
								<?php if(!empty($factory['slider'])) :?>
									<?php foreach ($factory['slider'] as $slide) :?>
										<div class="swiper-slide"><img src="<?= $slide['img']['url'] ?? ''?>" srcset="<?= $slide['img_2x']['url'] ?? ''?> 2x"/>
										</div>
									<?php endforeach;?>
								<?php endif; ?>
							</div>
							<div class="swiper-nav">
								<div class="swiper-button-prev js-full-page-slider-prev">
									<div class="swiper-button-icon">
										<svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</div>
								<div class="swiper-button-next js-full-page-slider-next">
									<div class="swiper-button-icon">
										<svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
											<use xlink:href="#arrow-right"></use>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="content-center">
							<h2><?= $factory['subtitle'] ?? ''?></h2>
							<p><?= $factory['text'] ?? ''?></p>
						</div>
					</div>
				</div>
			</div>
		</div>
        <?php endif; ?>
		<div class="complete-card-outer">
			<div class="content-center">
				<h3><?= $related_articles['title'] ?? '' ?></h3>
			</div>
			<div class="complete-card-wrap">
				<?php if(!empty($related_articles['articles'])) :?>
					<?php foreach ($related_articles['articles'] as $article) :?>
						<div class="complete-card">
							<div class="complete-card__img"><img src="<?= $article['img']['url'] ?? ''?>" srcset="<?= $article['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="complete-card__title"><?= $article['title'] ?? ''?><span class="complete-card__subtitle"><?= $article['subtitle'] ?? ''?></span>
							</div>
							<p class="complete-card__text"><?= $article['text'] ?? ''?></p><a class="link-underline" href="<?= $article['cta']['url'] ?? ''?>"><?= $article['cta']['title'] ?? ''?></a>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
		<hr class="page-devider">
		<div class="complete-card-outer">
			<div class="content-center">
				<h3><?= $complete_cards['title'] ?? ''?></h3>
			</div>
			<div class="complete-card-wrap">
				<?php if(!empty($complete_cards['cards'])) :?>
					<?php foreach ($complete_cards['cards'] as $card) :?>
						<div class="complete-card complete-card--w50">
							<div class="complete-card__img"><img src="<?= $card['img']['url'] ?? ''?>" srcset="<?= $card['img_2x']['url'] ?? ''?> 2x"/>
							</div>
							<div class="complete-card__title"><?= $card['title'] ?? ''?><span class="complete-card__subtitle"><?= $card['subtitle'] ?? ''?></span>
							</div>
							<p class="complete-card__text"><?= $card['text'] ?? ''?></p><a class="bttn" href="<?= $card['cta']['url'] ?? ''?>"><?= $card['cta']['title'] ?? ''?></a>
						</div>
					<?php endforeach;?>
				<?php endif; ?>
			</div>
		</div>
	</div>
	</div>
<?php get_footer() ?>