import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { CityComponent } from '../city/city.component';
import { HttpService } from 'src/app/services/httpservices/http.service';

export interface DialogData {
  city: string;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent implements OnInit {

  city: string;
  images: any;

  constructor(private router: Router, private snackbar: MatSnackBar, public dialog: MatDialog,
    private httpServices: HttpService) { }

  ngOnInit() {
  }

  saveForm() {
    const dialogRef = this.dialog.open(CityComponent, {});

    let location = {
      city: this.city
    };
    localStorage.setItem('location', JSON.stringify(location));

  }
  show() {
    this.router.navigateByUrl('/cityimages');
  }
}
