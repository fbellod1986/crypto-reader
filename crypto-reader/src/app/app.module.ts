import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CryptoValueComponent } from './components/crypto-value/crypto-value.component';

/*Servicio*/
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    CryptoValueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
