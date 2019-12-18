<?php

$attrs['title_gif'] = isset($attrs['title']) ? $attrs['title'] : '';
$attrs['description_gif'] = isset($attrs['description']) ? $attrs['description'] : '';
$attrs['cta_gif'] = isset($attrs['cta']) ? $attrs['cta'] : '';
$attrs['cta_link_gif'] = isset($attrs['cta_link']) ? $attrs['cta_link'] : '';
$attrs['url_gif'] = isset($attrs['gif']) ? $attrs['gif'] : '';
$attrs['url_video'] = isset($attrs['video']) ? $attrs['video'] : '';
$attrs['container'] = isset($attrs['container']) ? $attrs['container'] : '';

//$attrs['url_video'] = 'http://trex.staging.overdose.digital/wp-content/uploads/2019/03/cameo-falling.mp4';

?>

<?php if( $attrs['url_gif'] ) : ?>
    <?php $class = ''; ?>
    <?php if( $attrs['container'] ) : ?>
    <?php $class = 'app-container'; ?>
    <?php endif; ?>
    <section class="gif-section <?= $class; ?> ">
        <img src="<?= $attrs['gif'] ?>" alt="<?= $attrs['title_gif']  ?>" class="lazy-load video-image" />
        <?php if($attrs['url_video']) : ?>
            <video class="lazy-load video-box" src="<?= $attrs['url_video']; ?>" autoplay muted loop>
                Your browser does not support the video tag.
            </video>
        <?php endif; ?>
        <div class="gif-info">
            <?php if( $attrs['title_gif'] ) : ?>
                <div class="_title"><?= $attrs['title_gif'] ?></div>
            <?php endif; ?>

            <?php if( $attrs['description_gif'] ) : ?>
                <div class="_subtitle"><?= $attrs['description_gif'] ?></div>
            <?php endif; ?>

            <?php if( $attrs['cta_gif'] ) : ?>
                <a href="<?= $attrs['cta_link_gif'] ?>" class="app-button-reserve _inline"><?= $attrs['cta_gif'] ?></a>
            <?php endif; ?>
        </div>
    </section>
<?php endif; ?>

