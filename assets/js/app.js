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
    ]
  });
});

// ===================faq=========
document.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.accordion-item');
  toggleAccordion(firstItem, true);
});

function toggleAccordion(element, forceOpen = false) {
  const container = document.getElementById('accordion-container');
  const allItems = container.querySelectorAll('.accordion-item');
  const content = element.querySelector('.accordion-content');
  const icon = element.querySelector('.accordion-icon');

  allItems.forEach((item) => {
      const itemContent = item.querySelector('.accordion-content');
      const itemIcon = item.querySelector('.accordion-icon');
      if (item !== element) {
          itemContent.classList.add('hidden');
          item.classList.remove('bg-gray-700');
          itemIcon.style.transform = 'rotate(0deg)';
      }
  });

  if (forceOpen || content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
  } else {
      content.classList.add('hidden');
      element.classList.remove('bg-gray-700');
      icon.style.transform = 'rotate(0deg)';
  }
}

// =============navbar dropdown============
document.getElementById("language-select").addEventListener("change", function () {
  const selectedValue = this.value;
  const flagImg = document.getElementById("country-flag");

  if (selectedValue === "HIN") {
      flagImg.src = "./assets/images/svg/india-flag.svg";
  } 
  else if (selectedValue === "ENG") {
      flagImg.src = "./assets/images/svg/country-flag.svg";
  }
});



// =============back to top===========

const backTop = document.querySelector(".back-top");
backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => backTop.style.opacity = window.scrollY > 150 ? 1 : 0
