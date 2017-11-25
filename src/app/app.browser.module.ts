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
import { ClickOutsideModule } from 'ng2-click-outside';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FacebookModule } from 'ngx-facebook';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

// import { SliderModule } from 'primeng/primeng';

import { routing } from './app.routing';

import { CommonService } from './shared/common.service';
import { AuthService } from './shared/auth.service';
import { ProfileService } from './shared/profile.service';
import { NavigationService } from './shared/navigation.service';
import { OrdersService } from './shared/orders.service';
import { PopupsService } from './popups/popups.service';
import { PaymentService } from './shared/payment.service';
import { SeoService } from './shared/seo.service';
import { ContactService } from './shared/contact.service';
import { ShareService } from './pages/share/share.service';
import { ClipboardService } from './shared/clipboard.service';
import { PostsService } from './pages/blog/posts.service';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './pages/category/category.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServicesComponent } from './pages/services/services.component';
import { InsertComponent } from './pages/insert/insert.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
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
import { ContactComponent } from './pages/contact/contact.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TestsComponent } from './pages/tests/tests.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/blog/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ActionComponent } from './pages/home/action/action.component';

import { DataentryComponent } from './pages/dataentry/dataentry.component';

// import { ClipboardDirective } from './directives/clipboard.directive';

import { FormatterDirective } from './directives/formatter.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

import { AgmCoreModule } from 'angular2-google-maps/core';
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M',
});

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
  RouterModule,
  routing,
  ClickOutsideModule,
  Ng2PageScrollModule.forRoot(),
  FacebookModule.forRoot(),
  DateValueAccessorModule,
  googleMapsCore
];
let declarations = [
  AppComponent,
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
  PostComponent,
  QuotationComponent,
  CategoryComponent,
  ContactComponent,
  ToolsComponent,
  HomeComponent,
  ActionComponent,
  NotfoundComponent,
  TestsComponent,
  DataentryComponent,
  // ClipboardDirective,
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
  // let SliderModule = require('primeng/components/slider/slider').SliderModule;
  // imports.push(SliderModule);
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
    SeoService,
    ContactService,
    ShareService,
    ClipboardService,
    PostsService,
    CurrencyPipe
  ],
  exports:exp
})
export class AppModule {

}
