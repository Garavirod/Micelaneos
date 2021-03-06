import { Routes } from '@angular/router';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: 'nuevo/:something', component: UsuarioNuevoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];

