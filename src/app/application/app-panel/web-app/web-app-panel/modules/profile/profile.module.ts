import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FeedComponent } from './components/feed/feed.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MoreComponent } from './components/more/more.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    FeedComponent,
    AboutComponent,
    ProjectsComponent,
    MoreComponent, 

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class ProfileModule { }
