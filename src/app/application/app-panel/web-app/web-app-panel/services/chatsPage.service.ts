import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import * as ChatsPageModel from '../store/model/chatsPage.model';

@Injectable({
    providedIn: 'root'
})
export class ChatsPageService {
    private chatsListUrl = '';

    constructor(private _http: HttpClient) {}

    getChatsList(): Observable<ChatsPageModel.chatsList> {
        return this._http.get<ChatsPageModel.chatsList>(this.chatsListUrl).pipe(
            catchError(this.errorHandler)
        )
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.status || 'Server Error');
    }
}