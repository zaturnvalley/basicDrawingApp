<?php

$data = $_POST['img'];

$data = str_replace('data:image/png;base64,', '', $data);

$img = base64_decode($data)

?>