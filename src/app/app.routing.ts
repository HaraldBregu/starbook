import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';

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
  },
  {
    path: 'order/:step',
    component: WizardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: 'account/:page',
    component: AccountComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
