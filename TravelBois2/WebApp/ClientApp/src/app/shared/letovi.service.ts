import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Let } from '../entities/objects/let';

@Injectable({
  providedIn: 'root'
})
export class LetoviService {
  readonly BaseURI = 'https://localhost:44343/api';

  constructor(private http: HttpClient) { }

  addLet(letic: Let): Observable<Let> {
    return this.http.post<Let>(this.BaseURI + '/Aviokompanija/AddLet', letic);
  }

  getLetovi(): Observable<Let[]> {
    return this.http.get<Let[]>(this.BaseURI + '/Aviokompanija/GetLetovi');
  }

  deleteLet(id: number): Observable<any> {
    return this.http.delete(this.BaseURI + '/Aviokompanija/DeleteLet/' + id);
  }
}
