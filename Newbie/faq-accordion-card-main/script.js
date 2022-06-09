const listTitle = document.querySelectorAll(".faq-list__title");
const text = document.querySelectorAll(".faq-list__text");
const arrow = document.querySelectorAll(".arrow");

listTitle.forEach((list, index) => {
  list.addEventListener("click", function () {
    text[index].classList.toggle("hidden");
    listTitle[index].classList.toggle("title-active");
    arrow[index].classList.toggle("arrow-active");
  });
});
