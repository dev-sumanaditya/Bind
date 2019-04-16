import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';

// Component
import { WebAppPanelComponent } from './web-app-panel/web-app-panel.component';
import { ModalComponent } from './web-app-panel/components/modal/modal.component';

// Ngxs Store
import { NgxsModule } from '@ngxs/store';
import { AppChatsState } from './web-app-panel/store/state/application.state';
import { AppTeamChatState } from './web-app-panel/store/state/appTeamChat.state';


import { FormsModule , ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WebAppPanelComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    NgxsModule.forFeature([AppChatsState, AppTeamChatState]),
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class WebAppModule { }
