import { Module } from '../core/module';

export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.clickCount = 0;
		this.timeLimit = 3000;
	}

	trigger() {
		this.clickCount = 0;
		alert(`Анализ кликов запущен на ${this.timeLimit / 1000} секунд`);

		const clickHandler = () => this.clickCount++;
		this.blockClick = document.createElement('div');
		this.blockClick.classList.add('rectangle');
		document.body.appendChild(this.blockClick);

		document.addEventListener('click', clickHandler);
		document.addEventListener('dblclick', clickHandler);

		setTimeout(() => {
			this.blockClick.remove();
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
