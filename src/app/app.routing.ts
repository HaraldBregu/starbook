import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './company/company.component';

import { CategoryComponent } from './pages/category/category.component';

import { ServiceComponent } from './pages/service/service.component';
import { ServicesComponent } from './pages/services/services.component';
import { InsertComponent } from './pages/insert/insert.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ShareComponent } from './pages/share/share.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { TestsComponent } from './pages/tests/tests.component';

import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';

const routes: Routes = [
  { path: '', component: LandingComponent, data: { name: 'Landing' } },

  { path: 'company', component: CompanyComponent, data: { name: 'Company' } },
  { path: 'company/:page', component: CompanyComponent, data: { name: 'Company' } },

  { path: 'account', component: AccountComponent },
  { path: 'account/:page', component: AccountComponent, data: { name: 'Account' } },
  { path: 'auth/:page', component: AuthComponent, data: { name: 'Auth' } },

  { path: 'orders', component: OrdersComponent, data: { name: 'Orders' } },
  { path: 'orders/:page', component: OrdersComponent, data: { name: 'Orders' } },

  { path: 'profile', component: ProfileComponent, data: { name: 'Profile' } },
  { path: 'profile/:page', component: ProfileComponent, data: { name: 'Profile' } },

  { path: 'facebook', component: FacebookComponent },

  // { path: 'contact', component: ContactComponent },
  // { path: 'contact/:page', component: ContactComponent },

  { path: 'services', component: ServicesComponent, data: { name: 'Service', isFindField: true } },
  { path: 'services/:id', component: ServiceComponent, data: { name: 'Service', isFindField: true } },

  { path: 'insert', component: InsertComponent, data: { name: 'Insert' } },
  { path: 'insert/:step', component: InsertComponent, data: { name: 'Insert' } },

  { path: 'checkout/:step', component: CheckoutComponent, data: { name: 'Checkout' } },

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

  // { path: 'requests', component: RequestsComponent },
  // { path: 'requests/:page', component: RequestsComponent },

  { path: 'blog', component: BlogComponent, data: { name: 'Blog' } },
  { path: 'blog/:article', component: PostComponent, data: { name: 'Blog' } },

  { path: 'info/help', component: HelpComponent, data: { name: 'Info' } },
  { path: 'info/legal', component: LegalComponent, data: { name: 'Info' } },
  { path: 'info/about', component: AboutComponent, data: { name: 'Info' } },

  // TESTS
  { path: 'customer', component: TestsComponent, data: { name: 'Customer' } },
  { path: 'customer/:page', component: TestsComponent, data: { name: 'Customer' } },

  // { path: 'worker', component: TestsComponent, data: { name: 'Worker' } },
  // { path: 'worker/:page', component: TestsComponent, data: { name: 'Worker' } },

  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
