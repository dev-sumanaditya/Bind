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


    // Chats List reducers (get group + dm)
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
            loaded: false,
            error: ''
        })
        this.ChatsService.createNewGroup(payload).subscribe(
            data => this.store.dispatch(new ChatActions.CreateNewGroupSuccess(data)),
            error => this.store.dispatch(new ChatActions.CreateNewGroupFail(error))
        )
    }
    @Action(ChatActions.CreateNewGroupSuccess)
    createNewGroupSuccess({getState, patchState}: StateContext<ChatsPageModel>, {payload}: ChatActions.CreateNewGroupSuccess) {
        const state = getState();
        patchState({
            loading: false,
            loaded: true,
            list: {
                groupList: [...state.list.groupList, payload],
                directList: [...state.list.directList]
            }
        })
    }
    @Action(ChatActions.CreateNewGroupFail)
    createNewGroupfail({patchState}: StateContext<ChatsPageModel>, {payload}: ChatActions.CreateNewGroupFail) {
        patchState({
            loading: false,
            loaded: false,
            error: payload
        })
    }


    // Create new direct reducers
    @Action(ChatActions.CreateNewDirect)
    createNewDirect({patchState}: StateContext<ChatsPageModel>, {payload}: ChatActions.CreateNewDirect) {
        patchState({
            loading: true,
            loaded: false,
            error: ''
        })
        this.ChatsService.createNewDirect(payload).subscribe(
            data => this.store.dispatch(new ChatActions.CreateNewDirectSuccess(data)),
            error => this.store.dispatch(new ChatActions.CreateNewDirectFail(error))
        )
    }
    @Action(ChatActions.CreateNewDirectSuccess)
    createNewDirectSuccess({getState, patchState}: StateContext<ChatsPageModel>, {payload}: ChatActions.CreateNewDirectSuccess) {
        const state = getState();
        patchState({
            loading: false,
            loaded: false,
            list: {
                groupList: [...state.list.groupList],
                directList: [payload ,...state.list.directList]
            }
        })
    }
    @Action(ChatActions.CreateNewDirectFail)
    createNewDirectFail({patchState}: StateContext<ChatsPageModel>, {payload}: ChatActions.CreateNewDirectFail) {
        patchState({
            loaded: false,
            loading: false,
            error: payload
        })
    }
}