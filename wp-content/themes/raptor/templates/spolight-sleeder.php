<?php
    $attrs['cta_spolight_slider'] = isset($attrs['cta_spolight_slider']) ? $attrs['cta_spolight_slider'] : '';
    $attrs['cta_spolight_slider_description'] = isset($attrs['cta_spolight_slider_description']) ? $attrs['cta_spolight_slider_description'] : '';

    $slider = get_field('spolight_slider', get_the_ID());
?>
<div class="article-news-box slider-section">
    <div class="app-container">
        <div class="_title"><?= $attrs['cta_spolight_slider'] ?></div>
        <div class="_subtitle __custom-mb"><?= $attrs['cta_spolight_slider_description'] ?></div>
        <section class="_custom-slider-block">
            <div id="SpotLightsSlider" class=" carousel slide spotlights-slider-box">
                <ol class="carousel-indicators">
                    <?php $i=0; ?>
                    <?php foreach ($slider as $indicator) : ?>
                        <?php $active = ''; ?>
                        <?php if($i == 0) : ?>
                            <?php $active = ' active '; ?>
                        <?php endif; ?>
                        <li data-target="#SpotLightsSlider" data-slide-to="<?= $i ?>" class="<?= $active ?>"><?= $i + 1 ?>. <div><span></span></div></li>
                        <?php $i++; ?>
                    <?php endforeach; ?>
                </ol>

                <div class="carousel-inner">
                    <?php $i=0; ?>
                    <?php foreach ($slider as $items) : ?>
                        <?php $active = ''; ?>
                        <?php if($i == 0) : ?>
                            <?php $active = ' active '; ?>
                        <?php endif; ?>
                        <div class="item <?= $active ?>">
                            <div class="item-spotlights-area">
                                <div class="spotlights-slider-left">
                                    <div class="spotlights-slide-title"><?= $items['title_spolight_slider'] ?></div>
                                    <?= $items['description_spolight_slider'] ?>
                                </div>
                                <div class="spotlights-slider-right">
                                    <img src="<?= $items['image_spolight_slider']['url'] ?>" alt="<?= $items['title_spolight_slider'] ?>">
                                </div>
                            </div>
                        </div>
                        <?php $i++; ?>
                    <?php endforeach; ?>
                </div>

                <div class="spotlights-slider-arrow">
                    <div class="left carousel-control" href="#SpotLightsSlider" data-slide="prev">
                        <span class=""><</span>
                    </div>
                    <div class="spotlights-slider-counter"><div class="spotlights-slider-counter-current">1</div>/<div class="spotlights-slider-counter-all"></div></div>
                    <div class="right carousel-control" href="#SpotLightsSlider" data-slide="next">
                        <span class="">></span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>



