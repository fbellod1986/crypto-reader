import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  result:any;

  constructor( private _http: Http ) { }

  /*getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,REP,%20IOT&tsyms=USD')
      .pipe( map( result => this.result = result.json() ));
  }*/

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .pipe( map( result => this.result = result.json().Data ));
      
    }

    /*return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));
   
    }*/
}
