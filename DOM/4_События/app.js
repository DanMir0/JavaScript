// const btn = document.querySelector('button');
// const link = document.querySelector('a');
// // btn.onclick = function() {
// //   console.log('click');
// // };

// // btn.addEventListener('click', function(e) {
// //   console.log(e);
// // });

// // btn.addEventListener('click', e => {
// //   console.log(this);
// //   console.log(e);
// // });

// // function clickhandler(e) {
// //   e.preventDefault();
// //   console.log(this);
// //   console.log('click');
// // }

// // link.addEventListener('click', clickhandler);

// // link.removeEventListener('click', clickhandler);

// const container = document.querySelector('.container');

// btn.addEventListener('click', e => {
//   const div = document.createElement('div');
//   const nestedBtn = document.createElement('button');
//   div.textContent = Math.random();
//   nestedBtn.textContent = 'button';
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// container.addEventListener('click', e => {
//   console.dir(e.target);
//   if (e.target.tagName === 'BUTTON') {
//     console.log('button clicked');
//   }
// });






//! ДЗ


//? По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
// const btnMsg = document.querySelector('#btn-msg')
// btnMsg.addEventListener('click', (e) => {
//     alert(btnMsg.getAttribute('data-text'))
// })

//? При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
// const btnMsg = document.querySelector('#btn-msg')
// btnMsg.addEventListener('mouseover',(e) => {
//   const classRed = e.target
//   classRed.style.background = 'red'
//   console.log(classRed);
// })

// btnMsg.addEventListener('mouseout', (e) => {
//     const classRed = e.target
//     classRed.style.background = 'rgb(240, 240, 240)'
//     console.log(classRed);
// })

//? При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
// const body = document.querySelector('body');

// body.addEventListener('click', (e) => {
//     if (!e.target.hasAttribute('id')) {
//         alert("Нету аттрибута 'id'")
//     } else {
//         alert(`Атрибут id = ${e.target.getAttribute('id')}`)
//     }
// })

//? При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
// const btnGenerate = document.querySelector('#btn-generate')

// btnGenerate.addEventListener('click', (e) => {
//     const ul = document.querySelector('ul')
//     const allLiLength = document.querySelectorAll('li').length
//     const li = document.createElement('li')
//     li.textContent = `Item ${allLiLength+1}`
//     ul.appendChild(li)
// })