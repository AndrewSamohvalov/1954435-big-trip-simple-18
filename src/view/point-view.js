import BaseView from './base-view.js';
import { createPointTemplate } from './point-template.js';

/** Точка маршрута путешествия */
export default class PointView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createPointTemplate(...arguments);
  }
  /**
   * @param {string} title
   */

  setTitle(title){
    return this.set('.event__title', title);

  }

  /**
   * @param {string} time
   * @param {string} isoDate
   */
  setStartTime(time,isoDate) {
    return this.set('.event__start-time',
      {
        textContent:time,
        dateTime:isoDate

      });

  }

  /**
   * @param {string} time
   * @param {string} isoDate
   */
  setEndTime(time,isoDate) {
    return this.set('.event__start-time',
      {
        textContent:time,
        dateTime:isoDate

      });
  }

}

customElements.define('trip-point', PointView);
