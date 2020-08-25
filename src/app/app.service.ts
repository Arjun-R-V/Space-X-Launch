import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {

  private launchUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';  // URL to fetch initial data
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
    ) { }

  getLaunchData(filterData) {
    let finalUrl = this.launchUrl;
    if(filterData.launchYear) {
      finalUrl = `${finalUrl}&launch_year=${filterData.launchYear}`;
    }
    if(filterData.successfulLaunchState) {
      finalUrl = `${finalUrl}&launch_success=${filterData.successfulLaunchState}`;
    }
    if(filterData.successfulLandState) {
      finalUrl = `${finalUrl}&land_success=${filterData.successfulLandState}`;
    }
    return this.http.get<any>(finalUrl);
  }
 }
