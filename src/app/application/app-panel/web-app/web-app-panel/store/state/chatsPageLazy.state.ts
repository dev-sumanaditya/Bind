import {State, StateContext, Store, Selector, Action } from '@ngxs/store'
import * as Actions from '../actions/chatsPageLazy.actions';
import * as Model from '../model/chatsPageLazy.model';
import { ChatsPageLazyService } from '../../services/chats-page-lazy.service';

export interface ChatsPageLazyModel {
    archiveMsgList: {
        list: Model.archiveModel[];
        loaded: boolean;
        loading: boolean;
        error: string;
    }
}


@State<ChatsPageLazyModel>({
    name: 'ChatsPageLazy',
    defaults: {
        archiveMsgList: {
            list: [],
            loaded: false,
            loading: false,
            error: ''
        }
    }
})
export class ChatsPageLazyState {
    constructor(private store: Store, private service: ChatsPageLazyService) {}


    @Selector()
    static getChatsLazyState(state: ChatsPageLazyModel) {
        return state;
    }

    @Action(Actions.GetArchiveList)
    getArchiveList({patchState}: StateContext<ChatsPageLazyModel>) {
        patchState({
            archiveMsgList: {
                list: [],
                loaded: false,
                loading: true,
                error: ''
            }
        })
        this.service.getArchiveList().subscribe(
            data => {
                console.log(data);

                const arrayToObject = (arr) => Object.assign({}, ...arr.map(item => ({[item.id]: item})))

                const convert = (objData) => {
                    return Object.keys(objData).map(id => objData[parseInt(id, 10)]);
                }
                
                const objData = arrayToObject(data);
                this.store.dispatch(new Actions.GetArchiveListSuccess(convert(objData)));
            },

            error => this.store.dispatch(new Actions.GetArchiveListFail(error))
        )
    }
    @Action(Actions.GetArchiveListSuccess)
    getArchiveListSuccess( { patchState}: StateContext<ChatsPageLazyModel>, { payload }: Actions.GetArchiveListSuccess) {
        patchState({
            archiveMsgList: {
                list: payload,
                loaded: true,
                loading: false,
                error: ''
            }
        })
    }
    @Action(Actions.GetArchiveListFail)
    getArchiveListFail( {getState, patchState}: StateContext<ChatsPageLazyModel>, {payload}: Actions.GetArchiveListFail) {
        const state = getState();
        patchState({
            archiveMsgList: {
                list: [...state.archiveMsgList.list],
                loaded: false,
                loading: false,
                error: payload,
            }
        })
    }
}