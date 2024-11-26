// =================navbar====================
const navmenu = () => {
  document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
  document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
  document.getElementById("nav_line_1").classList.toggle("rotate-45");
  document.getElementById("nav_line_2").classList.toggle("-rotate-45");
  document.getElementById("nav_line_2").classList.toggle("translate-y-[6px]");
  document.getElementById("nav_line_1").classList.toggle("w-full");
  document.body.classList.toggle("overflow-hidden");
};

// ===================slider=============
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true, 
          centerMode: true,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});