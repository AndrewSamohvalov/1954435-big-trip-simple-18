import BaseView from './base-view.js';
import { createAdjacentHtmlSort } from './trip-sort-template.js';

/** Представление сортировки точек */
export default class TripSortView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlSort(...arguments);
  }
}

customElements.define('trip-sort', TripSortView);
