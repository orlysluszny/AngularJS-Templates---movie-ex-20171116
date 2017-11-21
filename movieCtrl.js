app.controller("movieCtrl", function ($scope, $http) {
    
        // Car Constructor
        function Movie(name, time, director,actors, link) {
            this.name = name;
            this.time = time;
            this.director = director;
            this.actors = actors;
            this.link = link;
        }
    
        $http.get("movie.json").then(function mySuccess(response) {
            $scope.movies=response.data;
        }, function myError(response) {
            alert("error" + JSON.stringify(response.status));
          })
          $scope.order = function() {
            $scope.orderProp = "first";
        } 
        });