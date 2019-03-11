// chat window
export class ShowChat {
    static readonly type = '[APP teamchat] Show Chat Window';
}

// info window
export class ShowInfo {
    static readonly type = '[APP teamchat] Show Info Window';
}

// Group Box
export class ShowGroupBox {
    static readonly type = '[APP groupbox] show Group Box';
}
// group box navs **************
export class ShowBoards {
    static readonly type = '[APP groupbox] show Boards';
}
export class ShowTasks {
    static readonly type = '[APP groupbox] show Tasks';
}
export class ShowFiles {
    static readonly type = '[APP groupbox] show Files';
}
export class ShowPolls {
    static readonly type = '[APP groupbox] show Polls';
}
export class showImportants {
    static readonly type = '[APP groupbox] show Importants';
}