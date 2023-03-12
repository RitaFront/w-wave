import vars from "./_vars";

vars.burger.btn.addEventListener("click", (e) => {
  e.preventDefault();
  vars.burger.menu.style.display = "flex";
});

vars.burger.btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  vars.burger.menu.style.display = "none";
});
