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