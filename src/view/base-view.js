/**
 * Базовое представление
 */
export default class BaseView extends HTMLElement {
  constructor() {
    super();
    this.insertAdjacentHTML(this.adjacentHtmlPosition, this.createAdjacentHtml(...arguments));
  }

  /**Задаст позицию дополнительной html-разметки  */

  get adjacentHtmlPosition() {
    return 'beforeend';
  }

  /** Создаст дополнительную html-разметку*/

  createAdjacentHtml() {
    return '';
  }

}
