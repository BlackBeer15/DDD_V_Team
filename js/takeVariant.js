$(document).ready(function(){
    $("#photoSearch").change(function() {
        if ($('.addressForm').css('display') == "block") {
            $('.photoForm').css({'display':'block'});
            $('.addressForm').css({'display':'none'});
        }
    });

    $("#textSearch").change(function() {
        if ($('.photoForm').css('display') == "block") {
            $('.addressForm').css({'display':'block'});
            $('.photoForm').css({'display':'none'});
        }
    });
});