/**Напишите функцию, которая принимает
массив с числами и увеличивает каждое
число из массива на 10 процентов. */

function increase(arr) {
    let increasedArr = []

    for (let i = 0; i < arr.length; i++) {
        increasedArr[i] = arr[i] + arr[i] * 0.1
    }

    return increasedArr
}

let array = [2, 3, 5, 0, 17]
console.log(increase(array))