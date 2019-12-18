<?php
/*
 * Template Name: KulKote Technology
 * Template Post Type: post
 */
?>

<?php get_header(); ?>

    <?php
        $fields = get_fields();
/*
        echo "<pre>";
        print_r($fields);
        echo "</pre>";
*/
    ?>
<div class="_kulkote">
    <section id="container" class="app-wrapper__flex">
        <div class="article-news-box">
            <div class="app-container content">
                <h1 class="page-h1"><?= $fields['title'] ?></h1>
                <?php if( $fields['description'] ) : ?>
                    <div class="page-subtitle">
                        <?= $fields['description']; ?>
                    </div>
                <?php endif; ?>
                <?php if( $fields["image"]["url"] ) : ?>
                    <div class="_kulkote-image">
                        <img src="<?= $fields["image"]["url"] ?>" alt="<?= $fields['title'] ?>" />
                    </div>
                <?php endif; ?>
                <?php if( $fields["logo"]["url"] ) : ?>
                    <div class="_kulkote-image-logo">
                        <img src="<?= $fields["logo"]["url"] ?>" alt="<?= $fields['title'] ?>" />
                    </div>
                <?php endif; ?>
                <div class="_kulkote-buttons _centered-block">
                    <?php foreach ($fields['buttons'] as $button) : ?>
                        <a class="app-button-reserve _inline" href="<?= $button['link'] ?>"
                            <?php if( !empty($button['popup']) ) : ?>
                                data-toggle="modal"
                                data-target="#<?= $button['popup'] ?>"
                            <?php endif; ?>
                        >
                            <?= $button['title'] ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="article-news-box">
            <div class="app-container content">
                <h2 class="page-h2"><?= $fields['innovative_title'] ?></h2>
                <?php if( $fields['innovative_description'] ) : ?>
                    <div class="page-subtitle _kulkote-text">
                        <?= $fields['innovative_description']; ?>
                    </div>
                <?php endif; ?>
                <?php if ( $fields["url"] ) : ?>

                    <div class="player-box load">
                        <?php if( $fields["preview"]["url"] ) : ?>
                            <div class="player-preview" style="background-image: url('<?= $fields["preview"]["url"] ?>');">
                                <div class="mezzo-play-video-icon fa fa-play _watch-video desc"></div>
                            </div>
                        <?php endif; ?>

                        <div id="player" data-url="<?= $fields["url"] ?>"></div>
                    </div>

                <?php endif; ?>
            </div>
        </div>

        <div class="_kulkote-container">
            <div class="app-container">
                <?php foreach ($fields['items'] as $item) : ?>
                    <div class="_kulkote-item" >
                        <div class="_kulkote-item-img"  >
                            <div class="_kulkote-retailer-image" style="background-image: url(<?= $item["image"]["url"] ?>)" ></div>
                        </div>
                        <div class="_kulkote-item-info">
                            <h2><?= $item["title"] ?></h2>
                            <p class="page-subtitle _kulkote-text"><?= $item["description"] ?></p>
                            <div class="_kulkote-buttons">
                                <?php foreach ($item['buttons'] as $button) : ?>
                                    <a class="app-button-reserve _inline" href="<?= $button['link'] ?>"
                                        <?php if( !empty($button['popup']) ) : ?>
                                            data-toggle="modal"
                                            data-target="#<?= $button['popup'] ?>"
                                        <?php endif; ?>
                                    >
                                        <?= $button['title'] ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php if (!empty($fields['popups_mattress'])) : ?>
    <?php foreach ($fields['popups_mattress'] as $popup) : ?>
        <?php if (!empty($popup['popup_id'])) : ?>
            <div class="modal fade _kulkote-popup-box _kulkote-mattress" id="<?= $popup['popup_id'] ?>" tabindex="-1" role="dialog" aria-labelledby="<?= $popup['popup_id'] ?>Label" style="bottom: initial;">
                <div class="modal-dialog" role="document">
                    <div class="modal-content accessories-detail">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="app-search-close"></span>
                        </button>
                        <div class="modal-header">
                            <?php if( !empty($popup["title"]) ) : ?>
                                <div class="modal-title"><?= $popup["title"]; ?></div>
                            <?php endif; ?>
                        </div>
                        <?php if (!empty($popup["mattress"])) : ?>
                        <div class="modal-body">
                            <?php foreach ( $popup["mattress"] as $mattres ) : ?>
                                <?php if (!empty($mattres['image']) && !empty($mattres['mattress']) ) : ?>
                                    <a href="<?= get_the_permalink($mattres['mattress']) ?>" class="_kulkote-retailer">
                                        <img src="<?= $mattres['image']['url'] ?>" />
                                    </a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>

<?php if (!empty($fields['popups'])) : ?>
    <?php foreach ($fields['popups'] as $popup) : ?>
        <?php if (!empty($popup['popup_id'])) : ?>
            <div class="modal fade _kulkote-popup-box" id="<?= $popup['popup_id'] ?>" tabindex="-1" role="dialog" aria-labelledby="<?= $popup['popup_id'] ?>Label" style="bottom: initial;">
                <div class="modal-dialog" role="document">
                    <div class="modal-content accessories-detail">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span class="app-search-close"></span>
                        </button>
                        <div class="modal-header">
                            <?php if( !empty($popup["title"]) ) : ?>
                            <div class="modal-title"><?= $popup["title"]; ?></div>
                            <?php endif; ?>
                        </div>
                        <div class="modal-body">
                            <?php foreach ( $popup["retailers"] as $retailer ) : ?>
                                <?php if( $retailer["link"] ) : ?>
                                    <a href="<?= $retailer["link"] ?>" class="_kulkote-retailer">
                                <?php else: ?>
                                    <div class="_kulkote-retailer">
                                <?php endif; ?>

                                    <?php if( $retailer["retailer"] ) : ?>
                                        <?php $image[0] = ''; ?>
                                        <?php if (has_post_thumbnail( $retailer["retailer"]->ID ) ): ?>
                                            <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $retailer["retailer"]->ID ), 'large' ); ?>
                                        <?php endif; ?>
                                        <img src="<?php echo $image[0]; ?>" alt="<?= $retailer["retailer"]->post_title ?>" />
                                    <?php endif; ?>

                                <?php if( $retailer["link"] ) : ?>
                                    </a>
                                <?php else: ?>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>

    <script type="text/javascript">
        jQuery(window).on('load', function() {
            addYouTubeApi();
        });
        // youtube api
        function addYouTubeApi() {
            var script = document.createElement('script');
            script.setAttribute('src', 'https://www.youtube.com/iframe_api');
            document.body.appendChild(script);
        }

        var player;
        function onYouTubeIframeAPIReady() {
            var id = "player";
            var videoURL = jQuery("#"+id).data("url");

            player = new YT.Player(id, {
                videoId: videoURL,
                playerVars: {
                    'autoplay': 0,
                    'controls': 1,
                    'rel' : 0,
                    'fs' : 0
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        jQuery("._watch-video").on('click', function () {
            playVideo();
            jQuery(".player-preview").hide();
        });

        function onPlayerReady() {
            jQuery(".player-box").removeClass("load");
        }

        function playVideo() {
            player.playVideo();
        }

        function stopVideo() {
            player.stopVideo();
        }
    </script>
<?php get_footer();