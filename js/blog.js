// Akash Singh - 8833216

$(document).ready(function () {
  $("ul li").click(function () {
    $(this).addClass("select").siblings().removeClass("select");
    $(".content > p ").hide();
    $($(this).data("value")).fadeIn();
  });
});
