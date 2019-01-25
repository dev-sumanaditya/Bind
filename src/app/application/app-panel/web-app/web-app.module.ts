import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAppRoutingModule } from './web-app-routing.module';
import { WebAppPanelComponent } from './web-app-panel/web-app-panel.component';
import { MessagingComponent } from './web-app-panel/pages/messaging/messaging.component';
import { SearchComponent } from './web-app-panel/pages/search/search.component';
import { HomeComponent } from './web-app-panel/pages/home/home.component';
import { NotificationsComponent } from './web-app-panel/pages/notifications/notifications.component';
import { ProfileComponent } from './web-app-panel/pages/profile/profile.component';
import { SettingsComponent } from './web-app-panel/pages/settings/settings.component';
import { ChatBoxTeamComponent } from './web-app-panel/components/chat-box-team/chat-box-team.component';
import { ChatBoxDmComponent } from './web-app-panel/components/chat-box-dm/chat-box-dm.component';
import { ChatBoxDefaultComponent } from './web-app-panel/components/chat-box-default/chat-box-default.component';
import { InComponent } from './web-app-panel/components/chat-box-team/components/in/in.component';
import { ModalComponent } from './web-app-panel/components/modal/modal.component';

@NgModule({
  declarations: [
    WebAppPanelComponent,
    MessagingComponent,
    SearchComponent,
    HomeComponent,
    NotificationsComponent,
    ProfileComponent,
    SettingsComponent,
    ChatBoxTeamComponent,
    ChatBoxDmComponent,
    ChatBoxDefaultComponent,
    InComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
