import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MainPipeModule } from '../../pipes/main-pipe/main-pipe.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from '../../components/profile/post/post.component';
import { PostPollComponent } from '../../components/profile/post-poll/post-poll.component';

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
  ]
})
export class HomeModule { }
