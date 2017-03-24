<?php
/*
* @author WMXPY
* @contect wm@wmpcxpy.com
*/
$question = $_GET['examname'];
$json = file_get_contents('../questions/wave.json');
$json = json_decode($json);
$re = array();
for($x=0;$x<count($json);$x++){
    if($json[$x]->examname == $question){
        $re = $json[$x];
        $json[$x]->visits++;
        $x = count($json);
        $json = json_encode($json);
        file_put_contents('../questions/wave.json',$json);
    }
}
echo json_encode($re);