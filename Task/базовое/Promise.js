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
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       } 
//     })
// }

// async function loadJson(url) {
//   let response = await fetch(url)
  
//   if (response.status == 200) {
//     return await response.json()
//   } else {
//     throw new Error(response.status)
//   }
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404


//? Перепишите, используя async/await
//? В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url)
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }

  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();


//? Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. 
// function promiseCreator(time, msg) {
//   return new Promise((resolve, reject) => {
//    setTimeout( () => {
//     resolve(msg)
//    }, time)
//   })
// }
// const prom = promiseCreator(10000, 'Ok!');
// prom.then(console.log);





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






