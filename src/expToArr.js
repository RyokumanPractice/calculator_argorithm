function expToArr(str) {
  const arr = [...str];
  const opt = /[\)\(\+\-\*\/]/; // eslint-disable-line
  const num = /[0-9]/;

  const result = [];
  let temp = "";

  while (arr.length !== 0) {
    const value = arr.shift();
    if (opt.test(value)) {
      if (temp) result.push(temp, value);
      else result.push(value);
      temp = "";
    }
    if (num.test(value)) temp += value;
    if (arr.length === 0) result.push(temp);
  }

  return result;
}

export default expToArr;
