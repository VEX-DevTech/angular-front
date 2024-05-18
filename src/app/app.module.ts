import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulo para el uso de formularios
import {FormsModule} from '@angular/forms';
// Modulo pra requests http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import {TokenInterceptorService} from './services/token-interceptor.service';
import { BotonPagoPluxComponent } from './components/boton-pago-plux/boton-pago-plux.component';
import { FormTransComponent } from './components/form-trans/form-trans.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BotonPagoPluxComponent,
    FormTransComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
