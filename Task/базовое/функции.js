//? Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// function multiply() {
//     let result = 1;
//     if (arguments.length == []) {
//         return 0;
//     } else {
//         for (let i = 0; i < arguments.length; i++) {
//             result *= arguments[i];
//         }
//         return result
//     }
// }

// console.log(multiply(2,3,3));

//? Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

// function reverseString(str) {
//     let reverseStr = '';
//     if(typeof(str) != 'string') {
//         return "It's not a string!"
//     }
//     for (let i = str.length-1; i >= 0; i--) {
//         reverseStr += str[i]
//     }
//     return reverseStr
// }

// console.log(reverseString(1));

//? Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

// function getCodeStringFromText(str) {
//     let unicodeWithStr = '';
//     for (let i = 0; i < str.length; i++) {
//         unicodeWithStr += str.charCodeAt(str[i]) + " ";
//     }
//     return unicodeWithStr
// }
// console.log(getCodeStringFromText("hello"));

//? Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

// function guessNumber(value) {
//     if (value < 1 || value > 10) {
//         return 'Guess a number from 1 to 10.'
//     }
//     let number = Math.round(Math.random() * 10);
//     if (number == value) {
//         return 'You WIN!'
//     } else {
//         return `You didn't quess your number ${value} and the number ${number} came out.`
//     }
// }

// console.log(guessNumber(6));

//? Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

// function getArray(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     return arr;
// }

// console.log(getArray(10));

//?  Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. 

// function doubleArray(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i];
//     }
//     newArr = arr.concat(arr)
//     return newArr
// }
// console.log(doubleArray([1,2,3]));

//? Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

// function changeCollection(...arguments){
//     for (let i = 0; i < arguments.length; i++) {
//         arguments[i] = arguments[i].slice(1)
//     }
//     return console.log(...arguments);
// }
// changeCollection([1,2,3], ["a","b","c"]);
// changeCollection([1,2,3]);

//? Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
let users = [
    {name: 'Pavel', gender: 'male', age: 29},
    {name: 'Anna', gender: 'female', age: 18},
    {name: 'Fiona', gender: 'female', age: 19},
    {name: 'Julia', gender: 'female', age: 28},
    {name: 'Alex', gender: 'male', age: 23},
    {name: 'Sonya', gender: 'female', age: 17},
    {name: 'Frank', gender: 'male', age: 44},
    {name: 'John', gender: 'male', age: 49},
    {name: 'Greta', gender: 'female', age: 57}
    ];

function funcGetUsers(arrUsers, key, keyValue) {
   return arrUsers.filter(item => item[key] === keyValue)
}

console.log(funcGetUsers(users, 'gender', 'female'));