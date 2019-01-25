import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { AdminActionsComponent } from './components/admin-actions/admin-actions.component';
import { AdminAnalyticsComponent } from './components/admin-analytics/admin-analytics.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMembersComponent } from './components/admin-members/admin-members.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import {
  NbSidebarModule,
  NbUserModule,
  NbActionsModule,
  NbMenuModule,
  NbSearchModule,
  NbContextMenuModule,
  NbCardModule,
  NbRadioModule,
  NbSidebarService,
  NbLayoutModule,
  NbButtonModule,
  NbInputModule,
} from '@nebular/theme';

@NgModule({
  declarations: [
    PanelComponent,
    AdminActionsComponent,
    AdminAnalyticsComponent,
    AdminDashboardComponent,
    AdminMembersComponent,
    AdminProfileComponent,
    AdminSettingsComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    NbSidebarModule,
    NbUserModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbContextMenuModule,
    NbCardModule,
    NbRadioModule,
    AgGridModule.withComponents([]),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
  ],
  providers: [ NbSidebarService ]
})
export class PanelModule { }
