import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { ServicesComponent } from './pages/services/services.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ShareComponent } from './pages/share/share.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'services',
    component: ServicesComponent
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
  },
  {
    path: 'recruiter',
    component: RecruiterComponent
  },
  {
    path: 'recruiter/:page',
    component: RecruiterComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'share',
    component: ShareComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
