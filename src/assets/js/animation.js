$(function () {
  function animation() {
    let card = $(".filter__card-item"),
      feedback = $(".filter__card-feedback"),
      innerCard = $(".filter__card-item-inner"),
      btnCloseItem = $(".filter__info-close-btn");

    card.each(function (i) {
      feedback.hide();
      $(this).on("click", function () {
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
