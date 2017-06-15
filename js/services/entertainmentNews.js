var app = angular.module("entertainmentNewsModule", []);

app.service("entertainmentService", function($http) {
    this.source = "entertainment-weekly";
    this.getNews = function () {
        return $http.get("https://newsapi.org/v1/articles?source=" + this.source + "&sortBy=top&apiKey=5078dac8cf974abd8c8634e66818d7ba")
    }
})
