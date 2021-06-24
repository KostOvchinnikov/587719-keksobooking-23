const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if ((min >= max) || (min < 0) || (max < 0)) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getRandomNum = function (min, max, simbolsAfterComma) {

  if ((min >= max) || (min < 0) | (max < 0)) {
    return;
  }

  return Number((Math.random() * (max - min) + min).toFixed(simbolsAfterComma));
};

getRandomNum(0, 100, 2);

const titleData = [
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

const typeData = [
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

const descriptionData = [
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
    avatar: 'img/avatars/user' + getRandomInt(1, 10) + '.png',
  };
  return author;
};

const generateLocation = function () {
  const location = {
    lat: getRandomNum(35.65, 35.7, 5),
    lng: getRandomNum(139.7, 139.8, 5),
  };
  return location;
};

const generateOffer = function () {
  const offer = {
    title: getRandomItem(titleData),
    // address: location.lat.join(location.lng),
    price: Math.floor(Math.random() * 10000),
    type: getRandomItem(typeData),
    rooms: getRandomInt(1, 10),
    guests: getRandomInt(1, 10),
    checkin: getRandomItem(checkInOutData),
    checkout: getRandomItem(checkInOutData),
    features: getRandomItem(featuresData),
    description: getRandomItem(descriptionData),
    photos: getRandomItem(photosData),
  };
  return offer;
};

const generateData = function (number) {
  const data = [];
  for (let i = 0; i <= number - 1; i++) {
    data.push({
      author: generateAuthor(),
      offer: generateOffer(),
      location: generateLocation(),
    });
  }

  return data;
};

generateData(10);
// console.log(generateData(10));
