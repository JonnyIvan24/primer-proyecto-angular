import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {VideojuegoComponent} from './videojuego/videoJuego.component';
import {TennisComponent} from './tennis/tennis.component';

// este decoador nos ayuda a configurar el modulo
@NgModule({
  // en declarations cargamos los componenetes
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TennisComponent
  ],
  // cargamos modulos de angular o externos
  imports: [
    BrowserModule
  ],
  // cargar servicios
  providers: [],
  // el componenete o modulo principal a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
