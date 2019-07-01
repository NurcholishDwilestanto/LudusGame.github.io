// var app = angular.module('myApp', []);
// app.controller('nCtrl', function($scope) {
//     $scope.prize = 110000;
//     // var hargaCount = div.querySelectorAll('.harga').length;
// });

// $scope.getTotal = function(){
//     var total = 0;
//     for(var i = 0; i < $scope.cart.products.length; i++){
//         var product = $scope.cart.products[i];
//         total += (price * quantity);
//     }
//     return total;
// }

var app = angular.module('myApp', []);
app.controller('produk1', function($scope) {
    $scope.price = 120000;
    $scope.quantity = 1;
});
app.controller('produk2', function($scope) {
    $scope.price = 113000;
    $scope.quantity = 1;
});
app.controller('produk3', function($scope) {
    $scope.price = 90000;
    $scope.quantity = 2;
});

app.controller('total', function($scope) {
    $scope.total = 413000;
});