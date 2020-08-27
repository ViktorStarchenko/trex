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
                <div class="footer-logo"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="464" height="80" viewBox="0 0 464 80">
                            <g fill="#FFF">
                                <path d="M38.918 34.033c-3.478-2.295-8.335-3.279-12.994-4.263-4.07-.852-8.335-1.704-11.486-3.475-3.084-1.64-4.134-3.475-4.134-7.213 0-7.541 6.235-10.164 11.55-10.164 7.81 0 12.01 3.475 13.192 11.082l.066.59h7.022V3.344h-5.119l-.197.328c-.066.066-.919 1.64-1.575 4.46C32.158 4.196 27.696 2.36 21.33 2.36c-9.714 0-19.492 5.508-19.492 17.836 0 7.213 2.56 11.54 8.531 14.623 3.02 1.573 7.548 2.557 11.945 3.54 4.528 1.05 8.86 2.033 10.96 3.41 2.69 1.705 3.741 3.804 3.741 7.476 0 10.098-10.829 10.885-14.11 10.885-9.123 0-14.176-4.262-15.489-13.049l-.066-.59H0v19.475h5.185l.197-.328c.065-.065 1.05-2.032 1.903-5.77 2.69 3.54 7.613 7.213 16.407 7.213 13.848 0 22.117-7.016 22.117-18.82 0-6.557-2.231-11.147-6.89-14.23M66.68 60.918c-3.938 0-4.332-.328-4.332-3.869V0H46.597v5.967h1.312c4.135 0 4.988.394 4.988 4.787v46.689c0 3.016-.393 3.475-3.347 3.475h-2.953v5.05h22.642v-5.05h-2.56zM91.684 23.803c7.088 0 10.632 4.656 10.632 13.902v.656h-22.97c.46-9.377 4.79-14.558 12.338-14.558m0-6.295c-13.06 0-22.182 10.099-22.182 24.656 0 15.54 8.86 24.852 23.757 24.852 8.598 0 14.308-2.95 16.67-5.508l.197-.197v-5.377l-1.05.722c-2.56 1.77-8.138 3.54-13.716 3.54-10.764 0-15.423-4.59-15.817-15.868h31.108l.131-.525c.46-2.164.722-4.262.722-6.688-.197-12.263-7.547-19.607-19.82-19.607M137.428 23.803c7.088 0 10.698 4.656 10.698 13.902v.656h-22.97c.393-9.377 4.725-14.558 12.272-14.558m0-6.295c-13.06 0-22.183 10.099-22.183 24.656 0 15.54 8.86 24.852 23.758 24.852 8.598 0 14.307-2.95 16.67-5.508l.197-.197v-5.377l-1.05.722c-2.625 1.77-8.138 3.54-13.782 3.54-10.764 0-15.423-4.59-15.817-15.868h31.108l.132-.525c.459-2.164.656-4.262.656-6.688-.066-12.263-7.416-19.607-19.689-19.607M200.564 39.41v3.475c0 12-3.873 17.836-11.945 17.836-9.976 0-14.439-9.377-14.439-18.623v-1.901c0-7.804 5.382-15.87 14.439-15.87 7.941 0 11.945 5.05 11.945 15.083m-9.385-21.902c-7.81 0-13.98 3.738-16.999 10.099-.328-4.525-1.18-8.263-1.246-8.46l-.132-.524h-14.241v5.967h1.378c4.135 0 4.988.394 4.988 4.787V71.41c0 3.016-.394 3.475-3.347 3.475h-2.954v5.05h23.364v-5.05h-3.281c-4.2 0-4.332-.524-4.332-2.82V57.77c3.02 5.902 8.73 9.18 16.276 9.18 12.208 0 20.083-9.966 20.083-25.507-.197-14.754-7.613-23.935-19.557-23.935"/>
                                <path d="M282.666 9.443h3.478V3.279h-21.723l-16.014 51.475-15.75-51.475h-22.052v6.164h3.478c3.216 0 4.332.655 4.332 4.393V55.87c0 3.738-1.116 4.393-4.332 4.393h-3.478v5.64h23.823v-5.64h-3.544c-4.331 0-5.316-.655-5.316-3.737V12.262l16.933 53.64h9.122l16.998-53.77v44.393c0 3.147-.853 3.737-5.316 3.737h-3.544v5.64h26.383v-5.64h-3.478c-3.216 0-4.332-.655-4.332-4.393V13.836c0-3.738 1.182-4.393 4.332-4.393M395.22 23.803c7.088 0 10.632 4.656 10.632 13.902v.656h-22.97c.394-9.377 4.725-14.558 12.338-14.558m0-6.295c-13.06 0-22.182 10.099-22.182 24.656 0 15.54 8.86 24.852 23.757 24.852 8.598 0 14.308-2.95 16.605-5.508l.197-.197v-5.377l-1.05.722c-2.626 1.77-8.139 3.54-13.783 3.54-10.763 0-15.423-4.59-15.816-15.868h31.108l.131-.525c.46-2.164.722-4.262.722-6.688-.065-12.263-7.416-19.607-19.689-19.607M446.149 17.967c-4.988 0-10.5 3.213-13.257 10.164-.263-4.787-1.247-8.787-1.313-8.983l-.131-.525h-14.242v5.967h1.313c4.134 0 4.988.394 4.988 4.787v28.066c0 3.016-.394 3.475-3.347 3.475h-2.954v5.05h24.677v-5.05h-4.2c-4.135 0-4.726-.459-4.726-3.869V45.64c0-9.901 4.397-19.344 9.385-20.524.591 3.016 2.429 4.721 5.054 4.721 3.281 0 5.447-2.23 5.447-5.574.066-3.869-2.56-6.295-6.694-6.295"/>
                                <path d="M453.63 65.311c-4.397 0-7.744-3.344-7.744-7.803s3.347-7.869 7.745-7.869c4.462 0 7.678 3.345 7.678 7.87 0 4.524-3.216 7.802-7.678 7.802m0-17.573c-5.448 0-9.91 4.393-9.91 9.705 0 5.442 4.331 9.705 9.91 9.705 5.512 0 9.778-4.263 9.778-9.705 0-5.443-4.266-9.705-9.778-9.705"/>
                                <path d="M452.515 53.508h1.312c1.182 0 1.707.46 1.707 1.64 0 1.049-.328 1.704-1.838 1.704h-1.181v-3.344zm5.316 7.279c-.263 0-.46-.131-.46-.394l-.59-1.573c-.131-.525-.46-.918-.919-1.18 1.181-.46 1.903-1.443 1.903-2.624 0-1.836-1.378-2.95-3.675-2.95h-4.988v1.377h.985c.196 0 .262.065.262.327v6.82c0 .394-.131.394-.262.394h-.985v1.311h4.988v-1.311h-.984c-.46 0-.526-.066-.526-.46v-2.426h.985c.787 0 .984.263 1.181.984l.46 1.574c.262 1.18.984 1.77 1.969 1.77.787 0 1.312-.262 1.64-.787v-1.311l-.197.131c-.328.197-.525.328-.787.328M313.971 48.393c-.262 8.59-6.103 12.525-11.42 12.525-4.725 0-7.087-2.426-7.087-7.213v-.46c0-4.524 2.297-5.966 7.613-8.327.853-.393 1.706-.721 2.56-1.05 2.821-1.114 5.709-2.294 8.465-4.59v9.115h-.13zm61.626 12.525c-2.166 0-2.56-.262-6.628-4.197l-17.59-16.983 12.142-11.148c3.872-3.475 5.12-3.934 8.007-3.934h2.494v-5.967H352.43v5.967h3.938c1.115 0 1.64.328 1.706.59.131.328-.131.984-1.116 1.902l-13.585 12.786V.066h-15.75v5.967h1.312c4.134 0 4.987.393 4.987 4.787V52.72c0 4.984-.787 6.82-3.675 7.738-.853.262-2.034.525-3.084.525-2.494 0-3.872-.853-3.872-5.443V35.279c0-11.804-6.038-17.77-17.983-17.77-11.354 0-17.26 5.507-17.26 10.95 0 3.082 2.165 5.246 5.184 5.246 1.904 0 5.185-.787 5.185-6.164v-3.016c1.378-.59 3.15-.918 5.316-.918 9.122 0 10.173 4.918 10.173 8.655 0 4.131-7.088 6.099-12.733 7.738-2.165.59-4.2 1.18-5.71 1.836-6.76 2.82-9.713 6.557-9.713 12.262 0 8.132 5.579 13.115 14.505 13.115 6.628 0 11.42-2.754 13.847-7.803.854 5.049 4.2 7.606 10.042 7.606 1.837 0 3.544-.393 5.053-1.049h21.395v-5.049h-2.953c-4.2 0-4.332-.459-4.332-2.754V43.41l14.439 14.36c1.378 1.378 1.772 2.296 1.575 2.623-.131.263-.656.525-1.903.525h-2.494v5.05h21.395v-5.05h-.722z"/>
                            </g>
                        </svg></a></div>
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
					<?php if(!empty($socialLink)) : ?>
						<?php foreach ($socialLink as $link) : ?>
                            <li class="social-list__item"><a class="social-list__link" href="<?= $link['link']['url']?>" aria-label="<?= $link['link']['title']?>"><span class="social-list__icon">
                                                    <svg class="icon <?= $link['link']['title']?>" width="30" height="30" viewBox="0 0 30 30">
                                                        <use xlink:href="#<?= $link['link']['title']?>"></use>
                                                    </svg></span></a></li>
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