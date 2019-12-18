$(document).ready(function() {

		//scroll for down arrows and quiz button
		$(".down-arrow").click(function() {
			var nextSection = $(this).closest('.section').next();

			$("html, body").animate({
				scrollTop: nextSection.offset().top
			}, 1000);
		});

		//section 5 comfort and support layer highlight

		$(".support").mouseover(function() {
			$("#mattress-support-layer").show();
			$("#mattress-comfort-layer").hide();
			$("#full-mattress").hide();
			$("#support-layer-text").addClass("highlight-text");
		});

		$(".comfort").mouseover(function() {
			$("#mattress-comfort-layer").show();
			$("#mattress-support-layer").hide();
			$("#full-mattress").hide();
			$("#comfort-layer-text").addClass("highlight-text");
		});

		$(".support").mouseleave(function() {
				$("#mattress-support-layer").hide();
				$("#full-mattress").show();
				$("#support-layer-text").removeClass("highlight-text");
		});

		$(".comfort").mouseleave(function() {
				$("#mattress-comfort-layer").hide();
				$("#full-mattress").show();
				$("#comfort-layer-text").removeClass("highlight-text");
		});

		//coin flips
		if ($(window).width() > 800) {
		$('.flip').mouseover(function(){
        $(this).find('.coin').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });
	}

});