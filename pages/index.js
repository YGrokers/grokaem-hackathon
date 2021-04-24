// TODO webpack import './index.css';

// import Portfolio from "../components/Portfolio.js";
// import Project from "../components/Project.js";
import {projects, menuBtn} from "../utils/constants.js";
import Dropdown from "../components/Dropdown.js";
import FormValidator from "../components/FormValidator.js"
import PopupWithForm from '../components/PopupWithForm.js'
import Menu from '../components/Menu.js'

// const portfolio = new Portfolio({selector: '.portfolio'});
// projects.forEach(projectData => {
//   const project = new Project({templateSelector: ".project-template", ...projectData});
//   portfolio.addProject(project.generateElement());
// })

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
  openSelector: 'menu__container_active'
})

menuBtn.addEventListener('click', () => {menu.open()})
