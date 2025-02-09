export function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export async function loadSoundsFromJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.sounds;
  } catch (error) {
    console.error('Ошибка загрузки JSON:', error);
    return [];
  }
}

export function clearAll() {
  const container = document.querySelectorAll('.container');
  if (container) {
    container.forEach((el) => {
      el.remove();
    });
  }
}

export function generateRandomColor() {
  const max = 255;
  const min = 0;
  const randomColor_RR = random(min, max);
  const randomColor_GG = random(min, max);
  const randomColor_BB = random(min, max);
  return `rgb(${randomColor_RR}, ${randomColor_GG}, ${randomColor_BB})`;
}
