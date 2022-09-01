const btn = document.querySelector('.btn-get-posts')
const container = document.querySelector('.container')
const btnAddPost = document.querySelector('.btn-add-post')

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

function createPost(body, cb) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    xhr.addEventListener('load', () => {
        const responce = JSON.parse(xhr.responseText)
        cb(responce)
    })

    xhr.addEventListener('error', () => {
        console.log('error');
    })

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF=8")

    xhr.send(JSON.stringify(body))
}

function cardTemplate(post) {
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
    return card;
}

function renderPosts(responce) {

    const fragment = document.createDocumentFragment()

    responce.forEach(post => {
       const card = cardTemplate(post)
        fragment.appendChild(card)
    })
    container.appendChild(fragment)
}

btn.addEventListener("click", e => {
    getPosts(renderPosts)
})

btnAddPost.addEventListener("click", (e) => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    createPost(newPost, (responce) => {
        const card = cardTemplate(responce)
        container.insertAdjacentElement('afterbegin', card)
    })
})

function myHttpRequest({ method, url } = {}, cb) {
    try {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. Status code: ${xhr.status}`, xhr)
                return
            }
            const responce = JSON.parse(xhr.responseText)
            cb(null, responce)
        })
    
        xhr.addEventListener('error', () => {
            cb(`Error. Status code: ${xhr.status}`, xhr)
        })
    
        xhr.send()
    } catch(error) {
        cb(error)
    }
   
}

// myHttpRequest({ 
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
// },
// (err, res) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(res);
// })


function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr)
                        return
                    }
                    const responce = JSON.parse(xhr.responseText)
                    cb(null, responce)
                })
            
                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr)
                })
            
                xhr.send()
            } catch(error) {
                cb(error)
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest()
                xhr.open('POST', url)
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr)
                        return
                    }
                    const responce = JSON.parse(xhr.responseText)
                    cb(null, responce)
                })
            
                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr)
                })
            
                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value) 
                    })
                }

                xhr.send(JSON.stringify(body))
            } catch(error) {
                cb(error)
            }
        }
    }
}

const myHttp = http()

myHttp.post('https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
}, 
{ 'Content-Type': 'application/json' },
(err, res) => {
    console.log(err, res);
}
)