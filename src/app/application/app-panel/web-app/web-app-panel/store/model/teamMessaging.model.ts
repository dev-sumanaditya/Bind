export interface TeamModel {
    id: String;
    name: String;
    username: String;
    title: String;
    image: String;
    description: String;
    muted : Boolean;
    unread : Boolean;
    members: MemberModel[];
    role: String;
    recentMedia: MediaModel[];
    messages: UnitMessageModel[];
    GroupBox: any;  // GroupBoxModel
}

export interface MemberModel {
    id: String;
    name: String;
    username: String;
    image: String;
    role: String;
    pos: String;
}

export interface MediaModel {
    id: String;
    type: String;
    image: String;
    video: String;
    time: String;
    user: MemberModel;
    important: Boolean;
}

export interface UnitMessageModel {
    id: String;
    user: MemberModel;
    important: Boolean;
    bySelf: Boolean;
    time: String;
    content: {
        type: String;
        text: String;
        img: String;
        vid: String;
        file: String;
        code: String;
    };
    replies: ReplyModel[];
}

export interface ReplyModel {
    id: String;
    user: {
        id: String;
        name: String;
        image: String;
    };
    bySelf: Boolean;
    time: String;
    content: {
        type: String;
        text: String;
        img: String;
        vid: String;
        file: String;
        code: String;
    };
}
