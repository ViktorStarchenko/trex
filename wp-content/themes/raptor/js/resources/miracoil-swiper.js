
//    var miracoilSwiper = new Swiper('.app-miracoil-swiper .swiper-container', {
//        pagination: '.swiper-pagination',
//        nextButton: '.swiper-button-next',
//        prevButton: '.swiper-button-prev',
//        paginationClickable: true,
//        slidesPerView: 1,
//        spaceBetween: 50,
//        loop: true,
//        onSlideChangeStart: function(swiper) {
//            var $nav = jQuery('.miracoil-swiper-nav');
//            $nav.find('a').each(function() {
//                jQuery(this).removeClass('active');
//            });
//            $nav.find('a').eq(swiper.realIndex).addClass('active');
//        }
//    });
//
//    function miracoilSwiperTrigger (e) {
//        e.preventDefault();
//        var $this = jQuery(e.target);
//        var $nav = $this.closest('nav');
//        var $index = $nav.find('a').index($this) + 1;
//        
//        miracoilSwiper.slideTo($index);
//    }