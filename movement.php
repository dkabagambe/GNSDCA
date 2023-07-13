<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $focus = $_POST['focus'];
  $region = $_POST['region'];
  $country = $_POST['country'];
  
  // Compose email message
  $to = 'info@gnsmvt.org';
  $subject = 'New Movement Registration';
  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= "Preferred Thematic Focus: " . implode(', ', $focus) . "\n";
  $message .= "Region: $region\n";
  $message .= "Country: $country\n";

  // Send email
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);

  // Redirect to "movement.html"
  header('Location: movement.html');
  exit();
}
?>
