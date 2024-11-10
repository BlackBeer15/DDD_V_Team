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
            console.log(data);
        }
    })
})