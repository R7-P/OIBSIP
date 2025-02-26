function convertTemperature() {
  const tempInput = document.getElementById('tempInput').value;
  const unit = document.getElementById('unit').value;
  const result = document.getElementById('result');

  // Check if input is a valid number
  if (isNaN(tempInput) || tempInput === '') {
    result.textContent = "Please enter a valid number.";
    return;
  }

  const temperature = parseFloat(tempInput);
  let convertedTemp;
  let unitLabel;

  // Perform the conversion based on selected unit
  if (unit === 'celsius') {
    convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    unitLabel = '°F';
  } else if (unit === 'fahrenheit') {
    convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    unitLabel = '°C';
  } else if (unit === 'kelvin') {
    convertedTemp = temperature + 273.15; // Celsius to Kelvin
    unitLabel = 'K';
  }

  result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitLabel}`;
}
