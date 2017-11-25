"use strict";

$(document).ready(function () {
  var nav = $('.nav__menu');
  $(document).on('click', '.burger', function () {
    $('.burger').toggleClass('active');
    nav.toggleClass('show');
  });
});