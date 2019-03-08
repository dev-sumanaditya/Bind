export interface Group {
    id: string;
    name: string;
    title: string;
    image: string; 
    lastText: string;
    time: string;
    notificationCount: number;
}

export interface Direct {
    id: string;
    name: string;
    image: string;
    lastText: string;
    time: string;
    notificationCount: number;
}

export interface chatsList {
    groupList: Group[];
    directList: Direct[];
}


export interface CreateNewGroup {
    name: string;
    username: string;
    description: string;
    image: string;
    members: string[];  // array of user ids
}

export interface CreateNewDirect {
    username: string;
}