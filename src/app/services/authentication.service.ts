import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  baseUrl = `${environment.serviceUrl}/auth`;
  constructor(private httpClient: HttpClient) { }

  authenticateUser(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/authenticateUser`
    const headers = new HttpHeaders().set("system", "UHUD")
    return this.httpClient.post<any>(url, { username, password }, { headers: headers })
  }

}