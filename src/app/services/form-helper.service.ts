import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
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
}