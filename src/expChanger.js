function expChanger(arr) {
  const first = /[\*\/]/; // eslint-disable-line
  const second = /[\(\+\-]/; // eslint-disable-line
  const opd = /[0-9]/;

  const result = [];
  const stack = [];

  while (arr.length !== 0) {
    const value = arr.shift();

    if (opd.test(value)) {
      result.push(value);
      if (first.test(stack[stack.length - 1])) result.push(stack.pop());
    }
    if (first.test(value)) stack.push(value);
    if (second.test(value)) stack.push(value);
    if (value === ")")
      while (stack.length !== 0) {
        const v = stack.pop();
        if (v === "(") break;
        result.push(v);
      }
  }
  result.push(...stack);
  return result;
}

export default expChanger;
