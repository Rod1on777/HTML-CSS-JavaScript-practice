import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


class ThingList extends LitElement {       //Кастомный элемент (это класс)

    static properties = {
        things: {type: Array}, // устонявливает тип для things
    }

    static styles = css`   
    ul {
        font-family: sans-serif;
    }
    `;                      //применяет css стили

    //constructor() {                         // Пустой конструктор элемента
    //    super();                            // хз чо
    //    this.color = this.getAttribute('color') || 'purple';    // присваивает этому элементу значение color, если этого значения нет, то цвет меняется на фиолетовый
    //    const thingString = this.getAttribute('things') || ''         // присваивает этому элементу значение things
    //this.things = thingString.split(',');  // в переменную things записывается значие things из конструктора. Метод .split разделяет строку по каждой запятой
    //}
 
    render() {      // Возврящает html код, используя html конструктор (ниже)
        return html`<ul>
            ${this.things.map(thing => {
                return html`<li>${thing}</li>`
            })}
        </ul>`;
    }
}

customElements.define('thing-list', ThingList); //Присвоение элементу thing-list функцию класса ThingList


// ----------- следующий элемент для примера -----------------

class CounterBlock extends LitElement{

    static properties = {
        start: {type:Number},                   // внешняя переменная (может быть обозначена в html)
        _count: {type: Number, state: true}     // внутренняя переменная (исполдьзуется только внутри этого класса)
    }

    static styles = css`
    :host {
        display: block;
        width: 100px;
        height: 100px;
        background-color: red;
    }
    `

    _increment(e){
        this._count ++;
    }

    connectedCallback() {
        super.connectedCallback();
        this._count = this.start || 0;
    }

    render() {
        return html`<p @click=${this._increment}>Counter: ${this._count}</p>`
    }
}

customElements.define('counter-block', CounterBlock);

