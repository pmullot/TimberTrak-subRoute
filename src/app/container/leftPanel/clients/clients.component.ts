import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { skipWhile, switchMap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientComponent implements OnInit {


  public client$: Observable<Client>;

  constructor(
    private ar: ActivatedRoute,
    private fb: FirebaseService
  ) {

    this.client$ = this.ar.params.pipe(
      skipWhile( params => {
        return !params.id}
      ),
      switchMap( params => {
        if ( params.id ) {
          return fb.getClient(params.id);
        } else {
          of(undefined)
        }
      })
    )
  }

  ngOnInit() {

  }

}
