import './styles.css';
import { ContextMenu } from './menu';
import { ClearModule } from './modules/clear.module';
import { ClicksModule } from './modules/clicks.module';
import { StarSkyModule } from './modules/starSky.module';

document.addEventListener('DOMContentLoaded', function () {
  // 1. Создаем элемент div для контекстного меню
  const contextMenuElement = document.createElement('div');
  contextMenuElement.id = 'context-menu';
  contextMenuElement.style.display = 'none';
  contextMenuElement.style.position = 'absolute';
  contextMenuElement.style.zIndex = '1000';
  document.body.appendChild(contextMenuElement);

  const menu = new ContextMenu('#context-menu');

  menu.add(new StarSkyModule('starSky', 'Звездное небо'));
  menu.add(new ClicksModule('clicks', 'Clicks'));
  menu.add(new ClearModule('clear', 'Clear'));

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu.open(event.clientX, event.clientY);
  });

  document.addEventListener('click', () => {
    menu.close();
  });
});
