"use strict";

var form = document.querySelector('.form');

var removeClass = function removeClass() {
  form.classList.remove('view-s', 'view-m', 'view-l');
};

var responsive = function responsive() {
  if (form.clientWidth < 640) {
    removeClass();
    form.classList.add('view-s');
  } else if (form.clientWidth < 1024) {
    removeClass();
    form.classList.add('view-m');
  } else if (form.clientWidth < 1600) {
    removeClass();
    form.classList.add('view-l');
  } else {
    removeClass();
  }
};

responsive();
window.addEventListener('resize', responsive);