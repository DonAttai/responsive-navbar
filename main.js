const hamburger = document.querySelector(".hamburger");

const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  // hamburger.classList.toggle('active')
  navItems.classList.toggle("active");
});
