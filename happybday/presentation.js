jQuery.fn.wait = function (MiliSeconds) {
    $(this).animate({ opacity: '+=0' }, MiliSeconds);
    return this;
};


$(function(){
  var currentStep = 0,
      steps = $(".js-step"),
      maxSteps = steps.length,
      showNextStep = function(){
        steps.hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        var currStepEl = $(steps[currentStep]).fadeIn('slow');
        currentStep = currentStep + 1;
        return currStepEl;
      },
      loop = function(){
        var $element = showNextStep(),
            waitTime = $element.data('wait') || 5000;
        if(currentStep < maxSteps){
          setTimeout(function(){
            loop();
          }, waitTime);
        }
      };

  steps.hide();
  loop();

  $('.js-open-packtl').click(function(){
    steps.hide();
    $('.js-packtl').fadeIn('slow');
  });
});