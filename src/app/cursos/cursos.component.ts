import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  //  sirve ejecutar codigo al momento que se carga el componente
  ngOnInit() {
  }

}
