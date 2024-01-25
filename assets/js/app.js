"use strict";

function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_Hidden");
  document.querySelector(".menu").classList.toggle("cross");
}

$(".sliderParent").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  prevArrow: ".Prev",
  nextArrow: ".Next",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920.92,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1440.92,
      settings: {
        slidesToShow: 2.99,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.75,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

function handleMargin() {
  let marginLeft = document
    .getElementById("parent")
    .getBoundingClientRect().left;
  document.getElementById("headingone").style.marginLeft = `${marginLeft}px`;
}
addEventListener("load", (event) => {
  handleMargin();
});
window.addEventListener("resize", () => {
  handleMargin();
});
