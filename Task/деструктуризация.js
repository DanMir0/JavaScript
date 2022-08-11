//? Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
function func(first, ...arg) {
  return {
    first,
    other: arg
}
}

console.log(func('a', 'b', 'c', 'd'));

//? рганизовать функцию getInfo, которая принимает объект вида и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {
//     name: 'Google',
//     info: { employees: ["Vlad", 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
//   };

// function getInfo({name = 'Unknown', info: { partners}} = {}) {
//     const [partner_first, partenr_second] = partners;
//     return console.log(`Name: ${name} \nPartners: ${partner_first} ${partenr_second}`);
// }
// getInfo(organisation);