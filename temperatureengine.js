function TemperatureEngine(fromValue, fromId, toId){
  this.toId = toId;
  this.fromId = fromId;
  this.fromValue = fromValue;
}

TemperatureEngine.prototype.FarenheitToCelsius = function(fv) {
  return (((fv - 32) * 5)/9);
}

TemperatureEngine.prototype.KelvinToCelsius = function(fv) {
  return (fv - 273.15);
}

TemperatureEngine.prototype.CelsiusToCelsius = function(fv) {
  return fv;
}

TemperatureEngine.prototype.CelsiusToFarenheit = function(fv) {
  return ((fv * (9/5)) + 32);
}

TemperatureEngine.prototype.CelsiusToKelvin = function(fv) {
  returb (fv + 273.15);
}

TemperatureEngine.prototype.Convert = function() {
  var intermediateCelsiusValue;
  switch (this.fromId) {
    case "Farenheit":
      intermediateCelsiusValue = this.FarenheitToCelsius(this.fromValue);
      break;
    case "Celsius":
      intermediateCelsiusValue = this.CelsiusToCelsius(this.fromValue);
      break;
    case "Kelvin":
      intermediateCelsiusValue = this.KelvinToCelsius(this.fromValue);
      break;
  }

  var finalValue;
  switch(this.toId){
    case "Farenheit":
      finalValue = this.CelsiusToFarenheit(intermediateCelsiusValue);
      break;
    case "Celsius":
      finalValue = this.CelsiusToCelsius(intermediateCelsiusValue);
      break;
    case "Kelvin":
      finalValue = this.CelsiusToKelvin(intermediateCelsiusValue);
      break;
  }

  return finalValue;
}