var app = angular.module('myApp', []);
app.controller('metode', function($scope) {
    $scope.pembayaran = 'Bank Transfer';
    $scope.metod = 'Virtual Account';
    $scope.bank = 'BRI';
    $scope.nomor = '999-2232-23232';
    $scope.harga = '20000';
    $scope.kode = 'TRS127172-VRB';
    $scope.tanggal = '10 Jul 2019';
    $scope.pukul = '18:23';
});