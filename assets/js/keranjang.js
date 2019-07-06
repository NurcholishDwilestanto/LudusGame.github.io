$(document).ready(function(){
    $(".selectall").click(function(){
    $(".individu").prop("checked",$(this).prop("checked"));
    });

    // $(".sampah" ).click(function() {
    //     if($(".individu").is(':checked',true))  
	// {
	// 	$(".individu").remove('checked', true);  
	// }  
	// else  
	// {  
	// 	$(".individu").remove('checked',false);  
	// }
    //     $( ".individu" ).prop("checked").remove();
    // });

    
});

var app = angular.module('myApp', []);
app.controller('p', function($scope) {
    $scope.price1 = 90000;
    $scope.price2 = 110000;
});


// $(document).ready(function() {
//     // Check All
//     $('.checkall').click(function() {
//         $(":checkbox").attr("checked", true);
//     });
//     // Uncheck All
//     $('.uncheckall').click(function() {
//         $(":checkbox").attr("checked", false);
//     });
// });

