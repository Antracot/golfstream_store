<?php
$area = $_POST['area'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$mess = $_POST['mess'];
$firm = $_POST['firm'];
$ter = $_POST['ter'];
$dat = $_POST['dat'];
// $utm_source = $_POST['utm_source'];
// $utm_medium = $_POST['utm_medium'];
// $utm_campaign = $_POST['utm_campaign'];
// $utm_term = $_POST['utm_term'];
// $source_type = $_POST['source_type'];
// $source = $_POST['source'];
// $position_type = $_POST['position_type'];
// $position = $_POST['position'];
// $added = $_POST['added'];
// $creative = $_POST['creative'];
// $matchtype = $_POST['matchtype'];
// $location = $_POST['location'];

$subject = 'Заказ по торговой площади';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
//$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "avo579@yandex.ru";
//$to = "maddocs@yandex.ru";

$message = "От куда: $firm\n\n";

$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Вопрос: $mess\n\n";

$message .= "$area\n";
$message .= "$ter\n";
$message .= "$dat\n\n";
// $message .= "Источник: $utm_source\n";
// $message .= "Тип источника: $utm_medium\n";
// $message .= "Кампания: $utm_campaign\n";
// $message .= "Ключевое слово: $utm_term\n";
// $message .= "Тип площадки(поиск или контекст): $source_type\n";
// $message .= "Площадка: $source\n";
// $message .= "Спецразмещение или гарантия: $position_type\n";
// $message .= "Позиция объявления в блоке: $position\n";
// $message .= "Показ по дополнительным ролевантным фразам: $added\n";
// $message .= "Идентификатор объявления: $creative\n";
// $message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype\n";
// $message .= "Гео-положение: $location\n";

mail ($to,$subject,$message,$headers);
include("amocrm_api.php");
?>