
// ******************************************************************

// this is Login page service... ************************************

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(private http: HttpClient) { }

  private getUserURL = '';
  private loginURL = '';

  data1 = {
    'name': 'Aditya Suman',
    'title': 'suman_aditya',
    'img': 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754'
  };

  getUser(username) {
  //  return this.http.post<any>(this.getUserURL, username);
  return this.data1;
  }

  loginUser(user) {
  //  return this.http.post<any>(this.loginURL, user);
  }
}
