import { ContextMenu } from "./menu";
import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const menu = new ContextMenu("#menu");
  document.body.appendChild(menu.el);

  document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    menu.open(event.pageX, event.pageY);
  });
});
