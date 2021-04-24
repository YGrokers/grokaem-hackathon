export default class Menu {
  constructor({menuSelector,menuLinkSelector, openSelector}) {
    this._menuElement = document.querySelector(menuSelector);
    this._menuLinks = Array.from(this._menuElement.querySelectorAll(menuLinkSelector))
    this._openSelector = openSelector
    this._handleClickClose = this._handleClickClose.bind(this);
  }

  _handleClickClose(evt) {
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

  clearMenuLinks (id) {
    if (this._menuLinks[id].classList.contains('menu__link_active')) {

    } else {
      this._menuLinks.forEach(item => {item.classList.remove('menu__link_active')})
    }
  }

  returnMenuLinks() {
    return this._menuLinks
  }
}
