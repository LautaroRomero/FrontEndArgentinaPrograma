import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalloginComponent } from './componentes/modallogin/modallogin.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IndexComponent } from './componentes/index/index.component';
import { EditbuttonComponent } from './componentes/editbutton/editbutton.component';
import { CrossbuttonComponent } from './componentes/crossbutton/crossbutton.component';
import { AddbuttonComponent } from './componentes/addbutton/addbutton.component';
import { LoginbuttonComponent } from './componentes/loginbutton/loginbutton.component';
import { LogoutbuttonComponent } from './componentes/logoutbutton/logoutbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    AcercaComponent,
    ProyectosComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    ModalloginComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    EditbuttonComponent,
    CrossbuttonComponent,
    AddbuttonComponent,
    LoginbuttonComponent,
    LogoutbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
