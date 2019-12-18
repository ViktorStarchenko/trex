(function ($) {
    "use strict";

    var $components = [];
    var $header     = document.getElementById("header");
    var $footer     = document.getElementById("footer");
    var $container  = document.getElementById("container");

    document.addEventListener("DOMContentLoaded", function () {
        var component;

        for (component in $components) {
            $components[component]();
        }
    });

    $components.fixedBar = function () {
//        if(Modernizr.touchevents) {
//             var headroom = new Headroom($header, {
//                 tolerance: 20,
//                 offset : 0
//             });
//             headroom.init();
//        }
    };

    $components.searchbox = function () {
        var header                 = $('header');
        var body                   = $('body');
        var form                   = header.find('.header-search-avtocomplite');
        var input                  = form.find('input[type=text]');
        var openBtn                = header.find('.app-searchbox-btn');
        var closeBtn               = form.find('.app-searchbox-close');
        var searchbox_active_class = "sr-opened";


        openBtn.on('click', function (e) {
            e.preventDefault();

            var isVisible = body.hasClass(searchbox_active_class);

            var callback = function () {
                body.toggleClass(searchbox_active_class);
            };

            if (isVisible) {
                form.slideUp(200, callback);
            } else {
                form.slideDown(200, callback);
                input.focus();
            }

        });

        closeBtn.on('click', function (e) {
            e.preventDefault();

            window.autocomplete.autocomplete.setVal('')

            form.slideUp(200, function () {
                body.toggleClass(searchbox_active_class);
            });

        });
    };

    $components.form = function () {
        var input           = $('.app-input');
        var contenteditable = $('[contenteditable]');

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

        input.on("input", inputHandler);
        contenteditable.on("input", inputHandler);
    };

    $components.banners = function () {
        var bannerClose = $('.app-banner__close');

        bannerClose.on('click', function (e) {
            e.preventDefault();
            var banner = $(this).closest('.app-banner');

            banner.slideUp(function () {
                banner.remove();
            })
        });
    };

    $components.accordeon = function () {
        var btn = $('.app-accordeon-btn');

        btn.on('click', function (e) {
            e.preventDefault();

            var item      = $(this).closest('.app-accordeon-item');
            var inner     = item.find('.app-accordeon-item__inner');
            var isVisible = item.hasClass("active");

            var callback = function () {
                item.toggleClass("active");
            };

            if (isVisible) {
                inner.slideUp(200, callback);
            } else {
                inner.slideDown(200, callback);
            }

        });
    };

    $components.storeFilter = function () {
        var filter         = $('.app-store-filter');
        var filterCollapse = filter.find('.app-store-filter__collapse');
        var button         = filter.find('.app-button-store-filter');
        var buttonText     = button.find('.text');

        button.on('click', function (e) {
            e.preventDefault();

            var slideCallback = function () {
                buttonText.text(isActive ? 'Refine your search' : 'Hide filters');
                filterCollapse.toggleClass("opened");
                filterCollapse.removeAttr("style");
                button.toggleClass("active");
            };

            var isActive  = button.hasClass('active');
            var isVisible = filterCollapse.is(':visible');

            if (isActive && isVisible) {
                filterCollapse.slideUp(slideCallback);
            } else if (!isVisible || isActive && !isVisible) {
                filterCollapse.slideDown(slideCallback);
            }

        })
    };

    $components.desctopNavigation = function () {

        var header              = $('#header');
        var descNavigation      = $('.header-desctop-navigation');
        var descNavigationTitle = descNavigation.find('._title');
        var links               = header.find('._desktop-menu');
        var close               = header.find('#_close-menu');

        var slideCallback = function () {
            descNavigation.toggleClass("opened");
            descNavigation.removeAttr("style");
        };

        close.on('click', function (e) {
            e.preventDefault();
            descNavigation.slideUp(slideCallback);
        });
        links.on('click', function (e) {
            e.preventDefault();

            var isLinkActive  = $(this).hasClass('active');
            var isDescVisible = descNavigation.is(':visible');

            var cssClass = $(this).data('class');
            descNavigation.find('._vertical a, ._horizontal, .article-news-box').each(function () {
                $(this).hide();
            });
            descNavigation.find('.' + cssClass).each(function () {
                $(this).show();
            });
            descNavigationTitle.text(this.innerText);

            descNavigation.removeClass('with-news-article');
            if (descNavigation.find('.article-news-box.' + cssClass).length) {
                descNavigation.addClass('with-news-article');
            }

            if (isLinkActive && isDescVisible) {
                descNavigation.slideUp(slideCallback);
            } else if (!isDescVisible || isLinkActive && !isDescVisible) {
                descNavigation.slideDown(slideCallback);
            }

            links.removeClass("active");
            $(this).addClass("active");
        });

    };

    $components.colorThief = function () {
        $('[color-thief]').each(function () {
            var self       = this;
            var colorThief = new ColorThief();
            var image      = $(this).find('img');

            var color                  = colorThief.getPalette(image[0])[0];
            self.style.backgroundColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
        });
    };

    $components.mobileNavigation = function () {

        var $mobileBtn       = $('#header .app-mobile-btn');
        var $mobileMenu      = $('#app-mobile-menu');
        var $mobileMenuBtn   = $mobileMenu.find(".app-mobile-btn");
        var $mobileMenuIcon  = $mobileMenuBtn.find(".app-svg");
        var $mobileMenuClose = $('#app-mobile-menu-close');
        var $mobileMenuTitle = $('#app-mobile-menu-title');
        var $mobileMenuLink  = $('.app-main-menu__link');
        var $cocoonWhereToBuy = $('.app-left-right-flex');

        var velocityEasing   = [0.215, 0.610, 0.355, 1.000];
        var velocityDuration = 800;
        var hiddenLvlStyle   = "hidden-lvl";

        var setTitle = function (title) {
            $mobileMenuTitle.html(title)
        };

        $mobileBtn.bind('click', function (e) {
            e.preventDefault();

            $cocoonWhereToBuy.hide();
            $mobileMenu.addClass('opened');
        });

        $mobileMenuClose.bind('click', function (e) {
            e.preventDefault();
            $mobileMenu.removeClass('opened');

            var width = $(window).outerWidth();
            if (width < 1200) {
                $cocoonWhereToBuy.css({'display': 'flex'});
            } else {
                $cocoonWhereToBuy.hide();
            }
        });

        function setBackIcon(submenuActive) {
            var styleName = submenuActive ? "back-menu" : "menu";
            var isLocked = $mobileMenuIcon.hasClass('locked');
            $mobileMenuIcon[0].className = "app-svg " + styleName + (isLocked ? ' locked' : '');
        }

        $mobileMenuBtn.bind('click', function (e) {
            e.preventDefault();
            if ($mobileMenuIcon.hasClass('menu')) {
                $mobileMenu.removeClass('opened');
            } else if ($mobileMenuIcon.hasClass('back-menu')) {

                if ($mobileMenuIcon.hasClass('locked')) {
                    return;
                }

                var width        = $(window).outerWidth();
                var activeMenu   = $mobileMenu.find('ul:not(.hidden-lvl):visible');
                var prevMenu     = $(activeMenu).parents('ul');
                var prevMenuLink = prevMenu.find('> li > a');

                setBackIcon(prevMenu.parents('ul').length > 0);

                if (prevMenu.parents('ul').length < 1) {
                    setTitle('');
                } else {
                    setTitle($(prevMenuLink).html());
                }
                prevMenu.removeClass(hiddenLvlStyle);

                $.Velocity(activeMenu, {
                    translateX: [width, 0],
                    opacity: [1, 0]
                }, {
                    display: "block",
                    duration: velocityDuration - 200,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });

                $.Velocity(prevMenuLink, {
                    translateX: [0, -width]
                }, {
                    duration: velocityDuration,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });
            }
        });

        $mobileMenuLink.bind('click', function (e) {
            var menu  = $(this).next('ul');
            var width = $(window).outerWidth();

            if (menu.length > 0) {

                $mobileMenuIcon.addClass('locked');

                e.preventDefault();
                var prevMenu     = $(this).closest('ul');
                var prevMenuLink = prevMenu.find('> li > a');

                setBackIcon(prevMenu.length > 0);
                setTitle($(this).html());

                $.Velocity(menu, {
                    translateX: [0, width],
                    opacity: [1, 0]
                }, {
                    display: "block",
                    duration: velocityDuration - 200,
                    easing: velocityEasing,
                    complete: function () {

                    }
                });

                $.Velocity(prevMenuLink, {
                    translateX: [-width, 0]
                }, {
                    duration: velocityDuration,
                    easing: velocityEasing,
                    complete: function () {
                        prevMenu.addClass(hiddenLvlStyle);
                        $mobileMenuIcon.removeClass('locked');
                    }
                });
            }
        });

    };

    $components.desctopStoreDetails = function () {
        var storeFilter = $('.app-filter-result');
        var item = storeFilter.find('.app-filter-result__list-item');
        var details = storeFilter.find('.app-filter-result__detail-box');
        var openBtn = item.find('.app-button-reserve');
        var closeBtn = details.find('.app-modal-close');
        var openedItem = null;
        var isMobile    = window.innerWidth < 992;

        $(document).on('click', '.app-filter-result .app-filter-result__list-item .app-button-reserve', function(e){
            e.preventDefault();

            $('.wpsl-back').trigger('click');

            var $item = openedItem = $(this).closest('.app-filter-result__list-item');
            var $itemDetails = $item.find('.store-details .app-filter-result__flex-box');
            var isOpened = details.hasClass('opened');

            details.empty().append($itemDetails.clone());

            storeFilter.find('.app-filter-result__list-item').removeClass('active');
            $item.addClass('active');

            if(!isOpened) {
                $item.addClass('active');

                if (isMobile) {
                    details.addClass('opened').show();
                } else {
                    $.Velocity(details, {
                        translateX: ['100%', '0%']
                    }, {
                        display: "block",
                        duration: 300,
                        easing: "ease-out",
                        complete: function () {
                            details.addClass('opened')
                        }
                    });
                }
            }
        });

        $(document).on('click', '.app-filter-result .app-modal-close', function(e){
            e.preventDefault();

            openedItem.removeClass('active');

            if (isMobile) {
                details.removeClass('opened').hide();
            } else {
                $.Velocity(details, {
                    translateX: ['0%', '100%']
                }, {
                    display: "block",
                    duration: 300,
                    easing: "ease-out",
                    complete: function () {
                        details.removeClass('opened');
                    }
                });
            }
        });

        $(document).on('click', '.get-direction', function(e) {
            e.preventDefault();
            openedItem.find('.wpsl-directions').trigger('click');
        });
    }

    $components.stickyFooter = function () {
        var $stickyFooter = $('.shop-floating-block');

        if ($stickyFooter.length) {
            $('footer.app-footer').css('margin-bottom', $stickyFooter.height());
        }
    }

    $(window).on("resize scroll", function () {
        $('._header-link').jqDropdown('hide');
    });

    $(window).on("resize", function () {
        $('#app-mobile-menu-close').click();
    });



}(jQuery));
