<?php 
//Escreva um algoritmo para encontrar três números consecutivos de um array que
//somados o resultado é igual a um outro número fornecido:
//Input : (array(2, 7, 7, 1, 8, 2, 7, 8, 7), 16));
//Output : array(
//[0] => 2 + 7 + 7 = 16,
//[1] => 7 + 1 + 8 = 16
//);

  $Input =  [[2, 7, 7, 1, 8, 2, 7, 8, 7], 16];
  $Output = [];

  // CONTADOR; CONDIÇÃO; INCREMENTO/DECREMENTO
  for($i = 0; $i < count($Input[0])-2; $i++) {

    $soma = $Input[0][$i]+$Input[0][$i+1]+$Input[0][$i+2];
    
    if($soma===$Input[1]) {
      $Output[] = "{$Input[0][$i]} + {$Input[0][$i+1]} + {$Input[0][$i+2]} = {$soma}";
    } 
  }
  print_r($Output);

?>