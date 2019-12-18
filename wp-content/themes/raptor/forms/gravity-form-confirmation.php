<?php
/*
 * Template Name: Gravity Form Multistep Confirmation
 * Template Post Type: page
 */

add_filter('show_admin_bar', '__return_false');

function get_all_form_fields($form_id){
    $form = RGFormsModel::get_form_meta($form_id);
    $fields = array();

    if(is_array($form["fields"])){
        foreach($form["fields"] as $field){
            if(isset($field["inputs"]) && is_array($field["inputs"])){

                foreach($field["inputs"] as $input)
                    $fields[$input["id"]] =  GFCommon::get_label($field, $input["id"]);
            } else if(!rgar($field, 'displayOnly')){
                $fields[$field["id"]] =  GFCommon::get_label($field);
            }
        }
    }
    return $fields;
}

$leads = RGFormsModel::get_lead($_GET['entry_id']);
$fields = get_all_form_fields($leads['id']);

$firstCol = explode(';', get_field('first_col_form_ids'));
$secondCol = explode(';', get_field('second_col_form_ids'));

?>

<?php get_header(); ?>

    <section id="container" class="app-wrapper__flex">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div class="range-main-box">
            <div class="range-main__small-bg">
                <?php $bgImage = get_field('backgroud_image'); ?>
                <div class="_absolute-bg app-inline-bg" style="background-image: url('<?= !empty($bgImage) ? $bgImage : "/wp-content/themes/raptor/img/contact-us-bg.jpg" ?>')"></div>
                <div class="_absolute-bg _absolute-title"><?php the_title(); ?></div>
            </div>
            <div class="range-main-box__bottom _gravity-form-wrapper">
                <div class="_contact-page-content _new-custom-gform-styles">
                    <div class="_contact-form gravity-form _gform-confirmation">
                        <?php the_content(); ?>
                        
                        <div class="app-container">
                            <div class="article-grid-box">
                                <div class="_grid _grid-flex _c3">
                                    <div class="_col">
                                        <?php foreach ($firstCol as $group) : ?>
                                            <?php $lines = explode(',', $group); ?>
                                            <span>
                                            <?php foreach ($lines as $id) : ?>
                                                
                                                <?php $parts = explode('-', $id); ?>
                                                <?php if (!empty($leads[trim($parts[0])])) : ?>
                                                    <?php if(!empty($parts[1])) : ?>
                                                        <?= ' ' .$parts[1] == 1 ? $fields[trim($parts[0])] : $parts[1]; ?>: 
                                                    <?php endif; ?>
                                                    <?= ' ' .$leads[trim($parts[0])]; ?>
                                                <?php endif; ?>
                                                
                                            <?php endforeach; ?>  
                                            </span>
                                        <?php endforeach; ?>
                                    </div>
                                    <div class="_col">
                                        <?php foreach ($secondCol as $group) : ?>
                                            <?php $lines = explode(',', $group); ?>
                                            <span>
                                            <?php foreach ($lines as $id) : ?>
                                                <?php $parts = explode('-', $id); ?>
                                                <?php if (!empty($leads[trim($parts[0])])) : ?>
                                                    <?php if(!empty($parts[1])) : ?>
                                                        <?= ' ' . $parts[1] == 1 ? $fields[trim($parts[0])] : $parts[1]; ?> : 
                                                    <?php endif; ?>
                                                    <?= ' ' .$leads[trim($parts[0])]; ?>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                            </span>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
    </section>
<?php get_footer();

