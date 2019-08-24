import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

// el observable es necesario para recoger la información de las peticiones http
import { Observable } from 'rxjs';

// tambien se puede importar un modelo en el cual asignaremos los datos

@Injectable()
export class PeticionesService {
    public url: string;

    constructor(
        public _http: HttpClient
        ) {
            this.url = 'https://reqres.in/';
        }

    getUser(userId: any): Observable<any> {
        return this._http.get(this.url + 'api/users/' + userId);
    }
}
