jQuery(document).ready(function ($) {
  jcf.replaceAll();

  jcf.setOptions("Select", {
    maxVisibleItems: 5,
    useCustomScroll: true,
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
  });

  var oTyped = new Typed("#typed-entry", {
    strings: ["Because EVERY", "BUSINESS", "<p>NEEDS SOMETHING</p>"],
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 200,
    backDelay: 1200,
  });
});
