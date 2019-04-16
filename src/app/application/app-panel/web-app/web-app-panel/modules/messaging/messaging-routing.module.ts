import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingPageComponent } from './messaging-page/messaging-page.component';
import { ChatBoxTeamComponent } from '../../components/chat-box-team/chat-box-team.component';
import { ChatBoxDmComponent } from '../../components/chat-box-dm/chat-box-dm.component';
import { ChatBoxDefaultComponent } from '../../components/chat-box-default/chat-box-default.component';


const routes: Routes = [
    {path: '', component: MessagingPageComponent, children: [
        {path: 'team', component: ChatBoxTeamComponent},
        {path: 'dm', component: ChatBoxDmComponent},
        {path: '', component: ChatBoxDefaultComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MessagingRoutingModule { }