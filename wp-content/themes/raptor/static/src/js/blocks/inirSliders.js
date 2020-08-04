import Swiper from 'swiper';
export default function inirSliders() {
	if(document.querySelectorAll('.js-rating-reviews-slider')) {
		let ratingReviews  = document.querySelectorAll('.js-rating-reviews-slider');
		ratingReviews.forEach(ratingReviewsInstance => {
			let prevBttn = ratingReviewsInstance.querySelector('.js-rating-reviews-slider-prev');
			let nextBttn = ratingReviewsInstance.querySelector('.js-rating-reviews-slider-next');
			let ratingReviewsInit = new Swiper(ratingReviewsInstance, {
				watchOverflow: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				loop: true,
				navigation: {
					nextEl: nextBttn,
					prevEl: prevBttn,
				},
			});
		});
	}
	if(document.querySelectorAll('.js-full-page-slider')) {
		let fullPageSlider  = document.querySelectorAll('.js-full-page-slider');
		fullPageSlider.forEach(fullPageInstance => {
			let prevBttn = fullPageInstance.querySelector('.js-full-page-slider-prev');
			let nextBttn = fullPageInstance.querySelector('.js-full-page-slider-next');
			let fullPageInit = new Swiper(fullPageInstance, {
				watchOverflow: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				loop: true,
				navigation: {
					nextEl: nextBttn,
					prevEl: prevBttn,
				},
			});
		});
	}
}
