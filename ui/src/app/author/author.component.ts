import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors = [
    {
      "id": 1,
      "name": "Annonymous",
      "birthDate": "6-12-2023",
      "nationality": "Indian"
    },
    {
      "id": 2,
      "name": "Annonymous-1",
      "birthDate": "6-12-2032",
      "nationality": "Indian"
    },
    {
      "id": 3,
      "name": "Annonymous-2",
      "birthDate": "6-12-2001",
      "nationality": "British"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
