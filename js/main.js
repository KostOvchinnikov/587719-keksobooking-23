const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if ((min < 0) | (max < 0) | (min >= max)) {
    return undefined;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getRandomNum = function (min, max, simbolsAfterComma) {

  if ((min < 0) | (max < 0) | (min >= max)) {
    return undefined;
  }

  return Number((Math.random() * (max - min) + min).toFixed(simbolsAfterComma));
};

getRandomNum(0, 100, 2);
