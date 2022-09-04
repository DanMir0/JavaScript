// function getPost(id) {
//     return Promise.resolve().then(() => {
//         const [userType, userId] = id.split('-')
//         return  fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//         .then(response => response.json())
//     })
// }

// всегда возвращает Promise
async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
   
        return response
    } catch (err) {
        // throw err
        return Promise.reject(err)
    }
}

// getPost(1).then(data => console.log(data))
// .catch(err => console.log(err))

async function getAll() {
    const [res1, res2] = await Promise.all([getPost(1), getPost(2)])
    console.log(res1, res2);
}

getAll()

//! async, await позволяет писать ансихронный код  в стиле болле синхронного
//! всегда промисы
//! async выбрасывает ошибку синхронную или ансихронную в .catch и позволяет работать с try catch