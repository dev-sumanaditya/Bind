import * as TeamMessagingModel from '../model/teamMessaging.model';


// interfaces
export interface ReplyTo {
    TeamId : String;
    replyToMsgId : String;
    reply: TeamMessagingModel.ReplyModel;
}
export interface MessageTo {
    teamId : String;
    message : TeamMessagingModel.UnitMessageModel;
}




// get team data (including messages and all data || groupBoxData is lazily loaded)
export class GetTeamData {
    static readonly type = '[Message] Get messages';
    constructor(public payload: String) {}
}
export class GetTeamDataSuccess {
    static readonly type = '[Message] Get message success';
    constructor(public payload: TeamMessagingModel.TeamModel) {}
}
export class GetTeamDataFail {
    static readonly type = '[Message] Get message fail';
    constructor(public payload: String) {}
}


// remove team (Exit team)
export class RemoveTeam {
    static readonly type = '[Message] remove team';
    constructor(public payload: String) {}
}
export class RemoveTeamSuccess {
    static readonly type = '[Message] remove team success';
    constructor(public payload: String) {}
}
export class RemoveTeamFail {
    static readonly type = '[Message] remove team Success'
    constructor(public payload : String) {}
}


// Join Team
export class JoinTeam {
    static readonly type = '[Message] join team';
    constructor(public payload: String) {}
}
export class JoinTeamSuccess {
    static readonly type = '[Message] join team success';
    constructor(public payload: TeamMessagingModel.TeamModel) {}
}
export class JoinTeamFail {
    static readonly type = '[Message] join team fail';
    constructor(public payload: String) {}
}


// fetch more messages
export class GetMoreMessages {
    static readonly type = '[Message] Get more messages';
    constructor(public payload: String) {}
}
export class GetMoreMessagesSuccess {
    static readonly type = '[Message] get more messages success';
    constructor(public payload: TeamMessagingModel.UnitMessageModel[], public id: String) {}
}
export class GetMoreMessagesFail {
    static readonly type = '[Message] get more messages fail';
    constructor(public payload: String) {}
} 


// new incoming message
export class NewInMessage {
    static readonly type = '[Message] new incoming message';
    constructor(public payload: MessageTo) {}
}

// new incoming reply
export class NewReply {
    static readonly type = '[Message] new incoming reply';
    constructor(public payload: ReplyTo) {}  // add interface
}


// new sent message
export class NewSentMessage {
    static readonly type = '[Message] new sent message';
    constructor(public payload: MessageTo) {}
}
export class NewSentMessageSuccess {
    static readonly type = '[Message] new sent message success';
    constructor(public payload: MessageTo) {} // Blue tick
}
export class NewSentMessageFail {
    static readonly type = '[Message] new sent message fail';
    constructor(public payload: String) {} // retry
}


// new sent reply
export class NewSentReply {
    static readonly type = '[Message] new sent reply';
    constructor(public payload: ReplyTo) {}
}
export class NewSentReplySuccess {
    static readonly type = '[Message] new sent reply success';
    constructor(public payload: ReplyTo) {}
}
export class NewSentReplyFail {
    static readonly type = '[Message] new sent reply fail';
    constructor(public payload: String) {}
}