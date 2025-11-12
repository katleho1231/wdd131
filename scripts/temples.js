const menubutton = document.getElementById("menubutton");
const menuitems = document.getElementById("menuitems");

menubutton.addEventListener("click", () => {
  menuitems.classList.toggle("open");
});
