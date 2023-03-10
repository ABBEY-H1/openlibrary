import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  publishers= [
    {
      "id": 1,
      "name": "string",
      "address": "Home",
      "phone": "string",
      "email": "string"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
