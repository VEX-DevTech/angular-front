import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes de la app
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { authGuard } from './auth.guard';
import { BotonPagoPluxComponent } from './components/boton-pago-plux/boton-pago-plux.component';
import { FormTransComponent } from './components/form-trans/form-trans.component';

// Aqui vamos a redigir a los diferentes componentes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'private-pay',
    component: BotonPagoPluxComponent,
    canActivate: [authGuard]
  },
  {
    path: 'private-trans',
    component: FormTransComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
