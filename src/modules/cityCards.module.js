import { Module } from '../core/module'
import { loadDataFromJSON, renderCityCards } from '../utils'

export class CityCardsModule extends Module {
	#cities = []
	#isLoaded = false

	async trigger() {
		if (!this.#isLoaded) {
			this.#cities = await loadDataFromJSON(
				'public/data/cityCards.json',
				'cities'
			)
			this.#isLoaded = true
		}

		const container = document.createElement('div')
		container.className = 'container'
		renderCityCards(this.#cities, container, 3)
		document.body.append(container)
	}
}
