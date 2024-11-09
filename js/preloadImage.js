function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#photog').attr('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);
    }

    $('#photog').css({'display':'block'});
    $('.inp-text').css({'display':'none'});
    
  }

  $(".photoTower").change(function() {
    readURL(this);
  });