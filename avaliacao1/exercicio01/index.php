<?php 
//Escreva um algoritmo para encontrar os números faltantes de um array:
//Input : array(1,2,3,6,7,8);
//Output : array([3] => 4, [4] => 5);

  $Input =  [1, 2, 3, 6, 7, 8];
  $Output = [];

  // CONTADOR; CONDIÇÃO; INCREMENTO/DECREMENTO
  for($i = 1; $i < end($Input); $i++) {

    if(!in_array($i, $Input)) {//Só adiciona se não estiver no array
      $Output[$i-1] = $i;
    } 
  }
  print_r($Output);

?>