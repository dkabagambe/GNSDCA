<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Compose email message
  $to = 'info@gnsmvt.org';
  $subject = 'New Contact Form Submission';
  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= "Phone: $phone\n";
  $message .= "Subject: $subject\n";
  $message .= "Message: $message\n";

  // Send email
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);

  // Redirect to "contact.html"
  header('Location: contact.html');
  exit();
}
?>
