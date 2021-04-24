import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupType.querySelector(".popup__image");
    this._popupCaption = this._popupType.querySelector(".popup__caption");
  }

  open(data) {
    this._popupImage.src = data.img;
    this._popupImage.alt = data.linkTitle;
    this._popupCaption.textContent = data.linkTitle;

    super.open();
  }
}
