function AngleEngine(fromValue, fromId, toId){
  this.toId = toId;
  this.fromId = fromId;
  this.fromValue = fromValue;
}

AngleEngine.prototype.DegreeToRadian = function(fv) {
  return (fv * 0.0174532925);
}

AngleEngine.prototype.RadianToRadian = function(fv) {
  return fv;
}

AngleEngine.prototype.RadianToDegree = function(fv) {
  return (fv / 0.0174532925);
}

AngleEngine.prototype.Convert = function(){
  var intermediateRadianValue;
  switch (this.fromId) {
    case "Degree":
      intermediateRadianValue = this.DegreeToRadian(this.fromValue);
      break;
    case "Radian":
      intermediateRadianValue = this.RadianToRadian(this.fromValue);
      break;
  }

  var finalValue;
  switch(this.toId){
    case "Degree":
      finalValue = this.RadianToDegree(intermediateRadianValue);
      break;
    case "Radian":
      finalValue = this.RadianToRadian(intermediateRadianValue)
      break;
  }

  return finalValue;
}