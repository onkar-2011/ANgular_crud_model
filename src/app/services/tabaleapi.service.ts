import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabaleapiService {

  constructor(private http:HttpClient) { }

  url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

  getdata()
  {
    return this.http.get(this.url)
  }
}
