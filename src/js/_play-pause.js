import vars from "./_vars";

//кнопки ether

vars.ethers.btnEther.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    btn.classList.toggle("ether__btn--toggle");
  });
});

//кнопка play в header(при разрешении 768)

vars.btnPlay.addEventListener("click", (e) => {
  e.preventDefault();
  vars.btnPlay.classList.toggle("ether__btn--toggle");
});

//кнопка play в podcasts

export function podcastsPlayPause() {
  const btnPlay = document.querySelectorAll(".card__btn");
  btnPlay.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.classList.toggle("card__btn--toggle");
    });
  });
}

//кнопка play в playlists

vars.playlist.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("playlist--toggle");
  });
});
