const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let int;

  if (min < 0) {
    return undefined;
  } else if (max < 0) {
    return undefined;
  } else {
    int = Math.floor(Math.random() * (max - min + 1)) + min;
    return int;
  }
};

getRandomInt(0, 100);

const getRandomNum = function (min, max, simbolsAfterComma) {
  let num;

  if (min < 0) {
    return undefined;
  } else if (max < 0) {
    return undefined;
  } else {
    num = Math.random() * (max - min) + min;
  }

  if (!num) {
    undefined;
  }

  return num.toFixed(simbolsAfterComma);
};

getRandomNum(0, 100, 2);
