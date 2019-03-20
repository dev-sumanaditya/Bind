import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  private VideoApi: VgAPI;
  private ShowBar: boolean = true;

  ngOnInit() {
  }

  onPlayerReady(api:VgAPI) {
    this.VideoApi = api;
    console.log('fired')

    this.VideoApi.getDefaultMedia().subscriptions.playing.subscribe(
      () => {
        setTimeout(() => { this.ShowBar = false; }, 2000);
      }
    )
    this.VideoApi.getDefaultMedia().subscriptions.pause.subscribe(
      () => {
        this.ShowBar = true;
      }
    )

    this.VideoApi.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        this.ShowBar = false;
      }
    )
  }

  enter() {
    this.ShowBar = true;
  }

  leave() {
    setTimeout(() => { this.ShowBar = false; }, 2000);
  }
}
