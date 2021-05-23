$(function () {

  function animation() {
        let card = $('.filter__card-item'),
            feedback = $('.filter__card-feedback'),
            innerCard = $('.filter__card-item-inner'),
            btnCloseItem = $('.filter__info-close-btn');

            card.each( function (i) {
              $(this).attr('id', i);
              $(this).css('order', i);
              feedback.hide();

                $(this).on('click' , function () {
                    card.each( function (i) {
                        $(this).css('order', i);
                    })

                    if ($(window).width() >= 768) {
                        if($(this).attr('id') == card.length-1) {
                            let orderThis = $(this).css('order');
                            if ( $(window).width() < 1200) {
                                $(this).css('order', orderThis - 2);
                            }
                            if ( $(window).width() >= 1200) {
                                $(this).css('order', orderThis - 5);
                            }
                        }
                        if ( $(window).width() < 1200) {
                            switch ($(this).attr('id') % 2) {
                                case 1: {
                                    let orderNext = $(this).next().css('order')
                                    $(this).next().css('order', orderNext - 2);
                                    break;
                                }
                                case 0: {
                                    let orderPrev = $(this).prev().css('order')
                                    if (orderPrev !== undefined) {
                                        $(this).prev().css('order', orderPrev - 2);
                                    } else {
                                        if ($(this).attr('id') === 0) {
                                            let orderThis = $(this).css('order');
                                            $(this).css('order', orderThis - 2);
                                        } else {
                                            let orderNext = $('#0').css('order');
                                            $('#0').css('order', orderNext - 1);
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        if ( $(window).width() >= 1200) {
                            if ($(this).attr('id') <= 4 ) {
                                $(this).css('order', 6);
                            }
                            if ($(this).attr('id') > 5 && $(this).attr('id') <= 9 ) {
                                $(this).css('order', 11);
                            }
                            if ($(this).attr('id') > 10 && $(this).attr('id') <= 14 ) {
                                $(this).css('order', 16);
                            }
                            if ($(this).attr('id') >= 15 && $(this).attr('id') < 20 ) {
                                $(this).css('order', 14);
                            }
                        }
                    }
                    card.removeClass('active');
                    feedback.hide();
                    card.find('.filter__card-item-inner').show();

                    if (!$(this).is('.active')) {
                      $(this).addClass('active');
                      $(this).children('.filter__card-item-inner').hide();
                      $(this).children('.filter__card-feedback').show();
                    
                      return;
                    }                     
                    
                })
            })


            btnCloseItem.each( function () {
              $(this).on('click' , function (event) {                
                $(this).parents('.filter__card-item').removeClass('active');
                $(this).parents('.filter__card-feedback').hide();
                $(this).parents('.filter__card-item').find('.filter__card-item-inner').show();
                event.stopPropagation();
              })
            })
  }

  animation();
  
})