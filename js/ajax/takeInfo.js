$('input[name="send-photo"]').click(function (e) {
	e.preventDefault();

    var sendData = new FormData();

	sendData.append('photoTower', $('input[name="photoTower"')[0].files[0]);

    $.ajax({
		url: 'http://192.168.101.33:8000/getByImage',
		type: 'POST',
		cache: false,
		contentType: false,
		processData: false,
		dataType: 'json',
		data: sendData,

		success (data) {
			$('.photoForm').css({'display':'none'});
			$('.addressForm').css({'display':'none'});
			$('.response-container').css({'display':'flex'});
			$('.tryAgain').css({'display':'flex'});
            $('.response-container').append(
				'<div class="for-image">',
                	'<img src="images/example.jpg" alt="photo">',
            	'</div>',
				'<div class="for-text">',
					'<p>Наименование: <span></span></p>',
					'<p>Адрес: <span></span></p>',
					'<p>Год постройки: <span></span></p>',
					'<p>Краткая историческая справка: <span><span></p>',
            	'</div>',
			);
        }
    })
})