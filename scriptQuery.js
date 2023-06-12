
$(document).ready(function(){
	//mostra a div de conteudo e o botão fechar artigo
		$('.artigo-titulo').click(function(e){
			e.preventDefault()

			$('a.fechar-artigo')
				.fadeIn()
				.css("display","block") //para ficar centralizado com o margin
			$('#conteudo')
				.load($(this).attr("href"))
				.fadeIn()
	  		$('html,body').animate({
       			scrollTop: $("#conteudo").offset().top
    		}, 'fast');
		});

 
		$('.fechar-artigo').click(function(){
			$('a.fechar-artigo')
				.fadeOut('fast') 
			$('#conteudo')
				.fadeOut('fast')
				.html('');
		});	

});
