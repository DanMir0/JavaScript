//? Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

//? class Component(tagName) {
 //?  this.tagName = tagName || 'div';
 //?  this.node = document.createElement(tagName);
//? }

//? Пример вызова:
//? const comp = new Component('span');

// class Component {
//     constructor(tagName) {
//         this.tagName = tagName || 'div'
//         this.node = document.createElement(tagName || 'div')
//     }
// }
// const comp = new Component();

//? Реализовать конструктор и методы в ES6 синтаксисе:

//? Component.prototype.setText = function (text) { 
 //?  this.node.textContent = text;
//? } ;

// class Component {
//     constructor(tagName) {
//         this.tagName = tagName || 'div'
//         this.node = document.createElement(tagName || 'div')
//     }
//     setText(text) {
//       return  this.node.textContent = text
//     }
// }

// const comp = new Component();

//?  Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
    constructor(startNumber) {
        this.startNumber = startNumber
    }
    addition(value) {
        return this.startNumber += value
    }
    subtraction(value) {
        return this.startNumber -= value
    }
    multiplication(value) {
        return this.startNumber *= value
    }
    division(value) {
        return this.startNumber /= value
    }
}

const calc = new Calculator(5)
