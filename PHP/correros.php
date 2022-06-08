<?php

if(isset($_POST['enviar'])){
	if(!empty($_POST['nombre'])&& !empty($_POST['email']) && !empty($_POST['universidad']) && !empty($_POST['mensaje']))
	{
		$name=$_POST['nombre'];
		$asunto=$_POST['universidad'];
		$emai=$_POST['email'];
		$msg=$_POST['mensaje'];
		$header="From: nayibepelaez03@gmail.com"."\r\n";
		$header="Reply-To: nayibepelaez03@gmail.com"."\r\n";
		$header="X-Mailer: PHP/".phpversion();

		$mail=@mail($emai, $asunto,$msg ,$header);
		if ($mail) {
			echo "<script>alert('Correo Exitoso')</script>";

			# code...
		}

	}
}
 /*$destinatario='nayibepelaez@gmail.com';
 //esta es al correo al que se va enviar
 $nombre=$_POST['nombre'];
 $email=$_POST['email'];
 $universidad=$_POST['universidad'];
 $mensaje=$_POST['mensaje'];


 $header="Enviado desde la pagina de JN 1.o"
 $mensajeCompleto=$mensaje ."\nAtentamente: ". $nombre;


$mail=@mail($destinatario,$universidad, $mensajeCompleto);
echo "<script>alert('Correo Exitoso')</script>";
echo "<script>setTimeout(\"location.href='contacto.html'\",1000)</script>";*/

?>