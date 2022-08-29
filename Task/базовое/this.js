//? Создать объект, который описывает ширину и высоту
//? прямоугольника, а также может посчитать площадь фигуры:

// const rectangle = {
//     width: 20, 
//     height: 10, 
//     getSquare: function() {
//        return this.width * this.height;
//     }}
// console.log(rectangle.getSquare());

//? Создать объект, у которого будет цена товара и его скидка, а также
//? два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: function() {
//         return this.price
//     },
//     getPriceWithDiscount: function() {
//         return this.price - (this.price * parseInt(this.discount)) / 100
//     }
// };
// console.log(price.getPrice()); // 10
// console.log(price.getPriceWithDiscount()); // 8.5

//? 3. Создать объект, у которого будет поле высота и метод “увеличить
//? высоту на один”. Метод должен возвращать новую высоту:
// const object = {
//     incByOne() {
//         return this.height++;
//     },
// }
// console.log(object.height = 10);
// console.log(object.incByOne());
// console.log(object.height);
// console.log(object);

//? Создать объект “вычислитель”, у которого есть числовое свойство
//? “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
//? Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {
//         this.value *= 2;
//         return this
//     },
//     plusOne: function () {
//         this.value += 1;
//         return this
//     },
//     minusOne: function () {
//        this.value -= 1;
//        return this
//     },
// }

// console.log(numerator.plusOne().double().minusOne());
// console.log(numerator.value);

//? Создать объект с розничной ценой и количеством продуктов. Этот
//? объект должен содержать метод для получения общей стоимости
//? всех товаров (цена * количество продуктов)

// const product = {
//     price: 5,
//     quantity: 5,
//     getPriceAllProducts() {
//         return this.price * this.quantity
//     }
// }
// console.log(product.getPriceAllProducts());

//? Создать объект из предыдущей задачи. Создать второй объект,
//? который описывает количество деталей и цену за одну деталь. Для
//? второго объекта нужно узнать общую стоимость всех деталей, но
//? нельзя создавать новые функции и методы. Для этого
//? “позаимствуйте” метод из предыдущего объекта.

// const product = {
//     price: 5,
//     quantity: 5,
//     getPriceAllProducts() {
//         return this.price * this.quantity
//     }
// }

// const newProduct = {
//     price: 20,
//     quantity: 10,
// }
// // newProduct.getPriceAllProducts = product.getPriceAllProducts;
// // console.log(newProduct.getPriceAllProducts());

// console.log(product.getPriceAllProducts.call(newProduct));

//? Даны объект и функция:
//? Не изменяя функцию или объект, получить результат функции
//? getSquare для объекта sizes

// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// console.log(getSquare.call(sizes));

//? Измените функцию getElementHeight таким образом, чтобы можно
//? было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined
