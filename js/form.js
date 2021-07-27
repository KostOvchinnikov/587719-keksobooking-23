const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGHT = 100;
const MAX_PRICE_VALUE = 1000000;

const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

titleInput.addEventListener('input', () => {
  const valueLenght = titleInput.value.length;

  if (valueLenght < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity('Длина заголовка должна быть не меньше 30 символов');
  } else if (valueLenght > MAX_TITLE_LENGHT) {
    titleInput.setCustomValidity('Максимальная длина заголовка не должна превышать 100 символов');
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;

  if (priceValue > 1000000) {
    priceInput.setCustomValidity(`Цена не может превышать ${MAX_PRICE_VALUE} ₽`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

const roomsCountToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

capacitySelect.addEventListener('change', (evt) => {
  const capacitySelected = evt.target.value;
  if (!roomsCountToGuests[roomSelect.value].includes(capacitySelected)) {
    capacitySelect.setCustomValidity('Превышено количество гостей!');
  } else {
    capacitySelect.setCustomValidity('');
  }

  capacitySelect.reportValidity();
});
