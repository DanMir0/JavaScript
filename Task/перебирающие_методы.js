//? На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//? каждый элемент которого будет хранить информацию о числе и его четности:
// let arr = [1,2,3,5,8,9,10];

// const isEven = arr.map(arr => ({
//     digit: arr, 
//     odd: arr % 2 !== 0
// }))
// console.log(isEven); 

//? Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
// const arrNumber = [12, 4, 50, 1, 0, 18, 40];

// let zeroCheck = arrNumber.some(arrNumber => (arrNumber === 0))
// console.log(zeroCheck);

//? Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
// const str = ['yess', 'hello', 'noaa', 'easycode', 'what'];

// const isCharMoreThree = str.every(str => str.length > 3)
// console.log(isCharMoreThree);

//? Напишите функцию, которая из элементов массива соберет и вернёт
//? строку, основываясь на index каждой буквы
// const charIndex = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// charIndex.sort((prevIndex, nextIndex) => prevIndex.index - nextIndex.index);
// console.log(charIndex);
// let buildStr = charIndex.reduce((acc, char) => (acc += char.char), '');
// console.log(buildStr);

//! Sort
//? Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
// const arrs = [ [14, 45],  [1],  ['a', 'c', 'd'] ];
// arrs.sort((prevArr, nextArr) => prevArr.length - nextArr.length)
// console.log(arrs);

//? Отсортировать их по возрастающему количеству ядер (cores).
// const cpu = [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// cpu.sort((prevCpu, nextCpu) => prevCpu.info.cores - nextCpu.info.cores)
// console.log(cpu);

//? Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим
//let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
// function filterCollection(products, minPrice, maxPrice) {
//   const priceProduct = products.filter(product => product.price >= minPrice && product.price <=maxPrice);
//    return priceProduct.sort((prevPrice, nextPrice) => prevPrice.price - nextPrice.price);
// }
// console.log(filterCollection(products, 15,30));