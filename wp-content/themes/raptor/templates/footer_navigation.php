<?php /* Template Name: Footer Navigation */ ?>
<?php
$postPage = get_page_by_path('footer-navigation');
$mattressesPages = get_field('mattresses_pages', $postPage->ID);
$collectionsPages = get_field('collections_pages', $postPage->ID);
$sleepGuidePages = get_field('sleep_guides_pages', $postPage->ID);
$customerCarePages = get_field('customer_care_pages', $postPage->ID);
$websitePages = get_field('this_website_pages', $postPage->ID);
$externalPages = get_field('external_pages', $postPage->ID);
$storeAndPromotionsPages = get_field('stores_and_promotions_pages', $postPage->ID);
$socialTitle = get_field('social_title', $postPage->ID);
$socialLink = get_field('social_link', $postPage->ID);
$footerImg = get_field('footer_image', $postPage->ID);
?>
<div class="footer-container">
	<?php
	if ( function_exists('yoast_breadcrumb') ) {
		yoast_breadcrumb('<ul class="footer-breadcrumb">','</ul>');
	}
	?>
    <div class="footer__header">
        <div class="footer-row">
            <div class="footer__logo">
                <div class="footer-logo"><a href="/">
                        <img width="450px" src="<?= $footerImg['url']?>">
                    </a></div>
            </div>
            <div class="footer__subscription">
                <div class="footer-subscription">
                    <form class="footer-subscription__form">
                        <input class="footer-subscription__input" type="email" name="" placeholder="Sign up to our newsletter…"/>
                        <button class="footer-subscription__bttn js-signup-newsletter" type="submit">
                            <svg class="icon arrow-long" width="20" height="15" viewBox="0 0 20 15">
                                <use xlink:href="#arrow-long"></use>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="_social">
        <div class="app-container">
            <a href="<?/*= get_field('facebook_cta_url', $postPage->ID); */?>" class="_social-link"><i class="fa fa-facebook-official"></i>
                <span class="app-link-animation"><?/*= get_field('facebook_cta_text', $postPage->ID); */?></span></a>
            <a href="<?/*= get_field('get_in_touch_cta_url', $postPage->ID); */?>" class="_social-link"><i class="fa fa-phone"></i>
                <span class="app-link-animation"><?/*= get_field('get_in_touch_cta_text', $postPage->ID); */?></span></a>
            <a href="javascript:void(0);" class="_social-link js-signup-newsletter"><i class="fa fa-envelope-o"></i>
                <span class="app-link-animation"><?/*= get_field('subscribe_newsletter_cta_text', $postPage->ID); */?></span></a>
        </div>
    </div>-->
    <div class="footer__main js-acc-wrap">
		<?php if ($mattressesPages) : ?>
            <div class="footer-nav js-acc accordeon" data-toggle="footer" data-queries="1024">
				<?php $parent = get_field('mattresses_title', $postPage->ID); ?>
                <div class="footer-nav__title accordeon__title js-acc-trig"><?= $parent; ?><span class="accordeon__title-icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span>
                </div>
                <div class="footer-nav__menu accordeon__body js-acc-targ">
                    <ul class="footer-nav__list">
						<?php foreach ($mattressesPages as $page) : ?>
                            <li class="footer-nav__list-item"><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link footer-nav__list-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a></li>
						<?php endforeach; ?>
                    </ul>
                </div>
            </div>
		<?php endif; ?>
		<?php if ($collectionsPages) : ?>
            <div class="footer-nav js-acc accordeon" data-toggle="footer" data-queries="1024">
				<?php $parent = get_field('collections_title', $postPage->ID); ?>
                <div class="footer-nav__title accordeon__title js-acc-trig"><?= $parent; ?><span class="accordeon__title-icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span>
                </div>
                <div class="footer-nav__menu accordeon__body js-acc-targ">
                    <ul class="footer-nav__list">
						<?php foreach ($collectionsPages as $page) : ?>
                            <li class="footer-nav__list-item"><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link footer-nav__list-link footer-nav__list-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a></li>
						<?php endforeach; ?>
                    </ul>
                </div>
            </div>
		<?php endif; ?>
		<?php if ($storeAndPromotionsPages) : ?>
            <div class="footer-nav js-acc accordeon" data-toggle="footer" data-queries="1024">
				<?php $parent = get_field('stores_and_promotions_title', $postPage->ID); ?>
                <div class="footer-nav__title accordeon__title js-acc-trig"><?= $parent; ?><span class="accordeon__title-icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span>
                </div>
                <div class="footer-nav__menu accordeon__body js-acc-targ">
                    <ul class="footer-nav__list">
						<?php foreach ($storeAndPromotionsPages as $page) : ?>
                            <li class="footer-nav__list-item"><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link footer-nav__list-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation "><?= get_the_title($page); ?></span></a></li>
						<?php endforeach; ?>
                    </ul>
                </div>
            </div>
		<?php endif; ?>
		<?php if ($sleepGuidePages) : ?>
            <div class="footer-nav js-acc accordeon" data-toggle="footer" data-queries="1024">
				<?php $parent = get_field('sleep_guides_title', $postPage->ID); ?>
                <div class="footer-nav__title accordeon__title js-acc-trig"><?= $parent; ?><span class="accordeon__title-icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span>
                </div>
                <div class="footer-nav__menu accordeon__body js-acc-targ">
                    <ul class="footer-nav__list">
						<?php foreach ($sleepGuidePages as $page) : ?>
                            <li class="footer-nav__list-item"><a href="<?= get_permalink($page->ID); ?>" class="footer_menu_item ga-track-nav-link footer-nav__list-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= $page->post_title; ?></span></a></li>
						<?php endforeach; ?>
                    </ul>
                </div>
            </div>
		<?php endif; ?>
		<?php if ($customerCarePages) : ?>
            <div class="footer-nav js-acc accordeon" data-toggle="footer" data-queries="1024">
				<?php $parent = get_field('customer_care_title', $postPage->ID); ?>
                <div class="footer-nav__title accordeon__title js-acc-trig"><?= $parent; ?><span class="accordeon__title-icon">
                                                <svg class="icon arrow-right" width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlink:href="#arrow-right"></use>
                                                </svg></span>
                </div>
                <div class="footer-nav__menu accordeon__body js-acc-targ">
                    <ul class="footer-nav__list">
						<?php foreach ($customerCarePages as $page) : ?>
                            <li class="footer-nav__list-item"><a href="<?php the_permalink($page); ?>" class="footer_menu_item ga-track-nav-link footer-nav__list-link" data-title="<?= get_the_title($page); ?>" data-menu="Footer" data-parent="<?= $parent; ?>" ><span class="app-link-animation"><?= get_the_title($page); ?></span></a></li>
						<?php endforeach; ?>
                    </ul>
                </div>
            </div>
		<?php endif; ?>
        <div class="footer-nav footer-nav--social">
            <div class="footer-nav__title"><?= $socialTitle ?? '' ?></div>
            <div class="footer-social">
                <ul class="social-list">
                    <li class="social-list__item"><a class="social-list__link" href="#" aria-label="facebook"><span class="social-list__icon"><img src="../img/icons/social-icon/facebook.png" alt=""/></span></a></li>
                    <li class="social-list__item"><a class="social-list__link" href="#" aria-label="instagram"><span class="social-list__icon"><img src="../img/icons/social-icon/instagram.png" alt=""/></span></a></li>
                    <li class="social-list__item"><a class="social-list__link" href="#" aria-label="youtube"><span class="social-list__icon"><img src="../img/icons/social-icon/youtube.png" alt=""/></span></a></li>
                </ul>
                <ul class="social-list">
					<?php if(!empty($socialLink)) : ?>
						<?php foreach ($socialLink as $link) : ?>
                            <li class="social-list__item"><a class="social-list__link" href="<?= $link['link']['url']?>" aria-label="<?= $link['link']['title']?>"><span class="social-list__icon">
                                                    </span><img src="<?= $link['img']['url']?>" alt=""/></a></li>
						<?php endforeach; ?>
					<?php endif; ?>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer__basement">
        <div class="footer-row">
            <ul class="footer-basement">
				<?php foreach ($websitePages as $page) : ?>
                    <li class="footer-basement__item"><a class="footer-basement__link" href="<?php the_permalink($page); ?>"><?= get_the_title($page); ?></a></li>
				<?php endforeach; ?>
            </ul>
            <ul class="footer-basement">
				<?php foreach ($externalPages as $page) : ?>
                    <li class="footer-basement__item"><a class="footer-basement__link" href="<?= $page['url']; ?>"><?= $page['title']; ?></a></li>
				<?php endforeach; ?>
            </ul>
        </div>
        <div class="footer-copy"><?php the_field('copyright', $postPage->ID); ?></div>
    </div>
</div>