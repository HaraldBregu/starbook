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

  getAddresses(key: string) {
    let params = new URLSearchParams()
    params.set('address', key)
    params.set('language', 'it')
    params.set('components', 'country:IT')
    params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M')

    let addresses = []

    return this.http.get(this.GoogleApi, {search: params}).toPromise().then((response) => {
      let data: any[] = response.json().results
      // console.log(JSON.stringify(data))
      data.forEach((address) => {
        let addressData = {
          street: '',
          street_number: null,
          postal_code: null,
          city: '',
          province: '',
          country: '',
          country_code: '',
          full: ''
        }

        address.address_components.forEach((components) => {
          switch (components.types[0]) {
            case 'street_number':
              addressData.street_number = components.long_name;
              break;
            case 'route':
              addressData.street = components.long_name;
              break;
            case 'locality':
              addressData.city = components.long_name;
              break;
            case 'administrative_area_level_2':
              addressData.province = components.long_name;
              break;
            case 'country':
              addressData.country = components.long_name;
              addressData.country_code = components.short_name;
              break;
            case 'postal_code':
              addressData.postal_code = components.long_name;
          }
        })

        addressData.full = address.formatted_address;

        // if (addressData.street && addressData.street_number && addressData.city && addressData.country) {
        //   addressData.street_city_country = addressData.street + " " + addressData.street_number + ", " + addressData.city + ", " + addressData.country
        // }
        // else if (addressData.street && addressData.city && addressData.country) {
        //   addressData.street_city_country = addressData.street + ", " + addressData.city + ", " + addressData.country
        // }
        // else if (addressData.city && addressData.country) {
        //   addressData.street_city_country = addressData.city + ", " + addressData.country
        // }
        // else if (addressData.postal_code && addressData.country) {
        //   addressData.street_city_country = addressData.postal_code + ", " + addressData.country
        // }

        // var str = ""
        // if (addressData.street) {
        //   str += addressData.street
        // }

        // if (addressData.street && addressData.city) {
        //   if (addressData.street_number) {
        //     addressData.street_number_city = addressData.street + ', ' + addressData.street_number + ' ' + addressData.city;
        //   } else {
        //     addressData.street_number_city = addressData.street + ', ' + addressData.city;
        //   }
        //   addresses.push(addressData);
        // }
        // if (addressData.city) {
        //   addresses.push(addressData)
        // }
        addresses.push(addressData);
      })
      return addresses
    }).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.status || error)
  }

}
