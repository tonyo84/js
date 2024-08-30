function getBelowZeroTempCount(tempReadingsNumber, tempReadings) {
  tempReadingsNumber = parseInt(
    prompt("Скільки разів знімались показники температури?")
  );
  let tempBelowZeroCount = 0;
  for (let i = 0; i < tempReadingsNumber; i++) {
    tempReadings = parseFloat(prompt("Яка зараз температура?"));
    if (tempReadings < 0) tempBelowZeroCount++;
  }
  return tempBelowZeroCount;
}
let temp = getBelowZeroTempCount();
document.write(`Kількість від’ємних показів температури: ${temp}`);
