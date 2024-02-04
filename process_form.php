<?php


require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Set your email address where you want to receive the form submissions
    $recipientEmail = 'designers_bliz_nakhodka@mail.ru';

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.hosting.reg.ru'; // Change this to your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contact_form@blitzretail.ru'; // Change this to your SMTP username
        $mail->Password   = 'fwgikhjh3rfgcgliyerfjhmfvejhmfvwgiumjghfkuhgfhjfhgh321321'; // Change this to your SMTP password
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        //Recipients
        $mail->setFrom('contact_form@blitzretail.ru', 'Blitz Submission');
        $mail->addAddress($recipientEmail);

        // Content
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8'; // Set character set to UTF-8
        $mail->ContentType = 'text/html; charset=UTF-8';
        $mail->Subject = "[Клиент отправил запрос]";

        // Build email body from form data
        $body = "Ширина: {$_POST['width-lazy']} см<br>";
        $body .= "Высота: {$_POST['height-lazy']} см<br>";
        $body .= "Телефон: {$_POST['phone-lazy']}<br>";

        $mail->Body = $body;

        // Send the email
        $mail->send();

        // If successful, return a success message
        echo 'success';
    } catch (Exception $e) {
        // If an error occurs, return the error message
        echo "Error: {$mail->ErrorInfo}";
    }
} else {
    // If the form is not submitted, return an error message
    echo 'Invalid request';
}
?>