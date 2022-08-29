//? 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

// let str = 'i am in the easycode'
// let resultStr = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i-1] == ' ' || str[i] == str[0]) {
//         resultStr += str[i].toUpperCase();
//     } else {
//         resultStr += str[i]
//     }
// }
// console.log(resultStr);

//?ана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
// let str = 'tseb eht ma i';
// let resultStr = '';
// for (let i = str.length-1; i >= 0; i--) {
//     resultStr += str[i];
// }
// console.log(resultStr);

//? Факториал числа - произведение всех натуральных чисел от 1 до nвключительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
// let result = 1;
// for (let i = 1; i <= 10; i++) {
//     result *= i;
// }
// console.log(result);

//? 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
// let str = 'JavaScript is a pretty good language';
// let resultStr = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i-1] == ' ') {
//         resultStr += str[i].toUpperCase();
//     }  else {
//         resultStr += str[i];
//     }
// }
// for (let i = 0; i < str.length; i++) {
//   if (resultStr[i] == ' ') {
//     resultStr = resultStr.slice(0, i) + resultStr.slice(i+1, str.length)
//   }
// }
// console.log(resultStr);

//? 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (let value of arr) {
//     if (value % 2 == 1) {
//         console.log(value);
//     }
// }

//? 6. Дан объект: Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// }

// for (let value in list) {
//     if (typeof(list[value]) == 'string') {
//       list[value] = list[value].toUpperCase()
//     }
// }
// console.log(list);
