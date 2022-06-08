let ubicacionPrincipal=window.pageYOffset;//0

  AOS.init();

window.addEventListener("scroll",function(){
	let desplazamientoActual=window.pageYOffset;//100
	if(ubicacionPrincipal>=desplazamientoActual){//0>100
		document.getElementsByTagName("nav")[0].style.top="0px"
	}else{
		
	document.getElementsByTagName("nav")[0].style.top="100px"
	
	}
	ubicacionPrincipal=desplazamientoActual;//100
})
//menu
let boton= document.getElementById("hamburguer");
let enlaces= document.getElementById("enlaces");
let semaforo=0;


boton.addEventListener("click",function(){
	if(semaforo==0){
		enlaces.className=('enlaces dos');
		semaforo=1;
	}else{
		enlaces.classList.remove('dos');
		enlaces.className=('enlaces dos');
		contador=0;		
	}
})

	if(screen.width>1024){
		document.write('<link rel="stylesheet" href="css/estilos.css" />');
	}else if(screen.width==1024){
		document.write('<link rel="stylesheet" href="css/estilos.css" />');
	}else if (screen.width<1024){
		document.write('<link rel="stylesheet" href="css/estilos.css" />');
	}