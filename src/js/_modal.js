import vars from "./_vars";

function modalClose() {
  vars.modal.container.style.display = "none";
  vars.bodyEl.style.overflow = "scroll";
}

vars.btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  vars.modal.container.style.display = "flex";
  vars.bodyEl.style.overflow = "hidden";
});

vars.modal.btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalClose();
});

vars.htmlEl.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".popup") && !target.closest(".popup__content")) {
    modalClose();
  }
});
