import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject, of } from 'rxjs';
import { Client } from './models/client.model';
import { Feature } from './models/feature.model';
import { switchMap, filter, find, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( ) {  }

  private clients: BehaviorSubject<Client[]> = new BehaviorSubject ([
    {name: 'client 1', id:'1'},
    {name: 'client 2', id:'2'},
  ]);

  private features: BehaviorSubject<Feature[]> = new BehaviorSubject([
    { objectID: '1', clientId: '1', name: 'Feature A', type: '', lat: 1, lng:6 },
    { objectID: '2', clientId: '1', name: 'Feature B', type: '', lat: 2, lng:8 },
    { objectID: '3', clientId: '2', name: 'Feature B', type: '', lat: 3, lng:4 },
    { objectID: '4', clientId: '2', name: 'Feature A', type: '', lat: 4, lng:3 },
    { objectID: '5', clientId: '2', name: 'Feature C', type: '', lat: 5, lng:2 },
    { objectID: '6', clientId: '2', name: 'Feature C', type: '', lat: 6, lng:1 },
  ]);

  getClients(): Observable<Client[]> {
    return this.clients.asObservable();
  }

  getFeatures(): Observable<Feature[]> {
    return this.features.asObservable();
  }

  getClientFeatures(client: string): Observable<Feature[]> {
    return this.features.asObservable().pipe (
      switchMap(fs => {
        const _fs = fs.filter( f => f.clientId === client.toString())
        return of(_fs);
      })
    );
  }

  getClient(id: string): Observable<Client> {
    return this.clients.asObservable().pipe(
      switchMap( cs => of(cs.find( c => c.id === id)
    );
  };


  getFeature(id: string): Observable<Feature> {
    return this.features.asObservable().pipe(
      switchMap( fs => of(fs.find( f => f.objectID === id.toString()))
    )
  };

  updateFeature( f: Feature): void {
    this.features.next( [...this.features.value, f]);
  }

}
