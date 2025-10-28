<?php
// 1. GET THE DATABASE CREDENTIALS FROM RENDER
// These are Environment Variables you will set in your Web Service
$host = $_ENV['DB_HOST'];
$port = 5432; // Default for Postgres
$dbname = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

// 2. GET THE FORM DATA
$form_user = $_POST['name'];
$form_email = $_POST['email'];
$form_mobile = $_POST['mobile'];
$form_comment = $_POST['comment'];

// 3. CREATE THE CONNECTION STRING
// This DSN (Data Source Name) is specific to Postgres
$dsn = "pgsql:host=$host;port=$port;dbname=$dbname";

try {
    // 4. CONNECT TO THE DATABASE
    // We use PDO, which is safer than mysqli
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 5. PREPARE AND EXECUTE THE QUERY
    // This uses "prepared statements" which prevents SQL injection attacks
    $sql = "INSERT INTO userdatainfo (\"user\", email, mobile, comment) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    
    // The execute call safely inserts your variables
    $stmt->execute([$form_user, $form_email, $form_mobile, $form_comment]);

    // 6. REDIRECT BACK TO HOME
    header('location:index.php');

} catch (PDOException $e) {
    // If connection or query fails, show an error
    echo "Connection Failed: " . $e->getMessage();
}

?>