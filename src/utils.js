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
  const container = document.querySelector("#modules-container");
  if (container) {
    const newContainer = document.createElement("div");
    newContainer.id = "modules-container";
    container.replaceWith(newContainer);
  }
  document.body.style.backgroundColor = "#fff";
}

export function greetingMessage() {
  const container = document.querySelector("#modules-container");
  const greeting = document.createElement("div");
  greeting.className = "greeting";
  greeting.innerHTML = `<h1>Добро пожаловать!</h1>
    <p>Вы используете плагин Морской команды хакатона от Result University</p>
    <p>Для начала работы нажмите Правую кнопку мыши</p>
    <ol>
      <li>Звездное небо. Наблюдайте звездное небо на своем экране! Это
        завораживает!</li>
              <li>Случайный цвет фона. Поменяйте простой белый цвет на более интересный!</li>
      <li>
        Таймер отсчета. Нужен таймер? Просто введите время в секундах и начнется
        отсчет!
      </li>
      <li>Кликометр. Проверь скорость своих пальцев!</li>
      <li>Случайный звук. Хочешь пощекотать нервишки?!</li>
      <li>Рандомное сообщение. Не пацанские цитатки, но тоже неплохо!</li>
      <li>
        Случайная фигура. Проверь свою удачу! Выпадет ли тебе любимый цвет
        фигуры?
      </li>
      <li>Фотогалерея. Посмотри на одни из самых красивых городов мира!</li>
      <li>Очистить все. Хочешь вернуться на стартовую страницу? Легко!</li>
    </ol>`;
  container.append(greeting);
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

export function getRandomColor() {
  const max = 255;
  const min = 0;
  const randomColor_RR = random(min, max);
  const randomColor_GG = random(min, max);
  const randomColor_BB = random(min, max);
  return `rgb(${randomColor_RR}, ${randomColor_GG}, ${randomColor_BB})`;
}
