$(document).ready(function () {
  /*start  open and select country*/
  $(document).click(function (e) {


    if (e.target.classList.contains("country") ||
    $(e.target).is(".country  + .wrapper-country li")
    ) {
      $(".wrapper-country").fadeIn();

      if ($(e.target).is(".country +.wrapper-country li")) {
        text = $(e.target).text();
        $(".country").val(text);
        $(".wrapper-country").fadeOut();
      }
    }else{
      $(".wrapper-country").fadeOut();
    }
  });

  /* finish open and select country*/
});
