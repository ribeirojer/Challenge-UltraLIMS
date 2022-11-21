<?php 
//Escreva um algoritmo para encontrar três números consecutivos de um array que
//somados o resultado é igual a zero:
//Input : array(-1,0,1,2,-1,-4);
//Output : array([0] => -1 + 0 + 1 = 0);0

  $Input =  [-1, 0, 1, 2, -1, -4];
  $Output = [];

  // CONTADOR; CONDIÇÃO; INCREMENTO/DECREMENTO
  for($i = 0; $i < count($Input)-2; $i++) {
    $soma = $Input[$i]+$Input[$i+1]+$Input[$i+2];
    if($soma===0) {
      $Output[] = "{$Input[$i]} + {$Input[$i+1]} + {$Input[$i+2]} = {$soma}";
    } 
  }
  print_r($Output);

?>