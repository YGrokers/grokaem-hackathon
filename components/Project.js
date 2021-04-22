export default class Project {
  constructor({templateSelector, img, link, linkTitle}) {
    this._img = img;
    this._link = link;
    this._linkTitile = linkTitle;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.project')
      .cloneNode(true);
  }

  generateElement() {
    this._element = this._getTemplate();
    this._imgElement = this._element.querySelector('.project__image');
    this._imgElement.src = this._img;
    this._imgElement.alt = this._linkTitile;

    this._linkElement = this._element.querySelector('.project__link');
    this._linkElement.href = this._link;
    this._linkElement.textContent = this._linkTitile;

    return this._element;
  }
}
