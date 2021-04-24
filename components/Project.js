export default class Project {
  constructor(data, templateSelector, handleProjectClick) {
    this._data = data
    this._img = data.img;
    this._link = data.link;
    this._linkTitile = data.linkTitle;
    this._descripton = data.descripton;
    this._templateSelector = templateSelector;

    this._handleProjectClick = handleProjectClick
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.project')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._imgElement.addEventListener("click", () => {
        this._handleProjectClick(this._data);
      });
  }

  generateElement() {
    this._element = this._getTemplate();
    this._imgElement = this._element.querySelector('.project__image');
    this._imgElement.src = this._img;
    this._imgElement.alt = this._linkTitile;

    this._linkElement = this._element.querySelector('.project__link');
    this._linkElement.href = this._link;
    this._linkElement.textContent = this._linkTitile;

    this._descriptonElement = this._element.querySelector('.dropdown__text');
    this._descriptonElement.textContent = this._descripton;

    this._setEventListeners();

    return this._element;
  }
}
