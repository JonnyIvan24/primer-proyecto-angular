import { Component, OnInit } from '@angular/core';
// sirve para tomar los valores de los parametros de las rutas
import {Router, ActivatedRoute, Params} from '@angular/router';

/*
  tambien se pueden crear componentes desde terminal con el comando
  ng generate component nombre-componente
  automaticamente angular creara un componenete y sus elementos y la configuracion en el app.module
*/

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(
    // sirve para tomar los parametros
    private _route: ActivatedRoute,
    // sirve para redirigir
    private _router: Router
    ) { }

  //  sirve ejecutar codigo al momento que se carga el componente
  ngOnInit() {
    // se toman los valores de los parametros de la ruta
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      // el + adelante de params sirve para convertir los valores en tipo number
      this.followers = +params.followers;
    });
  }

  redirigir() {
    this._router.navigate(['tennis']);
  }

}
