import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor() {
    super("#menu");
    this.el.textContent = "vdsvdsvds";
  }
  open(pageX, pageY) {
    this.el.style = `left: ${pageX}px; top: ${pageY}px`;
    this.el.classList.add("open");
    console.log("open");
  }
  close() {
    this.el.classList.remove("open");
    console.log("close");
  }
}
