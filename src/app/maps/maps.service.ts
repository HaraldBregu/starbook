import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class MapsService {
  private GoogleApi = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: Http) {

  }

  getLocation(address: string) {
    let params = new URLSearchParams()
    params.set('address', address)
    params.set('language', 'it')
    params.set('components', 'country:IT')
    params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M')
    return this.http.get(this.GoogleApi, {search: params}).toPromise().then((response) => {
      let data: any[] = response.json().results
      // console.log(JSON.stringify(data))
      if (data.length>0) {
        var location = data[0].geometry.location
        // console.log(JSON.stringify(location))
        return location
      }
      return {}
    }).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.status || error)
  }

}
