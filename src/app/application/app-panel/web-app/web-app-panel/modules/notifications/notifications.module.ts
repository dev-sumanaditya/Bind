import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
@NgModule({
  declarations: [NotificationPageComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
