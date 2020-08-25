import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private appService: AppService
  ){}
  flights: any;
  launchYears: string[];
  booleanButtons: string[];
  filterData: any = {};
  selectedLaunchYear: string;
  selectedSuccessfulLaunch: string;
  selectedSuccessfulLand: string;

ngOnInit() {
  this.getData();
  this.launchYears = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];
  this.booleanButtons = [
    'true', 'false'
  ];
}

onLaunchYear(launchYear: string){
  this.selectedLaunchYear = launchYear;
  this.filterData.launchYear = launchYear;
  this.getData();
}

onSuccessfulLaunch(successfulLaunchState: string){
  this.selectedSuccessfulLaunch = successfulLaunchState;
  this.filterData.successfulLaunchState = successfulLaunchState;
  this.getData()
}

onSuccessfulLand(successfulLandState: string){
  this.selectedSuccessfulLand = successfulLandState;
  this.filterData.successfulLandState = successfulLandState;
  this.getData();
}

getData(){
  this.appService.getLaunchData(this.filterData).subscribe((response: any) => {
    this.flights = response;
  });
}


}
