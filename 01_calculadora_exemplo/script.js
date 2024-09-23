/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.
Passos:
Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicação e divisão.
Exibir os resultados das operações em um formato claro.
*/

let num1 = Number(prompt("Insira o primeiro número:"));
let num2 = Number(prompt("Insira o segundo  número:"));

//calcular as operações
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2
let divisão = num1 / num2;

//Exibir Resultados
// console.log("A soma entre", num1, "e", num2, "é", soma);
// console.log("A subtração é: ", subtracao);
// console.log("A multiplicação é:",multiplicacao);
// console.log("A divisão é:", divisão);

// Exibir os resultados usando tamplate strings
console.log(`A soma entre ${num1} e ${num2} é ${soma}`);
console.log(`A subtração entre ${num1} e ${num2} é ${subtracao}`);
console.log(`A multiplicação entre ${num1} e ${num2} é ${multiplicacao}`);
console.log(`A divisão entre ${num1} e ${num2} é ${divisão}`);
