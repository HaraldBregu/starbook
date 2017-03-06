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
// import { MasonryModule } from 'angular2-masonry';
// import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { HomeService } from './home/home.service';
import { AuthService } from './shared/auth.service';
import { OrderService } from './order/order.service';
import { ProfileService } from './shared/profile.service';
import { NavigationService } from './shared/navigation.service';
import { OrdersService } from './shared/orders.service';
import { PopupsService } from './popups/popups.service';
import { PaymentService } from './shared/payment.service';
import { AnalyticsService } from './shared/analytics.service';
import { SeoService } from './shared/seo.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PopupsComponent } from './popups/popups.component';
import { PhonePipe } from './pipes/phone.pipe';
import { LandingComponent } from './pages/landing/landing.component';
import { ExpiryPipe } from './pipes/expiry.pipe';
import { LoadingComponent } from './shared/loading/loading.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { AboutComponent } from './pages/about/about.component';

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
  ClickOutsideModule
];
let declarations = [
  AppComponent,
  HomeComponent,
  OrderComponent,
  OrdersComponent,
  ProfileComponent,
  PopupsComponent,
  PhonePipe,
  LandingComponent,
  ExpiryPipe,
  LoadingComponent,
  FacebookComponent,
  WizardComponent,
  AboutComponent
];

if (isBrowser) {
  let CalendarModule = require('primeng/components/calendar/calendar').CalendarModule;
  imports.push(CalendarModule);
  let AutoCompleteModule = require('primeng/components/autocomplete/autocomplete').AutoCompleteModule;
  imports.push(AutoCompleteModule);
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
    HomeService,
    AuthService,
    OrderService,
    ProfileService,
    NavigationService,
    OrdersService,
    PopupsService,
    PaymentService,
    AnalyticsService,
    SeoService
  ]
})
export class AppModule {

}
