<?php 
    $selectedSizes = get_field('selected_sizes', get_the_ID());
    $attrs['subtitle'] = isset($attrs['subtitle']) ? $attrs['subtitle'] : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur.';
    $attrs['title'] = isset($attrs['title']) ? $attrs['title'] : 'Mattress Sizes';
    $attrs['cta-text'] = isset($attrs['cta-text']) ? $attrs['cta-text'] : 'Learn More';
    $attrs['cta-link'] = isset($attrs['cta-link']) ? $attrs['cta-link'] : '/mattress-bed-sizes';
?>

<div class="section-mattress__sizes type-2">
    <div class="section-wrap">
        <div class="section-title"><?= $attrs['title']; ?></div>
        <div class="section-subtitle"><?= $attrs['subtitle']; ?></div>
        <div class="section-list clearfix">
            <?php if (in_array('singe', $selectedSizes)) : ?>
                <div class="list-item">
                    <div class="list-item__pic">
                        <img src="/wp-content/uploads/sizes/Single.png" alt="Single">
                    </div>
                    <div class="list-item__name">Single</div>
                    <div class="list-item__description">
                        <div>width x length:</div>
                        <span>92cm x 188cm</span>
                        <span>(3' x 6'2”)</span>
                    </div>
                </div>
            <?php endif; ?>
            <?php if (in_array('long-single', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/Long-Single.png" alt="Long Single">
                </div>
                <div class="list-item__name">Long Single</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>92cm x 203cm</span>
                    <span>(3' x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('king-single', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/King-Single.png" alt="King Single">
                </div>
                <div class="list-item__name">King Single</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>107cm x 203cm</span>
                    <span>(3'6” x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('double', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/Double.png" alt="Double">
                </div>
                <div class="list-item__name">Double</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>137cm x 188cm</span>
                    <span>(4'6” x 6'2”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('queen', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/Queen.png" alt="Queen">
                </div>
                <div class="list-item__name">Queen</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>153cm x 203cm</span>
                    <span>(5' x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('king', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/King.png" alt="King">
                </div>
                <div class="list-item__name">King</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>183cm x 203cm</span>
                    <span>(6' x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('super-king', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/Super-King.png" alt="Super King">
                </div>
                <div class="list-item__name">Super King</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>203cm x 203cm</span>
                    <span>(6'8” x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
            <?php if (in_array('california-king', $selectedSizes)) : ?>
            <div class="list-item">
                <div class="list-item__pic">
                    <img src="/wp-content/uploads/sizes/Cali-King.png" alt="California King">
                </div>
                <div class="list-item__name">California King</div>
                <div class="list-item__description">
                    <div>width x length:</div>
                    <span>203cm x 203cm</span>
                    <span>(6'8” x 6'8”)</span>
                </div>
            </div>
            <?php endif; ?>
        </div>
        <div class="section-btn-wrap">
            <a href="<?= $attrs['cta-link']; ?>" class="app-button-reserve _inline"><?= $attrs['cta-text']; ?>
                <span class="app-svg button-reserve _icon-right"></span>
            </a>
        </div>
    </div>
</div>
