import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { CategoryComponent } from './pages/category/category.component';

import { ServiceComponent } from './pages/service/service.component';
import { ServicesComponent } from './pages/services/services.component';
import { InsertComponent } from './pages/insert/insert.component';

import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ShareComponent } from './pages/share/share.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'category/:category', component: CategoryComponent, data: {isFindField: true} },
  { path: 'account', component: AccountComponent },
  { path: 'account/:page', component: AccountComponent, data: { name: 'Account' } },

  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:page', component: OrdersComponent },
  {
    path: 'order/:step',
    component: WizardComponent,
    data: {
      name: 'Checkout'
    }
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:page', component: ProfileComponent },

  { path: 'facebook', component: FacebookComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'contact/:page', component: ContactComponent },

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

  { path: 'insert/:step', component: InsertComponent, data: { name: 'Insert' } },
  // {
  //   path: 'services/:id',
  //   component: ServiceComponent,
  //   data: { isFindField: true },
  //   children: [
  //     { path: 'insert', component: InsertComponent }
  //   ]
  // },
  // {
  //   path: 'services',
  //   component: ServicesComponent,
  //   data: { isFindField: true },
  //   children: [
  //     { path: ':id', component: ServiceComponent },
  //     { path: 'insert', component: InsertComponent }
  //   ]
  // },

  { path: 'requests', component: RequestsComponent },
  { path: 'requests/:page', component: RequestsComponent },
  { path: 'info/help', component: HelpComponent },
  { path: 'info/legal', component: LegalComponent },
  { path: 'info/about', component: AboutComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
