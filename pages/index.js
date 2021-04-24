import {projects, validationConfig, containerElement, menuBtn} from "../utils/constants.js";
import Section from "../components/Section.js";
import Project from "../components/Project.js";
import Dropdown from "../components/Dropdown.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Menu from '../components/Menu.js'

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

const menu = new Menu ({
  menuSelector: '.menu__container',
  menuLinkSelector: '.menu__link',
  openSelector: 'menu__container_active'
})

const links = menu.returnMenuLinks()

function changeMenuWithScroll() {
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
  } else if (scrollY < footer - 200) {
    menu.clearMenuLinks(4)
    links[4].classList.add('menu__link_active')
  } else{
    menu.clearMenuLinks(5)
    links[5].classList.add('menu__link_active')
  }
}

document.addEventListener('scroll', changeMenuWithScroll)
menuBtn.addEventListener('click', () => {menu.open()})
