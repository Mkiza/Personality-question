import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalityTypes } from '../model/personality-types.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);

  data$ = this.dataSubject.asObservable();

  constructor() {}

  setData(data: PersonalityTypes[]) {
    this.dataSubject.next(data);
  }
}
