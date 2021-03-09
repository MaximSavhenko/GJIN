
  $(document).ready(function () {
    $(function() {
        jcf.replaceAll();
    });
    
      jcf.setOptions('Select', {
        maxVisibleItems: 5,
        useCustomScroll: true,
        wrapNative: false, 
        wrapNativeOnMobile: false, 
        fakeDropInBody: false, 
      });
  })