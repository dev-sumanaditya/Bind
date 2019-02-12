import { ApplicationModel, AppChatsPageModel } from '../models/application.model';

export class ShowArchives {
    static readonly type = '[Application] ChatsPage ShowArchive';
}
export class HideArchives {
    static readonly type = '[Application] ChatsPage HideArchives';
}