import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPanelRoutingModule } from './app-panel-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    AppPanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppPanelModule { }
