import vars from "./_vars";

vars.ethers.btnEther.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    btn.classList.toggle("ether__btn--toggle");
  });
});
