<?php
$sleepGuidePosts = get_field('sleep_guide');
$attrs['subtitle'] = isset($attrs['subtitle']) ? $attrs['subtitle'] : 'Learn how to overcome back pain, understand how sleep impacts your health and beauty, and how find the right mattress for you and your family.';
$attrs['title'] = isset($attrs['title']) ? $attrs['title'] : 'SLEEP GUIDE';
$attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : 'View more articles';
$attrs['cta-link'] = isset($attrs['cta-link']) ? $attrs['cta-link'] : '/sleep-guide';
/*
echo "<pre>";
print_r($sleepGuidePosts);
echo "</pre>";
*/
?>

<?php if ($sleepGuidePosts): ?>
    <div class="article-news-box">
        <div class="app-container">
            <h2 class="_title"><?= $attrs['title']; ?></h2>
            <div class="_subtitle"><?= $attrs['subtitle']; ?></div>
            <div class="article-grid-box">
                <div class="_grid _c3">
                    <?php foreach ($sleepGuidePosts as $post): ?>
                        <div class="_col">
                            <div class="article-news-slice__item">
                                <div class="article-news-slice app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url($post->ID, 'full'); ?>)"></div>
                                <div class="article-grid-box__item app-centered-box _sm article-grid-box__fixed-bottom">
                                    <div>
                                        <?php if (count(get_the_category($post->ID))) : ?>
                                            <div class="_uphead">
                                                <span><?= get_the_category_list(', ', '', $post->ID); ?></span></div>
                                        <?php endif ?>
                                        <div class="_title"><?= $post->post_title; ?></div>
                                        <?php if (has_excerpt( $post->ID )) : ?>
                                        <div class="_subtitle"><?= get_the_excerpt($post->ID); ?></div>
                                        <?php endif; ?>
                                        <a href="<?= get_permalink($post->ID); ?>" class="app-button-reserve _inline">read more
                                            <i class="app-svg button-reserve _icon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="app-more-articles">
                    <a class="_link app-link-animation" href="<?= $attrs['cta-link'] ?>"><?= $attrs['cta-text'] ?></a></div>
            </div>
        </div>
    </div>
<?php endif; ?>
