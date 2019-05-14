import * as Model from '../model/chatsPageLazy.model';


export class GetArchiveList {
    static readonly type = '[Chats] get Archive List';
}
export class GetArchiveListSuccess {
    static readonly type = '[CHATS] get Archive list success';
    constructor(public payload: Model.archiveModel[]) {}
}
export class GetArchiveListFail {
    static readonly type = '[CHATS] get Archive list fail';
    constructor(public payload: string) {}
}