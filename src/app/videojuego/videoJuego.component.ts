import {Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componenete del videojuego</h2>
        <ul>
            <li>GTA</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>
    `,
})
export class VideojuegoComponent{
    constructor(){
        console.log('se a cargado el componente videojuego');
    }
}