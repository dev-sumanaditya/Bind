import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MoreComponent } from './components/more/more.component';
import { FeedComponent } from './components/feed/feed.component';


const routes: Routes = [
    {path: '', component: ProfilePageComponent, children: [
        {path: 'about', component: AboutComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: 'more', component: MoreComponent},
        {path: '', component: FeedComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }