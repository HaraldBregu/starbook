import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  public it: any;
  // public currentUser;

  public spinerView = false;
  public clearView = false;
  public query: string = '';
  public results: string[] = [];
  public suggestions: string[] = [];

  public services = []
  public services_state = {
    loading: false,
  }

  public professionals = []

  public seoObject = {}

  public date = null;
  // public temp_date;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public formated_date = null;
  public date_state = {
    loading: false,
    error_message: null
  }

  public title_service = ''

  constructor(
    /*private router: Router, 
    private route: ActivatedRoute, 
    private navigationService: NavigationService, 
    private seoService: SeoService, 
    private commonService: CommonService,
    */
  ) {
    /*
    this.navigationService.updateMessage("")
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
      // monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }

    if (this.commonService.readObjectForKey("checkout_order")) {
      var checkout_order = this.commonService.readObjectForKey("checkout_order")
      var services = checkout_order['services']
      if (services && services.length>0) {
        this.title_service = services[0]['title']
        if (this.title_service) {
          this.query = this.title_service;
        }
      }
      if (checkout_order['date']) {
        // console.log('date: ' + checkout_order['date']);
        this.temp_date = new Date(checkout_order['date']);
        let date = new Date(checkout_order['date']);
        // this.date = date;
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        this.formated_date =  day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear();
      }
      // console.log('landing order is: ' + JSON.stringify(checkout_order));
    }

    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      }
    }
    this.seoObject['title'] = "Starbook";
    this.seoObject['description'] = "Starbook è un online marketplace di professionisti dove puoi trovare il servizio che ti serve e prenotarlo direttamente senza perdere tempo.";
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";

    this.seoService.setTitle(this.seoObject['title']);
    this.seoService.setMetaElem('description', this.seoObject['description']);
    this.seoService.setOgElem('twitter:card', "summary_large_image");
    this.seoService.setOgElem('twitter:title', this.seoObject['title']);
    this.seoService.setOgElem('twitter:site', "@starbookco");
    this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
    this.seoService.setOgElem('twitter:description', this.seoObject['description']);
    this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
    this.seoService.setOgElem('og:title', this.seoObject['title']);
    this.seoService.setOgElem('og:description', this.seoObject['description']);
    this.seoService.setOgElem('og:url', this.seoObject['url']);
    this.seoService.setOgElem('og:image', this.seoObject['image_url']);
    this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);

    this.services_state.loading = true
    this.commonService.getAllServices({'type':'default'}).then((services) => {
      this.services = services.result
      this.services_state.loading = false
    }).catch((error) => {
      this.services = []
      this.services_state.loading = false
    })
    */
  }

  ngOnInit() {
    // if (isBrowser) { window.scrollTo(0, 0) }
    // if (this.query.length > 0) {
    //   this.clearView = true;
    // }
  }

  bookServiceNow(service: any) {
    // if (service) {
    //   this.title_service = service.title
    // } else {
    //   if (!this.temp_date || !this.title_service) {
    //     return
    //   }
    // }
    // if (this.commonService.readObjectForKey("checkout_order")) {
    //   var current_checkout_order = this.commonService.readObjectForKey("checkout_order")
    //   current_checkout_order['services'] = [{ "title": this.title_service, "details": [] }]
    //   current_checkout_order['date'] = this.temp_date
    //   this.commonService.saveObjectForKey(current_checkout_order, "checkout_order")
    // } else {
    //   this.commonService.saveObjectForKey({
    //     date: this.date,
    //     services: [{ "title": this.title_service, "details": [] }]
    //   }, "checkout_order")
    // }
    // if (service) {
    //   this.router.navigate(['checkout/date']);
    // } else {
    //   this.router.navigate(['checkout/address']);
    // }
    // return false;
  }

  changeSearch(event: any) {
    // if (typeof event==='object') {
    //   this.title_service = event.title
    // }
    // if (typeof event==='string') {
    //   this.title_service = event
    // }
    // this.clearView = true
    // if (event.length===0) {
    //   this.clearView = false
    //   this.title_service = null
    // }
  }

  showSuggestions(event: any) {
    // this.spinerView = true
    // this.commonService.search(event.query).then((results) => {
    //   this.spinerView = false
    //   this.suggestions = results.result;
    // }).catch((error) => {
    //   this.spinerView = false
    //   this.suggestions = []
    // })
  }
  selectSuggestion(service: any) {
    // this.clearView = true
    // this.title_service = service.title
  }
  clearSearchForm() {
    // this.query = '';
    // this.results = [];
    // this.clearView = false;
    // this.title_service = null;
  }

  selectDate() {
    // let date = new Date(this.temp_date);
    // let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    // let correctMonth = 1 + date.getMonth();
    // let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
    // this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
    // let _date = new Date(this.date);
    // let _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
    // this.formated_date =  _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
  }

}
