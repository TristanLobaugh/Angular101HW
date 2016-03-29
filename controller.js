
var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	$scope.name = "";
	$scope.population = "";
	$scope.leader = "";
	$scope.flagColors = "";

	function Country(name, population, leader, flagColors){
		this.name = name;
		this.population = population;
		this.leader = leader;
		this.flagColors = flagColors;
		$scope.countries.push(this);
	}

	$scope.countries = [
		{
			name: "USA",
			population: 1234500,
			leader: "Obama",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "France",
			population: 2596278,
			leader: "Francois Hollande",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "Italy",
			population: 78676876,
			leader: "Sergio Mattarella",
			flagColors: ["red", "white", "green"]
		},
		{
			name: "Mexico",
			population: 87697868,
			leader: "Enrique Pena Nieto",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "Argentina",
			population: 7869876897,
			leader: "Mauricio Macri",
			flagColors: ["white", "blue"]
		},
		{
			name: "Brazil",
			population: 8769867868,
			leader: "Dilma Rousseff",
			flagColors: ["green", "yellow", "blue"]
		},
		{
			name: "China",
			population: 8768968768796,
			leader: "Xi Jiniping",
			flagColors: ["red", "yellow"]
		},
		{
			name: "Jamaica",
			population: 8769876,
			leader: "Andrew Holness",
			flagColors: ["green", "yellow", "black"]
		},
		{
			name: "Japan",
			population: 876986,
			leader: "Shinzo Abe",
			flagColors: ["red", "white"]
		},
		{
			name: "Cook Islands",
			population: 87698,
			leader: "Henry Puna",
			flagColors: ["red", "white", "blue"]
		},
	]

	$scope.addToArray = function(){
		if($scope.name.length > 0  && $scope.population.length > 0 && $scope.leader.length > 0 && $scope.flagColors.length > 0){
			new Country($scope.name, $scope.population, $scope.leader, $scope.flagColors);
			$scope.name = "";
			$scope.population = "";
			$scope.leader = "";
			$scope.flagColors = "";
		}
	}
});

