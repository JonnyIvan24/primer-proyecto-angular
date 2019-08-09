import {Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent {
    // propiedades
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'Componenete de videojuegos';
        this.listado = 'Listado de videojuegos';

        console.log('Se a cargado el componente videojuego');
    }
}
