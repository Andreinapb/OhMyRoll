<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$bandeja = $_POST['bandeja'];
$pago = $_POST['pago'];
$calle = $_POST['calle'];
$altura = $_POST['altura'];
$altura = $_POST['zona'];
$mensaje = $_POST['mensaje'];
$bandeja = $_POST['bandeja'];
$pago = $_POST['pago']

$mensaje = $_POST['mensaje'];
$para = 'TUCORREO@CORREO.COM';
$titulo = 'ASUNTO DEL MENSAJE';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://TUSITIOWEB.COM';
</script>";
} else {
echo 'Falló el envio';
}
}
?>