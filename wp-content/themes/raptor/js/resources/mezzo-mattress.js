(function ($) {
    "use strict";
    
    new Swiper('.mezzo-swiper .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true
    });
    
    $('a.mezzo-main-tools__btn').on('click', function() {
        $('.mejs-overlay-play').trigger('click');
        return false;
    });
    
}(jQuery));
