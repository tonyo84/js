//Крок 0. Позначення величин
//productPrice - ціна товару
//cashAmount - кількість грошей
//lotteryPrice - ціна лотореї
//Крок 1. Введення
const lotteryPrice = 4
let productPrice = parseFloat(prompt('Ціна товару', '5'))
let cashAmount = parseFloat(prompt('Введіть кількість грошей','25'))
//Крок 2. Обчислення
if (productPrice > cashAmount)
  document.write(`Вибачте, у Вас не вистачає грошей`);
else if (cashAmount > productPrice && cashAmount >= lotteryPrice)
  document.write(`Бажаєте придбати лоторею за 4гривні ?`);
else document.write(`Дякуємо за покупку`);
