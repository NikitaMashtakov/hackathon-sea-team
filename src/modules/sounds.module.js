import { Module } from '../core/module'
import { random, loadSoundsFromJSON } from '../utils'

export class SoundsModule extends Module {
	#sounds = []
	#isLoaded = false

	constructor(type, text) {
		super(type, text)
	}

	async trigger() {
		if (!this.#isLoaded) {
			this.#sounds = await loadSoundsFromJSON('public/data/sounds.json')
			this.#isLoaded = true
		}

		const randomSound = this.#sounds[random(0, this.#sounds.length - 1)]
		const audio = new Audio(randomSound.url)
		audio.play()
	}
}
