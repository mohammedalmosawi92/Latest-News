var app = angular.module("technologyNewsModule", []);

app.service("technologyNewsService", function ($http) {
    this.source = "the-verge";
    this.getNews = function () {
        return $http.get("https://newsapi.org/v1/articles?source=" + this.source + "&sortBy=top&apiKey=5078dac8cf974abd8c8634e66818d7ba")
    }
    this.getTheNextWeb = function () {
        return $http.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=5078dac8cf974abd8c8634e66818d7ba")
    }
})
