//? Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки. 

const btnShowUser = document.getElementById('showUser')
const container = document.querySelector('.container')

btnShowUser.addEventListener('click', e => {
    getPosts(renderPosts)
} )

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.addEventListener("load", () => {
        const responce = JSON.parse(xhr.responseText)
        cb(responce)
    })

    xhr.addEventListener("error", () => {
        alert("Не удалось подключиться к серверу.")
    })

    xhr.send()
}


function renderPosts(responce) {
    const fragment = document.createDocumentFragment();
    responce.forEach(post => {
        const card = document.createElement("div")
        card.classList.add('card')

        const cardBody = document.createElement("div")
        cardBody.classList.add('card-body')

        const title = document.createElement("h5")
        title.classList.add("card-title")
        title.textContent = post.name

        const btnReadMore =  document.createElement("button")
        btnReadMore.classList.add("btn", "btn-info")
        btnReadMore.setAttribute("data-bs-toggle", "collapse")
        btnReadMore.setAttribute("data-bs-target", `#collapseExample${post.id}`)
        btnReadMore.setAttribute("aria-expanded", "false")
        btnReadMore.setAttribute("aria-controls", "collapseExample")
        btnReadMore.setAttribute("idUser", post.id)
        btnReadMore.textContent = "Read more"

        const collapse = document.createElement("div")
        collapse.classList.add("collapse")
        collapse.setAttribute("id", `collapseExample${post.id}`)
   
        
        for (let key in post) {
            const title = document.createElement('h5')
            title.textContent = `${key}: ${post[key]}`
            if (typeof post[key] === 'object') {
                title.textContent = `${key}:`
               for (let keyInKey in post[key]) {
                const titleObjOfObj = document.createElement('h5')
                titleObjOfObj.classList.add('m-4')
                titleObjOfObj.textContent = `${keyInKey}: ${post[key][keyInKey]}`
                title.appendChild(titleObjOfObj)

                if (typeof post[key][keyInKey] === 'object') {
                    titleObjOfObj.textContent = `${keyInKey}:`
                    for (let keyInKeyInKey in post[key][keyInKey]) {
                        const titleObjOfObj_2 = document.createElement('h5')
                        titleObjOfObj_2 .classList.add('m-4')
                        titleObjOfObj_2.textContent = `${keyInKeyInKey}: ${post[key][keyInKey][keyInKeyInKey]}`
                        titleObjOfObj.appendChild(titleObjOfObj_2)
                    }
                }
               }
            } 
            collapse.appendChild(title)
        }

        cardBody.appendChild(title)
        cardBody.appendChild(btnReadMore)
        cardBody.appendChild(collapse)
        card.appendChild(cardBody)

        fragment.appendChild(card)
    })
    container.appendChild(fragment)
}

// function iteratingObh(obj) {
//     for (let key in obj) {

//     }
// }
