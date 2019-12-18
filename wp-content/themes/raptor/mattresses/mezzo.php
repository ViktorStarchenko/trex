<?php
/*
 * Template Name: Mattresses [Mezzo]
 * Template Post Type: post
 */
add_action('wp_head', 'add_mezzo_js');
add_filter('show_admin_bar', '__return_false');
?>
<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">
        <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="angle-left" viewBox="0 0 12 32">
                    <title>angle-left</title>
                    <path d="M0.288 15.315l9.49-9.345c0.379-0.379 0.991-0.379 1.369 0l0.572 0.572c0.379 0.379 0.379 0.991 0 1.369l-8.241 8.088 8.233 8.088c0.379 0.379 0.379 0.991 0 1.369l-0.572 0.572c-0.379 0.379-0.991 0.379-1.369 0l-9.49-9.345c-0.371-0.379-0.371-0.991 0.008-1.369z"></path>
                </symbol>
                <symbol id="angle-right" viewBox="0 0 12 32">
                    <title>angle-right</title>
                    <path d="M11.715 16.685l-9.49 9.345c-0.379 0.379-0.991 0.379-1.369 0l-0.572-0.572c-0.379-0.379-0.379-0.991 0-1.369l8.241-8.088-8.233-8.088c-0.379-0.379-0.379-0.991 0-1.369l0.572-0.572c0.379-0.379 0.991-0.379 1.369 0l9.49 9.345c0.371 0.379 0.371 0.991-0.008 1.369z"></path>
                </symbol>
            </defs>
        </svg>
        <div class="mezzo-page">
            <?php while (have_posts()) : the_post(); ?>
                <?php 
                    $video = get_field('mezzo_video');
                ?>
                <article class="mezzo-main-article">
                    <div class="app-container">
                        <div class="mezzo-logo">
                            <img src="<?= get_stylesheet_directory_uri(); ?>/img/mezzo/logo.png" alt="<?php the_title(); ?>">
                            <label><?php the_field('title_text'); ?></label>
                        </div>
                        <div class="mezzo-main-subtitle"><?php the_field('title_description'); ?></div>
                        <div class="mezzo-main-poster">
                            <img src="<?= the_post_thumbnail_url('full-size') ?>" alt="<?php the_title(); ?>">
                        </div>
                        <div class="mezzo-main-tools clearfix">
                            <?php if ($video) : ?>
                                <a class="mezzo-main-tools__btn" href="#watch-video"><span>explore mezzo</span></a>
                            <?php endif; ?>
                            <a class="mezzo-main-tools__btn --white" style="<?= !$video ? 'float:none;' : ''; ?>" href="#where-to-buy"><span><?php the_field('title_menu_where_buy'); ?></span></a>
                        </div>
                    </div>
                </article>
            
                <?php the_content(); ?>
            
            <?php endwhile; ?>
        </div>
    </section>

<script type="text/javascript">
    jQuery('._watch-video').on('click', function(e) {
        e.preventDefault();
        jQuery(this).closest('.app-container').find('.mezzo-play-video-icon').hide();
        document.getElementById("_mezzo-video").play();
    });
    /*
    jQuery('._watch-video-designer').on('click', function(e) {
        e.preventDefault();
        var src =  jQuery("#_mezzo-video-designer")[0].src;
        if (src.indexOf('?') !== -1) {
            jQuery("#_mezzo-video-designer")[0].src += "&autoplay=1";
        } else {
            jQuery("#_mezzo-video-designer")[0].src += "?autoplay=1";
        }
    });
    */

    jQuery(window).on('load', function() {
        addYouTubeApi();
    });
    // youtube api
    function addYouTubeApi() {
        var script = document.createElement('script');
        script.setAttribute('src', 'https://www.youtube.com/iframe_api');
        document.body.appendChild(script);
    }

    // load YouTube API
    function onYouTubeIframeAPIReady() {
        console.log("onYouTubeIframeAPIReady");
        var video = document.getElementById('_mezzo-video-designer');
        var player = new YT.Player(video, {
            playerVars: {
                enablejsapi: 1,
            },
            events: {
                onReady: function() {
                    jQuery('._watch-video-designer').on('click', function(e) {
                        e.preventDefault();
                        player.playVideo();
                    });
                }
            }
        });
    }
</script>
<?php get_footer();


