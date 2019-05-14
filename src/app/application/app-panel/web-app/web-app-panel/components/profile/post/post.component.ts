import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  private img = true;
  private polls = true;
  private link = true;
  private linkPreview = true;
  private video = true; 

  private VideoApi: VgAPI;
  private ShowBar: boolean = false;
  private totalTime: Boolean = true;
  private leftTime: boolean = false;

  private past = false;
  private voted = false;
  private poll = {
    topic: 'Do you think this is a good design for poll? True reviews needed.',
    options: [{
        text: 'Yes, definately!',
        percent: '25%'
      },
      {
        text: 'Maybe not, it is not good.',
        percent: '19%'
      },
      {
        text: 'No, not at all.',
        percent: '45%'
      },
      {
        text:  'You should give it one more try.',
        percent: '11%'
      }
    ]
  }

  selected:number = -1;


  private liked = false;
  private commented = true;
  private shared = false;


  private showComments = false;
  private replyOfreply = [1,2,3];

  ngOnInit() {
  }


  // Video player
  onPlayerReady(api:VgAPI) {
    this.VideoApi = api;
    console.log('fired')

    this.VideoApi.getDefaultMedia().subscriptions.playing.subscribe(
      () => {
        setTimeout(() => { this.ShowBar = false; }, 2000);
        this.totalTime = false;
        this.leftTime = true;
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


  // Like
  toggleLike() {
    this.liked = !this.liked;
  }

  //showComments
  showCmnts() {
    this.showComments = !this.showComments;
  }

}
