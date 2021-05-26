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

  function filterFeedback() {
    $(".filter__card-item").each(function (i) {
      $(this).attr("id", "filter" + "_" + ++i);
    });

    $(".filter__card-feedback").each(function (i) {
      $(this).attr("data-filter", "filter" + "_" + ++i);
    });

    let cardId = $("div[id^='filter']");

    $(".filter__card-feedback").hide();

    $(cardId).each(function () {
      $(this).on("click", function () {
        if (!$(this).is(".active")) {
          $(cardId).removeClass("active");
          $(".filter__card-feedback").slideUp(1);
          let thisId = this.id;
          $(".filter__card-feedback[data-filter='" + thisId + "']").slideToggle(
            100
          );
          $(this).addClass("active");
          return;
        }
        $(cardId).removeClass("active");
        let thisId = this.id;
        $(".filter__card-feedback[data-filter='" + thisId + "']").slideToggle(
          100
        );
      });
    });

    $(".filter__info-close-btn").each(function () {
      $(this).on("click", function () {
        $(this).parents(".filter__card-feedback").slideUp(100);
      });
    });
  }

  // filterFeedback();

  function masonry() {
    var masonryItems = $(".filter__card-item"),
      container = $(".filter__inner");

    masonryItems.each(function (i) {
      $(this).attr("data-card", i++);
    });

    let masonryLauout = $(".filter__card").masonry({
      itemSelector: ".filter__card-item",
      columnWidth: 300,
      gutter: 30,
    });

    // nodes in row, can be changed on resize action if needed
    function getNodesInRow(){
      if(window.width <= 320){
        // return 1 for disabling change node position
        return 1
      }
      return 4
    }

    function insertNode(elem) {
      const nodesInRow = getNodesInRow();
      const currentIndex = parseInt(elem[0].dataset.card); // index clicked card

      // if first in row, don't change element position
      if(!Number.isInteger(currentIndex / nodesInRow) ){
        const removedNode = $(elem).detach()
        const newBeforeIndex = Math.floor(currentIndex/nodesInRow) * nodesInRow;
        const newPreviewsElem = $(`[data-card='${newBeforeIndex}']`)
        removedNode.insertBefore(newPreviewsElem);
      }
    }

    function resetPositionsByIndex(elem){
      const nodesInRow = getNodesInRow();
      const node = elem.closest('.filter__card-item');
      const currentIndex = parseInt(node.attr("data-card"));

      // if first in row, don't change element position
      if(!Number.isInteger(currentIndex / nodesInRow) ) {
        const removedNode = $(node).detach()
        const newPreviewsElem = $(`[data-card='${currentIndex - 1}']`)
        removedNode.insertAfter(newPreviewsElem);
      }

    }

    masonryItems.each(function () {
      let fruitCount = $(this).attr("data-card");
      $(this)
        .find(".filter__card-item-inner")
        .append("<p> " + fruitCount + "</p>");
      $(this).on("click", function () {
        insertNode($(this))
        masonryLauout.masonry("reloadItems");
        masonryLauout.masonry(masonryItems);
      });
    });

    // reorganization of elements when clicking on BTN close

    $(".filter__info-close-btn").each(function () {
      $(this).on("click", function () {
        resetPositionsByIndex($(this))
        masonryLauout.masonry("reloadItems");
        masonryLauout.masonry(masonryItems);
        // masonryLauout.masonry(masonryItems);
      });
    });
  }

  masonry();
});
