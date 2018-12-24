import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbInputModule
} from '@nebular/theme';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
