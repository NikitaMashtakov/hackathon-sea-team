import { Module } from '../core/module'
import { random, loadDataFromJSON } from '../utils'

export class SoundsModule extends Module {
	#sounds = []
	#isLoaded = false

	async trigger() {
		if (!this.#isLoaded) {
			this.#sounds = await loadDataFromJSON('public/data/sounds.json', 'sounds')
			this.#isLoaded = true
		}

		const randomSound = this.#sounds[random(0, this.#sounds.length - 1)]
		const audio = new Audio(randomSound.url)
		audio.play()
	}
}
