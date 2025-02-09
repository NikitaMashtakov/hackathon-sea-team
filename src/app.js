import './styles.css'
import { RandomMessage } from "./modules/RandomMessage.module"

document.addEventListener("DOMContentLoaded", () => {
    const menu = new ContextMenu("#menu");
    document.body.appendChild(menu.el);
    menu.add(new RandomMessage("randomMessage", "Вызвать сообщение"));
  });