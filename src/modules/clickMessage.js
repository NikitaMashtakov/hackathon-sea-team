import { Menu } from '../core/menu';

export class ContextMenu extends Menu {
    constructor(ul) {
        super(ul)

        const message = document.createElement('div')
        message.className = 'message'
        message.textContent = 'Вызвать сообщение'
        this.ul.appendChild(message)
        this.message = message


        this.getMessageData = async function() {
            try {
              const response = await fetch('/messages/message.json');
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const messageData = await response.json();
              this.messages = messageData.message
              return messageData;
            } catch (error) {
              console.error('Ошибка при чтении message.json:', error);
              return null
            }
          }


        this.message.addEventListener('click', async () => { 
            const data = await this.getMessageData()
            if (data) {
                alert(this.getRandomMessage())
            } else {
                alert('Не удалось загрузить сообщения.');
            }
        })
    }
    getRandomMessage() {
        const random = Math.floor(Math.random() * this.messages.length)
        return this.messages[random].message
    }
}
