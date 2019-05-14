import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';

//NgXs
import { Store } from '@ngxs/store';

// State and Actions
import { ChatsPageState } from '../../../store/state/chatsPage.state';
import * as ChatPageActions from '../../../store/actions/chatsPage.actions';

import { ChatsPageLazyState } from '../../../store/state/chatsPageLazy.state';
import * as LazyActions from '../../../store/actions/chatsPageLazy.actions';

// Models
import { Group, Direct } from '../../../store/model/chatsPage.model';


@Injectable({
  providedIn: 'root'
})
export class MgsMainService {
  
  private GroupList$ = new BehaviorSubject<Group[]>(null);
  private DirectList$ = new BehaviorSubject<Direct[]>(null);
  private ArchiveList$ = new BehaviorSubject<Direct[]>(null);

  constructor(private store: Store, private store2: Store) {
    this.store.select(ChatsPageState.getChatsPageState).subscribe(
      val => {
        console.log(val);
        this.GroupList$.next(val.list.groupList);
        this.DirectList$.next(val.list.directList);
      }
    )
    this.store2.select(ChatsPageLazyState.getChatsLazyState).subscribe(
      val => {
        console.log(val);
        this.ArchiveList$.next(val.archiveMsgList.list);
      }
    )
  }

  getData() {
    this.store.dispatch(ChatPageActions.GetChatsList);
  }

  getGroupList() {
    return this.GroupList$.asObservable();
  }

  getDirectList() {
    return this.DirectList$.asObservable();
  }

  getArchData() {
    console.log('------------------------------------fetch archive data');
    this.store2.dispatch(LazyActions.GetArchiveList);
  }
  getArchiveList() {
    console.log('get archive data called');
    return this.ArchiveList$.asObservable();
  }
}
