<?php $post = get_post(); ?>
<div class="_col">
    <div class="article-news-slice__item">
        <div class="article-news-slice app-inline-bg" style="background-image: url(<?php the_field( 'default_image', $post->ID ); ?>)"></div>
        <div class="article-grid-box__item app-centered-box _sm">
            <div class="_custom_article-news-slice">
                <?php if (get_field('type', $post->ID)) : ?>
                    <div class="_uphead"><span><?= get_field('type', $post->ID); ?></span></div>
                <?php endif; ?>
                <div class="_title"><?php the_title(); ?></div>
                <div class="_subtitle"><?php the_excerpt(); ?></div>
                <a href="<?php the_permalink(); ?>" class="app-button-reserve _inline">explore <?php the_title(); ?><i class="app-svg button-reserve _icon-right"></i></a>
            </div>
        </div>
    </div>
</div>