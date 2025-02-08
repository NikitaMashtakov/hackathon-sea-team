export function random(min, max) {
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
