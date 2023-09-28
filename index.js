const circle = document.querySelector(".circle");
const cylinder = document.querySelector(".cylinder");
const dot = document.querySelector(".dot");
cylinder.addEventListener("click", () => {
  circle.classList.toggle("clicked");
  cylinder.classList.toggle("clicked");
  dot.classList.toggle("clicked");
});
