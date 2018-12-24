import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private _registerUrl = 'http://...';   // Register url
  private _loginUrl = 'http://...';      // Login url


  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(input) {
    return this.http.post<any>(this._loginUrl, input);
  }
}
