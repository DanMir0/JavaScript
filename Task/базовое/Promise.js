//? Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
// function delay(ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => resolve(), ms)
//     })
//   }

//   delay(3000).then(() => console.log('выполнилось через 3 секунды'));

//? Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
//! ВЕРНУТЬСЯ!
// showCircle(150, 150, 100).then(div => {
//     div.classList.add('message-ball');
//     div.append("Hello, world!");
//   });

//? Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
async function loadJson(url) {
  return fetch(url)
  .then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })

}
loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404

// function one() { console.log(1); }
// function two() {
//  promise = fetch('http://giool.ecom').then((Response) =>Response.json())
// return promise

// }
// function three(json) {
// console.log(3)
// return 'omise'
// }

// function four(param) {
//   console.log(4,param);
// }

// one()

// two()
// .then(three)
// .then(four)

// five()




  

