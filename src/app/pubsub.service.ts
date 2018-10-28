import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface coord {
  lat?: number;
  lng?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PubsubService {

  public zoomTo: BehaviorSubject<coord> = new BehaviorSubject({});

  constructor() { }
}
