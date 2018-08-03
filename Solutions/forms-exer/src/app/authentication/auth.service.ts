import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = "" // APP KEY HERE;
const appSecret = "" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentAuthtoken: string = '';

  constructor(private http: HttpClient) { }

  register(model: RegisterModel): Observable<Object> {
    return this.http
      .post(
        registerUrl,
        model,
        {
          headers: this.getHeaders("Basic")
        }
      );
  }

  login(model: LoginModel): Observable<Object> {
    return this.http
      .post(
        loginUrl,
        model,
        {
          headers: this.getHeaders("Basic")
        }
      );
  }

  logout() {
    return this.http
      .post(logoutUrl, {}, { headers: this.getHeaders('Kinvey') })
  }

  chechIfLoggedIn() {
    return this.authtoken === localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(val) {
    this.currentAuthtoken = val;
  }

  private getHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        "Authorization": `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        "Content-Type": 'application/json'
      });
    } else {
      return new HttpHeaders({
        "Authorization": `Kinvey ${localStorage.getItem('authtoken')}`,
        "Content-Type": 'application/json'
      });
    }
  }
}
