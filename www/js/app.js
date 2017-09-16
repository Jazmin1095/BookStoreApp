(function () {

    let app = angular.module('BookStoreApp', []);
  //Controlador carga información que tiene el json
    app.controller('BooksController', function($scope,$http){
        //$http obtiene datos de json y $scope muestra los datos
             $http.get('./js/books.json').then(function(data){
           $scope.libosC=data.data;
        
                });
    });
})();