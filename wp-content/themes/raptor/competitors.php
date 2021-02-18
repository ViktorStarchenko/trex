<?php
/*
* Template Name: Competitors page
* Template Post Type: page
*/
?>
<?php get_header() ?>
<?php $table = get_field('table');
$header = $table['header_row'];
$rows = $table['rows'];
$hero = get_field('hero');
$explore = get_field('explore');
$cta_block = get_field('footer_cta');
?>
    <div class="main">
        <div class="hero-screen">
            <picture class="hero-screen__pictire">
                <source media="(max-width: 768px)" srcset="<?= $hero['img_mob']['url']; ?> 1x, <?= $hero['img_mob_2x']['url']; ?> 2x"><img src="<?= $hero['img']['src']; ?>" srcset="<?= $hero['img_2x']['url']; ?> 2x"/>
            </picture>
            <div class="hero-screen__title"><?= $hero['title'] ?></div>
        </div>
        <div class="container">
            <div class="comparison-wrap">
                <div class="content-center">
                    <h4><?= $explore['title'] ?></h4>
                    <p><?= $explore['text'] ?></p>
                </div>
                <div class="comparison-table-wrap">
                    <div class="comparison-table">
                        <?php
                        if (!empty($header)) {
                            foreach ($header['body'] as $key_tr => $tr) {
                                echo '<div class="comparison-table__row">';
                                foreach ($tr as $key_td => $td) {
                                    if ($key_td == 0) {
                                        echo ' <div class="comparison-table__parameter">
                                                <div class="comparison-table__heading">' .  $td['c'] .
                                            '</div></div><div class="comparison-table__matching">';
                                    } else {
                                        echo '<div class="comparison-table__cell">';
                                        echo '<div class="comparison-table__brand">';
                                        echo $td['c'];
                                        echo '</div>';
                                        echo '</div>';
                                    }
                                }
                                echo '</div>';
                                echo '</div>';
                            }
                        }?>
                        <?php
                        foreach ($rows as $row) {
                            $subtable = $row['row_table'];
                            $is_price = $row['is_price'];
                            $is_text = $row['is_text'];
                            if ( ! empty ( $subtable ) ) {
                                if ( ! empty( $subtable['header'] ) ) {
                                    echo '<div class="comparison-table__row">';
                                    foreach ( $subtable['header'] as $key_th => $th ) {
                                        if ($key_th == 0) {
                                            echo '<div class="comparison-table__parameter">
                                                    <div class="comparison-table__title">' .  $th['c'] .
                                                '</div></div><div class="comparison-table__matching">';
                                        } else {
                                            if ($is_price) {
                                                echo '<div class="comparison-table__cell">';
                                                echo '<div class="comparison-table__price">';
                                                echo $th['c'];
                                                echo '</div>';
                                                echo '</div>';
                                            } else {
                                                echo '<div class="comparison-table__cell"></div>';
                                            }
                                        }
                                    }
                                    echo '</div>';
                                    echo '</div>';
                                }
                                foreach ( $subtable['body'] as $key_tr => $tr ) {
                                    echo '<div class="comparison-table__row">';
                                    foreach ( $tr as $key_td => $td ) {
                                        if ($key_td == 0) {
                                            echo '<div class="comparison-table__parameter">
                                                    <div class="comparison-table__subtitle">' .  $td['c'] . '</div>'.
                                                '</div>
                                                <div class="comparison-table__matching">';
                                        } else {
                                            if ($is_text) {
                                                echo '<div class="comparison-table__cell">
                                                    <div class="comparison-table__text">'.$td['c'].'</div>
                                                </div>';
                                            } else {
                                                echo '<div class="comparison-table__cell"><div class="comparison-table-icon">'.$td['c'].'</div></div>';
                                            }
                                        }
                                    }
                                    echo '</div>';
                                    echo '</div>';
                                }
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="swap-card-wrap">
                <div class="swap-card">
                    <div class="swap-card__content swap-card__content--center">
                        <div class="swap-card__content-inner">
                            <h5 class="swap-card__title"><?= $cta_block['title']?></h5>
                            <p class="swap-card__text"><?= $cta_block['text']?></p><a class="bttn bttn--reverse" href="<?= $cta_block['cta']['url']?>"><?= $cta_block['cta']['title']?></a>
                        </div>
                    </div>
                    <div class="swap-card__img"><img src="<?= $cta_block['img']['url']?>" srcset="<?= $cta_block['img_2x']['url']?> 2x"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer() ?>