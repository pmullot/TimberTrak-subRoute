import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ClientComponent } from './container/leftPanel/clients/clients.component';
import { DetailsComponent } from './container/leftPanel/clients/details/details.component';
import { FeaturesComponent } from './container/leftPanel/clients/features/features.component';
import { LeftPanelComponent } from './container/leftPanel/left-panel.component';
import { MapComponent } from './container/map/map.component';
import { FirebaseService } from './firebase.service';
import { PubsubService } from './pubsub.service';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MapComponent,
    LeftPanelComponent,
    ClientComponent,
    FeaturesComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [FirebaseService, PubsubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
