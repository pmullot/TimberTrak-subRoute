import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ClientComponent } from './container/leftPanel/clients/clients.component';
import { DetailsComponent } from './container/leftPanel/clients/details/details.component';
import { FeaturesComponent } from './container/leftPanel/clients/features/features.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'clients/:id',
        component: ClientComponent,
        children: [
          {
            path: '',
            component: DetailsComponent
          },
          {
            path: 'features/:id',
            component: FeaturesComponent
          }
        ]
      }
    ]
  },
  {
    path: 'clients',
    redirectTo: ''
  },
  {
    path: 'client',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
