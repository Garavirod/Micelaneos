import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
// Colocar en el rimport del ngModule
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    UsuarioNuevoComponent,
    UsuarioComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
