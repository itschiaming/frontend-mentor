const connect = document.querySelector(".connect");
const connectListDesktop = document.querySelector(".connect-list-desktop");
const connectListMobile = document.querySelector(".connect-list-mobile");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

menu.addEventListener("click", () => {
  modal.classList.toggle("visible");
  menu.classList.toggle("visible");
  close.classList.toggle("visible");
});

connect.addEventListener("click", () => {
  connectListMobile.classList.toggle("visible-static");
  connectListDesktop.classList.toggle("visible");
});

close.addEventListener("click", () => {
  modal.classList.toggle("visible");
  menu.classList.toggle("visible");
  close.classList.toggle("visible");
});
