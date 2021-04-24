export default class Section {
  constructor({itemsArr, renderer}, containerSelector) {
    this._itemsArr = itemsArr;
    this._renderer = renderer;

    this._containerElement = containerSelector;
  }

  renderItems() {
    this._itemsArr.forEach((item) => this._renderer(item));
  }

  addProject(element) {
    this._containerElement.append(element);
  }
}
