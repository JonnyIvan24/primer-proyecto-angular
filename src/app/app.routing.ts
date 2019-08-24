// configuración de rutas de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componenetes
import { HomeComponent } from './home/home.component';
import { TennisComponent } from './tennis/tennis.component';
import { VideojuegoComponent } from './videojuego/videoJuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

// rutas

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tennis',
    component: TennisComponent
  },
  {
    path: 'videojuegos',
    component: VideojuegoComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  // ruta con parametros
  {
    path: 'cursos/:nombre',
    component: CursosComponent
  },
  {
    path: 'cursos/:nombre/:followers',
    component: CursosComponent
  },
  {
    path: 'externo',
    component: ExternoComponent
  },
  // la ruta 404 siempre va declarada en ultimo lugar
  {
    path: '**',
    component: HomeComponent
  },
];

// exportar el servicio
export const appRoutingProviders: any[] = [];

// exportar el modulo del router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
