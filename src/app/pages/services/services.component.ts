import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  public services_state = {
    loading: false,
    title: "Servizi piu richiesti"
  };
  public services = [];

  constructor(private router: Router, private navigationService: NavigationService, private homeService: CommonService) {
    this.navigationService.updateMessage('');
  }

  ngOnInit() {
    this.services_state.loading = true;
    this.services_state.title = "Caricando i servizi...";
    this.homeService.getAllServices().then((services) => {
      this.services = services.result;
      this.services_state.loading = false;
      this.services_state.title = "Tutti i servizi";
    }).catch((error) => {
      this.services_state.loading = false;
      this.services_state.title = "Tutti i servizi";
    });
  }

  selectResult(service) {
    // this.homeService.sendData(service, this.ref)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }

}
