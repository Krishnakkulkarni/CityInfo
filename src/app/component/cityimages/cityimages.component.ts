import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpservices/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cityimages',
  templateUrl: './cityimages.component.html',
  styleUrls: ['./cityimages.component.css']
})
export class CityimagesComponent implements OnInit {

  images: any;
  city: any

  constructor(private httpServices: HttpService, private router: Router) { }

  ngOnInit() {
  }
  getimage() {
    // to access images from pixabay
    this.httpServices.getImages(this.city).subscribe(
      response => {
        console.log(response);
        this.images = response
      });
  }
}
