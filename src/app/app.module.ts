import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { RegistroComponent } from './registro/registro.component';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SesionComponent } from './sesion/sesion.component';
import { TerminosComponent } from './terminos/terminos.component';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: IndexComponent },
  { path: "alimentacion", component: AlimentacionComponent },
  { path: "calculadora", component: CalculadoraComponent },
  { path: "ejercicios", component: EjerciciosComponent },
  { path: "informacion", component: InformacionComponent },
  { path: "registro", component: RegistroComponent },
  { path: "sesion", component: SesionComponent },
  { path: "terminos", component: TerminosComponent },
  { path: "videos", component: VideosComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    IndexComponent,
    CalculadoraComponent,
    RegistroComponent,
    AlimentacionComponent,
    EjerciciosComponent,
    InformacionComponent,
    SesionComponent,
    TerminosComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
