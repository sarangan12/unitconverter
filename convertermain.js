var app = angular.module('converter_mainapp', []);
var categories = [
   {'name': 'Temperature',      'units': ['Celsius', 'Farenheit', 'Kelvin']},
   {'name': 'Mass',             'units': ['Kilogram', 'Milligram', 'Gram', 'Pound', 'Ounce', 'Ton(Metric)', 'Ton(US)', 'Quarter(US)', 'Quarter(UK)', 'Stone(UK)', 'Carat', 'Grain', 'Troy Ounces']},
   {'name': 'Volume',           'units': ['Liter', 'Milliliter', 'Cubic Meter', 'Cubic foot', 'Cubic Inch', 'Cup(Metric)', 'Cup(US)', 'Gallons(US)', 'Quarts(US)', 'Pint(US)', 'Fluid Ounce(UK)', 'Tablespoon(UK)', 'Teaspoon(UK)']},
   {'name': 'Length',           'units': ['Kilometer', 'Meter', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch', 'Fathom']},
   {'name': 'Speed',            'units': ['Miles per hour', 'Feet per second', 'Meters per second', 'Kilometers per hour', 'Knots']},
   {'name': 'Area',             'units': ['Square kilometer', 'Square mile', 'Square meter', 'Square centimeter', 'Square millimeter', 'Hectare', 'Acre', 'Square yard', 'Square foot', 'Square inch']},
   {'name': 'Time',             'units': ['Nanosecond', 'Microsecond', 'Millisecond', 'Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year', 'Decade', 'Century']},
   {'name': 'Angle',            'units': ['Degree', 'Radian']},
   {'name': 'Force',            'units': ['Dyne', 'Newton', 'Gram force', 'Kilopond', 'Kip force', 'Pound force', 'Poundal']},
   {'name': 'Pressure',         'units': ['Atmosphere standard', 'Atmosphere technical', 'Millibar', 'Bar', 'Pascal', 'Megapascal', 'Kilopascal', 'Hectopascal', 'Ksi', 'Psi', 'Torr', 'Kilogram/square centimeter', 'Kilogram/square meter', 'Newton/square centimeter', 'Newton/square meter' ]},
   {'name': 'Fuel Consumption', 'units': ['Miles per gallon(US)', 'Miles per gallon(UK)', 'Meters per liter', 'Kilometers per liter', 'Liters per Meter', 'Liters per 100km']},
   {'name': 'Digital Storage',  'units': ['Bit', 'Byte', 'Kilobit', 'Kilobyte', 'Megabit', 'Megabyte', 'Gigabit', 'Gigabyte', 'Terabit', 'Terabyte', 'Petabit', 'Petabyte']},
   {'name': 'Energy',           'units': ['British Thermal Unit(BTU)', 'Calorie(cal)', 'Electronvolt(eV)', 'Erg', 'Joule(J)', 'Kilocalrie(kcal)', 'Kilojoule(kJ)', 'Kilowatt hour(kW-h)', 'Watt hour(W-h)', 'Foot-pound']},
   {'name': 'Flow',             'units': ['Cubic meter per second', 'Cubic meter per minute', 'Cubic meter per hour', 'Liter per second', 'Liter per minute', 'Liter per hour', 'US gallon per second', 'US gallon per minute', 'US gallon per hour', 'US gallon per day', 'UK gallon per second', 'UK gallon per minute', 'UK gallon per hour', 'UK gallon per day', 'Acre-foor per hour', 'Acre-foor per day', 'Acre-foor per year', 'Cubic foot per second', 'Cubic foot per minute', 'Cubic foot per hour', 'Cubic inch per second', 'Cubic inch per minute', 'Cubic inch per hour' ]},
   {'name': 'Power',            'units': ['BTU per hour', 'BTU per minute', 'BTU per second', 'Calories per hour', 'Calories per minute', 'Calories per second', 'Erg per second', 'Foot pound per hour', 'Foot pound per minute', 'Foot pound per second', 'Gigawatt', 'Horsepower', 'Kilocalorie per hour', 'Kilocalorie per minute', 'Kilocalorie per second', 'Kilowatt', 'Megawatt', 'Milliwatt', 'Watt']},
   {'name': 'Torque',           'units': ['Dyne meter', 'Dyne Centimeter', 'Dyne millimeter', 'Gram-force meter', 'Gram-force centimeter', 'Gram-force millimeter', 'Kilogram-force meter', 'Kilogram-force centimeter', 'Kilogram-force millimeter', 'Kilonewton meter', 'Newton meter', 'Newton centimeter', 'Newton millimeter', 'Ounce-force foot', 'Ounce-force inch', 'Pound-force foot', 'Pound-force inch']}
];

app.controller('myCtrl', function($scope) {
    $scope.categories = categories;
    $scope.subcategory = "";
    $scope.subcategories = [];
    $scope.fromValue = "";
    $scope.toValue = "";


    $scope.goBack = function() {
      document.getElementById("categories").style.display = "block";
      document.getElementById("conversion").style.display = "none";
      $scope.subcategory = "";
      $scope.subcategories = [];
      $scope.fromValue = "";
      $scope.toValue = "";
      $scope.fromId = "";
      $scope.toId = "";
    }

    $scope.categoryClick = function(category) {
		  $scope.subcategory = category;

		  angular.forEach($scope.categories, function(catg) {
		    if(catg.name === category) {
		      $scope.subcategories = catg.units;
          $scope.fromId = $scope.subcategories[0];
          $scope.toId = $scope.subcategories[0];
		    }
		  });

      document.getElementById("categories").style.display = "none";
      document.getElementById("conversion").style.display = "block";
	  };

	$scope.selectionChanged = function(){
	  if(typeof($scope.fromValue) === "number") {
	    $scope.fromValueChanged();
      }
	};

    $scope.fromValueChanged = function(){
      if($scope.subcategory === "Temperature") {
        var temperatureEngine = new TemperatureEngine(parseFloat($scope.fromValue), $scope.fromId, $scope.toId);
        $scope.toValue = temperatureEngine.Convert();
        return;
      }

      if($scope.subcategory === "Digital Storage") {
	    var digitalStorageEngine = new DigitalStorageEngine(parseFloat($scope.fromValue), $scope.fromId, $scope.toId);
	    $scope.toValue = digitalStorageEngine.Convert();
        return;
	  }

	  if($scope.subcategory === "Angle") {
	    var angleEngine = new AngleEngine(parseFloat($scope.fromValue), $scope.fromId, $scope.toId);
	    $scope.toValue = angleEngine.Convert();
	    return;
	  }
    };
});