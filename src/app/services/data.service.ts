import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = './data';
  constructor(
    private http: HttpClient
  ) { }

  getServiceSetting(serviceType: string): Observable<FormSettings> {
    const url = `${this.baseUrl}/settings-${serviceType.toLowerCase()}.json`;
    return this.http.get<FormSettings>(url);
  }
}

export interface FormSettings {
  FormTitle: string;
  FolderType: string;
  FieldGroups: { GroupTitle: string, Fields: FormField[] }[];
}

export interface FormField {
  Order: number;
  Label: string;
  BackingField: string;
  Template: string;
  ReloadOn?: string;
}