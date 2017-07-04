/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { UniversalModule, isBrowser } from 'angular2-universal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
// import { AutoCompleteModule, CalendarModule } from 'primeng/primeng';
// import { CalendarMockComponent } from './mocks/calendar.component';
import { ClickOutsideModule } from 'ng2-click-outside';
// import { ClipboarModule } from 'ngx-clipboard';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// import { ImageUploadModule } from 'angular2-image-upload';

// import { MasonryModule } from 'angular2-masonry';
// import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { CommonService } from './shared/common.service';

import { AuthService } from './shared/auth.service';
import { ProfileService } from './shared/profile.service';
import { NavigationService } from './shared/navigation.service';
import { OrdersService } from './shared/orders.service';
import { PopupsService } from './popups/popups.service';
import { PaymentService } from './shared/payment.service';
import { AnalyticsService } from './shared/analytics.service';
import { SeoService } from './shared/seo.service';
import { ContactService } from './shared/contact.service';
import { ShareService } from './pages/share/share.service';
import { ClipboardService } from './shared/clipboard.service';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './company/company.component';

import { CategoryComponent } from './pages/category/category.component';

import { ServiceComponent } from './pages/service/service.component';
import { ServicesComponent } from './pages/services/services.component';
import { InsertComponent } from './pages/insert/insert.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

// import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PopupsComponent } from './popups/popups.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ExpiryPipe } from './pipes/expiry.pipe';
import { LoadingComponent } from './shared/loading/loading.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LegalComponent } from './pages/legal/legal.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ShareComponent } from './pages/share/share.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { ClipboardDirective } from './directives/clipboard.directive';

import { FormatterDirective } from './directives/formatter.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

export class HammerConfig extends HammerGestureConfig  {
  overrides = <any> {
    'swipe': {velocity: 0.4, threshold: 20}
  };
}

let imports = [
  UniversalModule,
  FormsModule,
  BrowserModule,
  ReactiveFormsModule,
  HttpModule,
  // MasonryModule,
  RouterModule,
  routing,
  // NgbModule.forRoot(),
  // AutoCompleteModule,
  // CalendarModule,
  ClickOutsideModule,
  Ng2PageScrollModule.forRoot(),
  // ImageUploadModule.forRoot(),
  // ClipboarModule
];
let declarations = [
  AppComponent,
  //HomeComponent,
  LandingComponent,
  CompanyComponent,
  AuthComponent,
  OrdersComponent,
  ProfileComponent,
  PopupsComponent,
  ServiceComponent,
  LoadingComponent,
  FacebookComponent,
  WizardComponent,
  AboutComponent,
  HelpComponent,
  LegalComponent,
  AccountComponent,
  ServicesComponent,
  InsertComponent,
  CheckoutComponent,
  RequestsComponent,
  ShareComponent,
  BlogComponent,
  CategoryComponent,
  ContactComponent,
  NotfoundComponent,

  ClipboardDirective,
  FormatterDirective,

  CurrencyPipe,
  PhonePipe,
  ExpiryPipe,
  CurrencyFormatPipe
];
let exp = [
  FormatterDirective,
  CurrencyPipe,
  CurrencyFormatPipe
];

if (isBrowser) {
  let CalendarModule = require('primeng/components/calendar/calendar').CalendarModule;
  imports.push(CalendarModule);
  let AutoCompleteModule = require('primeng/components/autocomplete/autocomplete').AutoCompleteModule;
  imports.push(AutoCompleteModule);
  // let ClickOutsideModule = require('ng2-click-outside/src/click-outside.module').ClickOutsideModule;
  // imports.push(ClickOutsideModule);
}
else {
  let CalendarMockComponent = require('./mocks/calendar.component').CalendarMockComponent;
  declarations.push(CalendarMockComponent);
  let AutoCompleteMockModule = require('./mocks/autocomplete.component').AutoCompleteMockComponent;
  declarations.push(AutoCompleteMockModule);
}

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: declarations,
  imports: imports,
  providers: [
    // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: HammerConfig
    // },
    CommonService,
    AuthService,
    ProfileService,
    NavigationService,
    OrdersService,
    PopupsService,
    PaymentService,
    AnalyticsService,
    SeoService,
    ContactService,
    ShareService,
    ClipboardService,
    CurrencyPipe
  ],
  exports:exp
})
export class AppModule {

}
