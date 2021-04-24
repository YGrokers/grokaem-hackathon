// TODO webpack import './index.css';

import Portfolio from "../components/Portfolio.js";
import Project from "../components/Project.js";
import {projects, menuBtn} from "../utils/constants.js";
import Dropdown from "../components/Dropdown.js";
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from '../components/PopupWithForm.js'
import Menu from '../components/Menu.js'

const portfolio = new Portfolio({selector: '.portfolio'});
projects.forEach(projectData => {
  const project = new Project({templateSelector: ".project-template", ...projectData});
  portfolio.addProject(project.generateElement());
})

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
// в константу


const dropdown = new Dropdown('.faq__dropdown-cell');
dropdown.setEventListeners();

const popupFeedback = new PopupWithForm({
  popupSelector: ".popup_type_feedback",
  handleFormSubmit: (data) => {
    console.log(data)
    popupFeedback.close();
  },
});
popupFeedback.setEventListeners();

const formValidator = new FormValidator(
  validationConfig,
  ".popup__form_type_feedback"
);
formValidator.enableValidation();

const addButtonMesto = document.querySelector('.footer__button')

addButtonMesto.addEventListener("click", () => {
  popupFeedback.open();
  formValidator.checkButtonStateOpenPopup();
});

const menu = new Menu ({
  menuSelector: '.menu__container',
  menuLinkSelector: '.menu__link',
  openSelector: 'menu__container_active'
})

const links = menu.returnMenuLinks()

function changeMenuWithScroll() {
  const intro = document.querySelector('#intro').offsetTop;
  const about = document.querySelector('#about').offsetTop;
  const skills = document.querySelector('#skills').offsetTop;
  const portfolio = document.querySelector('#portfolio').offsetTop;
  const faq = document.querySelector('#faq').offsetTop;
  const footer = document.querySelector('#footer').offsetTop;
  const scrollY = window.pageYOffset;

  if (scrollY < about  - 20 ) {
    menu.clearMenuLinks(0)
    links[0].classList.add('menu__link_active')
  } else if (scrollY < skills  - 20 ) {
    menu.clearMenuLinks(1)
    links[1].classList.add('menu__link_active')
  } else if (scrollY < portfolio  - 20 ) {
    menu.clearMenuLinks(2)
    links[2].classList.add('menu__link_active')
  } else if (scrollY < faq  - 20 ) {
    menu.clearMenuLinks(3)
    links[3].classList.add('menu__link_active')
  } else if (scrollY < footer - 50) {
    menu.clearMenuLinks(4)
    links[4].classList.add('menu__link_active')
  } else{
    menu.clearMenuLinks(5)
    links[5].classList.add('menu__link_active')
  }
}

document.addEventListener('scroll', changeMenuWithScroll)
menuBtn.addEventListener('click', () => {menu.open()})
