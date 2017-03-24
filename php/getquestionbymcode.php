<?php
/*
* @author WMXPY
* @contect wm@wmpcxpy.com
*/
$question = $_GET['mcode'];
$json = file_get_contents('../questions/wave.json');
$json = json_decode($json);
$re = array();
for($x=0;$x<count($json);$x++){
    if($json[$x]->mcode == $question){
        $re = $json[$x];
        $x = count($json);
    }
}
echo json_encode($re);