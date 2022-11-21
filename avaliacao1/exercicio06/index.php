<?php 
// Escreva um algoritmo que receba um numero e que apartir deste numero construa
// um array com a sequencia fibonacci e com o numero de elementos sendo o
// informado:
// Input : 6;
// Output : array (1, 1, 2, 3, 5, 8);

  $Input =  6;
  $Output = [1, 1];

  for($i = 2; $i < $Input; $i++) {
    $Output[] = $Output[$i-1] + $Output[$i-2];
  }
  print_r($Output);

?>