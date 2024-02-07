import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ValidSub } from '../dto/valid-sub';
import { ValidType } from '../dto/valid-type';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class FormHelperService {

  constructor(
    private http: HttpClient,
    private common: CommonService
  ) { }

  getAuthorityList(): Observable<ValidType[]> {
    const headers = this.common.getHeader();
    const url = `${environment.serviceUrl}/uhuda/getAuthorityList`;
    return this.http.post<ValidType[]>(url, {}, { headers });
  }

  getValidSubTypes(request: { authorityRSN: number, folderType: string, subCode?: number }): Observable<ValidSub[]> {
    const headers = this.common.getHeader();
    const url = `${environment.serviceUrl}/uhuda/getValidSubTypes`;
    return this.http.post<ValidSub[]>(url, request, { headers });
  }

  getSubType(types: string[]): Observable<ValidSub[]> {
    const headers = this.common.getHeader();
    const authUrl = `${environment.serviceUrl}/folder/getFolderSubByFolderType`;
    return this.http.post<ValidSub[]>(authUrl, { folderTypes: types }, { headers });
  }
}