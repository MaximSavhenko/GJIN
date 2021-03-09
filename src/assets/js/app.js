function burger() {
  var btnMenu = document.querySelector(".header__btn-menu"),
      burger = document.querySelector('.burger'),
      header = document.querySelector('.header')

      

  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("animationClose");
    burger.classList.toggle('activeBurger');
    header.classList.toggle('activePadding');
  };
}

burger();


// function scrollUp() {
//   function scrollTo(element) {
//     window.scroll({
//       left: 0,
//       top: element.offsetTop,
//       behavior: "smooth",
//     });
//   }

//   var button = document.querySelector(".footer__scrollUp");
//   var header = document.querySelector("#up");

//   button.addEventListener("click", () => {
//     scrollTo(header);
//   });
// }

// scrollUp();











