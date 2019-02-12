import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-box-team',
  templateUrl: './chat-box-team.component.html',
  styleUrls: ['./chat-box-team.component.css'],
})
export class ChatBoxTeamComponent implements OnInit {


  constructor() { }

  private toggleState = false;
  private attachState = false;

  ngOnInit() {
  }

  reply_this(id) {
    console.log(id);
  }

  toggle() {
    this.toggleState = !this.toggleState;
  }
  toggleMenu() {
    this.attachState = !this.attachState;
  }
  onClickedOutside(data) {
    if(this.attachState) {
      this.toggleMenu();
      console.log('closing');
    }
  }
}
