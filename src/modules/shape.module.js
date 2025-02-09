import { Module } from "../core/module";
import { getRandomColor, random } from "../utils";

export class ShapeModule extends Module {
  trigger() {
    const container = document.querySelector("#modules-container");
    const randomShape = random(1, 3);
    let svg = null;
    switch (randomShape) {
      case 1:
        svg = this.showCircle();
        break;
      case 2:
        svg = this.showRectangle();
        break;
      case 3:
        const angles = random(3, 6);
        svg = this.showPolygon(angles);
        break;
      default:
        break;
    }
    container.appendChild(svg);
  }

  showCircle() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("fill", getRandomColor());
    svg.setAttribute(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );
    svg.setAttribute("stroke", "black");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", `${this.getRandomCoordinate()}`);
    circle.setAttribute("cy", `${this.getRandomCoordinate()}`);
    circle.setAttribute("r", `${200 * Math.random()}`);
    svg.append(circle);
    return svg;
  }

  showRectangle() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("fill", getRandomColor());
    svg.setAttribute(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );
    svg.setAttribute("stroke", "black");
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", `${this.getRandomCoordinate()}`);
    rect.setAttribute("y", `${this.getRandomCoordinate()}`);
    rect.setAttribute("width", `${200 * Math.random()}`);
    rect.setAttribute("height", `${200 * Math.random()}`);

    svg.append(rect);
    return svg;
  }

  showPolygon(number) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("fill", getRandomColor());
    svg.setAttribute(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );
    svg.setAttribute("stroke", "none");

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    let points = [];
    for (let i = 0; i < number; i++) {
      const coord = `${this.getRandomCoordinate()},${this.getRandomCoordinate()}`;
      points.push(coord);
    }
    const p = points.join(" ");
    polygon.setAttribute("points", `${p}`);
    svg.append(polygon);
    return svg;
  }

  getRandomCoordinate() {
    return (window.innerWidth / 2) * Math.random();
  }
}
