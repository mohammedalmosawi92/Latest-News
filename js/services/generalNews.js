var app = angular.module("generalNewsModule", []);

app.service("generalNewsService", function($http) {
    this.source = "cnn"
    this.getNews = function() {
        return $http.get("https://newsapi.org/v1/articles?source="+this.source+ "&sortBy=top&apiKey=5078dac8cf974abd8c8634e66818d7ba")
    }
})
