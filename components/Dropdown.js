export default class Dropdown {
  constructor({dropdownSelector, activeSelector}) {
    this._dropdownList = Array.from(document.querySelectorAll(dropdownSelector));
    this._dropdownActive = activeSelector;
  }

  _toggle(dropdownCell) {
    dropdownCell.classList.toggle(this._dropdownActive);
  }

  setEventListeners() {
    this._dropdownList.forEach((dropdownCell) => {
      dropdownCell.addEventListener("click", () => this._toggle(dropdownCell))
    })
  }
}
