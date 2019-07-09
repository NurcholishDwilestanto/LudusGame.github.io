// $(document).ready(function(){
//     $(".vot").focus(function(){
//         $(this).css("background-color", "#cccccc");
//     });
//     $(".vot").blur(function(){
//         $(this).css("background-color", "#ffffff");
//     });
// })
// $(document).on('click', '.upvote .downvote', function (e) {
//   $(".active").not($(this).addClass('active')).removeClass();
// });

var counter = 0;

$("#plus").click(function(){
  counter++;
  $("#count").text(counter);
});

$("#minus").click(function(){
  counter--;    
  $("#count").text(counter);
});


$("button").click(function(){
  $("textarea").empty();
  location.reload();
});