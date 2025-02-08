import { Module } from "../core/module";

export class ClearModule extends Module {
  trigger() {
    const container = document.querySelector(".container");
    if (container) {
      container.remove();
    }
  }
  toHTML() {
    return `<li class="menu-item clear-button" data-type="${this.type}">${this.text}</li>`;
  }
}
