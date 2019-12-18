var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubePlayerAPIReady() {

}

var miracoilSwiper = new Swiper('.app-miracoil-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true
});

var reviewsSwiper = new Swiper('.app-reviews-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});

var dealsSwiper = new Swiper('.app-deals-swiper .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        1280: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        }
    }
});

function miracoilSwiperTrigger (e) {
    e.preventDefault();
    var $this = $(e.target);
    var $nav = $this.closest('nav');
    var $index = $nav.find('a').index($this) + 1;

    miracoilSwiper.slideTo($index);
}