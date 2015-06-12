var app = angular.module('converter_mainapp', []);
var categories = [
   {'name': 'Temperature',      'units': ['Celsius', 'Farenheit', 'Kelvin']},
   {'name': 'Mass',             'units': ['Kilogram', 'Milligram', 'Gram', 'Pound', 'Ounce', 'Ton(Metric)', 'Ton(US)', 'Quarter(US)', 'Quarter(UK)', 'Stone(UK)', 'Carat', 'Grain', 'Troy Ounces']},
   {'name': 'Volume',           'units': ['Liter', 'Milliliter', 'Cubic Meter', 'Cubic foot', 'Cubic Inch', 'Cup(Metric)', 'Cup(US)', 'Gallons(US)', 'Quarts(US)', 'Pint(US)', 'Fluid Ounce(UK)', 'Tablespoon(UK)', 'Teaspoon(UK)']},
   {'name': 'Length',           'units': ['Kilometer', 'Meter', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch', 'Fathom']},
   {'name': 'Speed',            'units': ['Miles per hour', 'Feet per second', 'Meters per second', 'Kilometers per hour', 'Knots']},
   {'name': 'Area',             'units': []},
   {'name': 'Time',             'units': []},
   {'name': 'Angle',            'units': []},
   {'name': 'Force',            'units': []},
   {'name': 'Pressure',         'units': []},
   {'name': 'Fuel Consumption', 'units': []},
   {'name': 'Digital Storage',  'units': []},
   {'name': 'Energy',           'units': []},
   {'name': 'Flow',             'units': []},
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
    }

    $scope.categoryClick = function(category) {
		  $scope.subcategory = category;

		  angular.forEach($scope.categories, function(catg) {
		    if(catg.name === category) {
		      $scope.subcategories = catg.units;
		    }
		  });
      document.getElementById("categories").style.display = "none";
      document.getElementById("conversion").style.display = "block";
	  };

    $scope.fromValueChanged = function(){
      $scope.toValue = $scope.fromValue;
    }

});
