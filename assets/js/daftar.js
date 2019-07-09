var app = angular.module("StrengthValidationApp", []);
app.controller("StrengthValidationCtrl", function($scope) {

  var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  $scope.checkpwdStrength = {
  };

  $scope.validationInputPwdText = function(value) {
    if (strongRegularExp.test(value)) {
      $scope.checkpwdStrength["color"] = "green";
    } else if (mediumRegularExp.test(value)) {
      $scope.checkpwdStrength["color"] = "orange";
    } else {
      $scope.checkpwdStrength["color"] = "red";
    }
  };

});

$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
      $('#message').html('Matching').css('color', 'green');
    } else 
      $('#message').html('Not Matching').css('color', 'red');
});

// $(".btn-lg").click(function(){
//     ($("input").val('').trim() == ''){
//         alert("Silahkan cek email untuk konfirmasi");
//     }
        
//         // location.reload(); 
// });
$(".btn-lg").click(function(){
    alert("Silahkan cek email anda untuk konfirmasi");
    location.reload();
});