<?php

$ok = true;

// Sekretne klucze reCAPTCHA
$secretKey = '6LcFV3kgAAAAACOYd1hX6U0crqEr72PYV1N1lM9C';

// Dane przekazane z formularza
$responseKey = $_POST['g-recaptcha-response'];
$userIP = $_SERVER['REMOTE_ADDR'];

// Tworzenie zapytania do API reCAPTCHA
$verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
    'secret' => $secretKey,
    'response' => $responseKey,
    'remoteip' => $userIP
);

$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);

$context = stream_context_create($options);
$result = file_get_contents($verifyURL, false, $context);

// Parsowanie odpowiedzi
$response = json_decode($result);

// Sprawdzanie wyniku weryfikacji
if ($response->success) {
    // reCAPTCHA została poprawnie wykonana
    // echo 'reCAPTCHA została poprawnie wykonana.';

} else {
    // reCAPTCHA nie została poprawnie wykonana
    // echo 'reCAPTCHA nie została poprawnie wykonana.';
    $ok=false;
	$message = 'Potwierdź, że nie jesteś robotem';
}



if ($_SERVER["REQUEST_METHOD"] == "POST" && $ok) {
    $requiredFields = array('name', 'email', 'phone', 'message');
    $missingFields = array();

    $fieldTranslations = array(
        'name' => 'imię i nazwisko',
        'email' => 'email',
        'phone' => 'numer telefonu',
        'message' => 'wiadomość'
    );

    foreach ($requiredFields as $field) {
        if (empty($_POST[$field])) {
            $missingFields[] = $fieldTranslations[$field];
        }
    }

    if (!empty($missingFields)) {
        $ok = false;
        $message = 'Proszę wypełnić wszystkie pola formularza. Brakuje: ' . implode(', ', $missingFields);
    } else {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $message = htmlspecialchars($_POST['message']);

        $to = ""; // Wprowadź tutaj adres e-mail, na który mają zostać wysłane dane z formularza

        $subject = "Nowa wiadomość z formularza";
        $body = "Imię i nazwisko: " . $name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Numer telefonu: " . $phone . "\n";
        $body .= "Wiadomość: " . $message . "\n";

        // Dodatkowe nagłówki
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";

        // Wysłanie wiadomości e-mail
        if (mail($to, $subject, $body, $headers)) {
            $ok = true;
            $message = "Wiadomość pomyślnie wysłana, odezwiemy się jak najszybciej to możliwe";
        } else {
            $ok = false;
            $message = 'Wiadomość nie dotarła do nas, to nasza wina... <br> Skontaktuj się z nami na adres E-mail: biuro@heavenly-trucks.pl <br> Lub na numer telefonu: +48 605 246 686';
        }
    }
}



?>

<!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Nowe zgłoszenie z formularza kontaktowego - Heavenly Trucks</title>
		<link rel="icon" href="c85113c5157e2d372896.ico" type="image/x-icon" />
        <meta
            name="description"
            content="Heavenly-Trucks - zgłoszenie zostało wysłane do nas, odezwiemy się jak najszybciej będzie to możliwe."
        />

		<meta name="keywords" content="Heavenly Trucks, tachografy, kalibracja, sprawdzanie, naprawa, samochody ciężarowe, instalacje, mechanik, tachografy nakło" />
        <script defer="defer" src="bundle.js"></script>
		<link href="main.css" rel="stylesheet" />
	</head>
	<body>
		<header class="main-header main-header--scrolled position-relative mb-4">
			<div class="row">
				<figure class="main-header__logo">
					<a class="link" href="#">
						<h1>Heavenly Trucks</h1>
					</a>
				</figure>

				<nav class="main-header__nav">
					<ul class="main-header__list">
						<li class="main-header__list-item"><a class="link main-header__list-link" href="/index.html#oferta">Oferta</a></li>
						<li class="main-header__list-item"><a class="link main-header__list-link" href="/index.html#wycena">Wycena</a></li>
						<li class="main-header__list-item"><a class="link main-header__list-link" href="/index.html#kontakt">Kontakt</a></li>
						<li class="main-header__list-item"><a class="link main-header__list-link" href="/index.html#o-nas">O nas</a></li>
						<li class="main-header__list-item"><a class="link main-header__list-link" href="/index.html#galeria">Galeria</a></li>
					</ul>
				</nav>

				<a class="main-header__icon main-header__icon--fb" href="https://www.facebook.com/profile.php?id=100076033755745" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
						<path
							d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
						/>
					</svg>
				</a>
			</div>
		</header>

		<main class="container">
			<section class="section mb-8">
				<div class="heading">
					<h2 class="heading__prim mb-4">Heavenly-Trucks</h2>
					<p class="heading__desc mb-2">

                    <?= $message ?>
                        
                    </p>
					<p class="heading__desc"><a href="index.html">Wróć na stronę główną</a></p>
				</div>
			</section>
		</main>

		<footer class="footer footer--bottom">
			<nav class="footer__nav">
				<ul class="footer__list">
					<li class="footer__list-item"><a class="link footer__list-link" href="/index.html#oferta">Oferta</a></li>
					<li class="footer__list-item"><a class="link footer__list-link" href="/index.html#wycena">Wycena</a></li>
					<li class="footer__list-item"><a class="link footer__list-link" href="/index.html#kontakt">Kontakt</a></li>
					<li class="footer__list-item"><a class="link footer__list-link" href="/index.html#o-nas">O nas</a></li>
					<li class="footer__list-item"><a class="link footer__list-link" href="/index.html#galeria">Galeria</a></li>
				</ul>
			</nav>
			<p class="footer__copy">Copyright © 2023 Heavenly-Trucks.pl. All rights reserved.</p>
		</footer>
	</body>
</html>
