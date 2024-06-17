/**Напишите функцию, которая принимает
callback функцию и вызывает ее после
задержки в 2 секунды */

function loadSereverData(callback) {
    setTimeout(() => {
        const data = {
            name: 'Jhon',
            age: '23'
        }

        callback(data)
    }, 2000)
}

loadSereverData((data) => { console.log('Полученные данные - ', data) })

