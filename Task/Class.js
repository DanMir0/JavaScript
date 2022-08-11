//? Перепишите класс
//!  не смог строчка 21 и 31
// class Clock {
//     constructor({template}) {
//         this.template = template
//     }
//     timer;

//     render(template) {
//         let date = new Date();

//         let hours  = date.getHours()
//       if (hours < 10) hours = '0' + hours

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins

//       let secs = date.getSeconds()
//       if (secs < 10) secs = '0' + secs

//       let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

//       console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer)
//     }

//     start() {
//         this.render()
//         this.timer =  setInterval(() => this.render(), 1000);
//     }
// }
// let clock = new Clock({template: 'h:m:s'})
// console.log(clock.start());

//? К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name)
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
//   console.log(rabbit.name);


//? Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   //! лучше, ибо код не повторяется и расширяем класс
//   constructor(options) {
//     super(options);
//     let { precision=1000 } = options;
//     this.precision = precision;
//   }
  
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }

//   //! второй вариант, не очень хороший!
//   // start(precision = 1000) {
//   //     this.render()
//   //     this.timer = setInterval(() => this.render(), precision);
//   // }
// }

// let clock = new ExtendedClock({template: 'h:m:s'})
// console.log(clock.start(5000));

//? 
class Rabbit extends Object {
  constructor(name) {
    super()
    this.name = name;
  }

}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name'));