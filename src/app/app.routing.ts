import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestComponent } from './pages/request/request.component';

// Deprecated
// import { CategoryComponent } from './pages/category/category.component';
// import { DataentryComponent } from './pages/dataentry/dataentry.component';
// import { RequestsComponent } from './pages/requests/requests.component';
// import { QuotationComponent } from './pages/quotation/quotation.component';
// import { TestsComponent } from './pages/tests/tests.component';
// import { ToolsComponent } from './pages/tools/tools.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { ShareComponent } from './pages/share/share.component';
// import { AboutComponent } from './pages/about/about.component';
// import { WizardComponent } from './pages/wizard/wizard.component';
// import { OrdersComponent } from './pages/orders/orders.component';
// import { CheckoutComponent } from './pages/checkout/checkout.component';
// import { InsertComponent } from './pages/insert/insert.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { ServiceComponent } from './pages/service/service.component';
// import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  // { path: '', component: LandingComponent, data: { name: 'Landing' } },
  // { path: '', component: CompanyComponent, data: { name: 'Company' } },
  { path: '', component: HomeComponent, data: { name: 'Home' } },
  { path: 'post', component: HomeComponent, data: { name: 'Home' } },
  { path: 'post/:id', component: HomeComponent, data: { name: 'Home' } },

  { path: 'company', component: CompanyComponent, data: { name: 'Company' } },
  { path: 'company/:page', component: CompanyComponent, data: { name: 'Company' } },

  // { path: 'tools', component: ToolsComponent, data: { name: 'Tools' } },
  // { path: 'tools/:page', component: ToolsComponent, data: { name: 'Tools' } },

  { path: 'account', component: AccountComponent },
  { path: 'account/:page', component: AccountComponent, data: { name: 'Account' } },

  // { path: 'ads/:page', component: AccountComponent, data: { name: 'Account' } },

  { path: 'auth/:page', component: AuthComponent, data: { name: 'Auth' } },

  // { path: 'orders', component: OrdersComponent, data: { name: 'Orders' } },
  // { path: 'orders/:page', component: OrdersComponent, data: { name: 'Orders' } },

  //
  // Pubblic profiles
  //
  { path: 'profile', component: ProfileComponent, data: { name: 'Profile' } },
  { path: 'profile/:page', component: ProfileComponent, data: { name: 'Profile' } },
  { path: 'business', component: ProfileComponent, data: { name: 'Business' } },
  { path: 'business/:page', component: ProfileComponent, data: { name: 'Business' } },
  // { path: 'professional', component: ProfileComponent, data: { name: 'Business' } },
  // { path: 'professional/:page', component: ProfileComponent, data: { name: 'Business' } },


  { path: 'facebook', component: FacebookComponent },

  // { path: 'contact', component: ContactComponent },
  // { path: 'contact/:page', component: ContactComponent },

  // { path: 'services', component: ServicesComponent, data: { name: 'Service', isFindField: true } },
  // { path: 'services/:id', component: ServiceComponent, data: { name: 'Service', isFindField: true } },

  // { path: 'insert', component: InsertComponent, data: { name: 'Insert' } },
  // { path: 'insert/:step', component: InsertComponent, data: { name: 'Insert' } },

  // { path: 'checkout/:step', component: CheckoutComponent, data: { name: 'Checkout' } },


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

  { path: 'request', component: RequestComponent, data: { name: 'Request' } },
  { path: 'request/:step', component: RequestComponent, data: { name: 'Request' } },

  { path: 'blog', component: BlogComponent, data: { name: 'Blog' } },
  { path: 'blog/:article', component: PostComponent, data: { name: 'Blog' } },

  { path: 'info/help', component: HelpComponent, data: { name: 'Info' } },
  { path: 'info/legal', component: LegalComponent, data: { name: 'Info' } },
  // { path: 'info/about', component: AboutComponent, data: { name: 'Info' } },

  // { path: 'quotation', component: QuotationComponent, data: { name: 'Quotation' } },
  // { path: 'quotation/:id', component: QuotationComponent, data: { name: 'Quotation' } },

  // TESTS
  // { path: 'customer', component: TestsComponent, data: { name: 'Customer' } },
  // { path: 'customer/:page', component: TestsComponent, data: { name: 'Customer' } },

  // { path: 'dataentry', component: DataentryComponent, data: { name: 'DataEntry' } },

  // { path: 'wizard', component: WizardComponent },
  // { path: 'wizard/:step', component: WizardComponent },

  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
