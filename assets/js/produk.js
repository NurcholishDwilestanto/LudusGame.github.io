// $(document).ready(function() {
//     $("#title").clone().appendTo(".duptitle");
// });

// $(document).ready(function(){
//     $("#myBtn").click(function(){
//       $("#myModal").modal();
//     });
//   });
var app = angular.module('myApp', []);
app.controller('nCtrl', function($scope) {
    $scope.prize = 110000;
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
