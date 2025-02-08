import { Module } from "../core/module";

export class ClearModule extends Module {
  trigger() {
    const container = document.querySelectorAll(".container");
    if (container) {
      container.forEach((el) => {
        el.remove();
      });
    }
  }
  toHTML() {
    return `<li class="menu-item clear-button" data-type="${this.type}">${this.text}</li>`;
  }
}
