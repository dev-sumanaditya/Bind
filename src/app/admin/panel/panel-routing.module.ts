import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnalyticsComponent } from './components/admin-analytics/admin-analytics.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminMembersComponent } from './components/admin-members/admin-members.component';
import { AdminActionsComponent } from './components/admin-actions/admin-actions.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'analytics', component: AdminAnalyticsComponent},
    {path: 'users', component: AdminUsersComponent},
    {path: 'members', component: AdminMembersComponent},
    {path: 'actions', component: AdminActionsComponent},
    {path: 'settings', component: AdminSettingsComponent},
    {path: 'profile', component: AdminProfileComponent},
    {path: '', component: AdminDashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
