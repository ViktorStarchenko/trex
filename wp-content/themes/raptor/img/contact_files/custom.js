(function ($) {
    "use strict";

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $(document).on('click', '.download-ebook-btn', function(e) {
        // e.preventDefault();

        var valid = true;

        var $downloadForm = $(this).closest('.download-ebook-form');
        var $name = $downloadForm.find('input[name="name"]');
        var $email = $downloadForm.find('input[name="email"]');

        var $nameWrapper = $name.closest('.app-field');
        var $emailWrapper = $email.closest('.app-field');

        $nameWrapper.removeClass('invalid');
        $emailWrapper.removeClass('invalid');

        if (!$name.val()) {
            $nameWrapper.addClass('invalid');
            valid = false;
        }

        if(!validateEmail($email.val())) {
            $emailWrapper.addClass('invalid');
            valid = false;
        }

        if (false === valid) {
            e.preventDefault();
        } else {
            $name.val('');
            $email.val('');
        }
    });

    $(document).on('click', '.js-signup-newsletter', function (e) {
        e.preventDefault();

        var $signUpNewsletter = $('#newsletter-signup');
        $('body').addClass('modal-opened');
        $signUpNewsletter.show();
    });

    $(document).on('click', '#newsletter-signup .app-modal-close', function (e) {
        e.preventDefault();

        var $modal = $('#newsletter-signup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        $name.val('').removeClass("active");
        $email.val('').removeClass("active");

        $modal.find('#newsletter-form-block').show();
        $modal.find('#newsletter-thankyou-block').hide();

        $modal.hide();

        $('body').removeClass('modal-opened');
    });

    $(document).on('click', '#newsletter-signup #newsletter-form-block .js-newsletter-sbmt-btn', function (e) {
        e.preventDefault();

        var valid = true;
        var $modal = $(this).closest('#newsletter-signup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        var $nameWrapper = $name.closest('.app-field');
        var $emailWrapper = $email.closest('.app-field');

        $nameWrapper.removeClass('invalid');
        $emailWrapper.removeClass('invalid');

        if (!$name.val()) {
            $nameWrapper.addClass('invalid');
            valid = false;
        }

        if(!validateEmail($email.val())) {
            $emailWrapper.addClass('invalid');
            valid = false;
        }

        if (true === valid) {
            $name.val('');
            $email.val('');

            $modal.find('#newsletter-form-block').hide();
            $modal.find('#newsletter-thankyou-block').show();
        }
    });

    $(document).on('click', '#newsletter-signup #newsletter-thankyou-block .js-newsletter-back-btn', function (e) {
        e.preventDefault();

        var $modal = $(this).closest('#newsletter-signup');
        $modal.find('.app-modal-close').trigger('click');
    });

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

    function miracoilSwiperTrigger(e) {
        e.preventDefault();
        var $this  = $(e.target);
        var $nav   = $this.closest('nav');

        var $links = $nav.find('a');
        var $index = $links.index($this) + 1;

        $links.removeClass('active');
        $this.addClass('active');
        miracoilSwiper.slideTo($index);
    }

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    target.velocity('scroll', {
                        duration: 1000,
                        easing: "ease-in-out",
                        offset: -50
                    });
                    return false;
                }
            }
        });
    });
}(jQuery));