import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/persons`);
  }
  getPersonInfo(id: number): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/persons/${id}`);
  }

  addPerson(personInfo: any): Observable<any> {
    return this.httpClient.post(`${this.serverUrl}/persons`, personInfo);
  }

  updatePerson(personInfo: any): Observable<any> {
    return this.httpClient.put(`${this.serverUrl}/persons/${personInfo.id}`, personInfo);
  }

  deletePerson(gameId: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/persons/${gameId}`);
  }


}
