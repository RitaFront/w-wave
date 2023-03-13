import vars from "./_vars";
import { data } from "./_guestsObj";

vars.guests.link.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".--active").forEach((el) => {
      el.classList.remove("--active");
    });

    item.classList.add("--active");
    let attribute = item.getAttribute("data-path");
    let title = item.textContent;
    createAuthor(attribute, title);
  });
});

function createAuthor(dataAttribute, title) {
  if (!dataAttribute) {
    vars.guests.title.textContent = "Не найдено :(";
    vars.guests.img.setAttribute("src", "../img/guests/user.png");
    vars.guests.descr.textContent = "";
    return;
  }

  const user = data.filter((item) => item.name === dataAttribute);

  vars.guests.img.setAttribute("src", `${user[0].src}.jpg`);
  vars.guests.title.textContent = title;
  vars.guests.descr.textContent = user[0].descr;
}
