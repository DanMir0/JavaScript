// const div = document.querySelector('div');
// const titles = document.querySelectorAll('h1');
// // const h1 = document.getElementsByTagName('h1');
// // console.dir(h1);
// // console.log(titles);
// // console.log(Array.from(titles));
// // console.log(Array.prototype.slice.call(titles));
// // console.log([...titles]);

// // console.log(div.parentElement);

// const link = div.querySelector('.link');
// // console.log(link.parentElement);
// // console.log(link.closest('.content'));

// div.classList.add('article', 'custom');
// div.classList.remove('article');
// // div.classList.contains('custom');
// // div.classList.toggle("toggle")
// // console.dir(link);

// div.setAttribute('id', 'myId');
// // div.removeAttribute("id")
// // div.getAttribute("id")
// // div.hasAttribute("id")

// // div.dataset.myattr

// // *Манипуляция DOM
// const title = document.querySelector('h1');
// // title.innerHTML = '<span>text</span>';
// // title.textContent = '<span>new text</span>';
// // title.appendChild('<span>appen</span>');
// // title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// // title.insertAdjacentElement

// // title.innerHTML += '<span>new text</span>';
// // const span = title.querySelector('span');
// // console.log(span);
// // title.innerHTML += '<span>new text2</span>';
// // span.innerHTML = 'asdasd';

// // *Создание элемента
// const span = document.createElement('span');
// span.textContent = 'span created by createElement';
// span.classList.add('myClass');
// console.log(span);
// title.appendChild(span);

// // div.appendChild(span);
// const fragment = document.createDocumentFragment();
// const colors = ['black', 'yellow', 'orange'];
// colors.forEach(color => {
//   const item = document.createElement('div');
//   item.classList.add(`bg-${color}`);
//   item.style.background = color;
//   item.textContent = color;
//   fragment.appendChild(item);
// });

// document.body.appendChild(fragment);

// // *Удаление элементов
// // title.remove()
// // title.parentElement.removeChild(title)



//! ДЗ
//? Найти параграф и получить его текстовое содержимое (только текст!)
// const pText = document.querySelector('p').textContent
// console.log(pText);

//? Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
// function infoDom(node) {
//   const info = {
//     type: node.nodeType,
//     name: node.nodeName,
//     quantityChild:  node.children.length
//   }
//   return info
// }
// console.log(infoDom(document.querySelector('mark')));

//? Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
// function getTextFromUl(ul) {
//     const newArr= []
//     const list = ul.querySelectorAll('li');
//     list.forEach(element => {
//         newArr.push(element.textContent) 
//     });
//     return newArr
// }
// console.log(getTextFromUl(document.querySelector('ul')));

//?  В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// const parag = document.querySelector('p');
// for (let i = 0; i < parag.childNodes.length; i++) {
//     if (parag.childNodes[i].nodeType === 3) {
//         parag.childNodes[i].textContent = 'text'
//     } else {
//         continue
//     }
// }
// console.log(parag);

//? Найти в коде список ul и добавить класс “list”
// const ul = document.querySelector('ul');
// ul.classList.add('list')
// console.log(ul);

//?  Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// const allLinks = document.querySelectorAll('a')
// for (let i = 0; i < allLinks.length; i++) {
//     if (allLinks[i].parentElement.nodeName === 'BODY') {
//         allLinks[i].setAttribute('id', 'link')
//     }
//      else {
//         console.log(`no`);
//      }
// }
// console.log(allLinks);

//? На li через один (начиная с самого первого) установить класс “item”
// const allLinks = document.querySelectorAll('a');
// for (let i = 0; i < allLinks.length; i += 2) {
//    allLinks[i].setAttribute('class', 'item')
// }
// console.log(allLinks);

//? На все ссылки в примере установить класс “custom-link”
// const allLinks = document.querySelectorAll('a');
// for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].setAttribute('class', 'item')
// }
// console.log(allLinks);

//? Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
//? Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
//! ИСПРАВИТЬ
// const ulLi = document.querySelectorAll('ul li');
// const ul = document.querySelector('ul')
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < ulLi.length; i++) {
//     const itemLi = document.createElement('li');
//     itemLi.setAttribute('class', 'new-item');
//     itemLi.textContent = `item ${i+1 + ulLi.length}`
//     fragment.appendChild(itemLi)
// }

// ul.appendChild(fragment)


//? В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
// const ulLink = document.querySelectorAll('ul li a')
//! Исправить
// ulLink.forEach(elem => {
//     const strong = document.createElement('strong');
//     elem.insertAdjacentElement('beforebegin', strong)
// })
// console.log(ulLink);

//?  начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
// const body = document.querySelector('body');
// const img = document.createElement('img');
// img.setAttribute('src', 'https://basik.ru/images/landscapes_walls/08_landscape.jpg');
// img.setAttribute('alt', 'лес');
// body.insertAdjacentElement('beforebegin', img)


//? Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
// const mark = document.querySelector('mark');
// mark.setAttribute('class', 'green')
// mark.insertAdjacentText("beforeend", 'green')

//? Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const list = document.querySelectorAll('li');
const arrList = Array.from(list)
arrList.sort((a, b) => b.textContent.localeCompare(a.textContent))

list.forEach(elem => {
    elem.remove()
})
const ul = document.querySelector('ul');

arrList.forEach(elem => {
    ul.appendChild(elem)
})
