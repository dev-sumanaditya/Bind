import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAppPanelComponent } from './web-app-panel/web-app-panel.component';


const routes: Routes = [
    {path: '', component: WebAppPanelComponent, children: [
        {path: 'messages', loadChildren: './web-app-panel/modules/messaging/messaging.module#MessagingModule'},
        {path: 'search', loadChildren: './web-app-panel/modules/search/search.module#SearchModule'},
        {path: 'notifications', loadChildren: './web-app-panel/modules/notifications/notifications.module#NotificationsModule'},
        {path: 'profile', loadChildren: './web-app-panel/modules/profile/profile.module#ProfileModule'},
        {path: 'settings', loadChildren: './web-app-panel/modules/settings/settings.module#SettingsModule'},
        {path: 'user', loadChildren: './web-app-panel/modules/user/user.module#UserModule'},
        {path: '', loadChildren: './web-app-panel/modules/home/home.module#HomeModule'}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WebAppRoutingModule { }
