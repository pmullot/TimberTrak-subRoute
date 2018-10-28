import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';
import { Client } from 'src/app/models/client.model';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  public clients$: Observable<Client[]>;
  public showClients = true;

  constructor(
    private firebase: FirebaseService,
    private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => {
        //console.log(params);

        if( params.id ) {
          this.showClients = false;
        } else {
          this.showClients = true;
        }
      })

    }

  ngOnInit() {
    this.clients$ = this.firebase.getClients();

  }
}
