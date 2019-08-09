import { Component } from '@angular/core';

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
  public mostrar: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostrar = value;
  }
}
