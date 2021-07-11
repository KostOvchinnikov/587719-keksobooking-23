const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if ((min >= max) || (min < 0) || (max < 0)) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNum = function (min, max, simbolsAfterComma) {

  if ((min >= max) || (min < 0) | (max < 0)) {
    return;
  }

  return Number((Math.random() * (max - min) + min).toFixed(simbolsAfterComma));
};

export {getRandomInt, getRandomNum};
