export default class Menu {
  constructor({menuSelector, openSelector}) {
    this._menuElement = document.querySelector(menuSelector);
    this._openSelector = openSelector
    this._handleClickClose = this._handleClickClose.bind(this);
  }

  _handleClickClose(evt) {
    console.log(evt.target)
    if (evt.target.classList.contains('menu__link')|| evt.target.classList.contains('menu__link-container') || evt.target.classList.contains('menu')) {
      this.close()
     };
  }

  open() {
    this._menuElement.classList.add(this._openSelector);
    document.addEventListener("click", this._handleClickClose);
  }

  close() {
    this._menuElement.classList.remove(this._openSelector);
    document.removeEventListener("click", this._handleClickClose);
  }
}
