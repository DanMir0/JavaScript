//? Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
//? принимать, кроме name, название спутника (satelliteName). Переопределите метод
//? getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
//? дополнительный текст 'The satellite is' + satelliteName.

// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }

// function PlanetWithSatellite(name, satelite) {
// Planet.call(this, name, satelite)
// this.satelite = satelite;
// this.getName = function() {
//     return `Planet name is ${this.name}. The satelite is ${this.satelite}.`
// }
// }

// var earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName()); // 'Planet name is earth. The satellite is moon’

//? Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
//? Создайте наследников этого класса:
//? классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 
//? У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//? У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
//? От каждого класса создать экземпляр (дом, торговый центр)

// function Building(name, floorNumber) {
//     this.name = name
//     this.floorNumber = floorNumber
//     this.getFloorNumber = function () {
//         return `Количество этажей = ${this.floorNumber}`
//     }
//     this.setFloorNumber = function (num) {
//         this.floorNumber = num
//     }
// }

// function ApartmentHouse(name, floorNumber, numberOfApartmentsPerFloor) {
//     Building.apply(this, arguments)
//     this.numberOfApartmentsPerFloor = numberOfApartmentsPerFloor
//     this.getFloorNumber = function() {
//         return {
//             floor: this.floorNumber,
//             totalApartments: this.floorNumber * this.numberOfApartmentsPerFloor
//         }
//     }
// }

// function Mall(name, floorNumber, numberOfStoresPerFloor) {
//     Building.apply(this, arguments)
//     this.numberOfStoresPerFloor = numberOfStoresPerFloor
//     this.getFloorNumber = function () {
//         return {
//             floorNumber: this.floorNumber,
//             totalStores: this.floorNumber * this.numberOfStoresPerFloor
//         }
//     }
// }

// let build = new Building('one', 2)

// let apartHouse = new ApartmentHouse('house1', 5, 3)

// let mall1 = new Mall('mall1', 3, 6)

//? Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
//? Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. Придумайте ему несколько свойству, которые будут характерны только для этого класса. Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
//? Задача на переопределение метода у экземпляров класса.

// function Furniture(name, price) {
//     this.name = name
//     this.price = price
// }

// Furniture.prototype.getInfo = function() {
//     return `${this.name} стоимостью ${this.price}$`
// }

// function OfficeFurniture(name, price, height) {
//     Furniture.apply(this, arguments)
//     this.height = height
// }

// OfficeFurniture.prototype = Object.create(Furniture.prototype)
// OfficeFurniture.prototype.getInfo = function() {
//     return `${this.name} стоимостью ${this.price}$, высота - ${this.height}`
// }
// let officeFurnitur = new OfficeFurniture('officefur', 20, 50)

//? Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
//? У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
//?    true/false, должно быть скрытым). Свойства определяются в момент вызова
//?    конструктора.
//?    У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
//?    У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, dateOfRegistration) {
    this.name = name
    this.dateOfRegistration = dateOfRegistration
}

User.prototype.getInfo = function () {
    return `Name: "${this.name}", date of registration: ${this.dateOfRegistration}`
}

function Admin(name, date, superAdmin) {
    User.call(this, name, date)
    this.superAdmin = superAdmin
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin
Admin.prototype.getInfo = function() {
    return User.prototype.getInfo.call(this) + ' rootAdmin: ' + this.superAdmin;
}

// function Quest(name, date) {
//     User.call(this, name, date)
//     this.validDate.setDate(date.getDate() + 7)
// }

// Quest.prototype = Object.create(User.prototype)
// Quest.prototype.constructor = Quest
// Quest.prototype.getInfo = function() {
//     return User.prototype.getInfo.call(this) + ' validDate: "' + this.validDate + '"';
// }

// let user = new User('Ivan', new Date(2022, 08, 09))

// let admin = new Admin('dan', new Date(2022, 08, 09), true)

// let quest = new Quest('quest', new Date)