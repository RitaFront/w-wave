import vars from "./_vars";

vars.burger.btn.addEventListener("click", (e) => {
  e.preventDefault();
  vars.burger.menu.style.display = "flex";
  vars.bodyEl.style.overflow = "hidden";
});

vars.burger.btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  vars.burger.menu.style.display = "none";
  vars.bodyEl.style.overflow = "scroll";
});
