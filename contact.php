<?php
if(isset($_POST['email'])) {

<bold>// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias</bold>
$email_to = "andreinamariap@gmail.com";
$email_subject = "Pedidos Rolls";

<bold>// Aquí se deberían validar los datos ingresados por el usuario</bold>
if
(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['telefono']) ||
!isset($_POST['bandeja'])) 
(!isset($_POST['pago']) ||
!isset($_POST['calle']) ||
!isset($_POST['altura']) ||
!isset($_POST['zona']) ||
!isset($_POST['mensaje'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Email: " . $_POST['email'] . "\n";
$email_message .= "Telefono: " . $_POST['telefono'] . "\n";
$email_message .= "Bandeja: " . $_POST['bandeja'] . "\n";
$email_message .= "Pago: " . $_POST['pago'] . "\n";
$email_message .= "Calle: " . $_POST['calle'] . "\n";
$email_message .= " altura: " . $_POST['altura'] . "\n";
$email_message .= "Zona: " . $_POST['zona'] . "\n";
$email_message .= "Comentarios: " . $_POST['mensaj'] . "\n\n";


<bold>// Ahora se envía el e-mail usando la función mail() de PHP</bold>
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>