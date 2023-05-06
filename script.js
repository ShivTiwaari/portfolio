const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("nav");
const newnav = document.getElementById("newnav");
const dropDown = document.getElementsByClassName("drop-down-elements");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("new-height");
  setTimeout(() => {
    newnav.classList.toggle("hidden");
  }, 100);
});

Array.from(dropDown).forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.toggle("new-height");
    setTimeout(() => {
      newnav.classList.toggle("hidden");
    }, 100);
  });
});
