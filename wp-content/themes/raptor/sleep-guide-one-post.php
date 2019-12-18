<div class="article-advice-box article-advice-hover" onclick="window.location.href='<?php the_permalink(); ?>'">
    <div class="app-container">
        <div class="article-advice-flex _sm">
            <div class="_img">
                <div class="_absolute-bg app-inline-bg" style="background-image: url(<?php the_post_thumbnail_url( 'full' ); ?>)"></div>
            </div>
            <div class="app-centered-box article-advice-box__content">
                <div class="_content-inner">
                    <?php if ( count( get_the_category() ) ) : ?>
                        <div class="_uphead"><span><?= get_the_category_list( ', ' ); ?></span></div>
                    <?php endif ?>
                    <h2 class="_title"><?php the_title(); ?></h2>
                    <div class="_subtitle"><?php has_excerpt() ? the_excerpt(): null; ?></div>
                    <a href="<?php the_permalink(); ?>" class="app-button-reserve _inline">read more <i class="app-svg button-reserve _icon-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
