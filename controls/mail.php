<?php
// Incluir las dependencias de PHPMailer
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jcvm2001valencia@gmail.com';  // Cambia por tu correo de Gmail
        $mail->Password = 'jcvm1005976932';       // Usa una contraseña de aplicación de Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($correo, $nombre);
        $mail->addAddress('prueba@yopmail.com');  // Destino del mensaje
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body    = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";

        if ($mail->send()) {
            echo "Correo enviado con éxito.";
        } else {
            echo "Error al enviar el correo.";
        }
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Método no permitido.";
}
?>


