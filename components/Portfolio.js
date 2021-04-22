export default class Portfolio {
  constructor({selector}) {
    this._selector = selector;

    this._element = document.querySelector(this._selector);
    this._containerElement = this._element.querySelector('.portfolio__container');
  }

  addProject(elem) {
    this._containerElement.append(elem);
  }
}
