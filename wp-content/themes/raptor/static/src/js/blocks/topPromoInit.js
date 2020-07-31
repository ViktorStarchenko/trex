import {accSlideUp} from './toggleElVisible';
export default function topPromoInit() {
	if(document.querySelectorAll('.js-top-promo').length) {
		let topPromo = document.querySelectorAll('.js-top-promo');
		topPromo.forEach(promo => {
			let promoBttn = promo.querySelector('.js-top-promo-close');
			let promoParent = promo.closest('.js-top-promo-wrap');
			promoBttn.addEventListener('click', (e) => {
				e.preventDefault();
				promo.style.height = promo.clientHeight + 'px';
				setTimeout(() => {
					promo.style.height = '0';
					setTimeout(() => {
						promoParent.remove();
					}, 300);
				}, 50);
			});
		});
	}
}

