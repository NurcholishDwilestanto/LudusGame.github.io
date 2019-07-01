// var header = document.getElementById("tengah");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
// $(document).ready(function(){
//     $('button').on('click', function(){
//         $('button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// })
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#harga").text("30.000");
    });
    $("#btn2").click(function(){
      $("#harga").text("60.000");
    });
    $("#btn3").click(function(){
      $("#harga").text("120.000");
    });
    $("#btn4").click(function(){
      $("#harga").text("180.000");
    });
    $("#btn5").click(function(){
      $("#harga").text("300.000");
    });
    $("#btn6").click(function(){
      $("#harga").text("600.000");
    });
    $("#clearbut").click(function(){
        $("#playId").empty();
        location.reload();
      });
  });