
var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){

	$scope.countries = [
		{
			name: "USA",
			pop: 1234500,
			leader: "Obama",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "France",
			pop: 2596278,
			leader: "Francois Hollande",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "Italy",
			pop: 78676876,
			leader: "Sergio Mattarella",
			flagColors: ["red", "white", "green"]
		},
		{
			name: "Mexico",
			pop: 87697868,
			leader: "Enrique Pena Nieto",
			flagColors: ["red", "white", "blue"]
		},
		{
			name: "Argentina",
			pop: 7869876897,
			leader: "Mauricio Macri",
			flagColors: ["white", "blue"]
		},
		{
			name: "Brazil",
			pop: 8769867868,
			leader: "Dilma Rousseff",
			flagColors: ["green", "yellow", "blue"]
		},
		{
			name: "China",
			pop: 8768968768796,
			leader: "Xi Jiniping",
			flagColors: ["red", "yellow"]
		},
		{
			name: "Jamaica",
			pop: 8769876,
			leader: "Andrew Holness",
			flagColors: ["green", "yellow", "black"]
		},
		{
			name: "Japan",
			pop: 876986,
			leader: "Shinzo Abe",
			flagColors: ["red", "white"]
		},
		{
			name: "Cook Islands",
			pop: 87698,
			leader: "Henry Puna",
			flagColors: ["red", "white", "blue"]
		},
	]
});

