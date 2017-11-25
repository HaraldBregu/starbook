import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
})
export class MapsComponent implements OnInit {
  @Input() city = null
  @Input() public myCallback: Function

  public Map = {
    latitude: 45.464211,
    longitude: 9.191383,
    zoom: 12
  }

  constructor(private mapsService: MapsService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(JSON.stringify(this.Map))
    this.mapsService.getLocation(this.city).then((location) => {
      // {"lat":45.4642035,"lng":9.189982}
      this.Map.latitude = location.lat
      this.Map.longitude = location.lng
      // console.log(JSON.stringify(this.Map))
    }).catch((error) => {
      // console.log(error);
    })
  }

}
