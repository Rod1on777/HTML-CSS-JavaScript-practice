// ------------------------- База ------------------------
document.write('Hello World');  //Написать текст после тега script

console.log('Hello console');   // Вывод текста в консоль

console.error('(not) Error')    //Вывод текста стилезованного под ошибку

console.warn('(not) warning!')  //Выод текста в формате предупреждения


//  ----------------------- Переменные -------------------------
var num = 5;    //глобальная переменная
let numb = 5;   //локальная переменная
const con = 6;

console.log(num);

console.log("Переменная= " + num + ".");   //Объединение вывода значений
console.log("Константа= " + con + ".");

document.getElementById("demo").innerHTML = '10';  //Берёт элемент с айди demo и меняет его на 10 (ИСПОЛЬЗОВАТЬ ПРЕДПОЧТИТЕЛЬНЕЕ ЧЕМ .write)

function Demo1() {                                           //Простейшай функция Demo1 (заменяет элемент с айди demo1 на Demo1)
    document.getElementById("demo1").innerHTML = "Demo1";
}

const car = { color: "red", model: "500", type: "flat" };       //Создание объекта car (желательно всегда использовать тип const)
document.getElementById('car').innerHTML = car.color + ' ' + car.model + ' ' + car.type;



const person = {                                                //Тоже объект, только удобнее и с функцией
    name: 'Bebrov',
    lastname: 'Piskov',
    age: 50,
    fullname: function () {
        return this.name + " " + this.lastname;
    }
};
document.getElementById('person').innerHTML = person.name + " " + person.lastname + " " + person.age + "Full name = " + person.fullname();

