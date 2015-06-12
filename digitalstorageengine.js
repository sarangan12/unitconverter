function DigitalStorageEngine(fromValue, fromId, toId){
  this.toId = toId;
  this.fromId = fromId;
  this.fromValue = fromValue;
}

DigitalStorageEngine.prototype.BitToBit = function(fv) {
  return fv;
}

DigitalStorageEngine.prototype.ByteToBit = function(fv) {
  return (fv * 8);
}

DigitalStorageEngine.prototype.BitToByte = function(fv) {
  return (fv/8);
}

DigitalStorageEngine.prototype.KilobitToBit = function(fv) {
  return (fv * 1000);
}

DigitalStorageEngine.prototype.BitToKilobit = function(fv) {
  return (fv/1000);
}

DigitalStorageEngine.prototype.KilobyteToBit = function(fv) {
  return (fv * 8000);
}

DigitalStorageEngine.prototype.BitToKilobyte = function(fv) {
  return (fv/8000);
}

DigitalStorageEngine.prototype.MegabitToBit = function(fv) {
  return (fv * 1000000);
}

DigitalStorageEngine.prototype.BitToMegabit = function(fv) {
  return (fv/1000000);
}

DigitalStorageEngine.prototype.MegabyteToBit = function(fv) {
  return (fv * 8000000);
}

DigitalStorageEngine.prototype.BitToMegabyte = function(fv) {
  return (fv/8000000);
}

DigitalStorageEngine.prototype.GigabitToBit = function(fv) {
  return (fv * 1000000000);
}

DigitalStorageEngine.prototype.BitToGigabit = function(fv) {
  return (fv/1000000000);
}

DigitalStorageEngine.prototype.GigabyteToBit = function(fv) {
  return (fv * 8000000000);
}

DigitalStorageEngine.prototype.BitToGigabyte = function(fv) {
  return (fv/8000000000);
}

DigitalStorageEngine.prototype.TerabitToBit = function(fv) {
  return (fv * 1000000000000);
}

DigitalStorageEngine.prototype.BitToTerabit = function(fv) {
  return (fv/1000000000000);
}

DigitalStorageEngine.prototype.TerabyteToBit = function(fv) {
  return (fv * 8000000000000);
}

DigitalStorageEngine.prototype.BitToTerabyte = function(fv) {
  return (fv/1000000000000);
}

DigitalStorageEngine.prototype.PetabitToBit = function(fv) {
  return (fv * 1000000000000000);
}

DigitalStorageEngine.prototype.BitToPetabit = function(fv) {
  return (fv/1000000000000000);
}

DigitalStorageEngine.prototype.PetabyteToBit = function(fv) {
  return (fv * 8000000000000000);
}

DigitalStorageEngine.prototype.BitToPetabyte = function(fv) {
  return (fv/8000000000000000);
}

DigitalStorageEngine.prototype.Convert = function(){
  var intermediateBitValue;
  switch (this.fromId) {
    case "Bit":
      intermediateBitValue = this.BitToBit(this.fromValue);
	  break;
	case "Byte":
	  intermediateBitValue = this.ByteToBit(this.fromValue);
	  break;
	case "Kilobit":
	  intermediateBitValue = this.KilobitToBit(this.fromValue);
	  break;
	case "Kilobyte":
	  intermediateBitValue = this.KilobyteToBit(this.fromValue);
	  break;
	case "Megabit":
	  intermediateBitValue = this.MegabitToBit(this.fromValue);
	  break;
	case "Megabyte":
	  intermediateBitValue = this.MegabyteToBit(this.fromValue);
	  break;
	case "Gigabit":
	  intermediateBitValue = this.GigabitToBit(this.fromValue);
	  break;
	case "Gigabyte":
	  intermediateBitValue = this.GigabyteToBit(this.fromValue);
	  break;
	case "Terabit":
	  intermediateBitValue = this.TerabitToBit(this.fromValue);
	  break;
	case "Terabyte":
	  intermediateBitValue = this.TerabyteToBit(this.fromValue);
	  break;
	case "Petabit":
	  intermediateBitValue = this.PetabitToBit(this.fromValue);
	  break;
	case "Petabyte":
	  intermediateBitValue = this.PetabyteToBit(this.fromValue);
	  break;
  }

  var finalValue;
  switch(this.toId){
    case "Bit":
      finalValue = this.BitToBit(intermediateBitValue);
	  break;
	case "Byte":
	  finalValue = this.BitToByte(intermediateBitValue);
	  break;
	case "Kilobit":
	  finalValue = this.BitToKilobit(intermediateBitValue);
	  break;
	case "Kilobyte":
	  finalValue = this.BitToKilobyte(intermediateBitValue);
	  break;
	case "Megabit":
	  finalValue = this.BitToMegabit(intermediateBitValue);
	  break;
	case "Megabyte":
	  finalValue = this.BitToMegabyte(intermediateBitValue);
	  break;
	case "Gigabit":
	  finalValue = this.BitToGigabit(intermediateBitValue);
	  break;
	case "Gigabyte":
	  finalValue = this.BitToGigabyte(intermediateBitValue);
	  break;
	case "Terabit":
	  finalValue = this.BitToTerabit(intermediateBitValue);
	  break;
	case "Terabyte":
	  finalValue = this.BitToTerabyte(intermediateBitValue);
	  break;
	case "Petabit":
	  finalValue = this.BitToPetabit(intermediateBitValue);
	  break;
	case "Petabyte":
	  finalValue = this.BitToPetabyte(intermediateBitValue);
	  break;
  }

  return finalValue;
}