import { Component, OnInit } from '@angular/core';

import {Tenni} from '../models/tenni';

@Component({
    selector: 'tennis',
    templateUrl: './tennis.component.html'
})
export class TennisComponent implements OnInit {

    public titulo = 'Componente de tennis';
    public tennis: Array<Tenni>;

    constructor() {
        this.tennis = [
            new Tenni('Rebook classic', 'Rebook', 'Blancos', 1300.00, true),
            new Tenni('Nike Air Force One', 'Nike', 'Negors', 1500.00, true),
            new Tenni('Nike Runner', 'Nike', 'Rojos', 1200.00, true)
        ];
    }

    ngOnInit(): void {
        console.log(this.tennis);
    }
}
