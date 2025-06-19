const menu_icon = document.querySelector(".menu-icon");
const menu_hidden = document.querySelector(".menu-hidden");
const close_menu_btn = document.querySelector(".close-menu-btn");
menu_icon.addEventListener("click", () => {
  console.log("sdfasdfadfaf");
  menu_hidden.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

close_menu_btn.addEventListener("click", () => {
  console.log("sdfasdfadfaf");
  menu_hidden.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (
    !menu_hidden.contains(event.target) &&
    !menu_icon.contains(event.target)
  ) {
    menu_hidden.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
});
