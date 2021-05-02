(function ($) {
    "use strict";

    $(document).on('click', '.popup-sleep-selector-trigger', function (e) {
        e.preventDefault();
        $('#app-mobile-menu-close').click();
        var brandpopup = $('#brand-campaign-popup');
        $('body').addClass('modal-opened');
        brandpopup.show();
    });

    $(document).on('click', '#brand-campaign-popup .app-modal-close', function (e) {
        e.preventDefault();

        var $modal = $('#brand-campaign-popup');

        var $name = $modal.find('input[name="name"]');
        var $email = $modal.find('input[name="email"]');

        $name.val('').removeClass("active");
        $email.val('').removeClass("active");

        //$modal.find('#newsletter-form-block').show();
        //$modal.find('#newsletter-thankyou-block').hide();

        $modal.hide();

        $('body').removeClass('modal-opened');
    });
}(jQuery));