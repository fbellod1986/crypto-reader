import { Component, OnInit } from '@angular/core';

/*Servicio*/
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  objectKeys = Object.keys;
  cryptos: any;

  constructor( private _data: DataService){

  }

  /*ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }*/

  /*this.spotify.getNewReleases()
      .subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });*/

  ngOnInit() {
    this._data.getPrices()
    .subscribe( (data:any) => {
        this.cryptos = data;
        console.log(data);
      });
  }

}
