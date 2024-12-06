import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NombreInputComponent } from './nombre-input/nombre-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NombreInputComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
