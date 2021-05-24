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

function masonry() {


//  variables for MASONRY
 var masonryItems = $('.filter__card-item'),
              container = $('.filter__card');
        
    // here we change the elements in the array
              
    // container.on('click', '.filter__card-item', function () {
    //   let index = $(this).index()
    //   if(!index==0) {
    //     var clone = $(this).clone(); 
    //     console.log(clone);
    //     let intexItem = $(this).remove();
    //     container.append(clone)
    //   } 
    // })



// customization MASONRY

 let masonryLauout =  $('.filter__card').masonry({
    itemSelector: '.filter__card-item',
    columnWidth:300,
    gutter:30,
    horizontalOrder: true,
  });

  // reorganization of elements when clicking on a card

  masonryLauout.on( 'click', masonryItems, function() {
    masonryLauout.masonry('layout');
  });

  // reorganization of elements when clicking on BTN close
  
  $('.filter__info-close-btn').each( function () {
    $(this).on('click' ,  function () {
      masonryLauout.masonry( masonryItems);
    }) 
  })


}

masonry();

function spliceMasonry() {
    let layoutElement = $('.filter__card-item'),
        container = $('.filter__card');
        ArrItems = Array.from(layoutElement);
        
        
        container.on('click', '.filter__card-item', function () {
          let index = $(this).index()
          if(!index==0) {
            let intexItem = ArrItems.splice(index , 1);
            ArrItems.unshift(intexItem)
            
          }  
        })
    
}

// spliceMasonry()



});
