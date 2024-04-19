import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

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
    { 
      name: "Anna",
      surname: "Kowalska",
      className: "2TP",
      first: true,
      second: false,
      timeStamp: "19.04 15:30:05"
    },
    { 
      name: "Katarzyna",
      surname: "Lewandowska",
      className: "5TP",
      first: false,
      second: true,
      timeStamp: "19.04 15:31:20"
    },
    { 
      name: "Piotr",
      surname: "Nowak",
      className: "3TP",
      first: true,
      second: true,
      timeStamp: "19.04 15:32:10"
    }
    
  ]

}
