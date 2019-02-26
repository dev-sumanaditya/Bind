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
import { ClickOutsideModule } from 'ng-click-outside';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxsModule } from '@ngxs/store';
import { AppChatsState } from './web-app-panel/store/state/application.state';
import { GroupCardComponent } from './web-app-panel/components/group-card/group-card.component';
import { DmCardComponent } from './web-app-panel/components/dm-card/dm-card.component';
import { NgxPopperModule } from 'ngx-popper';


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
    GroupCardComponent,
    DmCardComponent,
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    ClickOutsideModule,
    PickerModule,
    NgxPopperModule,
    NgxsModule.forFeature([AppChatsState])
  ]
})
export class WebAppModule { }
