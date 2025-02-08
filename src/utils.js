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
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function clearAll() {
  const container = document.querySelectorAll(".container");
  if (container) {
    container.forEach((el) => {
      el.remove();
    });
  }
}
