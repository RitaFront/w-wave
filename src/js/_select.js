import "./vendor/choices.min.js";

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
});
