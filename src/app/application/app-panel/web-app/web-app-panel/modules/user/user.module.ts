import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FeedComponent } from './components/feed/feed.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MoreComponent } from './components/more/more.component';


@NgModule({
  declarations: [UserPageComponent, FeedComponent, AboutComponent, ProjectsComponent, MoreComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class UserModule { }
