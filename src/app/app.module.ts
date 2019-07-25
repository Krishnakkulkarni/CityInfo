import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './component/city-list/city-list.component';
import { AppMaterial } from './app.material.model';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CityComponent } from './component/city/city.component';
import { HttpService } from './services/httpservices/http.service';
import { CityimagesComponent } from './component/cityimages/cityimages.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    CityimagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppMaterial,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
