import { Component, OnInit } from '@angular/core';

import {Tenni} from '../models/tenni';

// importar el provider o servicio
import {TennisService} from '../services/tennis.service';

@Component({
    selector: 'tennis',
    templateUrl: './tennis.component.html',
    // se injecta como un servicio del componenete
    providers: [TennisService]
})
export class TennisComponent implements OnInit {

    public titulo = 'Componente de tennis';
    public tennis: Array<Tenni>;
    public marcas: string[];
    public color: string;
    public miMarca: string;

    // se injecta el servicio en los parametros del constructor declarando una variable del mismo tipo que el servicio
    constructor(
        private _tennisService: TennisService
    ) {
        this.marcas = new Array();
        this.color = 'blue';
        this.miMarca = 'Nike';
    }

    ngOnInit(): void {
        this.tennis = this._tennisService.getTennis();
        // alert(this._tennisService.getTexto());
        this.getMarcas();
    }

    getMarcas() {
        this.tennis.forEach((tenni, index) => {
            if (this.marcas.indexOf(tenni.marca) < 0) {
                this.marcas.push(tenni.marca);
            }
        });
    }

    getMarca() {
        alert(this.miMarca);
    }

    addMarca() {
        this.marcas.push(this.miMarca);
    }

    deleteMarca(indice: number) {
        // delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur() {
        console.log('Has salido del input "Evento blur"');
    }

    mostrarPalabra() {
        this.getMarca();
    }
}
