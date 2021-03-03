function toggleMobileMenu() {
  var btnMenu = document.querySelector(".header__btn-menu");

  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("animationClose");
  };
}

toggleMobileMenu();

function openSubLang() {
  var spanBtn = document.getElementById("openSettingLang");

  spanBtn.onclick = function () {
    spanBtn.classList.toggle("transformArrow");
  };
}

openSubLang();

function openArrow() {
  let arrow = document.querySelectorAll(".topMenu__hiddenMenu-item");
  arrowSub = document.querySelectorAll(".topMenu__hiddenMenu-sub-item");

  for (let elem of arrow) {
    elem.onclick = function () {
      elem.classList.toggle("activeArrow");
    };
  }
  for (let elem of arrowSub) {
    elem.onclick = function () {
      elem.classList.toggle("activeArrowSub");
    };
  }
}

openArrow();

function scrollUp() {
  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth",
    });
  }

  var button = document.querySelector(".footer__scrollUp");
  var header = document.querySelector("#up");

  button.addEventListener("click", () => {
    scrollTo(header);
  });
}

scrollUp();











