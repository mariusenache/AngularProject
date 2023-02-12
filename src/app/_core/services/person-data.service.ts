import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  selectedPerson: Person;

  constructor() { }
}
