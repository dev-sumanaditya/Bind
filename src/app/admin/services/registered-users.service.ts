import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersService {

  private _DataUrl = '';
  private _DefUrl = '';

  private dummyHeader: any = [
    {headerName: 'Id', field: 'id', checkboxSelection: true },
    {headerName: 'Name', field: 'name'},
    {headerName: 'Username', field: 'username'},
    {headerName: 'Mobile no.', field: 'mob'},
    {headerName: 'Gender', field: 'gender'},
    {headerName: 'Signup on', field: 'signupTs'},
    {headerName: 'Last login', field: 'login_last'}
  ];

  private dummyUsers: any = [
    {id: '1', name: 'mike tyson', username: 'memikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '2', name: 'john doe', username: 'memiey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '3', name: 'lisa', username: 'mmikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '4', name: 'tyler wilson', username: 'memkey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '1', name: 'mike tyson', username: 'memikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '2', name: 'john doe', username: 'memiey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '3', name: 'lisa', username: 'mmikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '4', name: 'tyler wilson', username: 'memkey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '1', name: 'mike tyson', username: 'memikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '2', name: 'john doe', username: 'memiey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '3', name: 'lisa', username: 'mmikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '4', name: 'tyler wilson', username: 'memkey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '1', name: 'mike tyson', username: 'memikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '2', name: 'john doe', username: 'memiey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '3', name: 'lisa', username: 'mmikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '4', name: 'tyler wilson', username: 'memkey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '1', name: 'mike tyson', username: 'memikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '2', name: 'john doe', username: 'memiey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '3', name: 'lisa', username: 'mmikey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'},
    {id: '4', name: 'tyler wilson', username: 'memkey', mob: 7543955442, gender: 'Male', signupTs: '14 Dec 17', login_last: '8 Aug 18'}
  ];



  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this._DataUrl);
  }

  getHeaders() {
    return this.http.get(this._DefUrl);
  }

  getDummyHeader() {
    return this.dummyHeader;
  }
  getDummyUsers() {
    return this.dummyUsers;
  }


}
