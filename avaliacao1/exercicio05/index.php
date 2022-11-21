<?php 
// 05 - Escreva um algoritmo para encontrar um único
// número de um array onde cada número repete três vezes, exceto um:
//Input : array(5, 3, 4, 3, 5, 5, 3);
//Output : array
//(
//[0] => 5,
//[1] => 3,
//[2] => 4,
//[3] => 3,
//[4] => 5,
//[5] => 5,
//[6] => 3,
//);
//Single Number: 4

  $Input =  [5, 3, 4, 3, 5, 5, 3];
  $arr = array_count_values($Input);
  $Output = [];

  print_r($Input);
  foreach($arr as $key => $value){
      if($value === 1){
          echo '<br>Single Number: '. $key;
      }
  }
  //ficou igual o exercicio04

?>