import BaseView from './base-view.js';
import { createAdjacentHtmlSort } from './sort-template.js';

/** Представление сортировки точек */
export default class SortView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlSort();
  }
}

customElements.define('trip-sort', SortView);
