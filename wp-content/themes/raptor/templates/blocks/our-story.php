<?php $page = get_post(6090); ?>
<div class="article-solution-box">
    <div class="app-container">
        <div class="article-solution-box__content">
            <div class="_absolute-bg app-inline-bg _fixed-position img-mobilized" 
                style="background-image: url('<?php the_field('image', $page->ID) ?>')"
                data-image="<?php the_field('image', $page->ID) ?>" 
                data-image-mobile="<?php the_field('mobile_image', $page->ID) ?>">
                     
            </div>
            <div class="app-centered-left-box _content _fixed-height-content2">
                <div class="_content-inner">
                    <h1 class="_title"><?php the_field('title', $page->ID) ?></h1>
                    <div class="_subtitle"><?php the_field('subtitle', $page->ID) ?></div>

                </div>
            </div>
        </div>
    </div>
</div>