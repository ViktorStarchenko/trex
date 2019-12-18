<?php 

    //GET MATTRASSES FROM HOME PAGE
    $page = get_page_by_path('home');
    $topPosts = get_field('top_mattresses', $page->ID);
    $midlePosts = get_field('middle_mattresses', $page->ID);
    $bottomPosts = get_field('bottom_mattresses', $page->ID);
    
    $attrs['subtitle'] = isset($attrs['subtitle']) ? $attrs['subtitle'] : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur.';
    $attrs['title'] = isset($attrs['title']) ? $attrs['title'] : 'Our Mattress Ranges';
    $attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : 'EXPLORE';
?>
<div class="section-mattress__ranges">
    <div class="section-wrap">
        <div class="section-title"><?= $attrs['title']; ?></div>
        <div class="section-subtitle"><?= $attrs['subtitle']; ?></div>
        <div class="section-list clearfix">
            <?php foreach ($topPosts as $p): ?>
                <div class="list-item" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
                    <div class="list-item__wrap" style="background-image: url('<?php the_field('home_page_image', $p->ID); ?>');">
                        <div class="list-item__inner">
                            <div class="list-item__label"><span><?php the_field('home_page_top_text', $p->ID); ?></span></div>
                            <div class="list-item__title"><?= get_the_title($p->ID); ?></div>
                            <div class="list-item__text"><?php the_field('home_page_description', $p->ID); ?></div>
                            <div class="list-item__btn-wrap">
                                <a href="<?php the_permalink($p->ID); ?>" class="list-item__btn app-button-white _inline">
                                    <?= $attrs['cta-text']; ?> <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach;  ?>
            <?php foreach ($midlePosts as $p):  ?>
                <div class="list-item" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
                    <div class="list-item__wrap" style="background-image: url('<?php the_field('home_page_image', $p->ID); ?>');">
                        <div class="list-item__inner">
                            <div class="list-item__label"><span><?php the_field('home_page_top_text', $p->ID); ?></span></div>
                            <div class="list-item__title"><?= get_the_title($p->ID); ?></div>
                            <div class="list-item__text"><?php the_field('home_page_description', $p->ID); ?></div>
                            <div class="list-item__btn-wrap">
                                <a href="<?php the_permalink($p->ID); ?>" class="list-item__btn app-button-white _inline">
                                    <?= $attrs['cta-text']; ?> <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach;  ?>
            <?php foreach ($bottomPosts as $p):  ?>
                <div class="list-item" onclick="window.location.href='<?php the_permalink($p->ID); ?>'">
                    <div class="list-item__wrap" style="background-image: url('<?php the_field('home_page_image', $p->ID); ?>');">
                        <div class="list-item__inner">
                            <div class="list-item__label"><span><?php the_field('home_page_top_text', $p->ID); ?></span></div>
                            <div class="list-item__title"><?= get_the_title($p->ID); ?></div>
                            <div class="list-item__text"><?php the_field('home_page_description', $p->ID); ?></div>
                            <div class="list-item__btn-wrap">
                                <a href="<?php the_permalink($p->ID); ?>" class="list-item__btn app-button-white _inline">
                                    <?= $attrs['cta-text']; ?> <i class="app-svg button-explore _icon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>

