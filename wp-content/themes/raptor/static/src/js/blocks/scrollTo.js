import smoothscroll from 'smoothscroll-polyfill';

export default function scrollTo() {

	if(document.querySelectorAll('.js-scroll-to').length) {

		smoothscroll.polyfill();

		let scrollToTriggers = document.querySelectorAll('.js-scroll-to');

		scrollToTriggers.forEach(item => {

			item.addEventListener('click',(e) => {

				try {
					item.blur();
				} catch (error) {}

				if(item.getAttribute('href')) {
					e.preventDefault();
				}

				let targetel = item.getAttribute('href') || item.dataset.href;
				console.log('scrolto ' + targetel);
				let target = document.querySelector(targetel);
				let timeDelay = 150;
				let mobOffset = 120;
				let deskOffset = 200;

				console.log(item.dataset);
				if(item.dataset && item.dataset.delay) {
					timeDelay = item.dataset.delay;
					mobOffset = 80;
					deskOffset = 80;
				}

				if(target) {

					console.log(timeDelay);

					scrollToTriggers.forEach(trigg => {
						trigg.classList.remove('active');
					});

					item.classList.add('active');

					setTimeout(function() {
						let offs = offset(target);
						window.scroll({
							top: offs - (window.matchMedia('(max-width: 768px)').matches ? mobOffset : deskOffset),
							behavior: 'smooth'
						});
					}, timeDelay);
				}
			});
		});
	}

}

function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return rect.top + scrollTop;
}
