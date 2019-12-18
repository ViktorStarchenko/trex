<div id="hdd-1" class="app-header-dropdown jq-dropdown jq-dropdown-tip c-sb">
    <ul class="jq-dropdown-menu">
        <li>
            <a href="#" class=" _desktop-menu" data-class="_mattresses-menu"><?= ucfirst($matressesCategory->name); ?></a>
        </li>
        <li>
            <a href="#" class=" _desktop-menu" data-class="_bedding-menu"><?= ucfirst($beddingCategory->name); ?></a>
        </li>
        <?php if ($isCollectionsEnabled) : ?>
        <li>
            <a href="#" class=" _desktop-menu" data-class="_accessories-menu"><?= ucfirst($accessoriesPage->post_name);?></a>
        </li>
        <?php endif; ?>
        <li>
            <a href="#" class=" _desktop-menu" data-class="_stores-and-promotions-menu"><?= get_field('stores_and_promotions_title', $headerNavigation->ID)?></a>
        </li>
        <li>
            <a href="#" class=" _desktop-menu" data-class="_sleep-guide-menu"><?= $sleepGuidePage->post_title; ?></a>
        </li>
        <li>
            <?php if (empty($aboutSubPages)) : ?>
                <a href="<?= get_field('our_story_cta_link', $headerNavigation->ID)?>"><?= get_field('our_story_title', $headerNavigation->ID)?></a>
            <?php else : ?>
                <a href="#" class=" _desktop-menu" data-class="_our-story-menu"><?= get_field('our_story_title', $headerNavigation->ID)?></a>
            <?php endif; ?>
        </li>
    </ul>
</div>