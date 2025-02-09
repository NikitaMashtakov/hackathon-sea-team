export function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export async function loadDataFromJSON(url, key) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[key] || [];
  } catch (error) {
    console.error(`Ошибка загрузки JSON (${key}):`, error);
    return [];
  }
}

export function clearAll() {
  const container = document.querySelectorAll(".container");
  if (container) {
    container.forEach((el) => {
      el.remove();
    });
  }
}

export function renderCityCards(cities, containerSelector, activeCard = 0) {
  const container = document.createElement("div");
  container.classList.add("city-container");

  cities.forEach((city, index) => {
    const slide = document.createElement("div");
    slide.classList.add("city-card");
    slide.style.backgroundImage = `url('${city.url}')`;

    const title = document.createElement("h3");
    title.textContent = city.name;

    slide.appendChild(title);
    container.appendChild(slide);
  });

  containerSelector.appendChild(container);

  const cards = container.querySelectorAll(".city-card");

  if (cards.length > 0) {
    const activeIndex = cards.length > activeCard ? activeCard : 0;
    cards[activeIndex].classList.add("active");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        clearActiveClasses();
        card.classList.add("active");
      });
    });
  }

  function clearActiveClasses() {
    cards.forEach((card) => card.classList.remove("active"));
  }
}
