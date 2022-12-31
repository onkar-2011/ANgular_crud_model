import { Component, OnInit } from '@angular/core';
import { TabaleapiService } from '../services/tabaleapi.service'
@Component({
  selector: 'app-tableapidata',
  templateUrl: './tableapidata.component.html',
  styleUrls: ['./tableapidata.component.scss']
})
export class TableapidataComponent implements OnInit {

  constructor(public tableapi: TabaleapiService) { }
  public resonse: any = [];
  ngOnInit(): void {
    this.showdata();
  }
  // showdata() {
  //   this.tableapi.getdata(this.tableapi.getdata).subscribe((data) => {
  //     this.resonse = data;
  //     console.log(this.resonse);
  //   })
  // }
  showdata() {
    this.tableapi.getdata().subscribe((data) => {
      this.resonse = data;
      console.log(this.resonse);
    })
  }

  getkeys(obj: any) {
    console.log(Object.keys(obj))
    return Object.keys(obj);
  }
}
