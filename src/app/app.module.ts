import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// es importante este modulo para poder utilizar la propiedad
// ngModel en los inputs de los forularios html
import { FormsModule } from '@angular/forms';

// modulo de routing
import {routing, appRoutingProviders} from './app.routing';

// modulo para peticiones http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import {VideojuegoComponent} from './videojuego/videoJuego.component';
import {TennisComponent} from './tennis/tennis.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ExternoComponent } from './externo/externo.component';

// este decorador nos ayuda a configurar el modulo
@NgModule({
  // en declarations cargamos los componenetes
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TennisComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  // cargamos modulos de angular o externos
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  // cargar servicios
  providers: [
    appRoutingProviders
  ],
  // el componenete o modulo principal a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
