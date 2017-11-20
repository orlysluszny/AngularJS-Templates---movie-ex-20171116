app.controller("movieCtrl", function($scope) {
    
    function myMovie(movieName, duration, movieActors, director, imdbURL) {
        this.movieName = movieName;
        this.duration = duration;
        this.imovieActors = movieActors;
        this.director = director;
        this.imdbURL = imdbURL;
    }  
  
    $scope.actors = [new Actor("Sandra", "Bullock", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000113/?ref_=nv_sr_1"),
    new Actor("Julia", "Roberts", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000210/?ref_=nv_sr_2"),
    new Actor("Gal", "Gadot", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm2933757/"),
    new Actor("Robin", "Wright", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_UY317_CR4,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000705/"),
    new Actor("Kevin", "Costner", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0MDU1OTEyNF5BMl5BanBnXkFtZTgwNjI0MTk2MDE@._V1_UY317_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000126/?ref_=nv_sr_6"),
    new Actor("Robin", "Williams", "https://images-na.ssl-images-amazon.com/images/M/MV5BNTYzMjc2Mjg4MF5BMl5BanBnXkFtZTcwODc1OTQwNw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "http://www.imdb.com/name/nm0000245/?ref_=nv_sr_3")];
    
    $scope.sortByFirstName = function() {
        $scope.orderProp = "firstName";
    }
  });