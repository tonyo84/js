function getSum(a, b, c, d) {
  return a + b + c + d;
}
let sum = getSum(1, 2, 3, 4);
document.write(`Сума дорівнює ${sum}`);

function getProduct(a, b, c, d) {
  return a * b * c * d;
}
let product = getProduct(1, 2, 3, 4);
document.write(`Добуток дорівнює ${product}`);

function getAverage(a, b, c, d) {
  return (a + b + c + d) / 4;
}
let average = getAverage(1, 2, 3, 4);
document.write(`Cереднє арифметичне дорівнює ${average}`);

function getMinimum(a, b, c, d) {
  let min = a;
  if (b < min) min = b;
  else if (c < min) min = c;
  else if (d < min) min = d;
  return min;
}
let minimum = getMinimum(5, 6, 3, 4);
document.write(`Mінімальне значення дорівнює ${minimum}`);

function getMinimum2(a, b, c, d) {
  return Math.max(a, b, c, d);
}
