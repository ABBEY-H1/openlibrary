import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = [
    {
      "id": 1,
      "title": "AB",
      "author": "string",
      "isbn": "string",
      "publicationDate": "string",
      "publisher": "string",
      "copies": 0,
      "category": "string",
      "genre": "string",
      "subGenre": "string"
    },
    {
      "id": 33,
      "title": "ABBEY",
      "author": "string",
      "isbn": "string",
      "publicationDate": "22-66-32",
      "publisher": "string",
      "copies": 0,
      "category": "string",
      "genre": "string",
      "subGenre": "string"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
