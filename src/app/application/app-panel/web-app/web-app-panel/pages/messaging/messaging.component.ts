import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppChatsState } from '../../store/state/application.state';
import * as AppActions from '../../store/actions/application.actions';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  groups: number[] = [];
  dms: number[] = [];
  archives: number[] = [];

  new = false;
  step = false;

  private showArchive;
  private showSearch;
  private showChatsList;
  private showCreateGroup;
  private showCreateDirect;

  constructor(private store: Store) {
    for (let i = 0; i < 3; i++) {
      this.groups.push(i);
    }
    for (let i = 0; i < 10; i++) {
      this.dms.push(i);
    }
    for (let i = 0; i < 20; i++) {
      this.archives.push(i);
    }

    this.store.select(AppChatsState.getApplicationChatsState).subscribe(
      val => {
        this.showArchive = val.showArchive;
        this.showSearch = val.showSearch;
        this.showChatsList = val.showChatsList;
        this.showCreateGroup = val.showCreateGroup;
        this.showCreateDirect = val.showCreateDirect;
      }
    )
  }

  ngOnInit() {
  }


   // Actions
  ShowArchives() {
    if(this.showArchive == true) {
      this.HideArchives();
    } else {
      this.store.dispatch(new AppActions.ShowArchive);
    }
  }
  HideArchives() {
    this.store.dispatch(new AppActions.HideArchive);
  }
  ShowSearch() {
    this.store.dispatch(new AppActions.ShowSearch);
  }
  HideSearch() {
    this.store.dispatch(new AppActions.HideSearch);
  }
  ShowCreateGroup() {
    this.store.dispatch(new AppActions.ShowCreateGroup);
    this.new = false;
  }
  HideCreateGroup() {
    this.store.dispatch(new AppActions.HideCreateGroup);
  }
  ShowCreateDirect() {
    this.store.dispatch(new AppActions.ShowCreateDirect);
    this.new = false;
  }
  HideCreateDirect() {
    this.store.dispatch(new AppActions.HideCreateDirect);
  }

  showDropdown() {
    this.new = !this.new;
    this.step = false;
  }
  nextStep() {
    this.step = true;
  }
}
