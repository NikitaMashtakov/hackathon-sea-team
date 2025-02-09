import { ContextMenu } from "./menu";
import { ClearModule } from "./modules/clear.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import { StarSkyModule } from "./modules/starSky.module";
import "./styles.css";
import { SoundsModule } from "./modules/sounds.module";
import { ShapeModule } from "./modules/shape.module";

document.addEventListener("DOMContentLoaded", () => {
  const menu = new ContextMenu("#menu");
  document.body.appendChild(menu.el);
  menu.add(new StarSkyModule("starSky", "Звездное небо"));
  menu.add(new TimerModule("timer", "Таймер отсчета"));
  menu.add(new ClicksModule("clicks", "Анализ кликов", 5000));
  menu.add(new SoundsModule("sounds", "случайный звук"));
  menu.add(new ShapeModule("div", "контейнер"));
  menu.add(new ClearModule("clear", "Clear")); //Обязательный модуль, должен быть последним
});
