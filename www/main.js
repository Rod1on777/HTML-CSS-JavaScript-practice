// ------------------------- База ------------------------
document.write('Hello World');  //Написать текст после тега script

console.log('Hello console');   // Вывод текста в консоль

console.error('(not) Error')    //Вывод текста стилезованного под ошибку

console.warn('(not) warning!')  //Выод текста в формате предупреждения


//  ----------------------- Переменные -------------------------
var num = 5;    //глобальная переменная
let numb = 5;   //локальная переменная
const con = 6;  //константа глобальная

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


// Примеры из лекций

// 1.

var text = " bebra "


const makeMessage = (text) => {
    const message = '<p> Hello <em>' + text + '</em> <p>'
    return message
}

const sayHello = (message) => {
    const target1 = document.getElementById('target1')

    target1.innerHTML = makeMessage(message)
}

window.onload = () => {
    sayHello('World')
}

// 2.

for(let i = 0; i < 3; i++){
    console.log("looping ", i, ' times')
}

// 3.
function sayWorld(){
    document.getElementById('target2').innerHTML = '<p>World Hello</p>'
}

sayWorld()

// 4.
const month = [
    {
        name: 'Jan',
        number: 1
    },
    {
        name: 'Feb',
        number: 2
    },
    {
        name: 'Mar',
        number: 3
    },
    {
        name: 'Apr',
        number: 4
    },
    {
        name: 'May',
        number: 5
    }
];


const calendar = () => {
    let result = '<ul>'
    for(let i = 0; i < month.length; i++){
        result += '<li>' + month[i].number + ' ' + month[i].name + '</li>'
    }
    result += '</ul>'
    return result
}

window.onload = () => {
    document.getElementById('target3').innerHTML = calendar()
}

// 5.

let button1 = document.getElementById('b1')

function b1Function(){
    document.getElementById('b1Funcion').innerHTML = 'Button 1 pressed'
}

button1.onclick= function(){
    b1Function()
}

//6.

document.getElementById('color-change-form').onSubmit = (event) => {
    event.preventDefault();
    const color = form.querySelector('[name="color"]').value;
    console.log(color);
}


// 7. 
class Person{                               // Класс и конструктор класса
    constructor(name, birthyear){
        this.name = name;
        this.birthyear = birthyear;
    }
    
    greet() {
        return `Hello ${this.name}`;
    }

    age() {
        const today = new Date();
        return today.getFullYear()-this.birthyear;
    }
}

class Professional extends Person{          //дочерний метод класса Person
    constructor(rank, name, birthyear){
        super(name, birthyear);             //метод super вызывает метод родительского конструктора
        this.rank = rank;
    }

    greet() {
        return `Hello ${this.rank} ${this.name}`;
    }
}



const bob = new Person('Bob Bobababoboba', 1970);
const mary = new Person('Mary ssdfsdf', 1980);
const rodion = new Person('Rodion Kordsf', 2004);
const abobik = new Professional('Doctor', 'Abobik', 1023)

console.log(bob.greet(), bob.age());
console.log(mary.greet(), mary.age());
console.log(rodion.greet(), rodion.age());
console.log(abobik.greet(), abobik.age());

