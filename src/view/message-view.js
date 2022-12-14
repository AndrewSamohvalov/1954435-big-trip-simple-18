import BaseView from './base-view.js';
import {createMessageTemplate} from './message-template.js';

/** Представление сообщения */
export default class MessageView extends BaseView {

  /** @override */
  createAdjacentHtml() {
    return createMessageTemplate();
  }

  /**
   * Установит сообщение
   * @param {string} message
   */
  setMessage(message) {
    const messageView = this.querySelector('.trip-events__msg');

    Object.assign(messageView, {textContent: message});

    return this;
  }
}

customElements.define('route-message', MessageView);
