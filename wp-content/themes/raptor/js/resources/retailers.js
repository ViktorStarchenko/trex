(function ($) {
    "use strict";
    
    $(document).ready(function($) {
        if (typeof ajax_variables.entity_id !== 'undefined' && ajax_variables.entity_id !== '') {
            var data = {
                    'action': 'update_entry_retailer',
                    'entity_id': ajax_variables.entity_id
            };

            function updateRetailer(retailer) {
                data.retailer = retailer;
                $.post(ajax_variables.ajax_url, data, function() {});
            }
            $('input[name="retailer"]').on('change', function(e) {
                if ($(this).prop('checked')) {
                    updateRetailer($(this).parent().text());
                }
            });
            $(document).on('click', '.js-show-store-details',function(e) {
                var $self   = $(this);
                var retailer = $self.closest('li').find(".article-inline-goods__title").text();
                updateRetailer(retailer);
            });
        }
    });
}(jQuery));
