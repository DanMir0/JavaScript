const btn = document.querySelector('button')
const container = document.querySelector('.container')

function getPosts(cb) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    xhr.addEventListener('load', () => {
        const responce = JSON.parse(xhr.responseText)
        cb(responce)
    })

    xhr.addEventListener('error', () => {
        console.log('error');
    })

    xhr.send()
}

function renderPosts(responce) {

    const fragment = document.createDocumentFragment()

    responce.forEach(post => {
        const card = document.createElement('div')
        card.classList.add('card')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const title = document.createElement('h5')
        title.textContent = post.title
        title.classList.add('card-title')

        const article = document.createElement('p')
        article.textContent = post.body
        article.classList.add('card-text')

        cardBody.appendChild(title)
        cardBody.appendChild(article)
        card.appendChild(cardBody)
        fragment.appendChild(card)
    })
    container.appendChild(fragment)
}

btn.addEventListener("click", e => {
    getPosts(renderPosts)
})
