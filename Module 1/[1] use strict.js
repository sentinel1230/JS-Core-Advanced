/**Напишите функцию для расчета факториала
числа. Функция должна принимать число в
качестве аргумента и возвращать его
факториал. Учтите использование строгого
режима */

'use strict';

function findFactorial(num) {
    let factorial = 1;

    for(let i = num; i > 0; i--){
        factorial *= i
    }

    return factorial
}

console.log(findFactorial(6))