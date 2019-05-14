// NGXS imports
import {State, StateContext, Store, Selector, Action } from '@ngxs/store'

// Actions and model
import * as teamMessagingActions from '../actions/teamMessaging.actions';
import * as TeamMessagingModel from '../model/teamMessaging.model';

// Services
import { TeamMessagingService } from '../../services/team-messaging.service';




export interface TeamMessagingState {
    teams: TeamMessagingModel.TeamModel[];
    loaded: Boolean;
    loading: Boolean;
    error: String;
}


@State<TeamMessagingState>({
    name: 'Teams',
    defaults: {
        teams : [],
        loaded: false,
        loading: false,
        error: ''
    }
})
export class TeamsState {
    constructor(private store: Store, private teamService: TeamMessagingService) {}


    // Selectors
    @Selector()
    static getTeamState(state: TeamMessagingState) {
        return state;
    }

    // Reducers

    // Get team data by id
    @Action(teamMessagingActions.GetTeamData)
    getTeamData({patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.GetTeamData) {
        patchState({
            loading: true
        })
        const teamId = payload;
        this.teamService.getTeamData(teamId).subscribe(
            data => this.store.dispatch(new teamMessagingActions.GetTeamDataSuccess(data)),
            error => this.store.dispatch(new teamMessagingActions.GetTeamDataFail(error))
        )
    }
    @Action(teamMessagingActions.GetTeamDataSuccess)
    getTeamDataSuccess({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.GetTeamDataSuccess) {
        
        const state = getState();
        patchState({
            loaded: true,
            loading: false,
            teams: [...state.teams, payload]
        })
    }
    @Action(teamMessagingActions.GetTeamDataFail)
    getTeamDataFail({patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.GetTeamDataFail) {
        patchState({
            loaded: false,
            loading: false,
            error: payload
        })
    }


    // join team on accept request or by invite link
    @Action(teamMessagingActions.JoinTeam)
    joinTeam({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.JoinTeam){
        const teamId = payload;
        this.teamService.joinTeam(teamId).subscribe(
            data => this.store.dispatch(new teamMessagingActions.JoinTeamSuccess(data)),
            // also add to group list
            error => this.store.dispatch(new teamMessagingActions.JoinTeamFail(error))
        )
    }
    @Action(teamMessagingActions.JoinTeamSuccess)
    joinTeamSuccess({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.JoinTeamSuccess) {
        const state= getState()
        patchState({
            teams: [...state.teams, payload]
        })
    }
    @Action(teamMessagingActions.JoinTeamFail)
    joinTeamFail({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.JoinTeamFail) {
        patchState({
            error: payload
            // do something ---  display toast
        })
    }


    // remove team on exit group
    @Action(teamMessagingActions.RemoveTeam)
    removeTeam({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.RemoveTeam) {
        const teamId = payload;
        this.teamService.removeTeam(teamId).subscribe(
            data => this.store.dispatch(new teamMessagingActions.RemoveTeamSuccess(teamId)),
            // also remove from groupList..
            error => this.store.dispatch(new teamMessagingActions.RemoveTeamFail(error))
        )
    }
    @Action(teamMessagingActions.RemoveTeamSuccess)
    removeTeamSuccess({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.RemoveTeamSuccess) {
        const state = getState();
        const teams = state.teams;
        const result =  teams.filter(team => {
            team.id != payload
        });

        patchState({
            teams: result
        })
    }
    @Action(teamMessagingActions.RemoveTeamFail)
    removeTeamFail({patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.RemoveTeamFail) {
        patchState({
            error: payload
            // do something; display toast
        })
    }


    // fetch more messages
    @Action(teamMessagingActions.GetMoreMessages)
    fetchMoreMessages({getState, patchState}: StateContext<TeamMessagingState>, {payload}: teamMessagingActions.GetMoreMessages) {
        const state = getState();

        const team = state.teams.find(
            team => {
                return team.id == payload;
            }
        )

        const newMessage = [payload , ...team.messages]
    }


}
