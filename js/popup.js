import {data, generateData} from './data.js';
// const featureListElement = offerCardTemplate.querySelector('.popup__features');
// const modifiers = featuresData.map((feature) => `popup__feature--${feature}`);
// featureListElement.querySelectorAll('.popup__feature')
//   .forEach((item) => {
//     const modifier = item.classList[1];

//     if (! modifiers.includes(modifier)) {
//       item.remove();
//     }
//   });


const offerList = document.querySelector('.map__canvas');
const offerCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const fragment = document.createDocumentFragment();

generateData(3);


data.forEach((element) => {
  const offerElement = offerCardTemplate.cloneNode(true);

  offerElement.querySelector('.popup__avatar').src = element.author.avatar;
  offerElement.querySelector('.popup__title').textContent = element.offer.title;
  offerElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = element.offer.description;
  offerElement.querySelector('.popup__text--address').textContent = element.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;

  fragment.appendChild(offerElement);
});

offerList.appendChild(fragment);
