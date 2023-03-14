// import JustValidate from "./vendor/just-validate.min.js";

const validation = new JustValidate(".form");

validation
  .addField(".input-name", [
    {
      rule: "required",
      errorMessage: "Поле обязательно для заполнения",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Не достаточное количество символов",
    },
    {
      rule: "maxLength",
      value: 10,
      errorMessage: "Вы ввели больше чем положено",
    },
    {
      rule: "customRegexp",
      value: /^[\u0410-\u044F\u0401\u0451]+$/i,
      errorMessage: "Ошибка",
    },
  ])
  .addField(".input-email", [
    {
      rule: "required",
      errorMessage: "Поле обязательно для заполнения",
    },
    {
      rule: "email",
      errorMessage: "Вы не корректно ввели email",
    },
  ])
  .addField(".form__textarea", [
    {
      rule: "required",
      errorMessage: "Поле обязательно для заполнения",
    },
    {
      rule: "minLength",
      value: 7,
      errorMessage: "Не достаточное количество символов",
    },
  ])
  .addField("#check", [
    {
      rule: "required",
    },
  ])
  .onSuccess((event) => {
    alert("Форма отправлена");
    document.querySelector(".form").reset();
  });
