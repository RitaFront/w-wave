import vars from "./_vars";
import { data } from "./_podcastsObj";

let start = 0;
let limit = 8;

function createPodcasts(data) {
  data.forEach((item) => {
    const element = document.createElement("li");
    element.classList.add("podcasts__card");
    element.innerHTML = `<picture>
    <source
      srcset='${item.src}_phone.png'
      media="(max-width: 374px)"
    />
    <img
      src="${item.src}.png"
      alt="Podcast-1"
      class="card__img"
    />
  </picture>
  <span class="card__data">${item.date}</span>
  <div class="card__content">
    <div class="card__top">
      <div class="card__info">
        <span class="card__time">${item.time}</span>
        <span class="card__title">${item.title}</span>
        <span class="card__author">${item.author}</span>
      </div>
      <button class="card__btn btn-reset">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#A1A6B4"
            stroke-width="2"
          />
          <path
            class="card__play"
            d="M21.6924 31.7965L31.5716 24.7996C32.1428 24.3998 32.1428 23.6002 31.5716 23.2004L21.6924 16.2035C20.9943 15.7037 20 16.1835 20 17.0031V30.9969C20 31.8165 20.9943 32.2963 21.6924 31.7965Z"
            fill="#A1A6B4"
          />

          <rect
            class="card__pause"
            x="19"
            y="15"
            width="2"
            height="18"
            rx="1"
            fill="#A1A6B4"
          />
          <rect
            class="card__pause"
            x="27"
            y="15"
            width="2"
            height="18"
            rx="1"
            fill="#A1A6B4"
          />
        </svg>
      </button>
    </div>
    <div class="card__bottom">
      <span class="card__views">
        <svg
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.3 11.331L8.29606 6.5L1.3 1.66897V11.331ZM0.666238 1.23131L0.669532 1.23361L0.666238 1.23131ZM1.41031 12.8347L9.64301 7.14971C10.119 6.82485 10.119 6.17514 9.64301 5.85029L1.41031 0.165315C0.828559 -0.240754 0 0.149072 0 0.815026V12.185C0 12.8509 0.828559 13.2408 1.41031 12.8347Z"
            fill="#A1A6B4"
          />
        </svg>
        ${item.views}
      </span>
      <span class="card__views">
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.425 0C8.294 0 7.2085 0.5297 6.5 1.36676C5.7915 0.5297 4.706 0 3.575 0C1.573 0 0 1.58256 0 3.59673C0 6.06866 2.21 8.08283 5.5575 11.1433L6.5 12L7.4425 11.1368C10.79 8.08283 13 6.06866 13 3.59673C13 1.58256 11.427 0 9.425 0ZM6.565 10.1689L6.5 10.2343L6.435 10.1689C3.341 7.35041 1.3 5.48665 1.3 3.59673C1.3 2.28883 2.275 1.3079 3.575 1.3079C4.576 1.3079 5.551 1.95531 5.8955 2.85123H7.111C7.449 1.95531 8.424 1.3079 9.425 1.3079C10.725 1.3079 11.7 2.28883 11.7 3.59673C11.7 5.48665 9.659 7.35041 6.565 10.1689Z"
            fill="#A1A6B4"
          />
        </svg>
        ${item.likes}
      </span>
      <span class="card__views">
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 9.18876C9.49333 9.18876 9.04 9.38454 8.69333 9.69127L3.94 6.98293C3.97333 6.83283 4 6.68273 4 6.5261C4 6.36948 3.97333 6.21938 3.94 6.06928L8.64 3.38705C9 3.71335 9.47333 3.91566 10 3.91566C11.1067 3.91566 12 3.04116 12 1.95783C12 0.874498 11.1067 0 10 0C8.89333 0 8 0.874498 8 1.95783C8 2.11446 8.02667 2.26456 8.06 2.41466L3.36 5.09689C3 4.77058 2.52667 4.56827 2 4.56827C0.893333 4.56827 0 5.44277 0 6.5261C0 7.60944 0.893333 8.48394 2 8.48394C2.52667 8.48394 3 8.28163 3.36 7.95532L8.10667 10.6702C8.07333 10.8072 8.05333 10.9508 8.05333 11.0944C8.05333 12.1451 8.92667 13 10 13C11.0733 13 11.9467 12.1451 11.9467 11.0944C11.9467 10.0437 11.0733 9.18876 10 9.18876ZM10 1.30522C10.3667 1.30522 10.6667 1.5989 10.6667 1.95783C10.6667 2.31677 10.3667 2.61044 10 2.61044C9.63333 2.61044 9.33333 2.31677 9.33333 1.95783C9.33333 1.5989 9.63333 1.30522 10 1.30522ZM2 7.17871C1.63333 7.17871 1.33333 6.88504 1.33333 6.5261C1.33333 6.16717 1.63333 5.87349 2 5.87349C2.36667 5.87349 2.66667 6.16717 2.66667 6.5261C2.66667 6.88504 2.36667 7.17871 2 7.17871ZM10 11.76C9.63333 11.76 9.33333 11.4664 9.33333 11.1074C9.33333 10.7485 9.63333 10.4548 10 10.4548C10.3667 10.4548 10.6667 10.7485 10.6667 11.1074C10.6667 11.4664 10.3667 11.76 10 11.76Z"
            fill="#A1A6B4"
          />
        </svg>
        ${item.reposts}
      </span>
    </div>
  </div>`;
    vars.podcasts.list.appendChild(element);
  });
}

function loadData() {
  const end = start + limit;
  const newData = data.slice(start, end);
  createPodcasts(newData);
  start = end;
  if (start >= data.length) {
    vars.podcasts.btn.style.display = "none";
  }
}

loadData();

vars.podcasts.btn.addEventListener("click", loadData);
