import { Module } from "../core/module";

export class ShapeModule extends Module {
  trigger() {
    const div = document.createElement("div");
    div.className = "container";
    div.textContent = "TESTSTSTST";
    document.body.append(div);
  }
}
