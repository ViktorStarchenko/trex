(function ($) {
    "use strict";

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    $(document).on('click', 'a._collections-link', function(e) {
        e.preventDefault();
        
        if ($(this).hasClass('_collections-link')) {
            window.location.href = $(this).find('span._block').first().data('href');
        }
    });

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
        $('#app-mobile-menu-close').click();
        var $signUpNewsletter = $('#newsletter-signup');
        $('body').addClass('modal-opened');
        $signUpNewsletter.show();
    });
    
    $(document).on('click', '.js-show-twist-modal', function (e) {
        e.preventDefault();
        $('#app-mobile-menu-close').click();
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
    
    $(document).on('click', '._twist-modal-popup.active .app-modal-close-twist', function (e) {
        e.preventDefault();

        var $modal = $('._twist-modal-popup.active');

        $modal.remove();

        $('body').removeClass('modal-opened');
    });
    
    $(document).on('click', '#newsletter-signup .app-modal-close2', function (e) {
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
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('body').hasClass('modal-opened')) { 
            $('#newsletter-signup .app-modal-close').click();
            $('._twist-modal-popup.active .app-modal-close-twist').click();
        }
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
        loop: true,
        onSlideChangeEnd: function(swiper){
            var $nav = jQuery('.miracoil-swiper-nav');
            $nav.find('a').each(function() {
                jQuery(this).removeClass('active');
            });
            $nav.find('a').eq(swiper.realIndex).addClass('active');

        }
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

    window.miracoilSwiperTrigger = miracoilSwiperTrigger;

    $(function() {
        $('a[href*=#]:not([href=#]):not(._collapsed-title)').click(function() {
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
    
    var isEmpty = function (str) {
        if (str.trim() == '') {
            return true;
        }
        return false;
    };

    var inputHandler = function () {
        var $this  = $(this);
        var $value = $this.val() || $this.text();

        if ($this.hasClass("active") && isEmpty($value)) {
            $this.removeClass("active")
        } else {
            $this.addClass("active")
        }

    };
    
    $('._newsletter-form-gravity_wrapper').find('input[type=text]').each(function() {
        $(this).on('input', inputHandler);
    });
    
    $(document).on('click', '.close-icon', function(e) {
        var $input = $(e.target).closest('span').find('input');
        $input.val('');
        $input.text('');
        $input.removeClass("active");

        
    });
    
    $(document).bind('gform_post_render', function(){
        $('._newsletter-form-gravity_wrapper').find('input[type=text]').each(function() {
            $(this).on('input', inputHandler);
            var $this  = $(this);
            var $value = $this.val() || $this.text();

            if (isEmpty($value)) {
                $this.removeClass("active")
            } else {
                $this.addClass("active")
            }
            var placeholder = $(this).attr('placeholder');
            if ($(this).parent().find('.close-icon').length < 1) {
                $(this).parent().append('<button class="close-icon" type="button"></button>');
            }
            if (placeholder !== '' && typeof placeholder !== 'undefined') {
                $(this).removeAttr('placeholder');
                $(this).parent().append('<div class="app-input-placeholder">' + placeholder +'</div>');
            }
           
        });
    });

    $(document).on('click', '#_all-reviews-cta', function() {
        $('#_all-reviews-cta-loading').removeClass('_not-visible');
    });
    
    var gformConfirm = document.getElementById("gform_confirmation_wrapper_4");
    if (gformConfirm) {
        location.href = "#gform_confirmation_wrapper_4";
    }
    
    $(document).on('click', '.gf_step_next',function() {
       $('.gform_next_button').click(); 
    });
    
    $(document).on('click', '.gf_step_previous',function() {
       $('.gform_previous_button').click(); 
    });
    var contForm = document.querySelector('._contact-form');
    var arrPlhldrsName = [];

    var divPlhldrs = [];
    var placeholdersInit = function() {

            var valErr = document.querySelector('.validation_error');
            if (valErr) {
                valErr.classList.add('val-err-new');
            }

            var inp = document.querySelectorAll('._contact-form input[type="text"]');
//            var address = document.querySelector('.advanced-address-autocomplete');
//            if (address) {
//                if ($(address).parent().find('.cstm-inpt-plchldr').length !== 0) return;
//                var placeholderDiv = document.createElement('div'); 
//                placeholderDiv.className = 'cstm-inpt-plchldr';
//                var plcholder = $(address).attr('placeholder');
//                var araiLabel = $(address).attr('aria-label');
//                if (typeof plcholder !== 'undefined' && plcholder !== false && plcholder !== '') {
//                    placeholderDiv.innerHTML = plcholder;
//                } else if (typeof araiLabel !== 'undefined' && araiLabel !== false && araiLabel !== '') {
//                    placeholderDiv.innerHTML = araiLabel;
//                } else {
//                     placeholderDiv.innerHTML = $('label[for="'+ $(address).attr('id') +'"]').text();
//                }
//                
//                placeholderDiv.addEventListener('click', handleClick);
//                $(address).parent().append(placeholderDiv);
//                var element = document.getElementById($(address).attr('id'));
//                element.addEventListener('focus', handleFocus);
//                element.addEventListener('blur', handleFocus);
//                if (element.value) placeholderDiv.classList.add('activity');
//                if (jQuery(address).val() !== '') {
//                    placeholderDiv.classList.add('activity');
//                }
//            }
//            var inpComplex = $('._contact-form .ginput_complex input');
            var txtArea = document.querySelectorAll('._contact-form .textarea.medium');
//            inpComplex.each(function() {
//                if ($(this).parent().hasClass('ginput_container_fileupload')) return;
//                if ($(this).parent().find('.cstm-inpt-plchldr').length !== 0) return;
//                var placeholderDiv = document.createElement('div'); 
//                placeholderDiv.className = 'cstm-inpt-plchldr';
//                var plcholder = $(this).attr('placeholder');
//                var araiLabel = $(this).attr('aria-label');
//                if (typeof plcholder !== 'undefined' && plcholder !== false && plcholder !== '') {
//                    placeholderDiv.innerHTML = plcholder;
//                } else if (typeof araiLabel !== 'undefined' && araiLabel !== false && araiLabel !== '') {
//                    placeholderDiv.innerHTML = araiLabel;
//                } else {
//                     placeholderDiv.innerHTML = $('label[for="'+ $(this).attr('id') +'"]').text();
//                }
//                
//                placeholderDiv.addEventListener('click', handleClick);
//                $(this).parent().append(placeholderDiv);
//                var element = document.getElementById($(this).attr('id'));
//                element.addEventListener('focus', handleFocus);
//                element.addEventListener('blur', handleFocus);
//                if (element.value) placeholderDiv.classList.add('activity');
//                if (jQuery(this).val() !== '') {
//                    placeholderDiv.classList.add('activity');
//                }
//            });
            
            for (var i = 0; i < inp.length; i++) {
                if ($(inp[i]).parent().hasClass('ginput_container_fileupload')) {continue; }
                if ($(inp[i]).closest('.ginput_container').hasClass('ginput_container_radio')) {continue; }
                if ($(inp[i]).parent().find('.cstm-inpt-plchldr').length !== 0) {continue; }
                var placeholderDiv = document.createElement('div'); 
                placeholderDiv.className = 'cstm-inpt-plchldr';
                if (inp[i].hasAttribute('placeholder') && inp[i].getAttribute('placeholder') !== '') {
                    placeholderDiv.innerHTML = inp[i].getAttribute('placeholder');
                    inp[i].removeAttribute('placeholder');
                } else if (inp[i].hasAttribute('aria-label')){
                    placeholderDiv.innerHTML = inp[i].getAttribute('aria-label');
                } else {
                    placeholderDiv.innerHTML = $('label[for="'+ $(inp[i]).attr('id') +'"]').last().text();
                }
                
                if ($(inp[i]).hasClass('advanced-address-autocomplete')) {
                    placeholderDiv.innerHTML = 'Address';
                }
                placeholderDiv.addEventListener('click', handleClick);
                inp[i].parentElement.appendChild(placeholderDiv);
                inp[i].addEventListener('focus', handleFocusIn);
                inp[i].addEventListener('blur', handleFocusOut);
                inp[i].addEventListener('change', handleChange);
                if (inp[i].value) placeholderDiv.classList.add('activity');
                if (jQuery(inp[i]).val() !== '') {
                    placeholderDiv.classList.add('activity');
                }
            }

            if (txtArea) {
                for (var i = 0; i < txtArea.length; i++) {
                    arrPlhldrsName.push(txtArea[i].getAttribute('placeholder'));
                    var placeholderDiv = document.createElement('div');  
                    placeholderDiv.className = 'cstm-inpt-plchldr';
                    placeholderDiv.innerHTML = txtArea[i].getAttribute('placeholder');
                    txtArea[i].removeAttribute('placeholder');
                    placeholderDiv.addEventListener('click', handleClick);
                    txtArea[i].parentElement.appendChild(placeholderDiv);
                    txtArea[i].addEventListener('focus', handleFocusIn);
                    txtArea[i].addEventListener('blur', handleFocusOut);
                    if (txtArea[i].value) placeholderDiv.classList.add('activity');
                }
            }
            
            $('.ginput_container_select').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_radio').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_multiselect').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container_checkbox').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.gfield_chainedselect').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            $('.ginput_container.ginput_container_fileupload').each(function() {
               $(this).prev('.gfield_label').addClass('_gfield-select-label');
            });
            
            $(document).on('change', '.advanced-address-autocomplete', function() {
                setTimeout(function() {
                    for (var i = 0; i < inp.length; i++) {
                        if (!$(inp[i]).hasClass('advanced-address-autocomplete')) {
                            if (inp[i].value) inp[i].parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                        }
                    }
                }, 100);
            })
        }
            //arrPlhldrsName.push(document.querySelector('.gfield_label').textContent);
            
            
            

//            for (var i = 0; i < arrPlhldrsName.length; i++) {
//                if (inp[i] && inp[i].hasAttribute('placeholder')) inp[i].removeAttribute('placeholder');
//                
//                if (txtArea[i] && txtArea[i].hasAttribute('placeholder')) txtArea[i].removeAttribute('placeholder');
//
//                var divPlhldr = document.createElement('div');
//                divPlhldrs.push(divPlhldr);
//
//                divPlhldrs[i].className = 'cstm-inpt-plchldr';
//                divPlhldrs[i].innerHTML = arrPlhldrsName[i];
//
//                if (i == arrPlhldrsName.length - 2) {
//                    txtArea.parentElement.appendChild(divPlhldrs[i]);
//
//                    txtArea.addEventListener('focus', handleFocus);
//                    txtArea.addEventListener('blur', handleFocus);
//
//                    continue;
//                }
//
//                if (i == arrPlhldrsName.length - 1) {
//                    var sel = document.querySelector('select.medium.gfield_select');
//
//                    sel.setAttribute('required', '');
//                    sel.children[0].setAttribute('disabled', '');
//                    sel.children[0].setAttribute('selected', '');
//
//                    sel.parentElement.appendChild(divPlhldrs[i]);
//
//                    sel.addEventListener('focus', handleFocus);
//                    sel.addEventListener('blur', handleFocus);
//
//                    continue;
//                }
//
//                inp[i].parentElement.appendChild(divPlhldrs[i]);
//
//                inp[i].addEventListener('focus', handleFocus);
//                inp[i].addEventListener('blur', handleFocus);
//
//                if (inp[i].value) divPlhldrs[i].classList.add('activity');
//            }
//            divPlhldrs.forEach(itm => {
//                itm.addEventListener('click', handleClick);
//            });
            
            function handleClick(e) {
                if ($(e.target).hasClass('activity')) {
                    var input = e.target.parentElement.querySelector('input');
                    var textarea = e.target.parentElement.querySelector('textarea');
                    if (input) {
                        input.blur();
                    }
                    if (textarea) {
                        textarea.blur();
                    }
                } else {
                    var input = e.target.parentElement.querySelector('input');
                    var textarea = e.target.parentElement.querySelector('textarea');
                    if (input) {
                        input.focus();
                    }
                    if (textarea) {
                        textarea.focus();
                    }
                }
            }



            

            function handleFocusIn(e) {
                e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
            }
            function handleFocusOut(e) {
                if (e.target.value) e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                else e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.remove('activity');
            }
            
            function handleChange(e) {
                if (e.target.value) e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.add('activity');
                else e.target.parentElement.querySelector('.cstm-inpt-plchldr').classList.remove('activity');
            }


            var valErr = document.querySelector('.validation_error');
            if (valErr) {
                valErr.classList.add('val-err-new');
            }

            
            window.onresize = function(e) {
                if (contForm) {
                    var clWdth = document.documentElement.clientWidth;
                    var contFormWdth = contForm.getBoundingClientRect().width;
                    // var clWdth = e.target.innerWidth;
                    if (clWdth < 900 && valErr) {
                        valErr.style.position = '';
                        valErr.style.left = '';
                        valErr.style.width = '';
                        return;
                    }

                    var contFormWdth = contForm.getBoundingClientRect().width;
                    var contFormLft = (clWdth / 2) - (contFormWdth / 2);
                    if (valErr) {
                        valErr.style.position = 'relative';
                        valErr.style.left = '-' + contFormLft + 'px';
                        valErr.style.width = clWdth + 'px';
                    }
                }
            };
            window.onresize();
            
            jQuery(document).bind('gform_post_render', function(){
                placeholdersInit();
            });
            
    $('._app-banner-clickable div.page-h3, ._app-banner-clickable h1, ._app-banner-clickable img').on('click', function(e) {
        var self = $(this);
        if (!$(e.target).hasClass('app-banner__close')) {
            e.preventDefault();
            
            var element = self.find('a._target-link-promo').first();
            
            if (typeof element == 'undefined' || typeof element.attr('href') == 'undefined') {
                element = self.find('a').first();
            }
            if (typeof element !== 'undefined' && typeof element.attr('href') !== 'undefined') {
                window.location.href = element.attr('href');
            }
        } 
    });
    
    $(document).ready(function(){
        setTimeout(function() {
            $('._fix-button-margin').each(function() {
            var button = $(this).find('.app-button-reserve');
            var subtitle = $(this).find('.article-inline-goods__subtitle');
            if (subtitle.height() > button.height()) {
                var mrg = subtitle.height() - button.height() - 2;
                button.css('margin-bottom',mrg+'px');
            }
        });
        }, 2000);
        
    });
    
    
    var productSlider = $('.mezzo-product-box-slider');
    var productPoint = $('.mezzo-product-points');
    var collapse = $('#collapseOne, #collapseTwo');

    productSlider.on('init reInit afterChange', function (event, slick, current) {
      var i = (current ? current : 0) + 1;
      $('.mezzo-product-nav-count').html(i + '<span>/</span>' + slick.slideCount);
    });

    productSlider.slick({
      asNavFor: '.mezzo-product-points',
      appendDots: '.mezzo-product-container',
      appendArrows: '.mezzo-product-nav',
      adaptiveHeight: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      draggable: false,
      centerMode: true,
      arrows: true,
      dots: true,
      fade: true,
      prevArrow: '<div class="mezzo-product-nav-prev">' +
        '<svg class="icon angle-left"><use xlink:href="#angle-left"></use></svg>' +
      '</div>',
      nextArrow: '<div class="mezzo-product-nav-next">' +
        '<svg class="icon angle-right"><use xlink:href="#angle-right"></use></svg>' +
      '</div>'
    });

    productPoint.slick({
      asNavFor: '.mezzo-product-box-slider',
      focusOnSelect: true,
      variableWidth: true,
      slidesToScroll: 3,
      slidesToShow: 3,
      draggable: false,
      infinite: false,
      arrows: false,
    });


    collapse.on('shown.bs.collapse', function () {
      productSlider.slick('setPosition');
    });
    collapse.on('hidden.bs.collapse', function () {
      $(productSlider).slick('setPosition');
    });
            
}(jQuery));

jQuery(document).ready(function(){
    
    jQuery('.ginput_container_multiselect select').multipleSelect({placeholder: "Please select"});

    jQuery(".technology-filter-button").on("click",function () {
        var filter = jQuery(this).attr("data-filter");
        var data = jQuery('.alm-listing').data();

        jQuery(".technology-filter-button").removeClass("active");
        jQuery(this).addClass("active");
        data['category'] = filter;

        loadData(data);
    });

    jQuery(".mobile-filter-change").on("change",function () {
        var filter = jQuery(this).val();
        var data = jQuery('.alm-listing').data();

        data['category'] = filter;

        loadData(data);
    });
/*
    jQuery('.carousel').carousel();

    jQuery("body").keyup(function(e){
        var carousel = jQuery(".modal.in").find(".carousel").attr("id");
        if(carousel){
            if(e.keyCode == 37){
                jQuery("#"+carousel).carousel('prev');
            }
            if(e.keyCode == 39){
                jQuery("#"+carousel).carousel('next');
            }
        }
    });
*/
    jQuery(".left.carousel-control").on("click", function (e) {
        e.preventDefault();
        jQuery(".carousel").carousel('prev');
    });
    jQuery(".right.carousel-control").on("click", function (e) {
        e.preventDefault();
        jQuery(".carousel").carousel('next');
    });
    
    jQuery(document).on('click', '.app-offers-item', function() {
        if (window.ga && ga.loaded) {
            ga('send', 'event',  'Special Offers', jQuery(this).data('retailer'), jQuery(this).data('offer'));
        }
    });
    
});


function loadData(data) {
    var transition = 'fade', // 'slide' | 'fade' | null
        speed = '1000'; //in milliseconds
    jQuery.fn.almFilter(transition, speed, data);
};
