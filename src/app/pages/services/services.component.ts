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
  public images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";

  constructor(private router: Router, private navigationService: NavigationService, private commonService: CommonService) {
    this.navigationService.updateMessage('');
  }

  ngOnInit() {
    this.services_state.loading = true;
    this.services_state.title = "Caricando i servizi...";
    this.commonService.getAllServices({}).then((services) => {
      this.services = services.result;
      this.services_state.loading = false;
      this.services_state.title = "Tutti i servizi";
    }).catch((error) => {
      this.services_state.loading = false;
      this.services_state.title = "Tutti i servizi";
    });
  }

  selectResult(service) {
    this.commonService.setService(service)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }

}
