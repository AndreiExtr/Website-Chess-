const gridContainer = document.querySelector('.grid-container');
const gridItems = gridContainer.querySelectorAll('.slider-item'); // Только элементы с классом 'slider-item'
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
const indicators = document.querySelectorAll('.indicator');

let currentIndexV = 0;
const totalItems = gridItems.length; // Количество элементов слайдера

// Функция для перемещения слайдера
function scrollSliderV(direction) {
  currentIndexV = (currentIndexV + direction + totalItems) % totalItems; // Новая позиция
  const offset = -currentIndexV * (gridItems[0].offsetWidth + 40); // Смещение с учетом отступа
  gridContainer.style.transform = `translateX(${offset}px)`; // Применяем трансформацию

  // Обновляем индикаторы
  setActiveIndicator(currentIndexV);

  // Обновляем кнопки
  updateArrows();
}

// Функция для обновления индикаторов
function setActiveIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Функция для обновления состояния стрелок
function updateArrows() {
  leftArrow.classList.toggle('inactive', currentIndexV === 0);
  leftArrow.classList.toggle('active', currentIndexV !== 0);
  rightArrow.classList.toggle('inactive', currentIndexV === totalItems - 1);
  rightArrow.classList.toggle('active', currentIndexV !== totalItems - 1);
}

// Делаем первый индикатор активным по умолчанию
setActiveIndicator(0);

// Обновляем состояние стрелок по умолчанию
updateArrows();

// Привязываем обработчики событий к стрелкам
leftArrow.addEventListener('click', () => scrollSliderV(-1)); // Перемещаем влево
rightArrow.addEventListener('click', () => scrollSliderV(1)); // Перемещаем вправо
