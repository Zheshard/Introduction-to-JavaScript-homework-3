"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const enteredNumber = +prompt("Введите число:");
console.log(cubeANumber(enteredNumber));

function cubeANumber(number) {
  return number ** 3;
}
