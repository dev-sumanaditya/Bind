import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApploginComponent } from './applogin/applogin.component';

const routes: Routes = [
  {path: 'login', component: ApploginComponent},
  {path: '', loadChildren: './app-panel/app-panel.module#AppPanelModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
