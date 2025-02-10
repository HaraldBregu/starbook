import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, RouterOutlet,],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // public tagline: string
  // public auth
  public activePopup = ''
  public popupState = 'inactive'
  public navbarState = false
  public isLoading = false
  public isFindField = false
  public spinerView = false
  public clearView = false
  public findValue: string = ''
  public results: string[] = []
  public isSearched = false
  // public browser = isBrowser
  // subscription: Subscription
  // authSubscription: Subscription
  // public screenWidth
  public newServiceRequest = {
    message: 'Richiedi?'
  }
  public collapsed = false
  public page = null
  public hasCenterContainer = true
  public hasPublishService = false
  public hasNavigation = true
  public border_bottom_color = "1px solid #DBDBDB"
  public account_avatar_url = ''
  public popup = null

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    // private navigationService: NavigationService,
    //  private popupsService: PopupsService,
    //   private commonService: CommonService,
    //   private seoService: SeoService,
  ) {
    this.navbarState = false;
    this.hasNavigation = true;
    // if (isBrowser) {
    //   this.router.events.subscribe((event:Event) => {
    //     if (event instanceof NavigationEnd) {
    //       // ga('send', 'pageview', event.urlAfterRedirects);
    //       let currentRoute = this.route.root;

    //       while (currentRoute.children[0] !== undefined) {
    //         currentRoute = currentRoute.children[0];
    //       }

    //       if ('isFindField' in currentRoute.snapshot.data) {
    //         this.isFindField = true;
    //       } else {
    //         this.isFindField = false;
    //       }

    //       this.page = null;
    //       // this.hasBottomBorderNav = true;
    //       this.hasCenterContainer = true;
    //       this.hasPublishService = false;
    //       this.hasNavigation = true;

    //       this.border_bottom_color = "1px solid #DBDBDB"
    //       // this.tagline = null;

    //       if ('name' in currentRoute.snapshot.data) {
    //         var data = currentRoute.snapshot.data;
    //         var name = data['name'];
    //         this.page = name;
    //         // console.log(this.page)
    //         if (this.page === "Home") {
    //           this.hasCenterContainer = true;
    //         }

    //         if (this.page === "Landing") {
    //           this.hasCenterContainer = true;
    //           this.hasPublishService = true;
    //         }
    //         if (this.page === "Company") {
    //           // this.hasNavigation = false
    //           this.hasCenterContainer = true;
    //         }
    //         else if (this.page === "Business") {
    //           this.hasCenterContainer = true;
    //         }
    //         else if (this.page === "Tools") {
    //           this.hasCenterContainer = true;
    //         }
    //         else if (this.page === "Insert") {
    //           // this.hasBottomBorderNav = false;
    //           this.hasCenterContainer = false;
    //           this.border_bottom_color = "0"
    //         }
    //         else if (this.page==='Service') {
    //           // this.hasPublishService = false;
    //         }
    //         else if (this.page === "Account") {
    //           // this.tagline = "Dashboard";
    //         }
    //         else if (this.page === "Auth") {
    //           this.border_bottom_color = "1px solid #1abc9c"
    //         }
    //         else if (this.page === "Order") {
    //         }
    //         else if (this.page === "Orders") {
    //           this.hasNavigation = true;
    //         }
    //         else if (this.page === "Checkout") {
    //           this.border_bottom_color = "0"
    //         }
    //         else if (this.page === "Blog") {
    //           this.hasCenterContainer = true;
    //         }
    //         else if (this.page === "Info") {
    //           // this.hasCenterContainer = false;
    //         }
    //         else if (this.page === "Customer") {
    //           this.hasNavigation = false
    //         }
    //         else if (this.page === "Profile") {
    //           this.hasNavigation = true
    //         }
    //         else if (this.page === "Request") {
    //           this.hasNavigation = true
    //         }
    //         else {
    //           this.hasNavigation = true
    //           this.hasCenterContainer = true;
    //         }
    //       }
    //       // console.log('page is: ' + this.page);
    //     }
    //   });
    // }
  }


}
