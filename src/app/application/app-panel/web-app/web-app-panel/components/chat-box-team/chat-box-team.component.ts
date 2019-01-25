import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box-team',
  templateUrl: './chat-box-team.component.html',
  styleUrls: ['./chat-box-team.component.css']
})
export class ChatBoxTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reply_this(id) {
    console.log(id);
  }
}
