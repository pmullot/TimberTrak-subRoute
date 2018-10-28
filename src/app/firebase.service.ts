import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './models/client.model';
import { Feature } from './models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( ) {  }

  private clients: Client[] = [
    {name: 'client 1', id:'1'},
    {name: 'client 2', id:'2'},
  ]

  private features: Feature[] = [
    { objectID: '1', clientId: '1', name: 'Feature A', type: '', lat: 1, lng:6 },
    { objectID: '2', clientId: '1', name: 'Feature B', type: '', lat: 2, lng:8 },
    { objectID: '3', clientId: '2', name: 'Feature B', type: '', lat: 3, lng:4 },
    { objectID: '4', clientId: '2', name: 'Feature A', type: '', lat: 4, lng:3 },
    { objectID: '5', clientId: '2', name: 'Feature C', type: '', lat: 5, lng:2 },
    { objectID: '6', clientId: '2', name: 'Feature C', type: '', lat: 6, lng:1 },
  ]

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  getFeatures(): Observable<Feature[]> {
    return of(this.features);
  }

  getClientFeatures(client: string): Observable<any> {
    return of(this.features.filter( f => f.clientId === client.toString()));
  }

  getClient(id: string): Observable<Client> {
    return of(this.clients.find( c => c.id === id))
  };


  getFeature(id: string): Observable<Feature> {
    return of<Feature>(this.features.find( c => c.objectID === id.toString()))
  };

}
