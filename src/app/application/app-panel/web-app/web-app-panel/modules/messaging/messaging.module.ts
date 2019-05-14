import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MessagingPageComponent } from './messaging-page/messaging-page.component';
import { MessagingRoutingModule } from './messaging-routing.module';
import { ChatBoxTeamComponent } from '../../components/chat-box-team/chat-box-team.component';
import { ChatBoxDmComponent } from '../../components/chat-box-dm/chat-box-dm.component';
import { ChatBoxDefaultComponent } from '../../components/chat-box-default/chat-box-default.component';
import { GroupCardComponent } from '../../components/group-card/group-card.component';
import { DmCardComponent } from '../../components/dm-card/dm-card.component';
import { InComponent } from '../../components/chat-box-team/components/in/in.component';
import { BoardComponent } from '../../components/chat-box-team/components/board/board.component';
import { TaskComponent } from '../../components/chat-box-team/components/task/task.component';
import { FileComponent } from '../../components/chat-box-team/components/file/file.component';
import { PollComponent } from '../../components/chat-box-team/components/poll/poll.component';


// Modules
import { NgxTributeModule } from 'ngx-tribute';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MainPipeModule } from '../../pipes/main-pipe/main-pipe.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';

// Store
import { ChatsPageState} from '../../store/state/chatsPage.state';
import { ChatsPageLazyState } from '../../store/state/chatsPageLazy.state';
import { MgsMainService } from '../../services/pages/messaging/mgs-main.service';

@NgModule({
  declarations: [
    MessagingPageComponent,
    ChatBoxTeamComponent,
    ChatBoxDmComponent,
    ChatBoxDefaultComponent,
    GroupCardComponent,
    DmCardComponent,
    InComponent,
    BoardComponent,
    TaskComponent,
    FileComponent,
    PollComponent,
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule,
    NgxTributeModule,
    PickerModule,
    MainPipeModule,
    RoundProgressModule,
    ClickOutsideModule,
    SharedModule,
    NgxsModule.forFeature([ChatsPageState, ChatsPageLazyState])
  ],
  providers: [ MgsMainService ]
})
export class MessagingModule { }
