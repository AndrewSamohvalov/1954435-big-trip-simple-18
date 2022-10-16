import BaseView from './base-view.js';
import { createAdjacentHtmlNewPoint } from './trip-new-point-template.js';

/** Представление формы создания новой точки */
export default class TripNewPointView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlNewPoint(...arguments);
  }
}

customElements.define('trip-new-point', TripNewPointView);
