import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  },
  {
    path: 'facebook',
    component: FacebookComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
