<?php 
    $video = get_field('mezzo_video');
?>
<?php if ($video) : ?>
    <article class="mezzo-media-article" id="watch-video">
        <div class="app-container">
            <div class="mezzo-media-table">
                <div class="_td">
                    <div class="mezzo-media-article__inner --left">
                        <div class="mezzo-media-article__title">explore <img src="<?= get_stylesheet_directory_uri(); ?>/img/mezzo/logo.png" alt="<?php the_title(); ?>"></div>
                        <div class="mezzo-media-article__content"><?php the_field('mezzo_video_description'); ?></div>
                        <div class="mezzo-media-article__tools">
                            <a class="mezzo-main-tools__btn _watch-video" href="#" ><span><?php the_field('mezzo_video_play_btn'); ?> <i class="mezzo-play-btn-icon fa fa-play"></i></span></a>
                        </div>
                    </div>
                </div>
                <div class="_td --video">
                    <video class="desc" src="<?= $video; ?>" id="_mezzo-video" class="app-sm-hidden"></video>
                    <img src="<?= get_stylesheet_directory_uri(); ?>/img/mezzo/explore-placeholder-video.jpg" alt="<?php the_title(); ?>" class="app-sm-visible">
                    <div class="mezzo-play-video-icon fa fa-play app-sm-hidden _watch-video desc"></div>
                </div>
            </div>
        </div>
    </article>
<?php endif; ?>
