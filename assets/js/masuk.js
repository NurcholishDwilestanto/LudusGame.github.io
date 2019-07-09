$(document).ready(function(){
    $(".btn").click(function(){
        if(($(".nama").val().trim() == 'gustimuzain99@yahoo.com') && ($(".pass").val().trim() == 'haha')){
            // alert('Empty!');
            window.location = "http://www.ludusgames.com/index1.html" + this.id;
        }   
        else
        // alert('Empddddty!');
    });
});