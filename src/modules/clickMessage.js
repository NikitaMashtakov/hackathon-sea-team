import { Module } from '../core/module';
import { random } from '../utils';

export class ContextMenu extends Module {
  trigger() {
    this.getMessageData = async function() {
      try {
        const response = await fetch('https://jsonplaceholder.org/comments');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const messageData = await response.json();
        this.messages = messageData.comment
        random(1, messages.length)
        return this.messages[randomIndex]
      } catch (error) {
        console.error('Ошибка при чтении message.json:', error);
        return null
      }
    }
  }
}
