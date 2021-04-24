import {projects, validationConfig, containerElement} from "../utils/constants.js";
import Section from "../components/Section.js";
import Project from "../components/Project.js";
import Dropdown from "../components/Dropdown.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

const createProjectEl = (projectData) => {
  return new Project(projectData, ".project-template", (data) => {
    popupImage.open(data);
  }).generateElement();
}

const portfolio = new Section({
  itemsArr: projects,
  renderer: projectData => {
    createProjectEl(projectData)
    portfolio.addProject(createProjectEl(projectData));
  }
}, containerElement
);
portfolio.renderItems();

const dropdown = new Dropdown({
  dropdownSelector: '.dropdown__cell',
  activeSelector: 'dropdown__cell_active'
});
dropdown.setEventListeners();

const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

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

const buttonSendFeedback = document.querySelector('.footer__button')

buttonSendFeedback.addEventListener("click", () => {
  popupFeedback.open();
  formValidator.checkButtonStateOpenPopup();
});
