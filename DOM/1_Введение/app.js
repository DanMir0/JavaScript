// const div = document.querySelector('div');
// const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);


//! ДЗ
// const head = document.querySelector('head')
// console.log(head);
// const body = document.querySelector('body')
// console.log(body);
// const childrenBody = body.children;
// console.log(childrenBody);
// const firstDiv = document.querySelector('div').children
// console.log(firstDiv);


//? Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго

// function isParent(parent, child) {
//    return parent.contains(child);
   
// }
// console.log(isParent(document.body.children[0], document.querySelector('mark')));
// console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));
//? Получить список всех ссылок, которые не находятся внутри списка ul

const links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
console.log(links);


//? Найти элемент, который находится перед и после списка ul
// const previousUl = document.querySelector('ul').previousElementSibling;
// const nextUl = document.querySelector('ul').nextElementSibling;
// console.log(previousUl);
// console.log(nextUl);