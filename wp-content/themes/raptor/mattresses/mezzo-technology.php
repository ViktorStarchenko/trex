<?php /* Template Name: Mattresses [Mezzo] Technology */ ?>
<?php $technologies = get_field('technologies'); ?>
<?php if ($technologies) : ?>
    <article class="mezzo-media-article">
        <div class="mezzo-swiper">
            <div class="mezzo-swiper__inner swiper-container">
                <div class="swiper-wrapper">
                    <?php foreach ($technologies as $technology) : ?>
                        <div class="swiper-slide">
                            <div class="app-container">
                                <div class="mezzo-media-article__title"><img src="<?= get_stylesheet_directory_uri(); ?>/img/mezzo/logo.png" alt="<?php the_field('technology_title')  ?>" /> <?php the_field('technology_title')  ?></div>
                                <div class="mezzo-media-article__image"><img src="<?= the_field('image', $technology->ID) ?>" alt="<?= get_the_title($technology->ID); ?>" /></div>
                                <div class="mezzo-media-article__subtitle"><?= get_the_title($technology->ID); ?></div>
                                <div class="mezzo-media-article__content"><?= $technology->post_content ?></div>

                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <?php if (get_field('technologies_cta_url')): ?>
                <div class="app-more-articles">
                    <a class="_link app-link-animation" href="<?php the_field('technologies_cta_url')  ?>"><?php the_field('technologies_cta_text')  ?></a>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </article>
<?php endif; ?>