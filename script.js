const parallax = document.getElementById("parallax");
const div1 = document.getElementById("div1");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
})