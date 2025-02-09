import { Menu } from "./core/menu";
import { clearAll } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modulesList = [];

    document.body.addEventListener(
      "contextmenu",
      this.handleContextmenuClick.bind(this)
    );

    this.el.addEventListener("click", this.handleMenuItemClick.bind(this));
  }

  open(pageX, pageY) {
    this.el.style = `left: ${pageX}px; top: ${pageY}px`;
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.modulesList.push(module);
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
  }

  handleContextmenuClick(event) {
    event.preventDefault();
    let x, y;
    if (window.innerWidth - 150 < event.pageX) {
      x = event.pageX - 150;
    } else {
      x = event.pageX;
    }
    if (window.innerHeight - event.pageY < this.el.offsetHeight) {
      y = event.pageY - this.el.offsetHeight;
    } else {
      y = event.pageY;
    }
    this.open(x, y);
  }

  handleMenuItemClick(event) {
    const module = this.modulesList.find(
      ({ type }) => type === event.target.dataset.type
    );
    if (module) {
      clearAll();
      module.trigger();
    }
    this.close();
  }
}
