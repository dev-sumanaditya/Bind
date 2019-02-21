import {State, StateContext, Store, Selector, Action } from '@ngxs/store'
import * as ChatActions from '../actions/chatsPage.actions';
import * as ChatsModel from '../model/chatsPage.model';
import { ChatsPageService } from '../../services/chatsPage.service';

export interface ChatsPageModel {
    list: ChatsModel.chatsList
    loaded: boolean,
    loading: boolean,
    error: string
}

@State<ChatsPageModel>({
    name: 'ChatsPage',
    defaults: {
        list: {
            groupList: [],
            directList: []
        },
        loaded: false,
        loading: false,
        error: ''
    }
})
export class ChatsPageState {

    constructor(private store: Store, private ChatsService: ChatsPageService) {}

    @Selector()
    static getChatsPageState(state: ChatsPageModel) {
        return state;
    }

    // Chats List reducers

    @Action(ChatActions.GetChatsList)
    getChatsList({patchState}: StateContext<ChatsPageModel>) {
        patchState({
            loading: true,
            loaded: false,
            error: ''
        })
        this.ChatsService.getChatsList().subscribe(
            data => this.store.dispatch(new ChatActions.GetChatsListSuccess(data)),
            error => this.store.dispatch(new ChatActions.GetChatsListFail(error))
        )
    }

    @Action(ChatActions.GetChatsListSuccess)
    getChatsListSuccess({patchState}: StateContext<ChatsPageModel>, { payload }: ChatActions.GetChatsListSuccess) {
        patchState({
            loaded: true,
            loading: false,
            list: payload,
        })
    }
    
    @Action(ChatActions.GetChatsListFail)
    getChatsListFail({patchState}: StateContext<ChatsPageModel>, { payload }: ChatActions.GetChatsListFail) {
        patchState({
            loaded: false,
            loading: false,
            error: payload
        })
    }


    // Create new group reducers
    
    @Action(ChatActions.CreateNewGroup)
    createNewgroup({patchState}: StateContext<ChatsPageModel>, { payload }: ChatActions.CreateNewGroup) {
        patchState({
            loading: true,
            loaded: false
        })

    }
}