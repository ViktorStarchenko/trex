'use strict';

// Libs
import './lib/polyfills/index';

// Helpers
import './helpers/removeArrayItem.js';
// ...

// Modules app core
// import AppRoot from './vue/AppRoot';

// BEM blocks
import dropFilterInit from './blocks/dropFilterInit';
import setupTabs from './blocks/setupTabs';
import './blocks/toggleSpecialOffers';
import setupAccordeon from './blocks/initAccordeon';
import inirSliders from './blocks/inirSliders';
import topPromoInit from './blocks/topPromoInit';
import textCollapseInit from './blocks/textCollapse';
import scrollTo from './blocks/scrollTo';
// import MenuMobile from './blocks/menu-mob';
// import Form from './blocks/form';

// Init
// AppRoot.init();
// Modal.init();
// MenuMobile.init();
// Form.init();

window.addEventListener('load', () => {
	dropFilterInit();
	setupTabs();
	window.toggleSpecialOffers();
	// ...
	setupAccordeon();
	inirSliders();
	topPromoInit();
	textCollapseInit();
	scrollTo();

	//current function
	var height_top = jQuery('header').offset().top;
	jQuery(window).scroll(function() {
		var sticky = jQuery('header'),
			scroll = jQuery(window).scrollTop();
		if (scroll > height_top) sticky.addClass('header-fixed');
		else sticky.removeClass('header-fixed');
	});
});
