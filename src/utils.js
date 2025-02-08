export function random(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1))
}

export async function loadSoundsFromJSON(url) {
	try {
		const response = await fetch(url)
		const data = await response.json()
		return data.sounds
	} catch (error) {
		console.error('Ошибка загрузки JSON:', error)
		return []
	}
}
