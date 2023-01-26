function expCalculate(arr) {
  const stack = [];

  while (arr.length !== 0) {
    const value = arr.shift();

    if (/[0-9]/.test(value)) stack.push(Number(value));
    else {
      const first = stack.pop();
      const second = stack.pop();
      if (value === "-") stack.push(second - first);
      if (value === "+") stack.push(second + first);
      if (value === "*") stack.push(second * first);
      if (value === "/") stack.push(second / first);
    }
  }

  return stack;
}

export default expCalculate;
