$(function () {
  function animation() {
    let card = $(".filter__card-item"),
      feedback = $(".filter__card-feedback"),
      innerCard = $(".filter__card-item-inner"),
      btnCloseItem = $(".filter__info-close-btn");

    card.each(function (i) {
      $(this).on("click", function () {
        console.log('click function animation() ITEM');
        
        card.removeClass("active");
        feedback.hide();
        card.find(".filter__card-item-inner").show();

        if (!$(this).is(".active")) {
          $(this).addClass("active");
          $(this).children(".filter__card-item-inner").hide();
          $(this).children(".filter__card-feedback").show();

          return;
        }
      });
    });

    btnCloseItem.each(function () {
      $(this).on("click", function (event) {
        console.log('click function animation() BTN');
        $(this).parents(".filter__card-item").removeClass("active");
        $(this).parents(".filter__card-feedback").hide();
        $(this)
          .parents(".filter__card-item")
          .find(".filter__card-item-inner")
          .show();
        event.stopPropagation();
      });
    });
  }

  animation();
});
