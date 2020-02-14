import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class MainService {

  constructor(protected readonly http: HttpClient) { }

  protected get(url: string, options?: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`, options ? options : {});
  }

  protected post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, body, options ? options : {});
  }

  protected put(url: string, body: any, options?: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${url}`, body, options ? options : {});
  }

  protected delete(url: string, options?: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${url}`, options ? options : {});
  }

}
