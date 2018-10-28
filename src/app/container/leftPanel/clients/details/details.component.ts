import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, switchMap, tap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { Client } from 'src/app/models/client.model';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public client$: Observable<Client>;
  public features$: Observable<Feature[]>;

  constructor(
    private ar: ActivatedRoute,
    private fb: FirebaseService,
    private router: Router
  ) {

    this.client$ = this.ar.params.pipe(
      skipWhile( params => {
        return !params.id}
      ),
      tap( params => {
        this.features$ = this.fb.getClientFeatures(params.id);
      }),
      switchMap( params => {
          return fb.getClient(params.id);
      }),

    )
  }

  ngOnInit() {
  }

  public close(){
    this.router.navigateByUrl('clients');
  }

}
