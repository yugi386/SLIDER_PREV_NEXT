/*
=================================================================================
SLIDER PARA TREINAMENTO PADAWAN
AUTOR: YUGI
DATA: 25/06/2012
=================================================================================
*/
slide = 1;				//	controla qual imagem vai aparacer no slide
window.onload= function() {	initSlider(); }	// iniciando o slider

// *****************************************************************************
function browseSlider(){	//	mostra as imagens no slider
	var img, opc;

	for (var ct=1;ct<6;ct++){
		opc = document.getElementById('l'+ct);			//	faz a leitura do id dos links...
		img = document.getElementById('imgSlider'+ct);	//	faz a leitura do id das imagens
		if (slide == ct){
			img.style.display = "inline";			//	mostra imagem
			opc.className = 'active';			//	altera classe do link ativo para classe [active]
			img.style.opacity = 1;				//	opacidade 1
		} else {
			img.style.opacity = 0;				//	opacidade 0
			img.style.display = "none";	
			opc.className = '';					// elimina classe dos links inativos
		}
	}
}
// *****************************************************************************
function alterImg(nPhoto){	//	altera a imagem - numero slide
	slide = nPhoto;
	browseSlider();
}
// *****************************************************************************
function initSlider() {		//	 inicia controlador do slider
	document.getElementById("l1").onclick= function() { alterImg(1);} ;	
	document.getElementById("l2").onclick= function() { alterImg(2);} ;	
	document.getElementById("l3").onclick= function() { alterImg(3);} ;	
	document.getElementById("l4").onclick= function() { alterImg(4);} ;	
	document.getElementById("l5").onclick= function() { alterImg(5);} ;	
	document.getElementById("next").onclick= function() { navSlider(1);} ;	
	document.getElementById("prev").onclick= function() { navSlider(0);} ;	
	alterImg(1);
}
// *****************************************************************************	
function navSlider(tipo) {	//	navegador prev e Next
	if (tipo == 1) {
		slide++;
		if (slide > 5) {
			slide = 1;
		}	
	} else {
		slide--;
		if (slide < 1) {
			slide = 5;
		}
	}
	browseSlider();
}
// *****************************************************************************