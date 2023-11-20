var countBits = function (n) {
  let output = n.toString(2);

  let total = 0;

  for (let i = 0; i < output.length; i++) {
    let addNum = +output[i];
    total = addNum + total;
  }
  return total;
};
