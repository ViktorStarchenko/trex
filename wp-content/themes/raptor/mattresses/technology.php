<?php /* Template Name: Mattresses Technology */ ?>
<?php

if (!empty($attrs['id'])) : ?>
    <?php
    $technologies = [];

    if (!empty($attrs['id'])) {
        $otherSliders = get_field('other_technologies_slider');

        foreach ($otherSliders as $otherSlider) {
            if ($otherSlider['id'] == $attrs['id']) {
                $technologies = $otherSlider['technologies'];
            }
        }
    }

    $class = '';
    if (!empty($attrs['invert'])) {
        $class = ' _custom-invert ';
    }
    ?>
    <div class="article-news-box _np" id="technology-<?= $attrs['id'] ?>">
        <div class="app-container">
            <?php if (!empty($attrs['title'])) : ?>
                <h2 class="_title"><?= $attrs['title']  ?></h2>
            <?php endif; ?>
            <?php if (!empty($attrs['description'])) : ?>
                <div class="_subtitle"><?= $attrs['description'] ?></div>
            <?php endif; ?>
        </div>
        <nav class="miracoil-swiper-nav app-sm-hidden">
            <?php foreach ($technologies as $technology) : ?>
                <a href="javascript:void();" class="app-link-animation"><?= get_the_title($technology->ID); ?></a>
            <?php endforeach; ?>
        </nav>

        <div class="app-miracoil-swiper">
            <div class="app-miracoil-swiper__inner swiper-container">
                <div class="swiper-wrapper">

                    <?php foreach ($technologies as $technology) : ?>
                        <div class="swiper-slide <?= $class ?>">
                            <div class="app-container">
                                <div class="miracoil-swiper-item">
                                    <div class="miracoil-swiper-item__grid">
                                        <div class="miracoil-swiper-item__img app-sm-visible">
                                            <img src="<?= the_field('image', $technology->ID) ?>" alt="" />
                                        </div>
                                        <div class="_left">
                                            <div class="app-title-md">
                                                <?= get_the_title($technology->ID); ?>
                                            </div>
                                            <ul class="miracoil-swiper-item__list">
                                                <?php $technologyFeatures = get_field('features', $technology->ID); ?>
                                                <?php if ($technologyFeatures) : ?>
                                                    <?php foreach ($technologyFeatures as $feature): ?>
                                                        <li><?php echo $feature['description'] ?></li>
                                                    <?php endforeach ?>
                                                <?php endif; ?>
                                            </ul>
                                            <div class="miracoil-swiper-item__description"><?= $technology->post_content ?></div>
                                        </div>

                                        <div class="miracoil-swiper-item__img  app-sm-hidden">
                                            <img src="<?= the_field('image', $technology->ID) ?>" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <?php if (!empty($attrs['cta']) && !empty($attrs['url'])) : ?>
                    <div class="app-more-articles">
                        <a class="_link app-link-animation" href="<?= $attrs['url'] ?>"><?= $attrs['cta'] ?></a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php else : ?>
    <?php $technologies = get_field('technologies'); ?>
    <?php if ($technologies) : ?>
        <div class="article-news-box _np" id="technology">
            <div class="app-container">
                <h2 class="_title"><?php the_field('technology_title')  ?></h2>
                <div class="_subtitle"><?php the_field('technology_description')  ?></div>
            </div>
            <nav class="miracoil-swiper-nav app-sm-hidden">
                <?php foreach ($technologies as $technology) : ?>
                    <a href="javascript:void();" onclick="miracoilSwiperTrigger(event);" class="app-link-animation"><?= get_the_title($technology->ID); ?></a>
                <?php endforeach; ?>
            </nav>

            <div class="app-miracoil-swiper">
                <div class="app-miracoil-swiper__inner swiper-container">
                    <div class="swiper-wrapper">

                        <?php foreach ($technologies as $technology) : ?>
                            <div class="swiper-slide">
                                <div class="app-container">
                                    <div class="miracoil-swiper-item">
                                        <div class="miracoil-swiper-item__grid">
                                            <div class="miracoil-swiper-item__img app-sm-visible">
                                                <img src="<?= the_field('image', $technology->ID) ?>" alt="" />
                                            </div>
                                            <div class="_left">
                                                <div class="app-title-md">
                                                    <?= get_the_title($technology->ID); ?>
                                                </div>
                                                <ul class="miracoil-swiper-item__list">
                                                    <?php $technologyFeatures = get_field('features', $technology->ID); ?>
                                                    <?php if ($technologyFeatures) : ?>
                                                        <?php foreach ($technologyFeatures as $feature): ?>
                                                            <li><?php echo $feature['description'] ?></li>
                                                        <?php endforeach ?>
                                                    <?php endif; ?>
                                                </ul>
                                                <div class="miracoil-swiper-item__description"><?= $technology->post_content ?></div>
                                            </div>

                                            <div class="miracoil-swiper-item__img  app-sm-hidden">
                                                <img src="<?= the_field('image', $technology->ID) ?>" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="app-more-articles">
                        <a class="_link app-link-animation" href="<?php the_field('technologies_cta_url')  ?>"><?php the_field('technologies_cta_text')  ?></a>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
<?php endif; ?>