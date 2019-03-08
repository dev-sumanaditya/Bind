import * as ChatsModel from '../model/chatsPage.model';


// get chats list (Group + Dm)
export class GetChatsList {
    static readonly type = '[CHATS] get chat list';
}
export class GetChatsListSuccess {
    static readonly type = '[CHATS] get chats list success';
    constructor(public payload: ChatsModel.chatsList) {}
}
export class GetChatsListFail {
    static readonly type = '[CHATS] get chats list fail';
    constructor(public payload: string) {}
}


// add new group
export class CreateNewGroup {
    static readonly type = '[CHATS] create new group';
    constructor(public payload: ChatsModel.CreateNewGroup) {}
}
export class CreateNewGroupSuccess {
    static readonly type = '[CHATS] create new group success';
    constructor(public payload: ChatsModel.Group) {}
}
export class CreateNewGroupFail {
    static readonly type = '[CHATS] create new group fail';
    constructor(public payload: string) {}
}


// add new direct
export class CreateNewDirect {
    static readonly type = '[CHATS] create new direct';
    constructor(public payload: ChatsModel.CreateNewDirect) {}
}
export class CreateNewDirectSuccess {
    static readonly type = '[CHATS] create new direct success';
    constructor (public payload: ChatsModel.Direct) {}
}
export class CreateNewDirectFail {
    static readonly type = '[CHATS] create new direct fail';
    constructor(public payload: string) {}
}

