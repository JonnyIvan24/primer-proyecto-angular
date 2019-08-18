import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// es importsnte este modulo para poder utilizar la propiedad
// ngModel en los inputs de los forularios html
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {VideojuegoComponent} from './videojuego/videoJuego.component';
import {TennisComponent} from './tennis/tennis.component';
import { CursosComponent } from './cursos/cursos.component';

// este decorador nos ayuda a configurar el modulo
@NgModule({
  // en declarations cargamos los componenetes
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TennisComponent,
    CursosComponent
  ],
  // cargamos modulos de angular o externos
  imports: [
    BrowserModule,
    FormsModule
  ],
  // cargar servicios
  providers: [],
  // el componenete o modulo principal a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
