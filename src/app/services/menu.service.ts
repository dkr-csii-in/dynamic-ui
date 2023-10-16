import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl = `${environment.serviceUrl}/folder`;
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  getServices(): Observable<ServiceTypes[]> {
    const url = `${this.baseUrl}/getProposalFolderTypes`
    let headers = new HttpHeaders().set("system", "UHUD");
    if (this.authService.authToken) {
      headers = headers.set('lid', this.authService.authToken.lid);
    } else {
      this.router.navigateByUrl('/');
      throw new Error('lid not found');

    }
    return this.httpClient.post<ServiceTypes[]>(url, {}, { headers: headers })
  }
}

export interface ServiceTypes {
  folderType: string;
  folderDesc: string;
}
