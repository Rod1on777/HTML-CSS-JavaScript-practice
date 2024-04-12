const things = ['eggs', 'chease', 'biscuits', 'rice'];
const target = document.getElementById('target');
let content = '<ul>';
for (let index = 0; index < things.length; index++){
    content += `<li>${things[index]}</li>`;
}
content += '</ul>';
//target.innerHTML = content;

class ThingList extends HTMLElement {       //Кастомный элемент (это класс)

    constructor() {                         // Пустой конструктор элемента
        super();                            // хз чо
        this.color = this.getAttribute('color') || 'purple';    // присваивает этому элементу значение color, если этого значения нет, то цвет меняется на фиолетовый
        this.things = this.getAttribute('things') || ''         // присваивает этому элементу значение things
    }





    connectedCallback() {
        console.log('I am connected');

        const things = this.things.split(',');  // в переменную things записывается значие things из конструктора. Метод .split разделяет строку по каждой запятой
       
        let content = '<ul>';
        for (let index = 0; index < things.length; index++){
            content += `<li>${things[index]}</li>`;
        }
        content += '</ul>';
        this.innerHTML = content;           //запись в HTML код

        this.style =`color: ${this.color}`         // добавление стиля + цвета указанного в конструкторе
    }
}

customElements.define('thing-list', ThingList); //Присвоение элементу thing-list функцию класса ThingList

