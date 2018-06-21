$(document).ready(function(){
	
	$('#titulo').on('click', function(){
		$('#titulo').css({
			color:'rgb(200,60,80)',
			fontSize: '150px'
		});
	});

	$('.botao').on('click', function(){
		alert('Essa página não foi feita, desiste ai.')
	});

	$('#next').on('click', function(){
		var src = ($('#imagemcentral').attr('src')=== 'panama.png')
		?'cuba.png':'panama.png';
		$('#imagemcentral').attr('src',src);

		var href = ($('#galeria').attr('href')=== 'panama.png')
		?'cuba.png':'panama.png';
		$('#galeria').attr('href',href);

		var text = ($('#textin').html() === 'Bandeira do Panamá :)')
		?'Bandeira de Cuba :)':'Bandeira do Panamá :)';
		$('#textin').html(text);
	});
});