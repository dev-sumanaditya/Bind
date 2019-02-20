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
    title: string;
    image: string;
}

export interface CreateNewDirect {
    username: string;
}