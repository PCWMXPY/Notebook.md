<?php
/*
* @author WMXPY
* @contect wm@wmpcxpy.com
*/
$question = $_POST['json'];
echo $question;
$question = json_decode($question);
$json = file_get_contents('../questions/wave.json');
echo $json;
$json = json_decode($json);
$buffer = 0;
for($x=0;$x<count($json);$x++){
    if($json[$x]->examname == $question->examname){
        $buffer = -1;
        $x = count($json);
    }else{
        $buffer++;
    }
}
if($buffer != -1){
    array_push($json,$question);
    $json = json_encode($json);
    file_put_contents('../questions/wave.json',$json);
}
echo $buffer;