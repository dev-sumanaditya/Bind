export interface ApplicationModel {
    chatsPage: AppChatsPageModel;
    searchPage: AppSearchPageModel;
    homePage: AppHomePageModel;
    notificationPage: AppNotificationPageModel;
    profilePage: AppProfilePageModel;
    settingsPage: AppSettingsPageModel;
}

export interface AppChatsPageModel {
    showArchives: boolean;
    showSearchResults: boolean;
    showCreateNewTeam: boolean;
    showCreateNewDirect: boolean;
    showTeamGroupBox: boolean;
    showTeaminfo: boolean;
    showTeamSettings: boolean;
}

export interface AppSearchPageModel {

}

export interface AppHomePageModel {

}

export interface AppNotificationPageModel {

}

export interface AppProfilePageModel {

}

export interface AppSettingsPageModel {

}