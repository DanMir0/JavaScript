// const arr = ["Den", "Vlad", "Danil", "Jenya"]

// function mapArray(arr, fn) {
//     const res = [];

//     for (let i = 0; i < arr.length; i++) {
//         res.push(fn(arr[i]));
//     }
//     return res;
// }

// function nameLength(el) {
//     console.log(el);
//     return el.length;
// }

// function nameToUpperCase(el) {
//     return el.toUpperCase();
// }

// console.log(mapArray(arr, nameLength));
// console.log(mapArray(arr, nameToUpperCase));

// function greeting(firstName) {
//     return function(lastName) {
//         return `Hello, ${firstName} ${lastName}`;
//     }
// }

// // const testGreeting = greeting('Denis');
// // console.log(testGreeting);
// // const fullName = testGreeting("Masya");
// // console.log(fullName);

// const fullName = greeting('Denis')('Masya');
// console.log(fullName);

// function question(job) {
//     const jobDictionary = {
//         developer: "что такое JavaScript?",
//         teacher: "какой предмет вы ведете?"
//     };

//     return function(name) {
//         return `${name}, ${jobDictionary[job]}`
//     }

//     // if (job === 'developer') {
//     //     return function(name) {
//     //         return `${name}, что такое JavaScript?`;
//     //     }
//     // } else if (job === 'teacher') {
//     //     return function(name) {
//     //         return `${name},какой предмет вы ведете?`;
//     //     }
//     // }
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Denis'));
// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Denis'));

//?  Создать две функции и дать им осмысленные названия:
//? - первая функция принимает массив и колбэк (одна для всех вызовов)
//? - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// function createNewValue(arr, fn) {
//     let newStr = '';
//     for (let i = 0; i < arr.length; i++) {
//        newStr += fn(arr[i])
//     }
//     return `New value: ${newStr}` + " ";
// }

// function joiner(el) {
//     return el[0].toUpperCase() + el.slice(1)

// }

// function multiplicationByTen(el) {
//     return  el * 10 + ", " ;
// }

// function infoUser(el) {
//     return el.name + ' is ' + el.age + " "
// }

// function reverseArr(el) {
//     let newArr = []
//     for (let i = el.length-1; i >= 0; i--) {
//         newArr += el[i]
//     }
//     return newArr + ", "
// }

// const string = ['my','name','is','Trinity'];
// const number = [10, 20, 30]
// const users = [{age:45, name: 'John'}, {age: 20, name: 'Aaron'}];
// const arr = ['abc', '123'];

// console.log(createNewValue(string, joiner));
// console.log(createNewValue(number, multiplicationByTen));
// console.log(createNewValue(users, infoUser));
// console.log(createNewValue(arr, reverseArr));


//? 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
//? функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 

function every(arr, fn) {
    if (!Array.isArray(arr)) {
        return `Укажите массив чисел.`
    } else if (typeof fn !== 'function') {
        return `Вы должны передать функцию.`
    }
    for (let i = 0; i < arr.length; i++) {
         if (!fn(arr[i], i, arr)) {
            console.log('Not all items are valid');
            return false
         }
    }
}

function moreFive(el, index, arr) {
    if (el > 5) {
 
        return true;
    }
    else {
        console.log(`Элемент ${el} с индексом ${index} в массиве ${arr} больше 5`);
        return false;
    }
}
const arr = [10,0,55,6]
console.log(every(arr, moreFive));