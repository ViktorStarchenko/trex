
<?php
    /*
     * Template Name: Accessories Collection
     * Template Post Type: post
     */
    $excludeFields = [
        'perfect_for_title',
        'perfect_for_items',
        'characteristics_title',
        'characteristics_items',
        'materials_title',
        'height',
        'diameter',
        'width',
        'weight'

    ];
?>
<?php get_header(); ?>

<section id="container" class="app-wrapper__flex">

    <?php while ( have_posts() ) : the_post(); ?>
        <div class="range-main-box">
            <div class="range-main__small-bg">
                <div class="_absolute-bg app-inline-bg" style="background-image: url(<?= get_the_post_thumbnail_url(); ?>)"></div>
            </div>
            <div class="range-main-box__bottom">
                <div class="app-container t_center">
                        <div class="article-box__uphead"><span><?php the_field('type'); ?></span></div>
                        <h1 class="article-box__title"><?php the_title() ?></h1>
                        <div class="article-box__subtitle"><?php the_excerpt(); ?></div>
                </div>
                <div class="_rating-group__flex">
                    <?php $pillows = get_field('pillows'); ?>
                    <?php $protectors = get_field('protectors'); ?>
                    <?php $quits = get_field('quits'); ?>
                    <?php $sheets = get_field('sheets'); ?>

                    <div class="_rating-group">
                        <?php if ($quits) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-5"></i>
                                <nobr><?= count($quits); ?>x quilt<?= count($quits) > 1 ? 's' : ''?></nobr>
                                <?php foreach($quits as $quit) : ?>
                                    <div class="_rating-group__title"><?= $quit->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        <?php if ($pillows) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-6"></i>
                                <nobr><?= count($pillows); ?>x pillow<?= count($pillows) > 1 ? 's' : ''?></nobr>
                                <?php foreach($pillows as $pillow) : ?>
                                    <div class="_rating-group__title"><?= $pillow->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        <?php if ((!$quits || !$pillows) && $protectors) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-7"></i>
                                <nobr><?= count($protectors); ?>x protector<?= count($protectors) > 1 ? 's' : ''?></nobr>
                                <?php foreach($protectors as $protector) : ?>
                                    <div class="_rating-group__title"><?= $protector->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        <?php if (!$quits && !$pillows && $sheets) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-9"></i>
                                <nobr><?= count($sheets); ?>x sheet<?= count($sheets) > 1 ? 's' : ''?></nobr>
                                <?php foreach($sheets as $sheet) : ?>
                                    <div class="_rating-group__title"><?= $sheet->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="_rating-group">
                        <?php if ($quits && $pillows && $protectors) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-7"></i>
                                <nobr><?= count($protectors); ?>x protector<?= count($protectors) > 1 ? 's' : ''?></nobr>
                                <?php foreach($protectors as $protector) : ?>
                                    <div class="_rating-group__title"><?= $protector->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        <?php if ($quits && $pillows && $sheets) : ?>
                            <div class="_rating-group-item">
                                <i class="app-svg luxury-9"></i>
                                <nobr><?= count($sheets); ?>x sheet<?= count($sheets) > 1 ? 's' : ''?></nobr>
                                <?php foreach($sheets as $sheet) : ?>
                                    <div class="_rating-group__title"><?= $sheet->post_title; ?></div>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-line-divider"></div>

        <div class="article-news-box">
            <div class="app-container">
                <div class="_title"><?php the_field('accessories_title'); ?></div>
                <div class="_subtitle"><?php the_field('accessories_description'); ?></div>
            </div>
        </div>
        <div class="app-accordeon">
            <?php foreach ($quits as $key => $quilt) : ?>
                <div class="app-accordeon-item <?= $key == 0 ? 'active' : '' ?>">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $quilt->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?= get_the_post_thumbnail($quilt, 'full') ?>
                                    </div>
                                    <div class="_rating-group">
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-5"></i>
                                            <div>100% Pure<br> cotton cover</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-6"></i>
                                            <div>Soft feel</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-7"></i>
                                            <div>Protect<br> against<br> allergens</div>
                                        </div>
                                    </div>
                                    <div class="_rating-group__button">
                                        <a href="/bedding" class="app-button-reserve _inline">SEE ALL QUILTS <span class="app-svg button-reserve _icon-right"></span></a>
                                    </div>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $quilt->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $quilt->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $quilt->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $quilt->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $quilt->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <div class="_rating-title"><?php the_field('materials_title', $quilt->ID); ?></div>
                                    <div class="_rating-list">
                                        <ul>
                                            <?php $fields = get_fields($quilt->ID); ?>
                                            <?php foreach ($fields as $title => $field) : ?>
                                                <?php if (!in_array($title, $excludeFields)) : ?>
                                                    <li><span class="_materials-title"><?= $title ?></span>: <?= is_array($field) ? $field[0]->post_title : $field; ?></li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                            <?php
                                                $height = get_field('height', $quilt->ID);
                                                $width = get_field('width', $quilt->ID);
                                                $diameter = get_field('diameter', $quilt->ID);
                                            ?>
                                            <?php if ($height && $width && $diameter) : ?>
                                                <li>Dimensions: <?= $width; ?>(w) x <?= $diameter; ?>(d) x <?= $height; ?>(h)cm gusset</li>
                                            <?php endif; ?>
                                            <?php $weight = get_field('weight', $quilt->ID); ?>
                                            <?php if ($weight) : ?>
                                                <li>Weight: <?= $weight ?>gm</li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($pillows as $key => $pillow) : ?>
                <div class="app-accordeon-item <?= $key == 0 && !$quits ? 'active' : '' ?>">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $pillow->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?= get_the_post_thumbnail($pillow, 'full') ?>
                                    </div>
                                    <div class="_rating-group">
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-5"></i>
                                            <div>100% Pure<br> cotton cover</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-6"></i>
                                            <div>Soft feel</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-7"></i>
                                            <div>Protect<br> against<br> allergens</div>
                                        </div>
                                    </div>
                                    <div class="_rating-group__button">
                                        <a href="/bedding" class="app-button-reserve _inline">SEE ALL PILLOWS <span class="app-svg button-reserve _icon-right"></span></a>
                                    </div>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $pillow->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $pillow->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $pillow->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $pillow->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $pillow->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <div class="_rating-title"><?php the_field('materials_title', $pillow->ID); ?></div>
                                    <div class="_rating-list">
                                        <ul>
                                            <?php $fields = get_fields($pillow->ID); ?>
                                            <?php foreach ($fields as $title => $field) : ?>
                                                <?php if (!in_array($title, $excludeFields)) : ?>
                                                    <li><span class="_materials-title"><?= $title ?></span>: <?= is_array($field) ? $field[0]->post_title : $field; ?></li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                            <?php
                                                $height = get_field('height', $pillow->ID);
                                                $width = get_field('width', $pillow->ID);
                                                $diameter = get_field('diameter', $pillow->ID);
                                            ?>
                                            <?php if ($height && $width && $diameter) : ?>
                                                <li>Dimensions: <?= $width; ?>(w) x <?= $diameter; ?>(d) x <?= $height; ?>(h)cm gusset</li>
                                            <?php endif; ?>
                                            <?php $weight = get_field('weight', $pillow->ID); ?>
                                            <?php if ($weight) : ?>
                                                <li>Weight: <?= $weight ?>gm</li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($protectors as $protector) : ?>
                <div class="app-accordeon-item">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $protector->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?= get_the_post_thumbnail($protector, 'full') ?>
                                    </div>
                                    <div class="_rating-group">
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-5"></i>
                                            <div>100% Pure<br> cotton cover</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-6"></i>
                                            <div>Soft feel</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-7"></i>
                                            <div>Protect<br> against<br> allergens</div>
                                        </div>
                                    </div>
                                    <div class="_rating-group__button">
                                        <a href="/bedding" class="app-button-reserve _inline">SEE ALL PROTECTORS <span class="app-svg button-reserve _icon-right"></span></a>
                                    </div>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $protector->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $protector->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $protector->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $protector->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $protector->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <div class="_rating-title"><?php the_field('materials_title', $protector->ID); ?></div>
                                    <div class="_rating-list">
                                        <ul>
                                            <?php $fields = get_fields($protector->ID); ?>
                                            <?php foreach ($fields as $title => $field) : ?>
                                                <?php if (!in_array($title, $excludeFields)) : ?>
                                                    <li><span class="_materials-title"><?= $title ?></span>: <?= is_array($field) ? $field[0]->post_title : $field; ?></li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                            <?php
                                                $height = get_field('height', $protector->ID);
                                                $width = get_field('width', $protector->ID);
                                                $diameter = get_field('diameter', $protector->ID);
                                            ?>
                                            <?php if ($height && $width && $diameter) : ?>
                                                <li>Dimensions: <?= $width; ?>(w) x <?= $diameter; ?>(d) x <?= $height; ?>(h)cm gusset</li>
                                            <?php endif; ?>
                                            <?php $weight = get_field('weight', $protector->ID); ?>
                                            <?php if ($weight) : ?>
                                                <li>Weight: <?= $weight ?>gm</li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php foreach ($sheets as $sheet) : ?>
                <div class="app-accordeon-item">
                    <div class="app-accordeon-item__container">
                        <div class="app-title-md"><span class="app-accordeon-btn"><i class="_icon"></i> <?= $sheet->post_title; ?></span></div>
                        <div class="app-accordeon-item__inner">
                            <div class="app-accordeon-item__grid">
                                <div class="_right">
                                    <div class="app-accordeon-item__img">
                                        <?= get_the_post_thumbnail($sheet, 'full') ?>
                                    </div>
                                    <div class="_rating-group">
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-5"></i>
                                            <div>100% Pure<br> cotton cover</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-6"></i>
                                            <div>Soft feel</div>
                                        </div>
                                        <div class="_rating-group-item">
                                            <i class="app-svg rating-7"></i>
                                            <div>Protect<br> against<br> allergens</div>
                                        </div>
                                    </div>
                                    <div class="_rating-group__button">
                                        <a href="/bedding" class="app-button-reserve _inline">SEE ALL SHEETS <span class="app-svg button-reserve _icon-right"></span></a>
                                    </div>
                                </div>

                                <div class="_left">
                                    <div class="_subtitle"><?= $sheet->post_excerpt; ?></div>
                                    <?php $perfectForItems = get_field('perfect_for_items', $sheet->ID) ?>
                                    <?php if ($perfectForItems) : ?>
                                        <div class="_rating-title"><?php the_field('perfect_for_title', $sheet->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($perfectForItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <?php $characteristicsItems = get_field('characteristics_items', $sheet->ID) ?>
                                    <?php if ($characteristicsItems) : ?>
                                        <div class="_rating-title"><?php the_field('characteristics_title', $sheet->ID); ?></div>
                                        <div class="_rating-list">
                                            <ul>
                                                <?php foreach ($characteristicsItems as $item) : ?>
                                                    <li><?= $item->post_title ?></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                    <div class="_rating-title"><?php the_field('materials_title', $sheet->ID); ?></div>
                                    <div class="_rating-list">
                                        <ul>
                                            <?php $fields = get_fields($sheet->ID); ?>
                                            <?php foreach ($fields as $title => $field) : ?>
                                                <?php if (!in_array($title, $excludeFields)) : ?>
                                            <li><span class="_materials-title"><?= $title ?></span>: <?= is_array($field) ? $field[0]->post_title : $field; ?></li>
                                                <?php endif; ?>
                                            <?php endforeach; ?>
                                            <?php
                                                $height = get_field('height', $sheet->ID);
                                                $width = get_field('width', $sheet->ID);
                                                $diameter = get_field('diameter', $sheet->ID);
                                            ?>
                                            <?php if ($height && $width && $diameter) : ?>
                                                <li>Dimensions: <?= $width; ?>(w) x <?= $diameter; ?>(d) x <?= $height; ?>(h)cm gusset</li>
                                            <?php endif; ?>
                                            <?php $weight = get_field('weight', $sheet->ID); ?>
                                            <?php if ($weight) : ?>
                                                <li>Weight: <?= $weight ?>gm</li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <?php the_content(); ?>

    <?php endwhile; ?>

</section>

<?php get_footer();