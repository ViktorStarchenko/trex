<?php
/*
 * Template Name: Sleep Quiz
 * Template Post Type: page
 */
?>

<?php get_header(); ?>
<?php

$ID = get_the_ID();
$metaValues = get_post_meta($ID);
$totalResults = 0;
$resultsByType = [];
foreach ($metaValues as $key => $meta) {
    if (strpos($key, 'quiz_meta_') !== false) {
        $totalResults += $meta[0];
        $metaKey = str_replace('quiz_meta_', '', $key);
        $resultsByType[$metaKey] = $meta[0];
    }
}

?>
    <section id="container" class="app-wrapper__flex">
        <div class="g-wrap">
            <div class="g-main">
                <div class="section-quiz section-start" id="quiz">
                    <?php while( have_rows('results') ): the_row(); ?>
                        <div class="results-page _absolute <?= explode(':', get_sub_field('result_type'))[0]; ?>" style="display:none;">
                            <div class="s-hero">
                                <div class="s-container">
                                    <div class="s-hero__subtitle"><span><?php the_field('start_page_hint'); ?></span></div>
                                    <div class="s-hero__title"><?php the_field('result_page_title') ?></div>
                                    <div class="s-hero__result">
                                        <div class="result-pic"><img src="<?= get_sub_field('result_image'); ?>"></div>
                                        <div class="result-stat">
                                            <div class="result-stat__title"><?php the_field('result_question_title') ?></div>
                                            <div class="result-stat__list">
                                                <?php foreach(get_field('results') as $result) : ?>
                                                    <?php $resultMetaKey = explode(':', $result['result_type'])[0]; ?>
                                                    <div class="result-stat__param <?= $resultMetaKey; ?>">
                                                        <?php $resultPercentages = !empty($totalResults) && !empty($resultsByType[$resultMetaKey]) ? round($resultsByType[$resultMetaKey] / $totalResults * 100) : 0; ?>
                                                        <div class="param-text"><span><?= $result['result_title']; ?></span><span class="_percentages"><?= $resultPercentages; ?>%</span></div>
                                                        <div style="width: <?= $resultPercentages; ?>%;" class="param-line"></div>
                                                    </div>
                                                <?php endforeach; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="s-description">
                                <div class="s-container">
                                    <div class="s-description__wrap">
                                        <div class="s-description__title"><?= get_sub_field('result_title'); ?></div>
                                        <?php if (!empty(get_sub_field('result_subtitle'))) : ?>
                                            <div class="s-description__subtitle"><?= get_sub_field('result_subtitle'); ?></div>
                                        <?php endif; ?>
                                        <div class="s-description__text"><?= get_sub_field('result_description'); ?></div>
                                        <div class="s-description__btn">
                                            <button type="button" id="fb-share-button" class="btn btn-share__fb"><span class="ic ic-facebook"></span><span>Share on Facebook</span></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article-news-box">
                                <div class="app-container">
                                    <div class="_title">Products you may like</div>
                                    <?php $products = implode(",", get_sub_field('result_products')); ?>

                                    <div class="article-inline-goods"><?php echo do_shortcode('[ic_add_posts ids="'.$products.'" template="accessories.php"]'); ?></div>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                    <div class="s-hero" id="quiz-start-screen">
                        <div class="s-container" >
                            <div class="s-hero__suptitle"><?php the_field('start_page_subtitle'); ?></div>
                            <div class="s-hero__title"><?php the_title(); ?></div>
                            <div class="s-hero__subtitle"><span><?php the_field('start_page_hint'); ?></span></div>
                            <div class="s-hero__text"><?php the_content(); ?></div>
                            <?php if (!empty(get_field('start_page_image'))) : ?>
                                <div class="s-hero__image"><img src="<?php the_field('start_page_image')?>"></div>
                            <?php endif; ?>
                            <div class="s-hero__btn">
                                <button type="button" class="btn" id="quiz-start-btn"><span><?php the_field('start_page_button_text'); ?></span><span class="ic ic-arrow-right"></span></button>
                            </div>
                        </div>
                    </div>

                </div>
                <?php
                $quizEmail = get_field('quiz_email');
                ?>
                <?php if (!empty($quizEmail['enable'])) : ?>
                    <div class="modal fade" id="quiz-email" tabindex="-1" role="dialog" aria-labelledby="quizModal" style="bottom: initial;">
                        <div class="modal-dialog quiz-popup-wrap" role="document">
                            <button class="close quiz-popup__close" type="button" data-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M17.991.693a.903.903 0 0 1 1.333 0 1.047 1.047 0 0 1 0 1.418L11.896 10l7.428 7.89a1.047 1.047 0 0 1 0 1.416.903.903 0 0 1-1.333 0l-7.436-7.898a.898.898 0 0 1-1.11 0l-7.436 7.899a.903.903 0 0 1-1.333 0 1.047 1.047 0 0 1 0-1.418L8.104 10 .676 2.11a1.047 1.047 0 0 1 0-1.416.903.903 0 0 1 1.333 0l7.436 7.898a.898.898 0 0 1 1.11 0z"/>
                                </svg>
                            </button>
                            <div class="quiz-popup">
                                <div class="quiz-popup__info">
                                    <?php $title = "Thanks for taking our sleep quiz"; ?>
                                    <?php if (!empty($quizEmail['title'])) : ?>
                                        <?php $title = $quizEmail['title']; ?>
                                        <div class="quiz-popup__title"><?= $quizEmail['title'] ?></div>
                                    <?php endif; ?>
                                    <?php if (!empty($quizEmail['description'])) : ?>
                                        <div class="quiz-popup__content">
                                            <?= $quizEmail['description'] ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if (!empty($quizEmail['form'])) : ?>
                                        <div class="quiz-popup-form">
                                            <?= do_shortcode('[gravityform id="'.$quizEmail['form'].'" title="false" description="false" ajax="true"]'); ?>
                                        </div>
                                    <?php endif; ?>
                                    <?php if (!empty($quizEmail['text'])) : ?>
                                        <div class="quiz-popup__subtext">
                                            <?= $quizEmail['text'] ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <div class="quiz-popup__decor">
                                    <?php if (!empty($quizEmail['image'])) : ?>
                                        <img src="<?= $quizEmail['image']['url'] ?>" alt="<?= $title ?>">
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));</script>

        <?php if( have_rows('questions') ): ?>
            <script type="text/javascript">
                var myQuiz = [], question, answer;
                <?php while( have_rows('questions') ): the_row(); ?>
                question = {
                    q: "<?= get_sub_field('title'); ?>",
                    options: [],
                    hint_title: "<?= get_sub_field('hint_title'); ?>",
                    hint_text: "<?= get_sub_field('hint_text'); ?>"
                };
                <?php foreach(get_sub_field('answers') as $answer): ?>
                answer = {
                    text: "<?= $answer['answer_title']; ?>",
                    type: "<?= explode(':', $answer['answer_relation'])[0]; ?>",
                    image: "<?= !empty($answer['answer_image']) ? $answer['answer_image'] : ''; ?>"
                }
                question['options'].push(answer);
                <?php endforeach; ?>
                myQuiz.push(question);
                <?php endwhile; ?>
                jQuery('#quiz').quiz({ questions: myQuiz });

                var url = window.location.href;
                jQuery(document).on('click', '#fb-share-button', function() {
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
                        'facebook-share-dialog',
                        'width=800,height=600'
                    );
                    return false;
                });
            </script>
        <?php endif; ?>


        <div class="tech-description-social description-content-block">
            <div class="sosial-links" id="_custom_social">
                <span class="link-title">Share via:</span>
                <?php echo do_shortcode("[Sassy_Social_Share]"); ?>
                <a href="mailto:CustomerCare@Sleepyhead.co.nz" class="social-link-icon">
                    <i class="fa fa-envelope"></i>
                </a>
            </div>

            <?php

            $like = get_post_meta($ID, 'vortex_system_likes');
            $dislike = get_post_meta($ID, 'vortex_system_dislikes');

            if(empty($like[0])){
                $like[0] = 0;
            }
            if(empty($dislike[0])){
                $dislike[0] = 0;
            }

            $class = '';
            $color_like = '';
            $color_dislike = '';
            if(!isset($_COOKIE['like'])){
                $class = 'vote-block-js';
            }
            elseif($_COOKIE['like'] == 1){
                $color_like = 'green';
                $color_dislike = 'grey';
            }
            elseif($_COOKIE['like'] == 0){
                $color_like = 'grey';
                $color_dislike = 'red';
            }
            ?>
            <div class="vote-block <?= $class ?>" data-id="<?= $ID ?>">
                <span class="vote-title">Was this article helpfull?</span>

                <div class="vote-positive <?= $color_like ?>">
                    <div class="vote-link-icon positive">
                        <i class="fa fa-thumbs-up"></i>
                    </div>
                    <span class="vote-count positive-count" ><?= $like[0]; ?></span>
                </div>


                <div class="vote-negative <?= $color_dislike ?>">
                    <div class="vote-link-icon negative">
                        <i class="fa fa-thumbs-down"></i>
                    </div>
                    <span class="vote-count negative-count" ><?= $dislike[0]; ?></span>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>