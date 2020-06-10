import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ocena } from '../entities/misc/ocena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcenaService {
  readonly BaseURI = 'https://localhost:44343/api';

  constructor(private http: HttpClient) { }

  oceniAviokompaniju(ocena: Ocena): Observable<Ocena> {
    return this.http.post<Ocena>(this.BaseURI + '/Aviokompanija/AddOcenaAviokompanije', ocena);
  }

  getOceneAvio(): Observable<Ocena[]> {
    return this.http.get<Ocena[]>(this.BaseURI + '/Aviokompanija/GetOceneAvio');
  }
}
