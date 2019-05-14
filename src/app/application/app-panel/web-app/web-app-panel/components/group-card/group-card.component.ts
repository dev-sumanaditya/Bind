import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import * as AppTeamChatActions from '../../store/actions/appTeamChat.actions';


@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

  @ViewChild('GroupDropdown') popperd; 
  
  @Input() data: any; 

  private showDrop = false;
  constructor(private router: Router , private store: Store) { }

  ngOnInit() {
  }

  clickOut() {
    this.showDrop = false;
  }

  groupRightClick() {
    this.popperd.show();
    return false;
  }
  
  clickOutPopper() {
    this.popperd.hide();
  }

  navigate() {
    this.router.navigate(['/app/messages/team'], { queryParams: { id: this.data.id } });
    this.ShowChatsWindow();
  }

  openInNewTab() {
    window.open("http://localhost:4200/app/messages/team?id=" + this.data.id);
  }


  // Actions
  ShowChatsWindow() {
    this.store.dispatch(new AppTeamChatActions.ShowChat);
  }
}
