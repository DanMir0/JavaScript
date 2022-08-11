//? С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
//? Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:  table
// };

// let pockets = {
//     money: 2000,
//     __proto__:  bed
// };
//  console.log(pockets.pen);
//  console.log(bed.glasses);
// console.log(head.glasses);

//?  Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//      // this.stomach.push(food);
//      this.stomach = [food]
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster,
//     //stomach: [],
//   };
  
//   let lazy = {
//     __proto__: hamster,
//     // stomach: [],
//   };
  
//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   console.log(speedy.stomach); // apple
  
//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   console.log(lazy.stomach); // apple

//? Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// function f() {
//     console.log("Hello!");
//   }
//   Function.prototype.defer = function(ms) {
//     setTimeout(()=> {
//         this()
//     }, ms) 
//   }
  
// f.defer(1000);// выведет "Hello!" через 1 секунду

//? Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// function f(a, b) {
//     console.log(a + b);
//   }

//   Function.prototype.defer = function(ms) {
    
//     return function (...arg) {
//         setTimeout(() => {
//             this(...arg)
//         }, ms)
//     }.bind(this)
//   }
  
//   f.defer(1000)(1, 2);


//? Добавьте toString в словарь
//! НЕ ПОНЯЛ
// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// // apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// // список свойств, разделённых запятой, выведен с помощью toString
// console.log(dictionary); // "apple,__proto__"