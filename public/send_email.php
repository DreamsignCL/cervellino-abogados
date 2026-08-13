<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Access-Control-Allow-Origin: https://cervellinoabogados.com/");
header("Vary: Origin");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['Nombre'] ?? '';
    $email = $_POST['Email'] ?? '';
    $asunto = $_POST['Asunto'] ?? 'Contacto';
    $comentario = $_POST['Comentario'] ?? '';

    if (empty($nombre) || empty($email) || empty($comentario)) {
        echo json_encode(["status" => "error", "message" => "Faltan campos obligatorios"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP DreamHost
        $mail->isSMTP();
        $mail->Host = 'smtp.dreamhost.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'no-responder@cervellinoabogados.com'; // Tu correo DreamHost
        $mail->Password = 'NoResponse_2025!'; // Tu contraseña
        $mail->SMTPSecure = 'tls'; // Usa TLS
        $mail->Port = 587; // Puerto para TLS

        // Email
        $mail->setFrom('no-responder@cervellinoabogados.com', 'Formulario Web');
        $mail->addReplyTo($email, $nombre);
        $mail->addAddress('gcervellino@cervellinoabogados.com');
        $mail->isHTML(true);
        $mail->Subject = "Nuevo contacto desde la web - " . htmlspecialchars($asunto);
        $mail->Body = "
            <p><strong>Nombre:</strong> " . htmlspecialchars($nombre) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Comentario:</strong><br>" . nl2br(htmlspecialchars($comentario)) . "</p>
        ";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Correo enviado exitosamente"]);
    } catch (Exception $e) {
        echo json_encode([
            "status" => "error",
            "message" => "No se pudo enviar el correo",
            "error" => $mail->ErrorInfo
        ]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
