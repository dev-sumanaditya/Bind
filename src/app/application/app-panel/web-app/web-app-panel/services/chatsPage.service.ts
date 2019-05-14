import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import * as ChatsPageModel from '../store/model/chatsPage.model';

@Injectable({
    providedIn: 'root'
})
export class ChatsPageService {
    private chatsListUrl = 'http://localhost:3000/chatList';
    private createNewGroupUrl = '';
    private createNewDirectUrl = '';

    constructor(private _http: HttpClient) {}

    // Get Chats List
    getChatsList(): Observable<ChatsPageModel.chatsList> {
        return this._http.get<ChatsPageModel.chatsList>(this.chatsListUrl).pipe(
            catchError(this.errorHandler)
        )
    }

    // Create new group
    createNewGroup(data): Observable<ChatsPageModel.Group> {
        return this._http.post<ChatsPageModel.Group>(this.createNewGroupUrl, data).pipe(
            catchError(this.errorHandler)
        )
    }

    // create new direct
    createNewDirect(data): Observable<ChatsPageModel.Direct> {
        return this._http.post<ChatsPageModel.Direct>(this.createNewDirectUrl, data).pipe(
            catchError(this.errorHandler)
        )
    }


    // common error handler **************************************************************
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.status || 'Server Error');
    }
}