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

  private ChatsWindow = true;
  private GroupBoxWindow = false;
  private InfoWindow = false;

  private boardDrop = false;

  private GroupBoxTab = 'boards';

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
    }
  } 

  // topbar options
  ShowGroupBox() {
    this.GroupBoxWindow = true;
    this.ChatsWindow = false;
    this.InfoWindow = false;
    this.toggleState = false;
  }
  ShowInfo() {
    this.InfoWindow = true;
    this.ChatsWindow = false;
    this.GroupBoxWindow = false;
  }
  ShowChatsWindow() {
    this.ChatsWindow = true;
    this.GroupBoxWindow = false;
    this.InfoWindow = false;
  }

  // GroupBox nav
  showBoards() {
    this.GroupBoxTab = 'boards';
  }
  showTasks() {
    this.GroupBoxTab = 'tasks';
  }
  showFiles() {
    this.GroupBoxTab = 'files';
  }
  showPolls() {
    this.GroupBoxTab = 'polls';
  }
  showImportants() {
    this.GroupBoxTab = 'importants';
  }
}
