import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



