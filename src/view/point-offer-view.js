import BaseView from './base-view.js';
import {createPointOfferTemplate} from './point-offer-template.js';

/** Представление дополнительной опции */
export default class PointOfferView extends BaseView {
  constructor() {
    super();
    this.classList.add('event__offer');
  }

  /** @override */
  createAdjacentHtml() {
    return createPointOfferTemplate();
  }

  /**
   * Установит заголовок
   * @param {string} title
   */
  setTitle(title) {
    const titleOffer = this.querySelector('.event__offer-title');

    Object.assign(titleOffer, {textContent: title});

    return this;
  }

  /**
   * Устанавливит цену
   * @param {number} price
   */
  setPrice(price) {
    const priceOffer = this.querySelector('.event__offer-price');

    Object.assign(priceOffer, {textContent: price});

    return this;
  }
}

customElements.define('point-offer', PointOfferView);
