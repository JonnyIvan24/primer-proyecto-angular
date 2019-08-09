import { Component } from '@angular/core';

import {configuracion} from './models/configuracion';

@Component({
  // nombre de la dierctiva o etiqueta html
  selector: 'app-root',
  // el html del componenete
  templateUrl: './app.component.html',
  // el css del componenete
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo Angular';
  public descripcion: string;
  public config;

  public mostrar: boolean = true;

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
  }

  ocultarVideojuegos(value: boolean) {
    this.mostrar = value;
  }
}
