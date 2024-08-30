function isWorkingDay(dayNum) {
  return dayNum > 0 && dayNum <= 5;
}
let dayNum = parseInt(prompt("Input day number"));
if (isWorkingDay(dayNum)) document.write(`Робочий день`);
else document.write(`Вихідний день`);
