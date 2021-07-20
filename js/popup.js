import {data, generateData} from './data.js';

const offerList = document.querySelector('.map__canvas');
const offerCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photoTemplate = offerCardTemplate.querySelector('.popup__photo');
const typesToNames = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

generateData(1);
// ({author, offer, location})
const renderCard = ({author, offer}) => {
  const offerElement = offerCardTemplate.cloneNode(true);
  const photoList = offerElement.querySelector('.popup__photos');
  photoList.innerHTML = '';

  if (author.avatar) {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    offerElement.querySelector('.popup__avatar').classList.add('hidden');
  } if (offer.title) {
    offerElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    offerElement.querySelector('.popup__title').textContent = '';
    offerElement.querySelector('.popup__title').classList.add('hidden');
  } if (Number.isFinite(offer.rooms) && Number.isFinite(offer.guests)) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    offerElement.querySelector('.popup__text--capacity').textContent = '';
    offerElement.querySelector('.popup__text--capacity').classList.add('hidden');
  } if (offer.checkin && offer.checkout) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    offerElement.querySelector('.popup__text--time').textContent = '';
    offerElement.querySelector('.popup__text--time').classList.add('hidden');
  } if (offer.description) {
    offerElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    offerElement.querySelector('.popup__description').textContent = '';
    offerElement.querySelector('.popup__description').classList.add('hidden');
  } if (offer.address) {
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    offerElement.querySelector('.popup__text--address').textContent = '';
    offerElement.querySelector('.popup__text--address').classList.add('hidden');
  } if (Number.isFinite(offer.price)) {
    offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    offerElement.querySelector('.popup__text--price').textContent = '';
    offerElement.querySelector('.popup__text--price').classList.add('hidden');
  } if (offer.type) {
    offerElement.querySelector('.popup__type').textContent = typesToNames[offer.type];
  } else {
    offerElement.querySelector('.popup__type').textContent = '';
    offerElement.querySelector('.popup__type').classList.add('hidden');
  } if (offer.photos && offer.photos.length) {
    offer.photos.forEach((photo) => {
      const photoElement = photoTemplate.cloneNode();
      photoElement.src = photo;
      photoList.appendChild(photoElement);
    });
  }

  if (offer.features && offer.features.length) {
    const popupFeatures = offerElement.querySelector('.popup__features');
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    popupFeatures.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const modifier = item.classList[1];

        if (!modifiers.includes(modifier)) {
          item.remove();
        }
      });
  } else {
    offerElement.querySelector('.popup__features').classList.add('hidden');
  }

  offerList.appendChild(offerElement);
};

renderCard(data[0]);
