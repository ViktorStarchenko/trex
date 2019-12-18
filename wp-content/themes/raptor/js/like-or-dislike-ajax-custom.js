jQuery(document).ready(function($) {

    $(".vote-block-js .vote-link-icon.positive").on("click", function () {
        vote_ajax_custom(1);
    });

    $(".vote-block-js .vote-link-icon.negative").on("click", function () {
        vote_ajax_custom(0);
    });

    function vote_ajax_custom(flag) {
        var like = 0;
        var tagret = "";
        if(flag){
            like = jQuery(".positive-count").html()*1;
            tagret = ".positive-count";
        }
        else{
            like = jQuery(".negative-count").html()*1;
            tagret = ".negative-count";
        }

        var data = {
            action: 'raptor_action',
            positive: flag,
            like: like,
            dislike: 0,
            post: jQuery(".vote-block-js").attr("data-id")*1
        };

        jQuery.post( raptor_ajax.url, data, function(response) {
            var value = JSON.parse(response);
            if(value != ''){
                jQuery(".positive-count").html(value.like);
                jQuery(".negative-count").html(value.dislike);
                var date = new Date(new Date().getTime() + 10000000 * 10000000);
                document.cookie = "like=" + flag + "; path=/; expires=" + date.toUTCString();
                if(flag){
                    jQuery(".vote-positive").addClass('green');
                    jQuery(".vote-negative").addClass('grey');
                }
                else{
                    jQuery(".vote-positive").addClass('grey');
                    jQuery(".vote-negative").addClass('red');
                }
            }
            jQuery(".vote-block").removeClass('vote-block-js');
        });

    }
});