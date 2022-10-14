'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);




// POP UP

document.addEventListener('DOMContentLoaded', function(){
  const modals = document.querySelectorAll('[data-modal]'),
        modalsWrap = document.querySelectorAll('.modal-wrap'),
        modalsClose = document.querySelectorAll('.modal__close');
  
  // open modal
  modals.forEach((el) => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      
      const modalToOpen = this.getAttribute('data-modal');
      document.getElementById(modalToOpen).classList.remove('modal-wrap_hidden');
    });
  });
  
  // close modal
  modalsClose.forEach((el) => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      
      this.closest('.modal-wrap').classList.add('modal-wrap_hidden');
    });
  });
  modalsWrap.forEach((el) => {
    el.addEventListener('mouseup', function(e){
      const container = this.querySelector('.modal');
      
      if(e.target !== container && container.contains(e.target) === false){
        this.classList.add('modal-wrap_hidden');
      }
    });
  });
});


/**
 * product filter
 */

 const filterBtns = document.querySelectorAll("[data-filter-btn]");
 const filterBox = document.querySelector("[data-filter]");
 
 let lastClickedFilterBtn = filterBtns[0];
 
 const filter = function () {
   lastClickedFilterBtn.classList.remove("active");
   this.classList.add("active");
   lastClickedFilterBtn = this;
 
   filterBox.setAttribute("data-filter", this.dataset.filterBtn)
 }
 
 addEventOnElem(filterBtns, "click", filter);



//  EXTRA

