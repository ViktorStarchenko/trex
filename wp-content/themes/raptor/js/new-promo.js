jQuery(document).on( 'change', 'input[name="range"]', function() {
    var paged = 1;
    filterRange(paged);
});
jQuery(document).on( 'change', 'input[name="retailer"]', function() {
    var paged = 1;
    filterRetailer(paged);
});
jQuery(document).on( 'change', 'input[name="retailer-acc"]', function() {
    var paged = 1;
    filterBeddingRetailer(paged);
});
jQuery(document).on( 'click', '.promotions-footer .page-numbers a.page-numbers', function( e ){
    e.preventDefault();

    var paged = /[\?&]pages=(\d+)/.test( this.href ) && RegExp.$1;
    filterRange(paged);

});
jQuery(document).on( 'click', '.accessories-footer .page-numbers a.page-numbers', function( e ){
    e.preventDefault();

    var paged = /[\?&]pages=(\d+)/.test( this.href ) && RegExp.$1;
    filterBedding(paged);

});
function filterRange (paged) {
    var matIdsArr = [];

    jQuery('input:checkbox[name=range]:checked').each(function(){
        matIdsArr.push(jQuery(this).val());
    });
    var $content = jQuery('.dynamic-ajax-content');

    jQuery.ajax({
        type : 'post',
        url : wp.ajax.settings.url,
        data : {
            action : 'filter_promo',
            matId : matIdsArr,
            paged: paged
        },
        beforeSend: function() {

        },
        success : function( response ) {
            $content.html( response );
        }
    });
}
function filterBedding (paged) {
    var catId;

    catId = jQuery('input:checkbox[name=range-acc]:checked').val();

    var $content = jQuery('.dynamic-ajax-content');

    jQuery.ajax({
        type : 'post',
        url : wp.ajax.settings.url,
        data : {
            action : 'paginate_bedding',
            catId : catId,
            paged: paged
        },
        beforeSend: function() {

        },
        success : function( response ) {
            $content.html( response );
        }
    });
}
function filterRetailer (paged) {
    var retIdsArr = [];

    jQuery('input:checkbox[name=retailer]:checked').each(function(){
        retIdsArr.push(jQuery(this).val());
    });
    var $content = jQuery('.dynamic-ajax-content');

    jQuery.ajax({
        type : 'post',
        url : wp.ajax.settings.url,
        data : {
            action : 'filter_promo_ret',
            retId : retIdsArr,
            paged: paged
        },
        beforeSend: function() {

        },
        success : function( response ) {
            $content.html( response );
        }
    });
}
function filterBeddingRetailer (paged) {
    var retIdsArr = [];

    jQuery('input:checkbox[name=retailer-acc]:checked').each(function(){
        retIdsArr.push(jQuery(this).val());
    });
    var $content = jQuery('.dynamic-ajax-content');

    jQuery.ajax({
        type : 'post',
        url : wp.ajax.settings.url,
        data : {
            action : 'filter_bedding',
            retId : retIdsArr,
            paged: paged
        },
        beforeSend: function() {

        },
        success : function( response ) {
            $content.html( response );
        }
    });
}