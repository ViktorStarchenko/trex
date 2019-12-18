<?php
$attrs['subtitle'] = isset($attrs['subtitle']) ? $attrs['subtitle'] : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur.';
$attrs['title'] = isset($attrs['title']) ? $attrs['title'] : 'Mattress Sizes';
$attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : '';
$attrs['cta-link'] = isset($attrs['cta-link']) ? $attrs['cta-link'] : '/mattress-bed-sizes';
?>
<?php $fields = get_fields(get_the_ID()); ?>
<?php if(isset($fields['list_sizes']) && !empty($fields['list_sizes'])) : ?>
    <?php
        $class = '';
        if(count($fields['list_sizes']) <= 8 ){
            $class = 'section-custom-mini';
        }
    ?>
    <div class="section-wrap <?= $class; ?>" id="sizes-list">
        <div class="section-title"><?= $attrs['title']; ?></div>
        <div class="section-subtitle"><?= $attrs['subtitle']; ?></div>
        <div class="section-list">
            <?php foreach ($fields['list_sizes'] as $key => $value) : ?>
                <?php $data = get_fields($value->ID); ?>
                <div class="list-item">
                    <div class="list-item__pic"><img src="<?= $data['image_size']['url']; ?>" alt="<?= $data['display_title_size']; ?>" /></div>
                    <div class="list-item__name"><?= $data['display_title_size']; ?></div>
                    <div class="list-item__description">
                        <div>width x length:</div>
                        <span><?= $data['sizes_size']; ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <?php if($attrs['cta-text']): ?>
            <div class="section-btn-wrap">
                <a href="<?= $attrs['cta-link'] ?>" class="app-button-reserve _inline"><?= $attrs['cta-text']; ?> <span class="app-svg button-reserve _icon-right"></span></a>
            </div>
        <?php endif; ?>
    </div>
<?php endif; ?>