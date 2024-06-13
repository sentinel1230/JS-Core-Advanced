/**Напишите функцию, которая многократно
выполняет заданную операцию через
фиксированный интервал, используя
setInterval() */

function Fibonacci() {
    let a = 0
    let b = 1

    console.log(a)
    console.log(b)

    setInterval(function () {
        let next = a + b
        a = b
        b = next

        console.log(next)
    }, 1000)
}

Fibonacci()

