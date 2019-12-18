<div class="wrap">
    <h1>Raptor Panel</h1>
    <form method="post" action="/wp-admin/options.php">
        <?php
        settings_fields("section");
        do_settings_sections("theme-options");
        submit_button();
        ?>
    </form>
</div>