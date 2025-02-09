import { Module } from '../core/module';
import { random } from '../utils';

export class StarSkyModule extends Module {
  trigger() {
    this.createStarSky();
  }

  createStarSky() {
    const container = document.createElement("div");
    container.id = "starSkyContainer";
    container.classList.add("container");
    container.classList.add("star-sky-container");
    document.body.appendChild(container);

    const canvas = document.createElement("canvas");
    canvas.id = "starSkyCanvas";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    setCanvasSize();

    let stars = this.createStars(200);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    animate();


    window.addEventListener("resize", () => {
      setCanvasSize();
      stars = this.createStars(200);
      animate();
    });
  }

  createStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = random(0, window.innerWidth);
      const y = random(0, window.innerHeight);
      const radius = random(1, 3);
      const speed = 0.2;
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
    this.y += this.speed;
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.x = random(0, window.innerWidth);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
    ctx.closePath();
  }
}
