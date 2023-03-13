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
  btnPlay: document.querySelector(".btn__play"),
  burger: {
    btn: document.querySelector(".burger"),
    menu: document.querySelector(".burger__open"),
    btnClose: document.querySelector(".menu__close"),
  },
  btnHeader: document.querySelector(".header__bottom__btn"),
  players: document.querySelector(".players"),
  podcasts: {
    list: document.querySelector(".podcasts__cards"),
    btn: document.querySelector(".podcasts__btn"),
  },
  playlist: document.querySelectorAll(".playlist__item"),
};
