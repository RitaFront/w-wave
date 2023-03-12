import vars from "./_vars";

vars.btnHeader.addEventListener("click", (e) => {
  e.preventDefault();
  vars.btnHeader.classList.toggle("--transform__btn");
  vars.players.classList.toggle("--players__block");
});
