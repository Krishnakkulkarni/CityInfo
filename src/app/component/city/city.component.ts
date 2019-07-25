import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from 'src/app/services/httpservices/http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../city-list/city-list.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  location = {
    city: 'london'
  };
  weather: any;
  value: any;

  constructor(private httpServices: HttpService, public dialogRef: MatDialogRef<CityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');

    if (this.value != null) {
      //everything in local storage is in string format so
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'london'
      }
    }
    // to access weather from openWeatherMap
    this.httpServices.getWeather(this.location.city).subscribe(
      response => {
        console.log(response);
        this.weather = response;
      }
    );
    err => {
      console.log(err);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}