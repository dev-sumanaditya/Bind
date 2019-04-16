import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box-default',
  templateUrl: './chat-box-default.component.html',
  styleUrls: ['./chat-box-default.component.css']
})
export class ChatBoxDefaultComponent implements OnInit {

  private page = 'overview';

  constructor() { }

  ngOnInit() {
  }

  showTasks() {
    this.page = 'tasks';
  }
  showMentions() {
    this.page = 'mentions';
  }
  showOverview() {
    this.page = 'overview';
  }

}
