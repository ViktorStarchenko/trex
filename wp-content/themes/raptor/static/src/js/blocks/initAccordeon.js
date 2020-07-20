import {accSlideDown, accSlideUp} from './toggleElVisible';
import debounce from '../helpers/debounce';

export default function setupAccordeon() {
	if(document.querySelectorAll('.js-acc-wrap').length) {
		let accordeonsWrap = document.querySelectorAll('.js-acc-wrap');

		accordeonsWrap.forEach( wrap => {

			let accordeons = wrap.querySelectorAll('.js-acc');

			let accordeonsArr = [...accordeons];

			if(accordeons.length) {
				accordeons.forEach(item => {
					let trigg = item.querySelector('.js-acc-trig');
					let targ = item.querySelector('.js-acc-targ');
					if(item.dataset.queries) {
						if(window.matchMedia(`(max-width:${item.dataset.queries}px)`).matches) {
							accSlideUp(targ);
						} else {
							trigg.classList.add('disable');
							trigg.addEventListener('click', () => {return false;});
						}
						window.addEventListener('resize', debounce((e) => {
							if(window.matchMedia(`(max-width:${item.dataset.queries}px)`).matches) {
								trigg.classList.remove('disable');
								trigg.classList.remove('active');
								accSlideUp(targ, e);
							} else {
								// accSlideDown(targ, e);
								targ.style.display = 'block';
								targ.style.height = 'auto';
								targ.classList.remove('active');
								trigg.classList.remove('active');
								trigg.classList.add('disable');
								trigg.addEventListener('click', () => {return false;});
							}
						}, 100));
					} else {
						accSlideUp(targ);
						window.addEventListener('resize', debounce((e) => {
							trigg.classList.remove('disable');
							trigg.classList.remove('active');
							accSlideUp(targ, e);
						}, 100));
					}

					if(item.dataset.toggle) {
						triggClicked(trigg, targ, accordeonsArr);
					} else {
						triggClicked(trigg, targ);
					}
				});
			}

		});
	}

	function triggClicked(trigg, targ, accArr) {
		trigg.addEventListener('click', (e) => {
			if(trigg.classList.contains('active')) {
				trigg.classList.remove('active');
				accSlideUp(targ, e);
			} else {
				if(accArr) {
					if(accArr.some(item => item.querySelector('.js-acc-trig').classList.contains('active'))) {
						accArr.forEach(acc => {
							let triggToggle = acc.querySelector('.js-acc-trig');
							let targToggle = acc.querySelector('.js-acc-targ');
							triggToggle.classList.remove('active');
							accSlideUp(targToggle, e);
						});
						setTimeout(() => {
							trigg.classList.add('active');
							accSlideDown(targ, e);
						}, 350);
					} else {
						trigg.classList.add('active');
						accSlideDown(targ, e);
					}
				} else {
					trigg.classList.add('active');
					accSlideDown(targ, e);
				}
			}
		});
	}
}
