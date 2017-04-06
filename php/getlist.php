<?php
$json = file_get_contents('../questions/wave.json');
$json = json_decode($json);
$re = array();
for($x=0;$x<count($json);$x++){
    $thisone = (object)array('foo' => 'bar', 'property' => 'value');
    array_push($re,$thisone);
}