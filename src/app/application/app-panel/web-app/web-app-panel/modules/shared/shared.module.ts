// General
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Videogular
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

// Popper
import { NgxPopperModule } from 'ngx-popper';

// Files Upload
import { ngfModule } from 'angular-file';

// Common Pipe Module
import { MainPipeModule } from '../../pipes/main-pipe/main-pipe.module';

// Components
import { PostComponent } from '../../components/profile/post/post.component';
import { PostPollComponent } from '../../components/profile/post-poll/post-poll.component';



@NgModule({
  declarations: [
    PostComponent,
    PostPollComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    NgxPopperModule,
    ngfModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxPopperModule,
    ngfModule,
    MainPipeModule,
    FormsModule,
    ReactiveFormsModule,
    PostComponent,
    PostPollComponent
  ]
})
export class SharedModule { }
