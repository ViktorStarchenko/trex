<?php

$attrs['subtitle'] = isset($attrs['subtitle']) ? $attrs['subtitle'] : '';
$attrs['title'] = isset($attrs['title']) ? $attrs['title'] : '';
$attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : '';
$attrs['cta-link'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : '';
$attrs['video-link'] = isset($attrs['video-link']) ? $attrs['video-link'] : '';
$attrs['video-height'] = isset($attrs['video-height']) ? $attrs['video-height'] : '350px';

?>
<?php if($attrs['video-link']) : ?>
<div class="article-news-box _custom-video-box" id="">
    <div class="app-container">
        <h2 class="_title"><?=$attrs['title'];?></h2>
        <?php if( $attrs['subtitle'] ) : ?>
        <div class="_subtitle"><?=$attrs['subtitle'];?></div>
        <?php endif; ?>
    </div>

    <div class="app-mattress-video-box">
        <div class="">
            <div class="embed-video">
                <iframe width="100%" height="<?=$attrs['video-height'];?>" src="<?=$attrs['video-link'];?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen align="center"></iframe>
            </div>
            <?php if($attrs['cta-text']) : ?>
            <div class="app-more-articles">
                <a class="_link app-link-animation" href="<?=$attrs['cta-link'];?>"><?=$attrs['cta-text'];?></a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php endif; ?>