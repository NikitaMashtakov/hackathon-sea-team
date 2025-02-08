import { ContextMenu } from "./menu";
import { ClearModule } from "./modules/clear.module";
import { ClicksModule } from "./modules/clicks.module";
import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const menu = new ContextMenu("#menu");
  document.body.appendChild(menu.el);
  menu.add(new ClicksModule("clicker", "Clicker")); //ДЛЯ ТЕСТА
  menu.add(new ClearModule("clear", "Clear")); //Обязательный модуль, должен быть последним
});
