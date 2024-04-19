import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // interval: any;
  constructor(/*private http: HttpClient*/) {
  //   this.interval = setInterval(() => this.getData(), 1000);
   }

  // readonly ROOT_URL = 'http://localhost:8080/getLastOrders'

  // orders :any

  

  // getData(): any {
  //   console.log("cos")
  //   let response = this.http.get(this.ROOT_URL);
  //   response.subscribe((data) => {
  //     this.orders = data;
  //   });
  // }

  

  orders = [
    { 
      name: 'Jakub',
      surname: "Ciołek",
      className: '3TP',
      first: false,
      second: true,
      timeStamp: "19.04 15:29:12"
    },
    { 
      name: 'Maciej',
      surname: "Wróbel",
      className: '4TP',
      first: true,
      second: true,
      timeStamp: "19.04 15:28:58"
    },
    { 
      name: 'Maciej',
      surname: "Nowicki",
      className: '4TP',
      first: false,
      second: false,
      timeStamp: "19.04 15:28:47"
    },
  ]

}
