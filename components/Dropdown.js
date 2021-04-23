class Dropdown {
  constructor(dropdownSelector) {
    // this._dropdownType = document.querySelectorAll(dropdownSelector);
    this._dropdownList = Array.from(document.querySelectorAll(dropdownSelector))
    console.log(this._dropdownList)
  }

  _toggle(dropdownCell) {
    dropdownCell.classList.toggle("faq__dropdown-cell_active");
  }

  setEventListeners() {
    this._dropdownList.forEach((dropdownCell) => {
      console.log(dropdownCell)
      dropdownCell.addEventListener("click", () => this._toggle(dropdownCell))
    })
  }
}

const dropdown1 = new Dropdown('.faq__dropdown-cell');

dropdown1.setEventListeners();
