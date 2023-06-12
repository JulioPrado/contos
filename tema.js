	var estado = 'dia';

	function mudaTema(){
		if (estado=='dia') {
			estado = 'noite';
			atualizaTema();
		} else {
			estado = 'dia';
			atualizaTema();
		}	
	}

	function atualizaTema(){

		if (estado=='noite') {
			$('body').css('--corFundo','#000'); 
			$('body').css('--corFonte','#fff');
			$('#temaSimbolo').html('<span  class="lnr lnr-moon" onclick="mudaTema()"></span>');
		} else {
			$('body').css('--corFundo','#EBEAE4'); 
			$('body').css('--corFonte','#2e2e2e');
			$('#temaSimbolo').html('<span  class="lnr lnr-sun" onclick="mudaTema()"></span>');
		}
	}