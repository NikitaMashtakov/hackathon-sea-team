import { Module } from '../core/module';
import { generateRandomColor } from '../utils';

export class RandomBackgroundModule extends Module {
  trigger() {
    this.changeBackgroundColor();
  }

  changeBackgroundColor = () => {
    document.body.style.backgroundColor = generateRandomColor();
  };
}

// changeBackgroundColor = () => {
//   const container = document.getElementById('container');
//   if (container) {
//     container.style.backgroundColor = generateRandomColor();
//   } else {
//     console.error('Container with id "container" not found.');
//   }
// };
// }
