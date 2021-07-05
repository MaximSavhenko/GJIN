$(function () {
  $(function () {
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


  function masonry() {
    var masonryItems = $(".filter__card-item"),
        feedback = $(".filter__card-feedback"),
        width = 300;

    feedback.hide();
    
    
    masonryItems.each(function (i) {
      $(this).attr("data-card", i++);
    });

    let masonryLauout = $(".filter__card").masonry({
      itemSelector: ".filter__card-item",
      columnWidth: width,
      gutter: 30,
      fitWidth: true
    });
  
    // nodes in row, can be changed on resize action if needed
    // return 1 for disabling change node position
    function getNodesInRow(){


      if ($(window).width() <= 1106) {
        console.log('767');
        return 1
      } 

      if ($(window).width() <= 1436) {
        console.log('1436');
        return 3
      } 

      if($(window).width() <= 1766){
        return 4
      } else {
        return 5
      }
      
    }

    function insertNode(elem) {
      const nodesInRow = getNodesInRow();
      const currentIndex = parseInt(elem.attr("data-card"));// index clicked card
      const activeNode = $(`[data-active='true']`);
      
      if(activeNode.length){
        resetPositionsByIndex(activeNode)
      }
      // if first in row, don't change element position
      if(!Number.isInteger(currentIndex / nodesInRow) ){
        const removedNode = $(elem).detach()
        const newBeforeIndex = Math.floor(currentIndex/nodesInRow) * nodesInRow;
        const newPreviewsElem = $(`[data-card='${newBeforeIndex}']`);
        removedNode.attr('data-active', 'true');
        removedNode.insertBefore(newPreviewsElem);
      }
    }

    function resetPositionsByIndex(node){
      const nodesInRow = getNodesInRow();
      const currentIndex = parseInt(node.attr("data-card"));

      // if first in row, don't change element position
      if(!Number.isInteger(currentIndex / nodesInRow) ) {
        node.removeAttr("data-active");
        const removedNode = $(node).detach()
        const newPreviewsElem = $(`[data-card='${currentIndex - 1}']`)
        removedNode.insertAfter(newPreviewsElem);
      }

    }

    masonryItems.each(function () {
      let fruitCount = $(this).attr("data-card");
      // $(this)
      //   .find(".filter__card-item-inner")
      //   .append("<p> " + fruitCount + "</p>");
      $(this).on("click", function () {
        console.log('click function masonry() ITM');
        insertNode($(this))
        masonryLauout.masonry("reloadItems");
        masonryLauout.masonry(masonryItems);
      });

    });

    // reorganization of elements when clicking on BTN close

    $(".filter__info-close-btn").each(function () {
      $(this).on("click", function () {
        console.log('click function masonry() BTN CLOSE');
        resetPositionsByIndex($(this).closest('.filter__card-item'));
        masonryLauout.masonry("reloadItems");
        masonryLauout.masonry(masonryItems);
      });
    });
    }

  masonry();

  function dropdownHeader() {
    let dropBtn = $('.header__checkin'),
        list = $('.dropdown ul');
        container = $('.dropdown')

        dropBtn.on('click' , function (e) {
            e.preventDefault();
            
            if (!container.is('.active')) {
                container.addClass('active');
                list.slideDown(400);
                console.log('open');
                
            } else {
              list.slideUp(400);
              setTimeout(() => { 
                container.removeClass('active');
              }, 400); 
              console.log('close');
              
            }

        })

        $(document).on("click", function (e) {
          
          if (
            !dropBtn.is(e.target) &&
            dropBtn.has(e.target).length === 0 &&
            !list.is(e.target) &&
            list.has(e.target).length === 0
            ) {
              list.slideUp(400); 
              setTimeout(() => { 
                container.removeClass('active');
              }, 400);              
            }
          });
  }

  dropdownHeader();

  function muteSocialLink() {
      let link = $('.footer__social a');

      link.on('click' , function (event) {
        event.preventDefault();
      })
  }

  muteSocialLink();
});
