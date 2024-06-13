/**Напишите функцию для сравнения двух
объектов, чтобы определить, содержит ли
первый из них эквивалентные значения
свойств по сравнению со вторым */

function equal(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    for (let key1 of keys1) {
        for (let key2 of keys2) {
            if (obj1[key1] === obj2[key2]) { return true }
        }
    }

    return false
}

let object1 = { number1: 2, number4: 9, string1: "abc" }
let object2 = { number2: 7, number5: 5, string2: "abc" }
let object3 = { number3: 7, number6: 8, string3: "abcd" }

console.log(equal(object1, object2))
console.log(equal(object2, object3))
console.log(equal(object1, object3))