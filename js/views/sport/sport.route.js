var app = angular.module("news.sport", ["ngRoute", "sportNewsModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/sport", {
        templateUrl: "./js/views/sport/sport.tpl.html",
        controller: "sportCtrl"
    })
})
app.controller("sportCtrl", function ($scope, sportService) {
    $scope.showLoading = true;
    $scope.loadSportNews = function() {
        sportService.getNews().then(function(response) {
            $scope.sportList = response.data.articles;
            $scope.showLoading = false;
        }, function(response) {
            console.log(response.status)
        })
    }
    $scope.getFourFourTwo = function() {
        sportService.source = "four-four-two";
        $scope.loadSportNews();
    }
    $scope.getBBCSport = function() {
        sportService.source = "bbc-sport";
        $scope.loadSportNews();
    }
    $scope.getESPN = function() {
        sportService.source = "espn";
        $scope.loadSportNews();
    }
    $scope.getSkySports = function() {
        sportService.source = "talksport";
        $scope.loadSportNews();
    }
})
