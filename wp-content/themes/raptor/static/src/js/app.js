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
});
