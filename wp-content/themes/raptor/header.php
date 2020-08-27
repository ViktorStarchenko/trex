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
<?php
$body_class = '';
if (is_page_template('mattresses/new-product-design.php')) {
	$body_class = 'product-template';
}
?>
<body <?php body_class($body_class); ?>>
<div class="svg-icon" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="arrow-long"><path fill="currentColor" d="M12.906 0l-1.007 1.007 5.759 5.786H0v1.415h17.658L11.899 14l1.007 1 7.117-7.176v-.648z"/></symbol><symbol id="arrow-right"><path fill="currentColor" d="M9.621 7.961a.406.406 0 01.583-.563l4.175 4.322a.405.405 0 010 .563l-4.176 4.319a.405.405 0 01-.582-.563l3.903-4.037-3.903-4.04z"/></symbol><symbol id="arrow"><path fill="currentColor" d="M8.363 17.068a.62.62 0 00.012.811c.204.22.53.214.727-.014l5.3-6.117a.622.622 0 00-.001-.797l-5.3-6.112a.476.476 0 00-.726-.014.62.62 0 00-.012.81l4.954 5.715-4.954 5.718z"/></symbol><symbol id="close"><path d="M8 6.933L14.36.58a.75.75 0 011.06 1.062L9.054 8l6.366 6.359a.75.75 0 01-1.06 1.061L8 9.066 1.64 15.42a.75.75 0 11-1.06-1.06L6.945 8 .58 1.642A.75.75 0 011.64.579z"/></symbol><symbol id="down-arrow"><path fill="currentColor" d="M11.045.66a.507.507 0 01.704.729L6.346 6.608a.506.506 0 01-.704 0L.244 1.388A.506.506 0 11.948.66l5.046 4.88z"/></symbol><symbol id="envelope"><path fill="currentColor" d="M24.615 8.723l.017.001.01.001-.027-.002a.7.7 0 01.7.7v12.692a.7.7 0 01-.7.7H5.385a.7.7 0 01-.7-.7V9.423a.7.7 0 01.683-.699h19.247zm-.7 2.089l-8.492 6.439a.7.7 0 01-.846 0l-8.493-6.439v10.603h17.831V10.812zm-1.408-.689H7.493L15 15.815l7.507-5.692z"/></symbol><symbol id="facebook"><path fill="currentColor" d="M13.078 4.03c.78-.742 1.89-.993 2.937-1.024 1.107-.01 2.214-.004 3.322-.004.004 1.168.004 2.337 0 3.505-.716-.001-1.433.002-2.148-.001-.454-.029-.92.315-1.002.765-.011.782-.004 1.564-.004 2.346 1.05.004 2.1-.002 3.149.002a43.512 43.512 0 01-.382 3.378c-.927.008-1.855-.001-2.782.005-.008 3.335.005 6.67-.006 10.005-1.377.005-2.755-.003-4.132.003-.026-3.335.002-6.672-.014-10.008-.672-.007-1.344.005-2.016-.006.003-1.12 0-2.242.001-3.363.672-.008 1.343.002 2.015-.005.02-1.09-.02-2.18.021-3.27.067-.862.396-1.731 1.04-2.327"/></symbol><symbol id="instagram"><path fill="currentColor" d="M16.035 5.04c1.768.004 2.15.018 3.056.06 1.062.048 1.787.217 2.421.463a4.89 4.89 0 011.768 1.151 4.9 4.9 0 011.15 1.767c.247.635.416 1.36.464 2.422.045.985.058 1.35.06 3.55v1.128c-.002 2.2-.015 2.564-.06 3.55-.048 1.061-.217 1.786-.464 2.421a5.1 5.1 0 01-2.917 2.918c-.635.247-1.36.415-2.422.464-1.064.048-1.404.06-4.114.06h-.291c-2.445-.001-2.798-.014-3.822-.06-1.062-.049-1.787-.217-2.422-.464a4.883 4.883 0 01-1.767-1.15c-.508-.5-.9-1.102-1.151-1.768-.247-.635-.415-1.36-.464-2.422-.041-.906-.056-1.287-.06-3.055v-2.117c.004-1.768.019-2.148.06-3.055.049-1.062.217-1.787.464-2.422a4.891 4.891 0 011.15-1.767 4.895 4.895 0 011.768-1.15c.634-.247 1.36-.416 2.422-.464.906-.042 1.287-.056 3.055-.06zm-.503 1.797h-1.11c-2.16.002-2.502.014-3.477.058-.972.045-1.5.207-1.852.344a3.1 3.1 0 00-1.147.746 3.085 3.085 0 00-.747 1.148c-.136.351-.299.88-.343 1.852-.043.935-.056 1.289-.058 3.227v1.61c.002 1.938.015 2.291.058 3.226.044.973.207 1.502.343 1.853.16.433.415.825.747 1.147.321.332.713.587 1.147.747.351.136.88.299 1.852.343.935.043 1.289.056 3.227.058h1.61c1.939-.002 2.292-.015 3.227-.058.973-.044 1.5-.207 1.852-.343a3.308 3.308 0 001.894-1.894c.136-.352.299-.88.343-1.853.043-.935.056-1.288.058-3.226v-1.61c-.002-1.938-.015-2.292-.058-3.227-.044-.973-.207-1.5-.343-1.852a3.095 3.095 0 00-.746-1.148 3.095 3.095 0 00-1.148-.746c-.351-.137-.88-.3-1.852-.344-.974-.044-1.317-.056-3.477-.058zm-.555 3.056a5.123 5.123 0 110 10.246 5.123 5.123 0 010-10.246zm0 1.798a3.326 3.326 0 100 6.652 3.326 3.326 0 000-6.652zm5.326-3.197a1.197 1.197 0 110 2.394 1.197 1.197 0 010-2.394z"/></symbol><symbol id="message"><path fill="currentColor" d="M14.295 5.927c5.83 0 10.657 3.762 10.795 8.523.703.927 1.11 2.025 1.11 3.214a5.682 5.682 0 01-2.587 4.603l-.167.1.008.01a1.82 1.82 0 00.175.409c.083.15.167.272.215.334a.75.75 0 01-.447 1.194c-.783.157-1.393-.084-2.013-.597-.043-.035-.205-.177-.305-.262-.77.158-1.556.245-2.356.26-.964 0-1.889-.15-2.739-.423l.17-.02a13.62 13.62 0 01-1.86.126 18.89 18.89 0 01-3.173-.334l-.441-.091c0 .004-.004.007-.009.01-.085.065-.505.437-.576.496-.841.706-1.646 1.028-2.681.821a.75.75 0 01-.448-1.192c.082-.107.218-.306.352-.55.129-.234.226-.458.279-.652.074-.272.055-.358.015-.383a8.145 8.145 0 01-4.101-6.858c.008-4.868 4.872-8.738 10.784-8.738zm0 1.5c-5.15 0-9.278 3.284-9.284 7.218a6.645 6.645 0 003.368 5.589c.731.453.894 1.222.665 2.065l-.039.134.127-.103c.032-.027.494-.436.632-.541.364-.277.702-.41 1.099-.31.82.184 1.652.308 2.483.372-1.284-1.087-2.079-2.567-2.079-4.216 0-3.394 3.389-6.067 7.477-6.067 1.702 0 3.28.465 4.542 1.254l-.024-.068c-1.078-3.044-4.672-5.327-8.967-5.327zm4.45 5.64c-3.329 0-5.978 2.09-5.978 4.568 0 2.484 2.637 4.58 5.942 4.58a11.325 11.325 0 002.25-.268c.367-.089.652.025.948.249l.04.03c.016-.435.212-.825.648-1.096a4.178 4.178 0 002.105-3.488c0-2.483-2.634-4.574-5.956-4.574z"/></symbol><symbol id="pin"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M24.083 13.557v.018a7.577 7.577 0 01-1.18 4.044l-5.036 7.483a2.252 2.252 0 01-3.734.001L9.086 17.6a7.58 7.58 0 01-1.17-4.043c.093-4.381 3.717-7.86 8.07-7.774a7.944 7.944 0 018.097 7.774zm-8.098-6.274c-3.554-.07-6.493 2.752-6.568 6.29a6.031 6.031 0 00.925 3.208l5.036 7.484a.749.749 0 001.244 0l5.024-7.466c.61-.963.934-2.079.937-3.218-.08-3.55-3.017-6.368-6.598-6.298zM16 9.797c1.857 0 3.377 1.446 3.377 3.25 0 1.803-1.52 3.25-3.377 3.25-1.857 0-3.377-1.447-3.377-3.25 0-1.804 1.52-3.25 3.377-3.25zm0 1.5c-1.045 0-1.877.792-1.877 1.75s.832 1.75 1.877 1.75 1.877-.792 1.877-1.75-.832-1.75-1.877-1.75z"/><circle cx="16" cy="16" r="15.5" stroke="currentColor"/></g></symbol><symbol id="plus"><path fill="currentColor" fill-rule="evenodd" d="M15 8c.314 0 .568.255.568.568l-.006 5.869 5.87-.005a.568.568 0 01.001 1.136l-5.86.004-.005 5.86a.568.568 0 01-1.136 0l.005-5.87-5.869.006a.568.568 0 01-.001-1.136l5.86-.004.005-5.86c0-.314.255-.568.568-.568z"/></symbol><symbol id="search"><path d="M15.754 6.447a7.227 7.227 0 01.43 9.731l3.613 3.627a.607.607 0 01-.86.857l-3.605-3.622a7.186 7.186 0 01-9.758-.391 7.227 7.227 0 010-10.202 7.186 7.186 0 0110.18 0zm-9.32.857a6.013 6.013 0 000 8.488 5.973 5.973 0 008.461 0 6.013 6.013 0 000-8.488 5.972 5.972 0 00-8.462 0z" fill="currentColor"/></symbol><symbol id="star"><path fill="currentColor" d="M6.624 17.341a.493.493 0 01-.292-.096.508.508 0 01-.18-.562l1.435-4.49L3.815 9.41a.508.508 0 01-.18-.562.497.497 0 01.471-.347h4.662l1.434-4.487a.496.496 0 01.471-.347c.215 0 .405.14.471.347l1.434 4.487h4.661a.505.505 0 01.291.909l-3.771 2.784 1.434 4.489a.507.507 0 01-.18.562.489.489 0 01-.582 0l-3.758-2.774-3.759 2.774a.485.485 0 01-.29.096"/></symbol><symbol id="thumb"><path d="M9.277 2.88c.205 0 .388.023.55.07.162.046.296.104.4.173a.941.941 0 01.267.27c.073.111.126.211.16.3.033.089.06.2.08.333.02.133.03.233.033.3.002.067.003.153.003.26 0 .169-.02.338-.063.506-.042.17-.084.302-.126.4a5.846 5.846 0 01-.25.493 1.19 1.19 0 00-.127.307h1.846c.346 0 .646.126.9.38.252.253.379.553.379.9 0 .382-.122.712-.367.992.067.196.1.365.1.507.013.338-.082.642-.287.913.076.249.076.509 0 .78a1.29 1.29 0 01-.36.626c.04.497-.068.9-.326 1.206-.284.338-.722.51-1.313.52h-.86c-.293 0-.612-.035-.959-.104a8.575 8.575 0 01-.81-.193c-.193-.06-.46-.148-.802-.263-.547-.191-.898-.289-1.053-.293a.443.443 0 01-.3-.13.399.399 0 01-.127-.297V7.565c0-.111.04-.208.12-.29a.44.44 0 01.287-.137c.106-.009.275-.14.506-.393.231-.253.455-.522.673-.806.302-.387.527-.653.673-.8.08-.08.15-.187.207-.32.058-.133.097-.24.117-.323.02-.082.05-.217.09-.403a5.6 5.6 0 01.083-.407c.024-.098.068-.213.13-.346.062-.134.138-.245.226-.333a.41.41 0 01.3-.127zM5.012 7.145c.116 0 .216.042.3.127a.407.407 0 01.127.3v4.264a.407.407 0 01-.127.3.407.407 0 01-.3.127H3.093a.41.41 0 01-.3-.127.41.41 0 01-.126-.3V7.571c0-.115.042-.215.126-.3a.413.413 0 01.3-.126zm-1.066 3.412c-.12 0-.22.042-.303.126a.418.418 0 00-.123.3c0 .12.04.221.123.304a.412.412 0 00.303.123.415.415 0 00.3-.123.408.408 0 00.127-.304.414.414 0 00-.127-.3.41.41 0 00-.3-.126z" fill="currentColor"/></symbol><symbol id="youtube"><path fill="currentColor" d="M19.355 8.868c1.316.005 6.07.04 9.4.28.545.066 1.733.071 2.792 1.18.836.847 1.108 2.767 1.108 2.767s.26 2.102.277 4.277l.001.233v2.114c0 2.255-.278 4.51-.278 4.51s-.272 1.92-1.108 2.766c-1.06 1.11-2.247 1.116-2.792 1.18-3.493.253-8.556.287-9.573.29l-.22.001c-.57-.006-7.302-.075-9.437-.28-.62-.116-2.012-.08-3.072-1.19-.836-.846-1.108-2.767-1.108-2.767s-.26-2.102-.277-4.277v-2.58c.018-2.175.277-4.277.277-4.277s.272-1.92 1.108-2.766c1.06-1.11 2.247-1.115 2.792-1.18 3.33-.241 8.084-.276 9.4-.281h.71zm-3.233 5.583l.001 7.83 6.6-3.421-6.601-4.409z"/></symbol></svg></div>

<?php before_body_start($post); ?>
<?php if( $short_code = get_field('hello_bar_mattresses', get_the_ID()) ) : ?>
    <?= do_shortcode($short_code); ?>
<?php endif; ?>
<div class="app-wrapper">

<?php get_template_part( 'header-menu'); ?>