
$(document).ready(function(){
    $("#submit").click(function(){
        if(($("#judul1").val().trim() == '') || ($("#isi1").val().trim() == '')){
            alert('Textarea kosong!');
        }
        else
            location.reload();
        });
    $("button").click(function(){
        $(this).css("border", "solid #3f89bc");
    });

    // $('.btn').click(function(){
    //     $('.btn').removeClass('active').addClass('inactive');
    //     $(this).removeClass('inactive').addClass('active');
    // });
}); 

