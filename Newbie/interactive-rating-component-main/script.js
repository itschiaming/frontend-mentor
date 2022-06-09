const rating = document.querySelectorAll(".rating");

rating.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("rating-acitive");
    console.log(index);
  });
});
