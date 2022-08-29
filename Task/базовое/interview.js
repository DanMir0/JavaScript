//? Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
// function palindrome(text) {
//     text = text.toLowerCase()

//     return text === text.split("").reverse().join("")
// }

// console.log(palindrome('racecar'));
// console.log(palindrome('table') );
// console.log(palindrome("BOB"));
// console.log(palindrome("BOSeo"));

//? Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//? вывод fizz вместо чисел, кратных 3;
//? вывод buzz вместо чисел, кратных 5;
//? вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// function fizzbuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(5)


//! Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
//  const anagram = (strA, strB) => {

//     strA = strA.toLowerCase().replace(/[\s.,%]/g, '');
//     strB = strB.toLowerCase().replace(/[\s.,%]/g, '');

//     if (strA.length !== strB.length) {
//         return false
//     }

//     let arr1 = strA.split("").sort()
//     let arr2 = strB.split("").sort()

//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//            return false
//         }
//     }
//     return true
// }

// console.log(anagram('finder w, wd', 'Friend wd, w') );// true
// console.log(anagram('hello', 'bye') );// false

//? Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
//? Гласными являются «a», «e», «i», «o», «u».

// function findVowels(text) {
//     let count = 0;
//     text = text.toLowerCase()
//     const vowels = ["a", "e", "i", "o", "u"]
//     for (let i = 0; i <= text.length; i++) {
//         if (text[i] === vowels[i]) {
//             count++
//         }
//     }
//     return console.log(count);
// }

// function findVowels(text) {
//     let count = 0;
//     const vowels = ["a", "e", "i", "o", "u"]
//     for (let char of text.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return console.log(count);
// }

// findVowels('hello') // --> 2
// findVowels('why') // --> 0

//? Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.

// function fibonacci(num) {
//     if (num < 2) {
//         return num
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2)

//     //! 2
//     // if (num === 0) {
//     //     return 0
//     // } 
//     //  if (num === 1) {
//     //     return 1
//     // } else {
//     // return fibonacci(num - 1) + fibonacci(num - 2)
//     // }
    
// }
// console.log(fibonacci(0));

//?  Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
// Number.prototype.plus = function(value) {
//     return this + value
// }

// Number.prototype.minus = function(value) {
//     return this - value
// }

//?  Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'
function getStr(str) {
    return [].slice.call(arguments, 1).join(arguments[0])
}
console.log(getStr('*', '1', 'b', '1c',));