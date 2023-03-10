import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loans = [
    {
      "id": 1,
      "bookId": 1,
      "studentId": 1,
      "checkOutDate": "10-03-2023",
      "dueDate": "09-06-2023",
      "returnDate": "--"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
