import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AutoCompleteModule, CalendarModule } from 'primeng/primeng';
import { ClickOutsideModule } from 'ng2-click-outside';

import { MasonryModule } from 'angular2-masonry';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { HomeService } from './home/home.service';
import { AuthService } from './shared/auth.service';
import { OrderService } from './order/order.service';
import { ProfileService } from './shared/profile.service';
import { NavigationService } from './shared/navigation.service';
import { OrdersService } from './shared/orders.service';
import { PopupsService } from './popups/popups.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PopupsComponent } from './popups/popups.component';
import { PhonePipe } from './pipes/phone.pipe';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    OrdersComponent,
    ProfileComponent,
    PopupsComponent,
    PhonePipe,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MasonryModule,
    RouterModule,
    routing,
    NgbModule.forRoot(),
    AutoCompleteModule,
    CalendarModule,
    ClickOutsideModule
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
    HomeService,
    AuthService,
    OrderService,
    ProfileService,
    NavigationService,
    OrdersService,
    PopupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
