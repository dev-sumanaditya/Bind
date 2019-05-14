import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import * as model from '../store/model/chatsPageLazy.model';


@Injectable({
  providedIn: 'root'
})
export class ChatsPageLazyService {

  private ArchiveListUrl = 'http://localhost:3000/archiveList';

  constructor(private http: HttpClient) { }

  getArchiveList() :Observable<model.archiveModel[]> {
    return this.http.get<model.archiveModel[]>(this.ArchiveListUrl).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status || 'Server Error');
  }
}
