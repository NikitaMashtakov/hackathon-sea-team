import { Module } from '../core/module';

export class TimerModule extends Module {
	constructor() {
		super('timer', 'Таймер отсчета');
		this.timerContainer = null;
		this.interval = null;
	}

	trigger() {
		const userInput = prompt('Введите время в секундах:');
		const time = parseInt(userInput, 10);

		if (time <= 0) {
			alert('Введите число больше 0');
			return;
		}

		this.createTimer(time);
	}

	createTimer(time) {
		if (this.timerContainer) {
			this.removeTimer();
		}

		this.timerContainer = document.createElement('div');
		this.timerContainer.classList.add('timer-container');
		document.body.appendChild(this.timerContainer);

		this.updateTimerDisplay(time);

		this.interval = setInterval(() => {
			time--;
			if (time < 0) {
				clearInterval(this.interval);
				alert('Время истекло!');
				this.removeTimer();
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
