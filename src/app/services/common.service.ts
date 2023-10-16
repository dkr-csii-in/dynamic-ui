import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthToken, PublicToken } from '../dto/auth-token';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) { }

  public getHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/'])
      throw new Error('token not found');
    }
    const authToken: AuthToken | PublicToken = JSON.parse(token);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('system', environment.system)
      .set('lid', authToken.lid);
    return headers;
  }

  public getHeaderSystem(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('system', environment.system);
    return headers;
  }
}
