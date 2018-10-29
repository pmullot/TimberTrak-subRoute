import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skipWhile, take } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { coord, PubsubService } from 'src/app/pubsub.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public zoomRequests: coord[] = [];
  constructor(
    private pubsub: PubsubService,
    private route: Router,
    private fb: FirebaseService
    ) {
      this.pubsub.zoomTo.asObservable().pipe(
        skipWhile( c => !c || (!c.lng && !c.lat))
      )
      .subscribe( c => {
        this.zoomRequests.push(c);
      })

     }

  ngOnInit() {
  }

  selectFeature( featureId ){
    this.fb.getFeature( featureId ).pipe(
      skipWhile( c => !c),
      take(1)
    ).subscribe( f => {
      this.route.navigateByUrl(`clients/${f.clientId}/features/${f.objectID}`);
    })
  }

  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max-1)) + 1;
  }

  public updateFeature( FeatureId ){
    this.fb.getFeature(FeatureId).pipe( take(1) ).subscribe( f => {
      f.lat = Math.round (Math.random() * 1000)/100;
      f.lng= Math.round (Math.random() * 1000)/100;
      this.fb.updateFeature( f );
    })
  }
}
