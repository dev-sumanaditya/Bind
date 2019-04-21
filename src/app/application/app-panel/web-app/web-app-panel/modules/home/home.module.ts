import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MainPipeModule } from '../../pipes/main-pipe/main-pipe.module';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RoundProgressModule } from 'angular-svg-round-progressbar';



@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MainPipeModule,
    SharedModule,
    InfiniteScrollModule,
    RoundProgressModule,
  ]
})
export class HomeModule { }
