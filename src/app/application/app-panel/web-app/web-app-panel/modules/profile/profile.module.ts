import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from '../../components/profile/post/post.component';
import { PostPollComponent } from '../../components/profile/post-poll/post-poll.component';

@NgModule({
  declarations: [
    ProfilePageComponent, 

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
  ]
})
export class ProfileModule { }
