import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthToken, WSToken } from '../dto/auth-token';
import { CommonService } from './common.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  authToken?: AuthToken;
  baseUrl = `${environment.serviceUrl}/auth`;

  constructor(private httpClient: HttpClient, private common: CommonService) {
    const token = window.localStorage.getItem('token');
    if (token && JSON.parse(token)?.lid) {
      this.authToken = JSON.parse(token);
    }
  }

  authenticateUser(username: string, password: string): Observable<AuthToken> {
    const url = `${this.baseUrl}/authenticateUser`
    const headers = new HttpHeaders().set("system", "UHUD")
    return this.httpClient.post<AuthToken>(url, { username, password }, { headers: headers })
      .pipe(
        tap((r) => {
          window.localStorage.setItem('token', JSON.stringify(r))
          this.authToken = r;
        })
      );
  }

  validateToken(lid: string): Observable<WSToken> {
    const headers = this.common.getHeaderSystem();
    const authUrl = `${this.baseUrl}/validateToken`;
    return this.httpClient.post<WSToken>(authUrl, lid, { headers });
  }

  removeToken() {
    window.localStorage.removeItem('token')
    this.authToken = undefined;
  }
}