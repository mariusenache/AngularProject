import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private readonly serverUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getShips(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/ships`);
  }
  getShipInfo(id: number): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/ships/${id}`);
  }
}
