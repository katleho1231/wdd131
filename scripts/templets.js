// temples.js
const menubutton = document.querySelector("#menubutton");
const menuitems = document.querySelector("#menuitems");

menubutton.addEventListener("click", () => {
  menuitems.classList.toggle("open");
});

// Footer dynamic year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
