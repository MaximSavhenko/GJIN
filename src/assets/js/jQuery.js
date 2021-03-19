$(document).ready(function () {
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

  $(".preloader span").each(function (i, e) {
    setTimeout(function () {
      $(e).addClass("animated");
    }, i * 500);
  });
});
