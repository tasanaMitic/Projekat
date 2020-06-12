import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ocena } from '../entities/misc/ocena';
import { Observable } from 'rxjs';
import { OcenaLeta } from '../entities/misc/ocena-leta';

@Injectable({
  providedIn: 'root'
})
export class OcenaService {
  readonly BaseURI = 'https://localhost:44343/api';

  constructor(private http: HttpClient) { }

  oceniAviokompaniju(ocena: Ocena): Observable<Ocena> {
    return this.http.post<Ocena>(this.BaseURI + '/Aviokompanija/AddOcenaAviokompanije', ocena);
  }

  oceniLet(ocena: OcenaLeta): Observable<OcenaLeta> {
    return this.http.post<OcenaLeta>(this.BaseURI + '/Aviokompanija/AddOcenaLeta', ocena);
  }

  getOceneAvio(): Observable<Ocena[]> {
    return this.http.get<Ocena[]>(this.BaseURI + '/Aviokompanija/GetOceneAvio');
  }

  getOceneLeta(): Observable<OcenaLeta[]> {
    return this.http.get<OcenaLeta[]>(this.BaseURI + '/Aviokompanija/GetOceneLeta');
  }
}
