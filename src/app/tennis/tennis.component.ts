import { Component, OnInit } from '@angular/core';

import {Tenni} from '../models/tenni';

@Component({
    selector: 'tennis',
    templateUrl: './tennis.component.html'
})
export class TennisComponent implements OnInit {

    public titulo = 'Componente de tennis';
    public tennis: Array<Tenni>;
    public marcas: string[];
    public color: string;

    constructor() {
        this.marcas = new Array();
        this.tennis = [
            new Tenni('Rebook classic', 'Rebook', 'Blancos', 1300.00, true),
            new Tenni('Nike Air Force One', 'Nike', 'Negros', 1500.00, true),
            new Tenni('Nike Runner', 'Nike', 'Rojos', 1200.00, true)
        ];
        this.color = 'blue';
        this.getMarcas();
    }

    ngOnInit(): void {
        console.log(this.tennis);
        console.log(this.marcas);
    }

    getMarcas() {
        this.tennis.forEach((tenni, index) => {
            if (this.marcas.indexOf(tenni.marca) < 0) {
                this.marcas.push(tenni.marca);
            }
        });
    }
}
