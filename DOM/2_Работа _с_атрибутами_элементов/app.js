const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// console.log(div.parentElement);

const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add('article', 'custom');
div.classList.remove('article');
// div.classList.contains('custom');
// div.classList.toggle("toggle")
// console.dir(link);

div.setAttribute('id', 'myId');
// div.removeAttribute("id")
// div.getAttribute("id")
// div.hasAttribute("id")

// div.dataset.myattr