//Крок 0. Позначення величин
//firstKidName - ім'я першої дитини
//firstKidCandys - кількість цукерок у першої дитини
//secondKidName - ім'я другої дитини
//secondKidCandys - кількість цукерок у другої дитини
//Крок 1. Введення
let firstKidName = prompt("Введіть ім'я першої дитини", "Андрій");
let firstKidCandys = parseInt(prompt("Введіть кількість цукерок у першої дитини", "5"));
let secondKidName = prompt("Введіть ім'я другої дитини", "Артем");
let secondKidCandys = parseInt(prompt("Введіть кількість цукерок у другої дитини", "5"));
//Крок 2. Обчислення
if (firstKidCandys > secondKidCandys)
  document.write(`Більше цукерок у ${firstKidName}`);
else if (secondKidCandys > firstKidCandys)
  document.write(`Більше цукерок у ${secondKidName}`);
else document.write(`Кількість цукерок однакова`);
