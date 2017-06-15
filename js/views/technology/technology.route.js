var app = angular.module("news.technology", ["ngRoute", "technologyNewsModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/technology", {
        templateUrl: "./js/views/technology/technology.tpl.html",
        controller: "technologyCtrl"
    })
})
app.controller("technologyCtrl", function ($scope, technologyNewsService) {
    $scope.showLoading = true;
    $scope.loadNews = function () {
        technologyNewsService.getNews().then(function (response) {
            $scope.newsList = response.data.articles;
            $scope.showLoading = false;
        }, function (response) {
            console.log(response.status)
        });
    };
    $scope.getTheVerge = function () {
        technologyNewsService.source = "the-verge";
        $scope.loadNews();
    }
    $scope.getTheNextWeb = function () {
        technologyNewsService.getTheNextWeb().then(function (response) {
            $scope.newsList = response.data.articles;
        }, function (response) {
            console.log(response.status)
        })
    }
    $scope.getRecode = function () {
        technologyNewsService.source = "recode";
        $scope.loadNews();
    }
    $scope.getArsTechnica = function () {
        technologyNewsService.source = "ars-technica";
        $scope.loadNews();
    }
})
