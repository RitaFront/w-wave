export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  btnLogin: document.querySelector(".header__btn"),
  modal: {
    container: document.querySelector(".popup"),
    btnClose: document.querySelector(".popup__close"),
  },
  search: {
    btnSearch: document.querySelector(".btn__search"),
    inputSearch: document.querySelector(".search__input"),
  },
  ethers: {
    btnEther: document.querySelectorAll(".ether__btn"),
  },
};
