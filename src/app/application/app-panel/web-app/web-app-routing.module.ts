import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAppPanelComponent } from './web-app-panel/web-app-panel.component';
import { MessagingComponent } from './web-app-panel/pages/messaging/messaging.component';
import { SearchComponent } from './web-app-panel/pages/search/search.component';
import { NotificationsComponent } from './web-app-panel/pages/notifications/notifications.component';
import { ProfileComponent } from './web-app-panel/pages/profile/profile.component';
import { SettingsComponent } from './web-app-panel/pages/settings/settings.component';
import { HomeComponent } from './web-app-panel/pages/home/home.component';
import { ChatBoxTeamComponent } from './web-app-panel/components/chat-box-team/chat-box-team.component';
import { ChatBoxDmComponent } from './web-app-panel/components/chat-box-dm/chat-box-dm.component';
import { ChatBoxDefaultComponent } from './web-app-panel/components/chat-box-default/chat-box-default.component';

const routes: Routes = [
    {path: '', component: WebAppPanelComponent, children: [
        {path: 'messages', component: MessagingComponent, children: [
            {path: 'team', component: ChatBoxTeamComponent},
            {path: 'dm', component: ChatBoxDmComponent},
            {path: '', component: ChatBoxDefaultComponent}
        ]},
        {path: 'search', component: SearchComponent},
        {path: 'notifications', component: NotificationsComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'settings', component: SettingsComponent},
        {path: '', component: HomeComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WebAppRoutingModule { }
