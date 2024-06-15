/**Напишите функцию, которая использует
async/await для загрузки данных с удаленного
сервера (например, с помощью API) и
возвращает полученный результат */

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
        }, 2000)
    })
}

async function loadDataFromServer() {
    const dataFromServer = await Promise.all([fetchAuthorInfo(), fetchAuthorBooks()])
        .then((dataFromServer) => {
            console.log(dataFromServer)
        })
}

loadDataFromServer()