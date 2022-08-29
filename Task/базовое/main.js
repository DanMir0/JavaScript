// let string = 'some test string';
// console.log(`first = ${string[0]} last = ${string[string.length-1]} `);
// console.log(`${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length-1].toUpperCase()}`);
// console.log(string.indexOf('string'));
// console.log(string.indexOf(' ',5));
// console.log(string.slice(5, 10));
// console.log(string.substring(5,9));
// console.log(string.slice(0, -6));
// let a = 20;
// let b = 16;
// let str = a.toString() + b
// console.log(str)

//! Объекты 
// let obj = {
//     product: 'iphone',
// }
// obj.price = 1000;
// obj.currency = 'dollar';
// obj.details = {
//     model: 13,
//     color: 'black'
// }
// console.log(obj);

//? Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//? Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
// if (car.age > 5) {
//     console.log(`need repair`);
//     car.needRepair = true;
// } else {
//     car.needRepair = false;
// }

// console.log(car);

//?Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

// if (isNaN(item.discount) && item.discount != null && isNaN(item.price)) {
//     item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
// } else {
//     console.log(item.price);
// }
// console.log(item.priceWithDiscount);

//? Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

// let product = {
//     name: "Яблоко",
//     price: "120$"
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
//     console.log(product.name);
// } else {
//     console.log("товаров не найдено");
// }

//! switch
// let a = '1';
// switch (a) {
//     case 'block': console.log('block');
//     break;
//     case 'none': console.log('none');
//     break;
//     case 'inline': console.log('inline');
//     break;
//     default: console.log('other');
//     break;
// }

//! тернарный
// let str = '1';
// str === 'hidden' ? str = 'visible' : str = 'hidden';
// console.log(str);


// let a = -1;
// a === 0 ? a = 1 : a < 0 ? a = 'less then zero' : a *= 10;
// console.log(a);