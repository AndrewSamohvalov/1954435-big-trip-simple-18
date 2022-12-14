import BaseView from './base-view.js';
import { createAdjacentHtmlNewPoint } from './new-point-template.js';

/** Представление формы создания новой точки */
export default class NewPointView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtmlNewPoint(...arguments);
  }
}

customElements.define('trip-new-point', NewPointView);
