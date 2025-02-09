import { Module } from "../core/module";
import { clearAll, greetingMessage } from "../utils";

export class ClearModule extends Module {
  trigger() {
    clearAll();
    greetingMessage();
  }
  toHTML() {
    return `<li class="menu-item clear-button" data-type="${this.type}">${this.text}</li>`;
  }
}
