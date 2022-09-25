const nav = document.querySelector(".nav");

const checkStart = nav.offsetHeight + 50;
const checkEnd = nav.offsetHeight + 100;

window.addEventListener("scroll", () => {
  classToggler(window.scrollY);
});

function classToggler(sY) {
  if (sY > checkStart && sY < checkEnd) {
    nav.classList.add("light");
    return;
  }

  if (sY < checkEnd) {
    nav.classList.remove("light");
  }
}
