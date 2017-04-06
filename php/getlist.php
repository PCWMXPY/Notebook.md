<?php
$json = file_get_contents('../questions/wave.json');
$json = json_decode($json);
$re = array();
for($x=0;$x<count($json);$x++){
    $thisone = (object)array('examname'=>$json[$x]->examname,'mcode'=>$json[$x]->mcode,'visits'=>$json[$x]->visits,'questions'=>count($json[$x]->questions));
    array_push($re,$thisone);
}
echo json_encode($re);