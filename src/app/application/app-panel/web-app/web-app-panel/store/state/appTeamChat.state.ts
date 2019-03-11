import { State, Action, StateContext, Selector} from '@ngxs/store';
import * as AppTeamChatActions from '../actions/appTeamChat.actions';
import { AppTeamChatModel } from '../model/appTeamChat.model';



@State<AppTeamChatModel>({
    name: 'AppTeamChat',
    defaults: {
        ShowChat: true,
        ShowInfo: false,
        ShowGroupBox: false,
        GroupBoxTabOpened: 'Boards'
    }
})
export class AppTeamChatState {

    @Selector()
    static getAppTeamChatState(state: AppTeamChatModel) {
        return state;
    }
    // Chat window
    @Action(AppTeamChatActions.ShowChat)
    showChatWindow({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            ShowChat: true,
            ShowGroupBox: false,
            ShowInfo: false
        })
    }
    // Info window
    @Action(AppTeamChatActions.ShowInfo)
    showInfoWindow({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            ShowInfo: true,
            ShowChat: false,
            ShowGroupBox: false
        })
    }
    // Group box
    @Action(AppTeamChatActions.ShowGroupBox)
    showGroupBox({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            ShowGroupBox: true,
            ShowChat: false,
            ShowInfo: false
        })
    }
    
    // Group Box navs
    @Action(AppTeamChatActions.ShowBoards)
    showBoards({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            GroupBoxTabOpened: 'Boards'
        })
    }
    @Action(AppTeamChatActions.ShowTasks)
    showTasks({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            GroupBoxTabOpened: 'Tasks'
        })
    }
    @Action(AppTeamChatActions.ShowFiles)
    showFiles({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            GroupBoxTabOpened: 'Files'
        })
    }
    @Action(AppTeamChatActions.ShowPolls)
    showPolls({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            GroupBoxTabOpened: 'Polls'
        })
    }
    @Action(AppTeamChatActions.showImportants)
    showImportants({patchState}: StateContext<AppTeamChatModel>) {
        patchState({
            GroupBoxTabOpened: 'Importants'
        })
    }
}