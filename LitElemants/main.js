const things = ['eggs', 'chease', 'biscuits', 'rice'];
const target = document.getElementById('target');
let content = '<ul>';
for (let index = 0; index < things.length; index++){
    content += `<li>${things[index]}</li>`;
}
content += '</ul>';
//target.innerHTML = content;

class ThingList extends HTMLElement {       //Кастомный элемент (это класс)
    connectedCallback() {
        console.log('I am connected');

        const things = ['eggs', 'chease', 'biscuits', 'rice'];
       
        let content = '<ul>';
        for (let index = 0; index < things.length; index++){
            content += `<li>${things[index]}</li>`;
        }
        content += '</ul>';
        this.innerHTML = content;           //эта нада не знаю зачем
    }
}

customElements.define('thing-list', ThingList); //Присвоение элементу thing-list функцию класса ThingList

