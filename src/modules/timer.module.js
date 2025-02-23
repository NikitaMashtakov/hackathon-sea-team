import { Module } from "../core/module";
import { clearAll, greetingMessage } from "../utils";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCount = 0;
  }

  trigger() {
    const userInput = prompt("Введите время в секундах:");
    const time = parseInt(userInput, 10);

    if (isNaN(time) || time <= 0) {
      alert("Введите число больше 0");
      clearAll();
      greetingMessage();
      return;
    }

    this.createTimer(time);
  }

  createTimer(time) {
    if (this.timerContainer) {
      this.removeTimer();
    }
    const modulesContainer = document.querySelector("#modules-container");
    this.timerContainer = document.createElement("div");
    this.timerContainer.classList.add("timer-container");
    modulesContainer.appendChild(this.timerContainer);

    this.updateTimerDisplay(time);

    this.interval = setInterval(() => {
      time--;
      if (time < 0) {
        clearInterval(this.interval);
        alert("Время истекло!");
        this.removeTimer();
        clearAll();
        greetingMessage();
      } else {
        this.updateTimerDisplay(time);
      }
    }, 1000);
  }

  updateTimerDisplay(time) {
    this.timerContainer.textContent = `Осталось: ${time} сек`;
  }

  removeTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timerContainer) {
      this.timerContainer.remove();
      this.timerContainer = null;
    }
  }
}
