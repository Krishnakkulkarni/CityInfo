import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './component/city-list/city-list.component';
import { CityComponent } from './component/city/city.component';
import { CityimagesComponent } from './component/cityimages/cityimages.component';

const routes: Routes = [
  { path: '', redirectTo: '/citylist', pathMatch: 'full' },
  { path: 'citylist', component: CityListComponent },
  { path: 'city', component: CityComponent },
  { path: 'cityimages', component: CityimagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
