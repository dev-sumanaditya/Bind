import { State, Action, StateContext, Selector } from '@ngxs/store';

import {ApplicationModel, AppChatsPageModel } from '../models/application.model';

@State<AppChatsPageModel["showArchives"]>({
    name: 'App',
    defaults: false
})
export class AppArchiveShowState {

}