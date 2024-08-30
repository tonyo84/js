function getAboveZeroAverageTemperature(
  tempReadingsNumber,
  aboveZeroTempCount,
  totalAboveZeroTemperature
) {
  tempReadingsNumber = parseInt(prompt("Скільки разів знімали показники?"));
  aboveZeroTempCount = 0;
  totalAboveZeroTemperature = 0;
  for (let i = 0; i < tempReadingsNumber; i++) {
    tempReadings = parseFloat(prompt("Яка зараз температура?"));
    if (tempReadings > 0) aboveZeroTempCount++;
    if (tempReadings > 0) totalAboveZeroTemperature += tempReadings;
  }
  return totalAboveZeroTemperature / aboveZeroTempCount;
}
let temp = getAboveZeroAverageTemperature();
document.write(`Cереднє значення для додатних показів температури: ${temp.toFixed(1)}`);
