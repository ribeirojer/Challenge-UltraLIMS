<?php 
// 04 - Escreva um algoritmo para encontrar um único
// número de um array que não se repita duas vezes:
//Input : array(5, 3, 4, 3, 4);
//Output : array
//(
//[0] => 5,
//[1] => 3,
//[2] => 4,
//[3] => 3,
//[4] => 4,
//);
//Single Number: 5

  $Input =  [5, 3, 4, 3, 4];
  $arr = array_count_values($Input);
  $Output = [];

  print_r($Input);
  foreach($arr as $key => $value){
      if($value === 1){
          echo '<br>Single Number: '. $key;
      }
  }

?>