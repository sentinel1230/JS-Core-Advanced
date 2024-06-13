/**Напишите функцию, которая многократно
выполняет заданную операцию через
фиксированный интервал, используя
setInterval() */

function Fibonacci() {
    let firstNum = 0
    let secondNum = 1

    console.log(a)
    console.log(b)

    setInterval(function () {
        let next = firstNum + secondNum
        firstNum = secondNum
        secondNum = next

        console.log(next)
    }, 1000)
}

Fibonacci()

