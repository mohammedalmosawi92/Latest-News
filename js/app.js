var app = angular.module("news", ["ngRoute", "generalNewsModule", "sportNewsModule", "entertainmentNewsModule", "news.general", "news.sport", "news.entertainment", "technologyNewsModule","news.technology"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo: "/general",
    }).otherwise({
        redirectTo: "/general",
    })
});
