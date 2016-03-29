
var myApp = angular.module("movieApp", []);

myApp.controller("movieController", function($scope, $http){
	
	var movieURL = "https://api.themoviedb.org/3/search/movie?api_key=e9ddb24aed6d48c4342303aba5269e28&query=superman"; 

	$scope.imagePath = "http://image.tmdb.org/t/p/w300";

	$http({
		method: "GET",
		url: movieURL
		}).then(function(movieData){
		$scope.movieData = movieData.data.results;
		},function(movieData){
			console.log("There was an error")
		});
 



});

