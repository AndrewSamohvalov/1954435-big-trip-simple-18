import BaseView from './base-view.js';
import { createAdjacentHtmlFilter } from './trip-filter-template.js';

/** Представление фильтра путешествий */
export default class TripFilterView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlFilter(...arguments);
  }
}

customElements.define('trip-filter', TripFilterView);
