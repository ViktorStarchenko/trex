<!doctype html>
<html class="no-js html" <?php language_attributes(); ?>>
<head>
    <?php
        if(is_category()){
            $category = get_the_category();
            if(isset($category[0])){
                $meta = get_term_meta($category[0]->cat_ID, 'header_links');
                if(isset($meta[0])){
                    echo $meta[0];
                }
            }
        }
        else{
            echo get_field('header_links', get_the_ID());
        }
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="<?= get_template_directory_uri() ?>/img/favicon.png">

    <?php wp_head(); ?>
    <!--[if IE]>
    <style>
        .gfgeo-advanced-address .ginput_complex .ginput_full .cstm-inpt-plchldr {
            top: 24px;
        }
    </style>
    <![endif]-->
</head>
<body <?php body_class(); ?>>
<?php before_body_start($post); ?>
<?php if( $short_code = get_field('hello_bar_mattresses', get_the_ID()) ) : ?>
    <?= do_shortcode($short_code); ?>
<?php endif; ?>
<div class="app-wrapper">

<?php get_template_part( 'header-menu'); ?>