import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

import * as TeamModel from '../store/model/teamMessaging.model';



@Injectable({
  providedIn: 'root'
})
export class TeamMessagingService {
  
  // env variables
  private TeamDataUrl = ''
  private JoinTeamUrl = ''
  private removeTeamUrl = ''
  private fetchMoreMessageUrl = ''



  constructor(private _http: HttpClient) { }

  // get team data by id
  getTeamData(id) : Observable<TeamModel.TeamModel> {
    return this._http.get<TeamModel.TeamModel>(this.TeamDataUrl + '/' + id ).pipe(
      catchError(this.errorHandler)
    )
  }

  // join team
  joinTeam(id) : Observable<TeamModel.TeamModel> {
    return this._http.get<TeamModel.TeamModel>(this.JoinTeamUrl + '/' + id).pipe(
      catchError(this.errorHandler)
    )
  }

  // remove team
  removeTeam(id) : Observable<any> {
    return this._http.get<any>(this.removeTeamUrl).pipe(
      catchError(this.errorHandler)
    )
  }

  // fetch previous messages
  fetchMoreMessages(id) : Observable<TeamModel.UnitMessageModel[]> {
    return this._http.get<TeamModel.UnitMessageModel[]>(this.fetchMoreMessageUrl + '/' + id).pipe(
      catchError(this.errorHandler)
    )
  }




  

  // error handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status || 'Server Error');
  }
}
