import BaseView from './base-view.js';
import { createAdjacentHtmlFilter } from './filter-template.js';

/** Представление фильтра путешествий */
export default class FilterView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlFilter();
  }
}

customElements.define('trip-filter', FilterView);
