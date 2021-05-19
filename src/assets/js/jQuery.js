$(function() {
  $(function() {
    jcf.replaceAll();
  });

  jcf.setOptions("Select", {
    maxVisibleItems: 5,
    useCustomScroll: true,
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
  });

  // var typed = new Typed("#typed-entry", {
  //   strings: ["Because EVERY", "BUSINESS", "<p>NEEDS SOMETHING</p>"],
  //   typeSpeed: 20,
  //   backSpeed: 20,
  //   startDelay: 200,
  //   backDelay: 1200,
  // });

  function filterFeedback() {
      
    $('.filter__card-item').each( function (i) {
        $(this).attr('id', 'filter' + '_' + (++i));
    });

    $('.filter__card-feedback').each( function (i) {
        $(this).attr('data-filter', 'filter' + '_' + (++i));
    });

    let cardId = $("div[id^='filter']");
    
    $('.filter__card-feedback').hide();

    $(cardId).each(function () {
        $(this).on('click' , function () {
          if (!$(this).is('.active')) {
            $(cardId).removeClass('active');
            $(".filter__card-feedback").slideUp(1);
            let thisId = this.id;
            $(".filter__card-feedback[data-filter='"+thisId+"']").slideToggle(100);
            $(this).addClass('active')
            return;
          }
          $(cardId).removeClass('active');
          let thisId = this.id;
          $(".filter__card-feedback[data-filter='"+thisId+"']").slideToggle(100);
        })
    });

    $('.filter__info-close-btn').each(function () {
      $(this).on('click', function () {
        $(this).parents(".filter__card-feedback").slideUp(100);
      })
    }) 
    
}

// filterFeedback();

});
