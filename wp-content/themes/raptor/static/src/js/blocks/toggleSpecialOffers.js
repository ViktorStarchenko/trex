import {hideStart, hideElement, showElement} from './toggleElVisible';
export default function toggleSpecialOffers() {
	let specialOffersWrap = document.querySelectorAll('.js-special-wrap');
	if(specialOffersWrap.length) {
		let currentShow = null;
		let specialMq = window.matchMedia('(max-width:1024px)');
        
		specialOffersWrap.forEach(specialOffer => {
			let specialOfferTrigger = specialOffer.querySelector('.js-special-trigger');
			let specialOfferTarget = specialOffer.querySelector('.js-special-target');
			let specialOfferClose = specialOffer.querySelector('.js-special-target-close');

			hideStart(specialOfferTarget);
            
			specialOfferTrigger.addEventListener('click', (e) => {
				e.preventDefault();
				if(!specialOfferTrigger.classList.contains('active')) {
					if(currentShow) {
						currentShow.classList.remove('active');
						currentShow.closest('.js-special-wrap').classList.remove('active');
						hideElement(currentShow.closest('.js-special-wrap').querySelector('.js-special-target'));
					}
					currentShow = specialOfferTrigger;
					specialOfferTrigger.classList.add('active');
					specialOffer.classList.add('active');
					showElement(specialOfferTarget);
					if(specialMq.matches) {
						setTimeout(() => {
							var topPos = specialOffer.offsetTop;
							scrollTo(specialOffer.closest('.js-tab-content'), topPos, 600);
							specialOffer.closest('.tabs__body').classList.add('extend');
						}, 350);
					}
				} else {
					specialOfferTrigger.classList.remove('active');
					specialOffer.classList.remove('active');
					hideElement(specialOfferTarget);
					specialOffer.closest('.tabs__body').classList.remove('extend');
				}
			});
            
			specialOfferClose.addEventListener('click', (e) => {
				e.preventDefault();
				specialOfferTrigger.classList.remove('active');
				specialOffer.classList.remove('active');
				hideElement(specialOfferTarget);
				specialOffer.closest('.tabs__body').classList.remove('extend');
			});

			//check max-width and offers position setting
			if(!specialMq.matches) {
				specialOfferTarget.classList.add('special-aboslute');
			}
			window.addEventListener('resize', () => {
				if(specialMq.matches) {
					specialOfferTarget.classList.remove('special-aboslute');
				} else {
					specialOfferTarget.classList.add('special-aboslute');
				}
			});
		});
	}
}

function scrollTo(element, to, duration) {
	var start = element.scrollTop,
		change = to - start,
		currentTime = 0,
		increment = 20;
        
	var animateScroll = function() {        
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if(currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
