<?php
$page = get_page_by_path('page-not-found');
add_filter('show_admin_bar', '__return_false');
$isCollectionsEnabled = get_option('is_collections_enabled');
?>
<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">
        <div class="app-container">
            <figure class="error-page">
                <figcaption>
                    <div class="_title"><?php echo get_field('title', $page->ID) ?></div>
                    <div class="_subtitle"><?php echo get_field('sub_title', $page->ID) ?></div>
                    <p>
                        <?php echo get_field('text', $page->ID, false) ?>
                    </p>
                    <div class="_bottom">
                        <?php foreach (get_field('links', $page->ID) as $link): ?>
                            <a href="<?php echo $link['link_page'] ?>" class="app-button-reserve"><?php echo $link['link_name'] ?></a>
                        <?php endforeach ?>
                    </div>
                </figcaption>
                <div class="_image">
                    <img src="<?php echo get_field('image', $page->ID) ?>" alt="404 not found">
                </div>
            </figure>
        </div>
    </section>

    <?php /*
    <section id="container" class="app-wrapper__flex">
        <?= $pageNotFound->post_content; ?>
    </section>*/ ?>
<?php get_footer();
