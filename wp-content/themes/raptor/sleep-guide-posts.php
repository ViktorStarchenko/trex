<div class="_col" onclick="window.location.href='<?php the_permalink(); ?>'">
    <div class="article-news-slice__item">
        <div class="article-grid-box__item app-centered-box _sm">
            <div class="app-centered-box-child">
                <?php if ( count( get_the_category() ) ) : ?>
                        <div class="_uphead"><span><?= get_the_category_list( ', ' ); ?></span></div>
                <?php endif ?>
                <div class="_title"><?php the_title(); ?></div>
                <div class="_subtitle"><?php the_excerpt(); ?></div>
                <a href="<?php the_permalink(); ?>" class="app-button-reserve _inline">read more <i class="app-svg button-reserve _icon-right"></i></a>
            </div>
        </div>
    </div>
</div>