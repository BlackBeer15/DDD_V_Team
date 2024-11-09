$(document).ready(function(){
    $("#photoSearch").change(function() {
        if (!($('.addressForm').css({'display':'none'}))) {
            $('.photoForm').css({'display':'block'});
        } else {
            $('.addressForm').css({'display':'block'});
        }
    });
});