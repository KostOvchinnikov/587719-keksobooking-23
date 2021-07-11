import {getRandomInt, getRandomNum} from './util.js';

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;

const titlesData = [
  'Заголовок предложения',
  'Предложения заголовок',
  'Квартира',
  'Номер - люкс',
  'Номер не люкс',
  'Двухместный номер',
  'Трехместный номер',
  'Четырехместный номер',
  'Номер на берегу моря',
  'Потрясающие апартаменты',
];

const typesData = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const featuresData = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const checkInOutData = [
  '12:00',
  '13:00',
  '14:00',
];

const descriptionsData = [
  'Чистое большое светлое помещение',
  'Грязное маленькое темное помещение',
  'Уютная квартира в центре Санкт-Петербурга',
];

const photosData = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomItem = function (array) {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

const generateAuthor = function () {
  const author = {
    avatar: `img/avatars/user0${getRandomInt(1, 9)}.png`,
  };
  return author;
};

const generateLocation = function () {
  const location = {
    lat: getRandomNum(LAT_MIN, LAT_MAX, 5),
    lng: getRandomNum(LNG_MIN, LNG_MAX, 5),
  };
  return location;
};

const getRandomArr = (accumulator, currentValue) => {
  const a = Math.random() > 0.5;
  if (a) {
    accumulator.push(currentValue);
  }
  return accumulator;
};

const generateOffer = function (location) {
  const offer = {
    title: getRandomItem(titlesData),
    address: `${location.lat}, ${location.lng}`,
    price: getRandomInt(100, 10000),
    type: getRandomItem(typesData),
    rooms: getRandomInt(1, 10),
    guests: getRandomInt(1, 10),
    checkin: getRandomItem(checkInOutData),
    checkout: getRandomItem(checkInOutData),
    features: featuresData.reduce(getRandomArr, []),
    description: getRandomItem(descriptionsData),
    photos: photosData.reduce(getRandomArr, []),
  };
  return offer;
};

generateOffer(generateLocation());

const generateData = function (number) {
  const location = generateLocation();
  const data = [];
  for (let i = 0; i <= number - 1; i++) {
    data.push({
      author: generateAuthor(),
      offer: generateOffer(location),
      location,
    });
  }

  return data;
};

export {generateData};
