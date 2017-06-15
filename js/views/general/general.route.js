var app = angular.module("news.general", ["ngRoute", "generalNewsModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/general", {
        templateUrl: "./js/views/general/general.tpl.html",
        controller: "generalCtrl"
    })
})
app.controller("generalCtrl", function ($scope, generalNewsService) {
    $scope.showLoading = true;
    $scope.loadNews = function () {
        generalNewsService.getNews().then(function (response) {
            $scope.newsList = response.data.articles;
            $scope.showLoading = false;
        }, function (response) {
            console.log(response.status)
        });
    };
    $scope.getABC = function () {
        generalNewsService.source ="abc-news-au";
        $scope.loadNews();
    }
    $scope.getMirror = function () {
        generalNewsService.source ="independent";
        $scope.loadNews();
    }
    $scope.getBBC = function () {
        generalNewsService.source ="bbc-news";
        $scope.loadNews();
    }
    $scope.getCNN = function () {
        generalNewsService.source ="cnn";
        $scope.loadNews();
    }
})
