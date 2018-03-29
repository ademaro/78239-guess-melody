const mainContainerEl = document.querySelector('.main');
const allTemplatesEl = document.querySelector('template').content.querySelectorAll('.main');
const screens = Array.from(allTemplatesEl);

/**
 * Показываем экран по индексу
 * @param {number} currentIndexScreen - индекс экрана для показа
 */
const showScreen = (currentIndexScreen) => {
  mainContainerEl.innerHTML = ``;
  mainContainerEl.appendChild(screens[currentIndexScreen].cloneNode(true));
};

const showScreenHandler = (ev) => {
  const minIndexScreen = 0;
  const maxIndexScreen = screens.length - 1;
  const KeyCodes = {
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39
  };
  if (ev.altKey && ev.keyCode === KeyCodes.ARROW_LEFT) {
    if (currentIndexScreen > minIndexScreen) {
      showScreen(--currentIndexScreen);
    }
  } else if (ev.altKey && ev.keyCode === KeyCodes.ARROW_RIGHT) {
    if (currentIndexScreen < maxIndexScreen) {
      showScreen(++currentIndexScreen);
    }
  }
};

let currentIndexScreen = 0;
showScreen(currentIndexScreen);
document.addEventListener(`keydown`, showScreenHandler);
