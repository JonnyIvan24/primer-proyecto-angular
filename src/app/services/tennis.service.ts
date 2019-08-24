import { Injectable } from '@angular/core';
import {Tenni} from '../models/tenni';

/**
 * los servicios nos ayudan a ejecutar peticiones sin necesidad de estar declarandolas
 * cada vez que se necesiten
 */

@Injectable()
export class TennisService {
    public tennis: Array<Tenni>;

    constructor() {
        this.tennis = [
            new Tenni('Rebook classic', 'Rebook', 'Blancos', 1300.00, true),
            new Tenni('Nike Air Force One', 'Nike', 'Negros', 1500.00, true),
            new Tenni('Nike Runner', 'Nike', 'Rojos', 1200.00, true)
        ];
    }

    getTexto() {
        return 'Hola mundos desde el servicio tennis';
    }

    getTennis(): Array<Tenni> {
        return this.tennis;
    }
}
