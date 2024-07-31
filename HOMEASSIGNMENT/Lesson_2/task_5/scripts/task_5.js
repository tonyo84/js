//Крок 0. Позначення величин
//lengthInCentimeters
//lengthInMeters
//lengthInKilometers
//Крок 1. Введення
let lengthInCentimeters = parseFloat(prompt('Введіть довжину у сантиметрах', '5'))
//Крок 2. Обчислення
let lengthInMeters = lengthInCentimeters / 100
let lengthInKilometers = lengthInCentimeters / 100000
//Крок 3. Вивід
document.write(`Довжина у метрах = ${lengthInMeters}м., Довжина у кілометрах = ${lengthInKilometers}км.`);
