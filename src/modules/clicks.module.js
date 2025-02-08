import { Module } from "../core/module";

export class ClicksModule extends Module {
  trigger() {
    //КОД НИЖЕ ДЛЯ ТЕСТА, МОЖНО УДАЛИТЬ
    console.log("trigger");
    const container = document.createElement("div");
    container.className = "container";
    container.textContent = "TRIGGER";
    document.body.append(container);
  }
}
