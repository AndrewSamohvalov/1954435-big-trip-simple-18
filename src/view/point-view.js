import BaseView from './base-view.js';
import { createPointTemplate } from './point-template.js';

/** Точка маршрута путешествия */
export default class PointView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createPointTemplate();
  }

  /**
   * Устанавливает дату
   * @param {string} date
   * @param {string} isoDate
   */

  setDate(date, isoDate) {

    const datePoint = this.querySelector('.event__date');

    Object.assign(datePoint, {
      dateTime: isoDate,
      textContent: date
    });

    return this;
  }

  /**
   * Устанавливает иконку
   * @param {string} type
   */

  setIcon(type) {

    const iconPoint = this.querySelector('.event__type-icon');

    Object.assign(iconPoint, {src: `img/icons/${type}.png`});

    return this;
  }

  /**
   * @param {string} title
   */

  setTitle(title){

    const titlePoint = this.querySelector('.event__title');

    Object.assign(titlePoint, {textContent: title});

    return this;

  }

  /**
   * @param {string} time
   * @param {string} isoDate
   */
  setStartTime(time,isoDate) {
    const startTimePoint = this.querySelector('.event__start-time');

    Object.assign(startTimePoint, {
      textContent: time,
      dateTime: isoDate
    });

    return this;

  }

  /**
   * @param {string} time
   * @param {string} isoDate
   */
  setEndTime(time,isoDate) {
    const endTimePoint = this.querySelector('.event__end-time');

    Object.assign(endTimePoint, {
      textContent: time,
      dateTime: isoDate
    });

    return this;

  }

  /**
   * Устанавливает цену
   * @param {number} price
   */

  setPrice(price) {

    const pricePoint = this.querySelector('.event__price-value');

    Object.assign(pricePoint, {textContent: price});

    return this;
  }

  /**
   * Добавляет опции
   * @param {HTMLElement} offer
   */
  appendOffer(offer) {
    const offerListPoint = this.querySelector('.event__selected-offers');

    offerListPoint.append(offer);

    return this;
  }
}


customElements.define('trip-point', PointView);
