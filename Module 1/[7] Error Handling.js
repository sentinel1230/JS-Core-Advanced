/**Напишите функцию, которая принимает
число в качестве параметра и выдает
пользовательскую ошибку, если число не
является целым числом */

function checkType(number) {
    if (!Number.isInteger(number)) {
        throw Error(`Ошибка! ${number} не является целым`)
    }
    else { console.log(`${number} - целое`) }
}

try {
    checkType(1)
    checkType(1.33)
    
}
catch (err) {
    console.error(err.message)
}