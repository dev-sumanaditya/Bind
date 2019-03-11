import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as AppActions from '../actions/application.actions';
import { AppChatsModel } from '../model/application.model';

@State<AppChatsModel>({
    name: 'AppChats',
    defaults: {
        showArchive: false,
        showSearch: false,
        showCreateGroup: false,
        showCreateDirect: false,
        showChatsList: true,   // defaults true
    }
})
export class AppChatsState {

    @Selector()
    static getApplicationChatsState(state: AppChatsModel) {
        return state;
    }

    @Action(AppActions.ShowArchive)
    showArchive({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showArchive: true,
            showSearch: false,
            showCreateGroup: false,
            showCreateDirect: false,
            showChatsList: false,
        })
    }
    @Action(AppActions.HideArchive)
    hideArchive({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showArchive: false,
            showSearch: false,
            showCreateGroup: false,
            showCreateDirect: false,
            showChatsList: true
        })
    }


    @Action(AppActions.ShowSearch)
    showSearch({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showSearch: true,
            showChatsList: false,
            showArchive: false,
            showCreateGroup: false,
            showCreateDirect: false,
        })
    }
    @Action(AppActions.HideSearch)
    hideSearch({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showSearch: false,
            showChatsList: true,
            showArchive: false,
            showCreateGroup: false,
            showCreateDirect: false
        })
    }


    @Action(AppActions.ShowCreateGroup)
    showCreateGroup({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showCreateGroup: true,
            showChatsList: false,
            showArchive: false,
            showCreateDirect: false,
            showSearch: false,
        })
    } 
    @Action(AppActions.HideCreateGroup)
    hideCreateGroup({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showCreateGroup: false,
            showArchive: false,
            showCreateDirect: false,
            showSearch: false,
            showChatsList: true,
        })
    }

    @Action(AppActions.ShowCreateDirect)
    showCreateDirect({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showCreateDirect: true,
            showChatsList: false,
            showArchive: false,
            showCreateGroup: false, 
            showSearch: false,
        })
    }
    @Action(AppActions.HideCreateDirect)
    hideCreateDirect({patchState}: StateContext<AppChatsModel>) {
        patchState({
            showCreateDirect: false,
            showChatsList: true,
            showArchive: false,
            showCreateGroup: false,
            showSearch: false
        })
    }
}