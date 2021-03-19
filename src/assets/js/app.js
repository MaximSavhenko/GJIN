// js for burger
function burger() {
  header = document.querySelectorAll(".header__wrap");

  header.forEach((header) => {
    let btnMenu = header.querySelector(".header__btn-menu"),
      burger = document.querySelector(".burger"),
      navbar = header.querySelector(".navbar-mobile");

    btnMenu.onclick = function () {
      document.body.classList.toggle("overflow");
      burger.classList.toggle("activeBurger");
    };
  });
}

burger();

// js for preloader

function onload() {

  document.body.onload = function () {
    setTimeout(function () {
      let prealoader = document.querySelector(".preloader");
      if (!prealoader.classList.contains("loaded_hiding")) {
        prealoader.classList.add("loaded_hiding");
      }
    }, 2500);
  };
}



onload();

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
