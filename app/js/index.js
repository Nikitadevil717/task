"use strict";

var $el, leftPos, newWidth;
$(".navigation").append("<div id='magic-line'></div>");
var $magicLine = $("#magic-line");
$magicLine.width($(".current_page_item a").width()).css("left", $(".current_page_item a").position().left).data("origLeft", $magicLine.position().left).data("origWidth", $magicLine.width());
$(".navigation__item").hover(function () {
  $el = $(this).find("a");
  leftPos = $el.position().left;
  newWidth = $el.parent().width();
  $magicLine.stop().animate({
    left: leftPos,
    width: newWidth
  });
}, function () {
  $magicLine.stop().animate({
    left: $magicLine.data("origLeft"),
    width: $magicLine.data("origWidth")
  });
});

function mobileVersion() {
  if (window.innerWidth < 993) {
    $('.navigation').add('.header-purchase').detach().appendTo('.header__mobile-wrapper');
  } else {
    $('.navigation').add('.header-purchase').detach().insertAfter('.logo');
  }
}

mobileVersion();
$(window).on('resize', function () {
  mobileVersion();
});
$('.header__burger').on('click', function () {
  $('.header__mobile-wrapper').addClass('active');
});
$('.header__mobile-close').on('click', function () {
  $('.header__mobile-wrapper').removeClass('active');
});