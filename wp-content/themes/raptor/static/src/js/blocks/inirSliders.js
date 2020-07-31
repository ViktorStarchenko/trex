import Swiper from 'swiper';
export default function inirSliders() {
	if(document.querySelectorAll('.js-rating-reviews-slider')) {
		let ratingReviews  = document.querySelectorAll('.js-rating-reviews-slider');
		ratingReviews.forEach(ratingReviewsInstance => {
			let ratingReviewsInit = new Swiper(ratingReviewsInstance, {
				watchOverflow: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				loop: true
			});
		});
	}
}
