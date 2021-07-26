const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGHT = 100;
const MAX_PRICE_VALUE = 1000000;

const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
// const capacity1 = capacitySelect.querySelector('option[value="1"]');
// const capacity2 = capacitySelect.querySelector('option[value="2"]');
// const capacity3 = capacitySelect.querySelector('option[value="3"]');
// const capacity0 = capacitySelect.querySelector('option[value="0"]');

// Временное решение
/*
window.addEventListener('load', () => {
  capacity1.disabled = false;
  capacity2.disabled = true;
  capacity3.disabled = true;
  capacity0.disabled = true;
});
*/

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

  if (roomSelect.value === '1' && !roomsCountToGuests[1].includes(capacitySelected)) {
    capacitySelect.setCustomValidity('Превышено количество гостей!');
  } else if (roomSelect.value === '2' && !roomsCountToGuests[2].includes(capacitySelected)) {
    capacitySelect.setCustomValidity('Превышено количество гостей!');
  } else if (roomSelect.value === '3' && !roomsCountToGuests[3].includes(capacitySelected)) {
    capacitySelect.setCustomValidity('Превышено количество гостей!');
  } else if (roomSelect.value === '100' && !roomsCountToGuests[100].includes(capacitySelected)) {
    capacitySelect.setCustomValidity('Превышено количество гостей!');
  } else {
    capacitySelect.setCustomValidity('');
  }

  capacitySelect.reportValidity();
});
