var app = angular.module("sportNewsModule", []);

app.service("sportService", function ($http) {
    this.source = "four-four-two";
    this.getNews = function () {
        return $http.get("https://newsapi.org/v1/articles?source=" + this.source + "&sortBy=top&apiKey=5078dac8cf974abd8c8634e66818d7ba")
    }
})
