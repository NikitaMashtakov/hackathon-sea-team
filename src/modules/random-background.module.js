import { Module } from '../core/module';
import { generateRandomColor } from '../utils';

export class RandomBackgroundModule extends Module {
  trigger() {
    this.containerCheck();
    this.changeBackgroundColor();
  }
  containerCheck() {
    let container = document.getElementById('container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'container';
      container.classList.add('container');
      document.body.appendChild(container);
    }
  }

  changeBackgroundColor = () => {
    const container = document.getElementById('container');
    if (container) {
      container.style.backgroundColor = generateRandomColor();
    } else {
      console.error('Container with id "container" not found.');
    }
  };
}
