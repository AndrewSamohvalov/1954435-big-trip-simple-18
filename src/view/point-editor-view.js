import BaseView from './base-view.js';
import { createPointEditorTemplate } from './point-editor-template.js';

export default class PointEditorView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createPointEditorTemplate(...arguments);
  }
}

customElements.define('trip-point-editor', PointEditorView);
