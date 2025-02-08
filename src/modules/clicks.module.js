import { Module } from '../core/module';

export class ClicksModule extends Module {
	constructor() {
		super('clicks', 'Анализ кликов');
		this.clickCount = 0;
		this.timeLimit = 3000;
	}

	trigger() {
		this.clickCount = 0;
		alert(`Анализ кликов запущен на ${this.timeLimit / 1000} секунд`);

		const clickHandler = () => this.clickCount++;

		document.addEventListener('click', clickHandler);
		document.addEventListener('dblclick', clickHandler);

		setTimeout(() => {
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
