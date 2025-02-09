import { Module } from '../core/module'
import { random } from '../utils'

export class RandomMessage extends Module {
  constructor(type, text) {
    super(type, text)
    this.message = "Сообщение загружается..."
}
  async trigger(click) {
    try {
        const response = await fetch('https://jsonplaceholder.org/comments')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const comments = await response.json()
        const randomIndex = random(0, comments.length-1)
        this.message = comments[randomIndex].comment
        this.showMessage()
      } catch (error) {
        console.error('Ошибка при чтении message.json:', error);
        this.message = 'Не удалось получить сообщение.'
        this.showMessage()
      }
    }
    showMessage() {
      const messageElement = document.createElement('div');
      messageElement.className = 'container'
      messageElement.textContent = this.message;
      document.body.appendChild(messageElement);
      setTimeout(() => {
          messageElement.remove()
      }, 5000);
  }
    getRandomMessage() {
      return this.message || "Сообщение загружается...";
    }
  }
