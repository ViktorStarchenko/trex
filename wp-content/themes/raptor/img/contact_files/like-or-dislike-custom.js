function like(event) {
    event.preventDefault();
    var id     = jQuery('#postID').val();
    like_ajax(id);
}

function like_ajax(id) {
    jQuery.ajax({
        type: "post",
        url: vortex_ajax_var.url,
        dataType: "json",
        data: {
            action: 'vortex_system_like_button',
            post_id: id,
            nonce: vortex_ajax_var.nonce
        },
        success: function (response) {
            if (response.likes != "exit") {
                if (response.both == 'no') {
                    var like = jQuery('#vote-like-counter.' + id);
                    like.text(response.likes);

                    var like_toggle = jQuery('#vote-like.' + id);
                    like_toggle.toggleClass('active');
                } else {
                    var dislike = jQuery('#vote-dislike-counter.' + id);
                    dislike.text(response.dislikes);

                    var dislike_toggle = jQuery('#vote-dislike.' + id);
                    dislike_toggle.toggleClass('active');

                    var like = jQuery('#vote-like-counter.' + id);
                    like.text(response.likes);

                    var like_toggle = jQuery('#vote-like.' + id);
                    like_toggle.toggleClass('active');

                }
            }
        },
        complete: function () {
            jQuery(document.body).one('click.vortexlike', '#vote-like', like);
        }
    });
}


function dislike(event) {
    event.preventDefault();
    var id     = jQuery('#postID').val();
    dislike_ajax(id);
}

function dislike_ajax(id) {
    jQuery.ajax({
        type: "post",
        url: vortex_ajax_var.url,
        dataType: "json",
        data: {
            action: 'vortex_system_dislike_button',
            post_id: id,
            nonce: vortex_ajax_var.nonce
        },
        success: function (response) {
            if (response.dislikes != "exit") {
                if (response.both == 'no') {
                    var dislike = jQuery('#vote-dislike-counter.' + id);
                    dislike.text(response.dislikes);
                    var dislike_toggle = jQuery('#vote-dislike.' + id);
                    dislike_toggle.toggleClass('active');
                } else {

                    var dislike = jQuery('#vote-dislike-counter.' + id);
                    dislike.text(response.dislikes);
                    var dislike_toggle = jQuery('#vote-dislike.' + id);
                    dislike_toggle.toggleClass('active');

                    var like = jQuery('#vote-like-counter.' + id);
                    like.text(response.likes);
                    var like_toggle = jQuery('#vote-like.' + id);
                    like_toggle.toggleClass('active');

                }
            }
        },
        complete: function () {
            jQuery(document.body).one('click.vortexdislike', '#vote-dislike', dislike);
        }
    });
}

jQuery(document).ready(function () {
    // if (Modernizr.touchevents) {
    //     jQuery(document.body).on('mouseleave touchmove click', '#vote-like', function (event) {
    //         if (jQuery(this).hasClass('active')) {
    //             var color = jQuery('#vote-dislike').css('color');
    //             jQuery(this).css('color', color);
    //         } else {
    //             jQuery(this).removeAttr('style');
    //         }
    //         ;
    //     });
    //     jQuery(document.body).on('mouseleave touchmove click', '#vote-dislike', function (event) {
    //         if (jQuery(this).hasClass('active')) {
    //             var color = jQuery('#vote-like').css('color');
    //             jQuery(this).css('color', color);
    //         } else {
    //             jQuery(this).removeAttr('style');
    //         }
    //         ;
    //     });
    // }
    jQuery(document.body).off('click.vortexlike', '#vote-like').one('click.vortexlike', '#vote-like', like);
    jQuery(document.body).off('click.vortexdislike', '#vote-dislike').one('click.vortexdislike', '#vote-dislike', dislike);
});