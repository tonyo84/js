function multiTask() {
  let evenNumber = 0;
  let positiveNumber = 0;
  let graterThanHundred = 0;
  for (let i = 0; i < 3; i++) {
    let num = parseInt(prompt("Input a number"));
    if (num % 2 === 0) evenNumber++;
    if (num > 0) positiveNumber++;
    if (num > 100) graterThanHundred++;
  }
  return { positiveNumber, evenNumber, graterThanHundred };
}
const result = multiTask();
document.write(
  `Кількість додатних чисел:${result.positiveNumber},кількість парних чисел: ${result.evenNumber},кількість більших за 100 чисел: ${result.graterThanHundred}`
);
