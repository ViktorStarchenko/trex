;(function($, window, document, undefined) {

  'use strict';

  $.quiz = function(el, options) {
    var base = this;

    // Access to jQuery version of element
    base.$el = $(el);

    // Add a reverse reference to the DOM object
    base.$el.data('quiz', base);

    base.options = $.extend($.quiz.defaultOptions, options);

    var questions = base.options.questions,
      numQuestions = questions.length,
      startScreen = base.options.startScreen,
      startButton = base.options.startButton,
      resultsScreen = base.options.resultsScreen,
      nextButtonText = base.options.nextButtonText,
      finishButtonText = base.options.finishButtonText,
      currentQuestion = 1,
      score = {},
      answerLocked = true;

    base.methods = {
      init: function() {
        base.methods.setup();

        $(document).on('click', startButton, function(e) {
          e.preventDefault();
        base.methods.start();
        });

        $(document).on('click', '.answers label', function(e) {
          base.methods.answerQuestion(this);
        });

        $(document).on('click', '.quiz-next-btn', function(e) {
          e.preventDefault();
          base.methods.nextQuestion();
        });
        
        $(document).on('click', '#quiz-finish-btn', function(e) {
          e.preventDefault();
          base.methods.finish();
        });
      },
      setup: function() {
        var quizHtml = '<div id="questions">';
        
        $.each(questions, function(i, question) {
            quizHtml += '<div class="s-hero question-container _absolute"><div class="s-container"><div class="s-hero__subtitle"><span>SLEEP IQ QUIZ</span></div>';
            quizHtml += '<div class="s-hero__title">' + question.q + '</div>';
            if (base.options.counter) {
                quizHtml += '<div class="s-hero__pagination">';
                for (var j = 0; j < questions.length; j++) { 
                    var currentIndex = j+1;
                    var currentClass = '';
                    if (i === j) { currentClass = 'current'}
                    if (i > j) { currentClass = 'active'}
                    quizHtml += '<div class="pagination-item '+ currentClass +'">'+ currentIndex +'</div>';
                }
                quizHtml += '</div>';
            }
            quizHtml += '<div class="s-hero__list answers">';
            $.each(question.options, function(index, answer) {
                quizHtml += '<label class="list-item" ><input type="radio" name="step-'+i+'" data-type="'+ answer.type +'" class="_answer-radio"><div class="list-item__inner">';
                if (answer.image !== '') {
                    quizHtml += '<div class="list-item__wrap"><img src="'+ answer.image +'"></div>';
                
                    quizHtml += '<div class="list-item__wrap"><div class="list-item__text">'+ answer.text +'</div>';
                    quizHtml += '<div class="list-item__box"></div></div>';
                } else {
                    quizHtml += '<div class="list-item__wrap"><div class="list-item__text">'+ answer.text +'</div></div>'
                
                    quizHtml += '<div class="list-item__wrap">';
                    quizHtml += '<div class="list-item__box"></div></div>';
                }
                quizHtml += '</div></label>';
            });
            var text = 'Go to the next question';
            var id = '';
            if (i === (questions.length - 1)) {
                text = 'Go to the results';
                id = 'quiz-finish-btn';
            }
            quizHtml += '</div><div class="s-hero__btn"><button type="button" id="'+id+'" class="btn btn-reverse quiz-next-btn quiz-controls"><span>' + text +'</span><span class="ic ic-arrow-right"></span></button></div></div></div>';
            quizHtml += '<div class="s-description _hint-description" style="display:none;"><div class="s-container"><div class="s-description__wrap">';
            quizHtml += '<div class="s-description__title">' + question.hint_title + '</div>';
            quizHtml += '<div class="s-description__text">' + question.hint_text + '</div>';
            quizHtml += '</div></div></div>';
        });
        quizHtml += '</div>';

        base.$el.append(quizHtml);

        $('.question-container').hide();
        $(resultsScreen).hide();
        $('.quiz-controls').hide();
        $('.results-page').hide();
      },
      start: function() {
        base.$el.removeClass('section-start').addClass('section-step');
        $(startScreen).hide();
        $('.quiz-controls').hide();
        $('#quiz-finish-btn').hide();
        $('#questions').scrollTop();
        $('#questions').show();
        $('.question-container:first-child').removeClass('_absolute').fadeIn(200).addClass('active-question');
      },
      answerQuestion: function(answerEl) {

        answerLocked = false;

        var $answerEl = $(answerEl),
          selected = $answerEl.data('type');
  
          score[selected]++;
        $('.active-question').next('._hint-description').fadeIn('fast');
        $('.quiz-controls').fadeIn();

      },
      nextQuestion: function() {
        if (answerLocked) {
            return;
        }
        answerLocked = true;
        var next = $('.active-question').nextAll('.question-container:first');

        $('.active-question').hide().removeClass('active-question');
        next.removeClass('_absolute').addClass('active-question');
        next.scrollTop();
        next.fadeIn(200);
        $('._hint-description').hide();
        
        $('.quiz-controls').hide();
      },
      finish: function() {
        base.$el.removeClass('section-start').addClass('section-results');
        $('.active-question').hide().removeClass('active-question');
        $('#quiz-finish-btn').hide();
        $('.quiz-next-btn').hide();
        
        var scores = {};
        
        $('._answer-radio:checked').each(function(element) {
            var dataType = $( this ).data('type');
            
            if (typeof scores[dataType] !== 'undefined') {
                scores[dataType]++;
            } else {
                scores[dataType] = 1;
            }
        });
        
        jQuery.ajax({
            type: "POST",
            url: wp.ajax.settings.url,
            data: { action: 'add_squiz_scores' , scores: scores }
          }).done(function() { });

          $('#quiz-email').modal('show');
        
        var keysSorted = Object.keys(scores).sort(function(a,b){return scores[b]-scores[a]});
        $('.results-page.' + keysSorted[0]).scrollTop();
        $('.results-page.' + keysSorted[0]).removeClass('_absolute').fadeIn(200);
        var max = $('._fix-button-margin').height();
        $('._fix-button-margin').each(function() {
            var h = Math.abs($(this).height());
            if(max<h){
                max = h;
            }
        });
        $('._fix-button-margin').css({"height":max+"px"});
        
        if (typeof base.options.finishCallback === 'function') {
          base.options.finishCallback();
        }
      }
    };

    base.methods.init();
  };

  $.quiz.defaultOptions = {
    counter: true,
    counterFormat: '%current/%total',
    startScreen: '#quiz-start-screen',
    startButton: '#quiz-start-btn',
    resultsScreen: '#quiz-results-screen',
    resultsFormat: 'You got %score out of %total correct!',
    nextButtonText: 'Next',
    finishButtonText: 'Finish'
  };

  $.fn.quiz = function(options) {
    return this.each(function() {
      new $.quiz(this, options);
    });
  };
}(jQuery, window, document));