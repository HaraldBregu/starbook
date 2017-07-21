import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from 'angular2-universal';
import { SeoService } from '../../shared/seo.service';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html'
})
export class TestsComponent implements OnInit {
  public it: any;
  public date = null;
  public temp_date;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public formated_date = null;
  public date_state = {
    loading: false,
    error_message: null
  }

  public title_service = ''

  public spinerView = false;
  public clearView = false;
  public query: string = '';
  public results: string[] = [];
  public suggestions: string[] = [];

  public page = ''

  public title = ''
  public subtitle = ''
  public button_title = ''

  constructor(private router: Router, private route: ActivatedRoute, private seoService: SeoService, private commonService: CommonService) {
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    }
  }

  ngOnInit() {
    if (isBrowser) { window.scrollTo(0, 0) }
    if (this.query.length>0) {
      this.clearView = true;
    }

    this.route.params.subscribe((params: Params) => {
      this.page = params['page']
      if (this.page==='1') {
        this.title = "Prenotare un professionista non è mai stato così semplice."
        this.subtitle = "Di quale professionista hai bisogno? Un idraulico, fabbro, muratore, estetista o un altro? Prenotalo."
        this.button_title = "Prenota"
      }
      else if (this.page==='2') {
        this.title = "Prenotare un servizio non è mai stato così semplice."
        this.subtitle = "Ti serve un servizio di pulizie, baby sitting, portare a spasso i cani, curare il tuo giardino, revisionare la tua caldaia o altro? Prenotalo."
        this.button_title = "Prenota"
      }
      else if (this.page==='3') {
        this.title = "Programma in anticipo i servizi che ti servono prenotando adesso."
        this.subtitle = "Prenota il servizio o il professionista che ti serve domani, tra una settimana o tra un mese. Organizza la tua vita e rilassati. Non sprecherai mai più il tuo tempo prezioso."
        this.button_title = "Prenota"
      }
      else {
        this.router.navigate([''])
      }
    })
  }

  bookServiceNow(service) {
    if (service) {
      this.title_service = service.title
    } else {
      if (!this.temp_date || !this.title_service) { return }
    }
    if (this.commonService.readObjectForKey("checkout_order")) {
      var current_checkout_order = this.commonService.readObjectForKey("checkout_order")
      current_checkout_order['services'] = [{"title":this.title_service,"details":[]}]
      current_checkout_order['date'] = this.temp_date
      this.commonService.saveObjectForKey(current_checkout_order, "checkout_order")
    } else {
      this.commonService.saveObjectForKey({
        date: this.date,
        services:[{"title":this.title_service,"details":[]}]
      }, "checkout_order")
    }
    if (service) {
      this.router.navigate(['checkout/date']);
    } else {
      this.router.navigate(['checkout/address']);
    }
    return false;
  }
  changeSearch(event) {
    if (typeof event==='object') {
      this.title_service = event.title
    }
    if (typeof event==='string') {
      this.title_service = event
    }
    this.clearView = true
    if (event.length===0) {
      this.clearView = false
      this.title_service = null
    }

  }
  showSuggestions(event) {
    this.spinerView = true
    this.commonService.search(event.query).then((results) => {
      this.spinerView = false
      this.suggestions = results.result;
    }).catch((error) => {
      this.spinerView = false
      this.suggestions = []
    })
  }
  selectSuggestion(service) {
    this.clearView = true
    this.title_service = service.title
  }
  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
    this.title_service = null;
  }
  selectDate() {
    let date = new Date(this.temp_date);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let correctMonth = 1 + date.getMonth();
    let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
    this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
    let _date = new Date(this.date);
    let _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
    this.formated_date =  _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
  }
}
