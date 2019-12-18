<?php
$id = 93;
if (!empty($attrs['id'])) {
    $id = $attrs['id'];
}
$page = get_post($id);
$positionStyle = 'app-centered-right-box';
$contentPosition = get_field('content_position', $page->ID);
if ($contentPosition && $contentPosition == 'center') {
    $positionStyle = 'app-centered-box';
} else if ($contentPosition && $contentPosition == 'left') {
    $positionStyle = 'app-centered-left-box';
}

?>

<div class="article-solution-box find-your-perfect" onclick="window.location.href = '<?php the_field('cta_url', $page->ID) ?>';">
    <div class="app-container">
        <div class="article-solution-box__content">
            <div class="_absolute-bg app-inline-bg img-mobilized"
                 style="background-image: url('<?php the_field('image', $page->ID) ?>');"
                 data-image="<?php the_field('image', $page->ID) ?>"
                 data-image-mobile="<?php the_field('mobile_image', $page->ID) ?>">
            </div>

            <div class="<?= $positionStyle; ?> _content">
                <div class="_content-inner">
                    <h1 class="_title"><?php the_field('title', $page->ID) ?></h1>
                    <div class="_subtitle"><?php the_field('subtitle', $page->ID) ?></div>
                    <a class="app-button-reserve _inline" href="<?php the_field('cta_url', $page->ID) ?>"><?php the_field('cta_title', $page->ID) ?></a>

                </div>
            </div>
        </div>
    </div>
</div>