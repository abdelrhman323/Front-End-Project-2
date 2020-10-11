$(function () {
  var myheader = $(".header"),
    mySlider = $(".bxslider");
  myheader.height($(window).height());
  $(window).resize(function () {
    myheader.height($(window).height());
    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bxslider li").height()) / 2
      );
    });
  });
  $(".links li").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bxslider li").height()) / 2
    );
  });

  $(".bxslider").bxSlider({
    pager: false,
  });

  $(".links li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );

    console.log("#" + $(this).data("value"));
  });
  //Auto slider function
  (function autoSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(function () {
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });
      }
      $(this).delay;
    });
  })();
  //Trigger MixItUp
  $("#Container").mixItUp();
  // Adjust Shuttle links
  $("shuttle li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //Trigger NiceScroll
  $("html").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "10px",
    cursorborder: "none",
    cursorborderradius: 0,
  });
});
