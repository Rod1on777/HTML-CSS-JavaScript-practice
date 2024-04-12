import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


class ThingList extends LitElement {       //Кастомный элемент (это класс)

    static styles = css`
    p {
        font-family: sans-serif;
    }
    `;


    constructor() {                         // Пустой конструктор элемента
        super();                            // хз чо
        this.color = this.getAttribute('color') || 'purple';    // присваивает этому элементу значение color, если этого значения нет, то цвет меняется на фиолетовый
        const thingString = this.getAttribute('things') || ''         // присваивает этому элементу значение things

        this.things = thingString.split(',');  // в переменную things записывается значие things из конструктора. Метод .split разделяет строку по каждой запятой
    }
 

    render() {      // Возврящает html код, используя html конструктор (ниже)
        return html`<ul>
            ${this.things.map(thing => {
                return html`<li>${thing}</li>`
            })}
        </ul>`;
    }
}

customElements.define('thing-list', ThingList); //Присвоение элементу thing-list функцию класса ThingList

