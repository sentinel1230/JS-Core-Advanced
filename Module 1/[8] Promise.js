/**Напишите функцию, выполняющую серию
асинхронных операций последовательно,
используя Promises */

function fetchAuthorInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Jhon' }
            resolve(data)
        }, 1000)
    })
}

function fetchAuthorBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ['book_1', 'book_2']
            resolve(data)
        }, 1000)
    })
}

function run() {

    fetchAuthorInfo()
        .then((authorInfo) => {
            return fetchAuthorBooks()
        })
        .then((authorBooks) => {
            console.log(authorBooks)
        })
}

run()