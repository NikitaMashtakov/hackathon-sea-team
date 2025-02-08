import { Module } from "../core/module";
import { random } from "../utils";

export class StarSkyModule extends Module {
  trigger() {
    console.log("StarSkyModule.trigger() called");
    this.createStarSky();
  }
  createStarSky() {
    document.body.style.backgroundColor = "black";
    console.log("typeof this.createStars:", typeof this.createStars);
    const canvas = document.createElement("canvas");
    canvas.id = "starSkyCanvas";
    document.body.appendChild(canvas);
    console.log(canvas);

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width, canvas.height);

    const ctx = canvas.getContext("2d");
    console.log(ctx);

    const stars = this.createStars(200); //this.createStars.bind(this)(200);
    console.log(stars);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
    animate();
  }

  createStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = random(0, window.innerWidth);
      const y = random(0, window.innerHeight);
      const radius = random(1, 3);
      const speed = random(0.1, 0.5);
      stars.push(new Star(x, y, radius, speed));
    }
    return stars;
  }
}

class Star {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.alpha = 1;
  }

  update() {
    console.log("star.update() called");
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.x = random(0, window.innerWidth);
    }
  }

  draw(ctx) {
    console.log("star.draw() called");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
    ctx.closePath();
  }
}
