/**Создайте блок кода внутри функции и
объявите переменную с именем x с
использованием var, let и const. Попытайтесь
обратиться к этой переменной как внутри, так
и вне блока. Какие переменные видны
снаружи блока, а какие нет? */

'use strict'

function test() {

    if (true) {
        var x1 = 1
        let x2 = 2
        const x3 = 3

        console.log(x1); // видно
        console.log(x2); // видно
        console.log(x3); // видно
    }

    console.log(x1); // видно
    console.log(x2); // не видно
    console.log(x3); // не видно
}

test()