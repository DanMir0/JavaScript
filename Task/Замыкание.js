//? Создайте функцию которая бы умела делать:
// function minus (value = 0) {
//     return function(num = 0) {
//         return value - num
//     }
// }
// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

//? Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker(val = 1) {
//     let multiply = val;
//     return function(num = 1) {
//         return multiply *= num
//     }
// }
// const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

//? Реализовать модуль, который работает со строкой и имеет методы:
//? a. установить строку
//? i. если передано пустое значение, то установить пустую строку
//? ii. если передано число, число привести к строке
//? b. получить строку
//? c. получить длину строки
//? d. получить строку-перевертыш

// const strModul = (function() {
//     let str = '';

//     function setStr(value) {
//         if (value == undefined) {
//             str = '';
//         } else if (typeof(value) == 'number') {
//             str = value.toString();
//         } else {
//             str = value
//         }
//     }
//     function getString() {return str}
//     function getLength() {return str.length}
//     function getReversStr() {return str.split('').reverse().join('')}
//     return {
//         setStr: setStr,
//         getString: getString,
//         getLength: getLength,
//         getReversStr: getReversStr
//     };
// }())
// console.log(strModul.setStr("abcde"));
// console.log(strModul.getString());
// console.log(strModul.getLength());
// console.log(strModul.getReversStr());

//? Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

const calculator = (function () {
    let number = 0;

    function setNumber(value) {
        if (value === undefined) {
            return console.log(`Не найдено значение.`);
        } else if (typeof (value) !== 'number') {
            number = value.parseInt();
        } else {
            number = value;
            console.log(`Успешно записали!`);
        }
        return this
    }
    function adding(value) {
        console.log(number += value);
        return this
    }
    function subtraction(value) {
        console.log(number -= value);
        return this
    }
    function multi(value) {
        console.log(number *= value);
        return this
    }
    function division(value) {
        console.log(number /= value);
        return this
    }
    function pow(value) {
        console.log(number = Math.pow(number, value))
        return this;
    }
    function getNumber() {
        console.log(number.toFixed(2));
        return this;
    }

    return {
        setNumber,
        adding: adding,
        subtraction: subtraction,
        multi: multi,
        division: division,
        pow: pow,
        getNumber: getNumber,
    }
})();
// console.log(calculator.setNumber(10));
// console.log(calculator.adding(5));
// console.log(calculator.subtraction(5));
// console.log(calculator.multi(2));
// console.log(calculator.division(2));
// console.log(calculator.pow(2));
// console.log(calculator.getNumber());
console.log(calculator.setNumber(10).adding(5).pow(2).getNumber());