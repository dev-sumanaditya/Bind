import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

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
  btnText = 'Submit Vote';

  constructor() { }

  ngOnInit() {
  }

  SelectOption(index: number) {
    if(!this.voted) {
      this.selected = index;
    }
  }

  Submit() {
    this.btnText = 'Thank you for your response!'
    this.voted = true;
  }
}
