import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { ServiceComponent } from './pages/service/service.component';
import { ServicesComponent } from './pages/services/services.component';

import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ShareComponent } from './pages/share/share.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {isFindField: true}
  },
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'landing/:page',
    component: LandingComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {isFindField: true}
  },
  {
    path: 'services/:id',
    component: ServiceComponent,
    data: {isFindField: true}
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'orders/:page',
    component: OrdersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
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
    path: 'requests/:page',
    component: RequestsComponent
  },
  {
    path: 'share',
    component: ShareComponent
  },
  {
    path: 'share/:page',
    component: ShareComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:page',
    component: BlogComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
