import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true},
    }

    static BASE_URL = "https://swapi.dev/api/films/";

    constructor(){
        super();
        this.film = "1";    //если значение film не указано в html
    }

    connectedCallback(){    //выполняется при подключении к dom, но до рендера
        super.connectedCallback();  // эта нада очинь сильна нада
        const url = StarWars.BASE_URL + this.film;
        console.log(url);

        fetch(url)          //запрос данных с другого сайта
        .then(response => response.json())
        .then(data => {
            this._data = data; //после запроса, запись данных в переменную _data
        })
    }

    render() {

        if (this._data){        //если запрос уже пришел, то показать информацию
            return html`
            <h2> ${this._data.title} </h2>
            <p> Directed by: ${this._data.director} </p>
            `;
        }else{                  //если запрос всё ещё ожидается, то показать статус загрузки
            return html`<p> Loading... ${this.film}</p>`;
        }
    }

}

customElements.define('star-wars', StarWars);