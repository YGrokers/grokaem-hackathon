export default class Dropdown {
  constructor(dropdownSelector) {
    this._dropdownList = Array.from(document.querySelectorAll(dropdownSelector));
  }

  _toggle(dropdownCell) {
    dropdownCell.classList.toggle("faq__dropdown-cell_active");
  }

  setEventListeners() {
    this._dropdownList.forEach((dropdownCell) => {
      dropdownCell.addEventListener("click", () => this._toggle(dropdownCell))
    })
  }
}
