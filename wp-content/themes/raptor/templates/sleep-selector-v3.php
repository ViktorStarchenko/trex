<?php
/*
 * Template Name: Sleep Selector GF before result
 * Template Post Type: page
 */

?>

<?php get_header(); ?>

 <!-- These files always load from our main server-->

    <script src="https://selector.m1-staging.overdose.digital/pub/media/js/sleepmaker_v2.js"></script>
    <script src="https://selector.m1-staging.overdose.digital/pub/media/js/sleepsaas.js"></script>
    <script src="https://selector.m1-staging.overdose.digital/pub/media/js/main.js"></script>

    <!-- These files always load from the local web site-->
    <link rel="stylesheet" href="/assets/css/vendor.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
    <style>
        ._custom-gform-styles .gravity-form .gform_heading{
            padding-top:20px;
        }
        .app-sleep-selector-modal__flex{
            display:block;
        }
        .app-sleep-selector-modal .article-news-box{
            margin:0 auto;
            padding-top:0px;
        }
        ._custom-gform-styles .gravity-form .gform_body label.gfield_label, ._not-visible{
            display:none;
        }
        .app-sleep-selector-modal>.app-modal-close{
            top:60px;
        }
        .tcg_selector_sleepyheadau{
            background-color: #fff;
        }
    </style>
    <div id="tcg_selector_container" style="margin: 0px !important; margin-top: 40px !important;"></div>
    <script>
        tcg_init_selector('70303aa4960c853fc06555b592f7160d', 2);

    </script>
<?php if(get_field('sleep_selector_block_form', 5598)) : ?>
    <div class="js-signup-newsletter"></div>
<?php endif; ?>
<?php $headerNavigation = get_page_by_path('sleep-selector'); ?>
    <div class="selector-brand-campaign"></div>

<?php if (get_field('start_promotion')=="yes") : ?>
    <div id="iamthform" class="_size-lg" style="display: none;">
        <div class="app-sleep-selector-modal__flex">
            <div class="_custom-gform-styles">
                <div class="article-news-box gravity-form _gravity-form-wrapper">
                    <?= get_field('sleep_selector_block_form', $headerNavigation->ID); ?>
                </div>
            </div>
        </div>
    </div>
<?php endif;?>
<?php get_footer();
