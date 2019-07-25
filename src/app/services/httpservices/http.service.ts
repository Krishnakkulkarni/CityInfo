import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  weatherkey = environment.weatherKey;
  weatherurl: string;
  imagekey = environment.imageKey;
  imageurl: string;

  constructor(private httpClient: HttpClient) {
    this.weatherurl = environment.weatherUrl;
    this.imageurl = environment.imageUrl;
  }

  getWeather(city) {
    console.log("city in services", city);

    return this.httpClient.get(this.weatherurl + city + '&APPID=' + this.weatherkey)
  }

  getImages(city) {
    console.log("image in service",city);
    return this.httpClient.get(this.imageurl +this.imagekey + "&q=" + city)
  }

}
