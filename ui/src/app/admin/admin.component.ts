import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  admins = [
    {
      "id": 1,
      "name": "ABbey",
      "username": "Ab",
      "password": "12"
    },
    {
      "id": 2,
      "name": "AB",
      "username": "ab",
      "password": "1234"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
