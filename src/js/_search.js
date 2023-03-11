import vars from "./_vars";

vars.htmlEl.addEventListener("click", (e) => {
  const target = e.target;
  if (vars.search.inputSearch.classList.contains("--input__open")) {
    console.log("ff");
    if (!target.closest(".btn__search") && !target.closest(".search__input")) {
      vars.search.inputSearch.classList.remove("--input__open");
      console.log(target.closest(".search__input"));
    }
  }
});

vars.search.btnSearch.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    vars.search.inputSearch.classList.add("--input__open");
  });

  console.log("jj");
});
