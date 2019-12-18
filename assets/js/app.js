(function ($) {
    "use strict";

    var $components = [];
    var $header = document.getElementById("header");
    var $footer = document.getElementById("footer");
    var $container = document.getElementById("container");

    document.addEventListener("DOMContentLoaded", function(){
        var component;

        for(component in $components){
            $components[component]();
        }
    });

    // handle event
    // window.addEventListener("resize", function() {
    //     $components.storefinderDraw();
    // });

    // Store Finder pages
    $components.storeFilter = function (){
        var filter = $('.tcg-storefinder__filter');
        var filterCollapse = filter.find('.tcg-storefinder__filter-collapse');
        var button = filter.find('.tcg-storefinder__filter-trigger a');
        var buttonText = button.find('._filter-text');

            button.on('click', function (e){
                e.preventDefault();

                var slideCallback = function (){
                    buttonText.text(isActive ? 'Refine your search' : 'Hide filters');
                    filterCollapse.toggleClass("opened");
                    filterCollapse.removeAttr("style");
                    button.toggleClass("active");
                };

                var isActive = button.hasClass('active');
                var isVisible = filterCollapse.is(':visible');

                if (matchMedia('only screen and (min-width: 1025px)').matches) {
                    if(isActive && isVisible) {
                        filterCollapse.slideUp(slideCallback);
                    } else if (!isVisible || isActive && !isVisible){
                        filterCollapse.slideDown(slideCallback);
                    }
                }
            });
    };

    $components.storefinderDraw = function () {
        var storefinderMap = $('.tcg-storefinder__map');
        var details = storefinderMap.find('.storefinder-details__list ul li');
        var list = storefinderMap.find('.storefinder-details__list ul');
        var draw = storefinderMap.find('.storefinder-map__details');
        var item = storefinderMap.find('.storefinder-map__list');
        var openBtn = details.find('._actions > a');
        var closeBtn = item.find('._close');
        var closeDraw = draw.find('._close');
        var openedItem = null;

        openBtn.bind('click', function(e){
            e.preventDefault();

            var $details = openedItem = $(this).closest(details);
            var isOpened = $details.hasClass('opened');

            if(!isOpened) {
                $details.addClass('active');

                if (matchMedia('only screen and (min-width: 1025px)').matches) {
                    $.Velocity(item, {
                        translateX: ['100%', '-100%']
                    }, {
                        display: "block",
                        duration: 300,
                        easing: "ease-out",
                        complete: function () {
                            item.addClass('opened')
                        }
                    });
                } else {
                    item.insertAfter(list.find('li.active'));

                    $.Velocity(item, {
                        display: "none"
                    }, {
                        display: "block",
                        duration: 300,
                        easing: "ease-out",
                        complete: function () {
                            item.addClass('opened');
                        }
                    });
                }
            }
        });

        closeBtn.bind('click', function(e){
            e.preventDefault();

            openedItem.removeClass('active');

            if (matchMedia('only screen and (min-width: 1025px)').matches) {
                $.Velocity(item, {
                    translateX: ['-100%', '100%']
                }, {
                    display: "block",
                    duration: 300,
                    easing: "ease-out",
                    complete: function () {
                        item.removeClass('opened');
                    }
                });
            } else {
                $.Velocity(item, {
                    display: "block"
                }, {
                    display: "none",
                    duration: 300,
                    easing: "ease-out",
                    complete: function () {
                        item.removeClass('opened');
                    }
                });
            }
        });

        if (matchMedia('only screen and (min-width: 1025px)').matches) {
            closeDraw.bind('click', function(e){
                e.preventDefault();
                var a = document.getElementById('drawer');
                var m = document.getElementById('map');
                a.classList.toggle('active');
                m.classList.toggle('skewed');
            });
        } else {
            var tabs = storefinderMap.tabs({
                classes: {
                    "ui-tabs": "ui-tabs__sleepsaas"
                }
            });
        }
    };

    $components.dialog = function (){
        var dialogTrigger = $('.tcg_dialog__trigger');
        var dialog = $('#tcg-dialog__twist');

        dialog.dialog({
            modal: true,
            autoOpen: false
        });

        dialogTrigger.on('click', function (e){
            e.preventDefault();
            dialog.dialog( "open" );
        });
    };

}(jQuery));