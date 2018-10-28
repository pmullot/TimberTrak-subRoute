import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, switchMap, tap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { Feature } from 'src/app/models/feature.model';
import { PubsubService } from 'src/app/pubsub.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public feature$: Observable<Feature>;

  constructor(
    private ar: ActivatedRoute,
    private fb: FirebaseService,
    private pubsub: PubsubService,
    private router: Router
  ) {

    this.feature$ = this.ar.params.pipe(
      skipWhile( params => {
        return !params.id}
      ),
      switchMap( params => {
          return fb.getFeature(params.id);
      }),
      tap( f => {
        this.pubsub.zoomTo.next({lat: f.lat, lng: f.lng});
      })

    )
  }

  ngOnInit() {
  }

  public close( feature: Feature ){
    this.router.navigateByUrl(`clients/${feature.clientId}`)
  }
}
