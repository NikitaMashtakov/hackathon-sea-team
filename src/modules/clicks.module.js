import { Module } from '../core/module';

export class ClicksModule extends Module {

	constructor(type, text, timeLimit) {
		super(type, text);
		this.clickCount = 0;
		this.timeLimit = timeLimit;
	}

  trigger() {
    this.clickCount = 0;
    alert(`Анализ кликов запущен на ${this.timeLimit / 1000} секунд`);
		const clickHandler = () => {
			this.clickCount++;
		};

		this.btnClick = document.createElement('button');
		this.btnClick.textContent = 'click me';
		this.btnClick.classList.add('button');
		document.body.appendChild(this.btnClick);

		this.btnClick.addEventListener('click', clickHandler);
		this.btnClick.addEventListener('dblclick', clickHandler);

		setTimeout(() => {
			this.btnClick.remove();
			document.removeEventListener('click', clickHandler);
			document.removeEventListener('dblclick', clickHandler);
			alert(
				`Вы сделали ${this.clickCount} кликов за ${
					this.timeLimit / 1000
				} секунд`
			);
		}, this.timeLimit);
	}
}
