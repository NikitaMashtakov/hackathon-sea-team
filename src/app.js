import { ContextMenu } from "./menu";
import { ClearModule } from "./modules/clear.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import { StarSkyModule } from "./modules/starSky.module";
import "./styles.css";
import { SoundsModule } from "./modules/sounds.module";
import { ShapeModule } from "./modules/shape.module";
import { RandomMessage } from "./modules/RandomMessage.module";
import { CityCardsModule } from "./modules/cityCards.module";
import { greetingMessage } from "./utils";
import { RandomBackgroundModule } from "./modules/random-background.module";

document.addEventListener("DOMContentLoaded", () => {
  greetingMessage();
  const menu = new ContextMenu("#menu");
  document.body.appendChild(menu.el);
  menu.add(new StarSkyModule("starSky", "Звездное небо"));
  menu.add(new RandomBackgroundModule("random-background", "Cлучайный фон"));
  menu.add(new TimerModule("timer", "Таймер отсчета"));
  menu.add(new ClicksModule("clicks", "Кликометр", 5000));
  menu.add(new SoundsModule("sounds", "Случайный звук"));
  menu.add(new RandomMessage("message", "Рандомное сообщение"));
  menu.add(new ShapeModule("div", "Случайная фигура"));
  menu.add(new CityCardsModule("cards", "Фотогалерея"));
  menu.add(new ClearModule("clear", "Очистить всё")); //Обязательный модуль, должен быть последним
});
