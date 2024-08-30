function centimetersToInches(centimeters, inch = 0.394) {
  return centimeters * inch;
}
let centimeters = parseFloat(prompt("Скільки сантиметрів перевести дюйми?"));
let inches = centimetersToInches(centimeters);
document.write(`Результат: в ${centimeters} сантиметрах - ${inches.toFixed(2)} дюйми <br>`);

function kilogramsToPounds(kilograms, pound = 2.205) {
  return kilograms * pound;
}
let kilograms = parseFloat(prompt("Скільки кілограмів перевести фунти?"));
let pounds = kilogramsToPounds(kilograms);
document.write(`Результат: в ${kilograms} кілограмах - ${pounds.toFixed(2)} фунта<br>`);

function kilometersToMiles(kilometers, mile = 0.621) {
  return kilometers * mile;
}
let kilometers = parseFloat(prompt("Скільки кілометрів перевести милі?"));
let miles = kilometersToMiles(kilometers);
document.write(`Результат: в ${kilometers} кілометрах - ${miles.toFixed(2)} миль`);
