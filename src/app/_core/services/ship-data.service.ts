import { Injectable } from '@angular/core';
import { Ship } from '../models/Ship';

@Injectable({
  providedIn: 'root'
})
export class ShipDataService {
  selectedShip: Ship;

  constructor() { }
}
