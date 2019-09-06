<?php /*начало php файла*/
	/*echo - вывод текста*/
	$name = $_POST['name']; /*получение имени. Все переменные начинаются со знака $*/
	$user = 'cr96375_db';
	$pass = 'parol';
	$db = new PDO('mysql:host=localhost;dbname=cr96375_db', $user, $pass);
	$db->exec("INSERT INTO requests(`time`, name) VALUES(NOW(), '$name')");