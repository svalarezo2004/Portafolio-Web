const btn_menu = document.querySelector(".btn_menu");
const btn_menuIcon = document.querySelector(".btn_menu i");
const nav_menu = document.querySelector(".nav_options");

btn_menu.addEventListener("click", () => {
  nav_menu.classList.toggle("show");

  if (nav_menu.contains("show")) {
    btn_menuIcon.setAttribute("class", "fas fa-times");
  } else {
    btn_menuIcon.setAttribute("class", "fas fa-bars");
  }
});
