import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // data: {
    //   meta: {
    //     title: 'Dashboard',
    //     description: 'Description of the dashboard page',
    //     'og:image': 'https://s3-eu-west-1.amazonaws.com/starbook-s3/cassonetti%2Bcartongesso.jpg'
    //   }
    // }
  },
  {
    path: 'services/:id',
    component: HomeComponent,
    data: {isFindField: true}
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'profile/:page',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
