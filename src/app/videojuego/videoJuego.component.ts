import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    // propiedades
    public titulo: string;
    public listado: string;

    // se ejecuta al momento de crear el componente (siempre es primero)
    constructor() {
        this.titulo = 'Componenete de videojuegos';
        this.listado = 'Listado de videojuegos';

        console.log('Se a cargado el componente videojuego');
    }

    // se ejecuta al momento de cargar el componenete
    ngOnInit(): void {
        console.log('OnInit ejecutado!');
    }

    // se ejecuta al tener un cambio en el componente
    ngDoCheck(): void {
        console.log('Docheck ejecutado');
    }

    //  se ejecuta al momento de eliminar el componente
    ngOnDestroy(): void {
        console.log('OnDestroy ejecutado');
    }

    cambiarTitulo() {
        this.titulo = 'Nuevo titulo';
    }

}
