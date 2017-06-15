var app = angular.module("news.entertainment", ["ngRoute", "entertainmentNewsModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/entertainment", {
        templateUrl: "./js/views/entertainment/entertainment.tpl.html",
        controller: "entertainmentCtrl"
    })
})

app.controller("entertainmentCtrl", function ($scope, entertainmentService){
    $scope.showLoading = true;
    $scope.loadEntertainmentNews = function() {
        entertainmentService.getNews().then(function(response) {
            $scope.entertainmentList = response.data.articles;
            $scope.showLoading = false;
        }, function(response) {
            console.log(response.status)
        })
    }
    $scope.getWeekly = function() {
        entertainmentService.source = "entertainment-weekly";
        $scope.loadEntertainmentNews();
    }
    $scope.getDailyMail = function() {
        entertainmentService.source = "daily-mail";
        $scope.loadEntertainmentNews();
    }
    $scope.getMashable = function() {
        entertainmentService.source = "mashable";
        $scope.loadEntertainmentNews();
    }
    $scope.getLadBible = function() {
        entertainmentService.source = "the-lad-bible";
        $scope.loadEntertainmentNews();
    }
})
