export const projects = [
  {
    img: "../images/portfolio/online_fashion.png",
    link: "https://github.com/",
    linkTitle: "Online fashion store - GitHub",
    descripton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est fuga voluptatibus eaque quod excepturi quisquam harum, repellat ratione totam.",
  },
  {
    img: "../images/portfolio/reebok_web.png",
    link: "https://www.reebok.ru/",
    linkTitle: "Reebook - Homepage",
    descripton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est fuga voluptatibus eaque quod excepturi quisquam harum, repellat ratione totam.",
  },
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const containerElement = document.querySelector('.portfolio__container');

export const menuBtn = document.querySelector('.menu__btn');
