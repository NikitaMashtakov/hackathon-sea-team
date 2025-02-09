import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class RandomBackgroundModule extends Module {
  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}
